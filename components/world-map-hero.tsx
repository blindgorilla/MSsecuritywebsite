"use client";

import { useEffect, useRef, useState } from "react";

// Port data
const ports = [
  { name: "Limassol", coords: [33.04, 34.68] },
  { name: "Dubai", coords: [55.30, 25.27] },
  { name: "Djibouti", coords: [43.14, 11.59] },
  { name: "Singapore", coords: [103.82, 1.35] },
  { name: "Mumbai", coords: [72.88, 19.08] },
  { name: "Lagos", coords: [3.38, 6.45] },
];

// Route waypoints [lon, lat]
const routes = [
  // Limassol → Suez → Djibouti
  [[33.04, 34.68], [32.5, 31.5], [32.55, 29.9], [32.6, 27], [33.5, 24], [37, 20], [41, 14], [43.14, 11.59]],
  // Djibouti → Dubai
  [[43.14, 11.59], [46, 11], [50, 12.5], [55, 22], [55.30, 25.27]],
  // Djibouti → Mumbai
  [[43.14, 11.59], [50, 10], [60, 14], [65, 17], [72.88, 19.08]],
  // Mumbai → Singapore
  [[72.88, 19.08], [76, 10], [80, 7], [90, 4], [98, 2], [103.82, 1.35]],
  // Lagos → Cape of Good Hope → Djibouti
  [[3.38, 6.45], [5, 0], [10, -8], [20, -25], [30, -35], [40, -20], [43, 10], [43.14, 11.59]],
  // Limassol → Atlantic → Lagos
  [[33.04, 34.68], [18, 37], [5, 36], [-5, 36], [-8, 28], [-10, 15], [-5, 8], [3.38, 6.45]],
];

// High-risk zones with polygon coordinates and labels
const highRiskZones = [
  {
    name: "Red Sea / Bab-el-Mandeb",
    coords: [[32, 30], [37, 28], [42, 16], [44, 12], [41, 11], [36, 14], [32, 22], [32, 30]],
    labelPos: [38, 22],
  },
  {
    name: "Gulf of Aden / Somali Basin",
    coords: [[40, 14], [45, 14], [50, 12], [58, 8], [60, 2], [55, -2], [50, 0], [45, 5], [42, 8], [40, 10], [40, 14]],
    labelPos: [52, 9],
  },
  {
    name: "Persian Gulf / Strait of Hormuz",
    coords: [[48, 30], [52, 30], [56, 27], [58, 24], [57, 22], [54, 23], [50, 26], [48, 28], [48, 30]],
    labelPos: [55, 28],
  },
  {
    name: "Gulf of Guinea",
    coords: [[-5, 8], [5, 8], [10, 5], [12, 2], [8, -3], [2, -4], [-3, 0], [-5, 4], [-5, 8]],
    labelPos: [3, 2],
  },
  {
    name: "Strait of Malacca",
    coords: [[95, 6], [100, 5], [105, 3], [108, 2], [107, -1], [104, -2], [99, 2], [95, 4], [95, 6]],
    labelPos: [101, 1],
  },
];

