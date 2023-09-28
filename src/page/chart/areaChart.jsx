import { createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { area_data_0, area_data_1, demo_data_05 } from "../data";

export default function AreaChart() {
  const chartElement = useRef();
  const init = useRef(false);

  useEffect(() => {
    if (init.current) {
      return;
    }
    init.current = true;
    const chart = createChart(chartElement.current, {
      width: chartElement.current.clientWidth,
      height: 600,
      timeScale: {
        borderVisible: false,
      },
      grid: {
        horzLines: {
          // color: "#F0F3FA",
          color: "transparent",
        },
        vertLines: {
          // color: "#F0F3FA",
          color: "transparent",
        },
      },
      handleScroll: {
        vertTouchDrag: false,
      },
    });

    const areaSeries1 = chart.addAreaSeries({
      topColor: "rgba(33, 150, 243, 0.56)",
      bottomColor: "rgba(33, 150, 243, 0.04)",
      lineColor: "rgba(33, 150, 243, 1)",
      lineWidth: 2,
      priceScaleId: "left",
    });
    const areaSeries2 = chart.addAreaSeries({
      topColor: "rgba(68,33,175,0.56)",
      bottomColor: "rgba(68,33,175,0.04)",
      lineColor: "#4421af",
      lineWidth: 2,
    });
    const series1 = chart.addLineSeries({
      color: "#f46a9b",
      lineWidth: 4,
      priceScaleId: "right",
    });

    series1.setData(demo_data_05);

    areaSeries1.setData(area_data_0);
    areaSeries2.setData(area_data_1);
  }, []);

  return <div ref={chartElement} style={{ width: "100%", height: "600px" }} />;
}