export function WorldMapHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let d3Module: typeof import("d3") | null = null;
    let animationFrameId: number;
    const routeOffsets: number[] = [];

    const loadScriptsAndRender = async () => {
      // Dynamically import D3
      const [d3, topojson] = await Promise.all([
        import("d3"),
        import("topojson-client"),
      ]);
      d3Module = d3;

      // Fetch world data
      const worldData = await fetch(
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
      ).then((res) => res.json());

      if (!containerRef.current || !svgRef.current) return;

      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();
      svg.attr("width", width).attr("height", height);

      // Projection
      const projection = d3
        .geoNaturalEarth1()
        .scale(width / 6.3)
        .translate([width * 0.5, height * 0.5]);

      const path = d3.geoPath(projection);

      // Create line generator for routes
      const lineGenerator = d3
        .line<number[]>()
        .x((d) => projection(d as [number, number])![0])
        .y((d) => projection(d as [number, number])![1])
        .curve(d3.curveCatmullRom.alpha(0.5));

      // Layer group
      const g = svg.append("g");

      // 1. Sphere
      g.append("path")
        .datum({ type: "Sphere" } as d3.GeoSphere)
        .attr("d", path)
        .attr("fill", "rgba(27,108,168,0.03)")
        .attr("stroke", "rgba(27,108,168,0.1)")
        .attr("stroke-width", 0.5);

      // 2. Graticule
      const graticule = d3.geoGraticule().step([20, 20]);
      g.append("path")
        .datum(graticule())
        .attr("d", path)
        .attr("fill", "none")
        .attr("stroke", "rgba(27,108,168,0.07)")
        .attr("stroke-width", 0.5);

      // 3. Countries
      const countries = topojson.feature(
        worldData as any,
        worldData.objects.countries as any
      );
      g.append("path")
        .datum(countries as any)
        .attr("d", path)
        .attr("fill", "rgba(13,27,42,0.05)")
        .attr("stroke", "rgba(27,108,168,0.18)")
        .attr("stroke-width", 0.4);

      // 4. High-Risk Zones
      const zonesGroup = g.append("g").attr("class", "high-risk-zones");

      highRiskZones.forEach((zone, i) => {
        const geoJson: GeoJSON.Feature<GeoJSON.Polygon> = {
          type: "Feature",
          properties: { name: zone.name },
          geometry: {
            type: "Polygon",
            coordinates: [zone.coords],
          },
        };

        // Zone path
        zonesGroup
          .append("path")
          .datum(geoJson)
          .attr("d", path as any)
          .attr("fill", "rgba(200, 50, 30, 0.10)")
          .attr("stroke", "rgba(200, 50, 30, 0.35)")
          .attr("stroke-width", 1)
          .attr("stroke-dasharray", "4 3")
          .style("animation", `hrzPulse 3.5s ease-in-out infinite`)
          .style("animation-delay", `${i * 0.7}s`);

        // Zone label
        const labelCoords = projection(zone.labelPos as [number, number]);
        if (labelCoords) {
          zonesGroup
            .append("text")
            .attr("x", labelCoords[0])
            .attr("y", labelCoords[1])
            .attr("font-size", "8px")
            .attr("font-family", "monospace")
            .attr("fill", "rgba(200,50,30,0.75)")
            .attr("text-anchor", "middle")
            .attr("text-transform", "uppercase")
            .style("opacity", 0)
            .text(zone.name.split(" / ")[0])
            .transition()
            .delay(2000 + i * 200)
            .duration(500)
            .style("opacity", 1);
        }
      });

      // 5. Maritime Routes
      const routesGroup = g.append("g").attr("class", "routes");
      const routePaths: SVGPathElement[] = [];

      routes.forEach((routeCoords, i) => {
        const pathData = lineGenerator(routeCoords);
        if (!pathData) return;

        const routePath = routesGroup
          .append("path")
          .attr("d", pathData)
          .attr("fill", "none")
          .attr("stroke", "#1B6CA8")
          .attr("stroke-width", 1.2)
          .attr("stroke-opacity", 0.5);

        const pathNode = routePath.node();
        if (pathNode) {
          const totalLength = pathNode.getTotalLength();
          routePath
            .attr("stroke-dasharray", totalLength)
            .attr("stroke-dashoffset", totalLength);

          // Animate draw-in
          routePath
            .transition()
            .delay(400 + i * 600)
            .duration(2000)
            .ease(d3.easeCubicInOut)
            .attr("stroke-dashoffset", 0)
            .on("end", function () {
              // Switch to flowing dashed effect
              d3.select(this).attr("stroke-dasharray", "6 5");
              routeOffsets[i] = 0;
            });

          routePaths.push(pathNode);
        }
      });

      // Animate flowing dashes
      const animateRoutes = () => {
        routePaths.forEach((pathNode, i) => {
          if (routeOffsets[i] !== undefined) {
            routeOffsets[i] -= 0.45;
            pathNode.style.strokeDashoffset = `${routeOffsets[i]}`;
          }
        });
        animationFrameId = requestAnimationFrame(animateRoutes);
      };
      setTimeout(() => animateRoutes(), 3000);

      // 6. Ports
      const portsGroup = g.append("g").attr("class", "ports");

      ports.forEach((port, i) => {
        const coords = projection(port.coords as [number, number]);
        if (!coords) return;

        const portGroup = portsGroup
          .append("g")
          .style("opacity", 0)
          .attr("transform", `translate(${coords[0]}, ${coords[1]})`);

        // Pulse rings
        for (let j = 0; j < 2; j++) {
          portGroup
            .append("circle")
            .attr("r", 5)
            .attr("fill", "none")
            .attr("stroke", "#1B6CA8")
            .attr("stroke-width", 1)
            .style("transform-box", "fill-box")
            .style("transform-origin", "center")
            .style("animation", `pulseRing 2.8s infinite`)
            .style("animation-delay", `${j * 1.3 + i * 0.4}s`);
        }

        // Solid inner dot
        portGroup
          .append("circle")
          .attr("r", 3.5)
          .attr("fill", "#1B6CA8")
          .attr("stroke", "white")
          .attr("stroke-width", 1.2);

        // Label
        const isEastern = port.coords[0] > 80;
        portGroup
          .append("text")
          .attr("x", isEastern ? -8 : 8)
          .attr("y", 3)
          .attr("font-size", "9px")
          .attr("font-family", "monospace")
          .attr("fill", "#0D1B2A")
          .attr("opacity", 0.7)
          .attr("text-anchor", isEastern ? "end" : "start")
          .text(port.name.toUpperCase());

        // Fade in port
        portGroup
          .transition()
          .delay(1800 + i * 350)
          .duration(400)
          .style("opacity", 1);
      });

      setIsLoaded(true);
    };

    loadScriptsAndRender();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes hrzPulse {
          0%, 100% {
            fill-opacity: 0.07;
            stroke-opacity: 0.3;
          }
          50% {
            fill-opacity: 0.16;
            stroke-opacity: 0.55;
          }
        }
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.65;
          }
          100% {
            transform: scale(3.8);
            opacity: 0;
          }
        }
      `}</style>
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <svg ref={svgRef} className="h-full w-full" />
        
        {/* Map Legend */}
        {isLoaded && (
          <div 
            className="absolute bottom-[68px] right-[28px] rounded border border-[rgba(13,27,42,0.1)] bg-white/80 px-4 py-3 backdrop-blur-md"
            style={{ pointerEvents: "auto" }}
          >
            <div className="mb-2 font-mono text-[8px] uppercase tracking-widest text-[#0D1B2A]">
              Map Key
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <svg width="20" height="10">
                  <line 
                    x1="0" y1="5" x2="20" y2="5" 
                    stroke="rgba(200,50,30,0.5)" 
                    strokeWidth="2" 
                    strokeDasharray="4 3" 
                  />
                </svg>
                <span className="font-mono text-[9px] text-[#334155]">High Risk Zone</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="10">
                  <line 
                    x1="0" y1="5" x2="20" y2="5" 
                    stroke="#1B6CA8" 
                    strokeWidth="1.5" 
                    strokeDasharray="6 5" 
                  />
                </svg>
                <span className="font-mono text-[9px] text-[#334155]">Operational Route</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="10">
                  <circle cx="10" cy="5" r="4" fill="#1B6CA8" />
                </svg>
                <span className="font-mono text-[9px] text-[#334155]">Operational Port</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
