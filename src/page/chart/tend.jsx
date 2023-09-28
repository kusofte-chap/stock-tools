import { createChart, CrosshairMode } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { demo_data_02, demo_data_04 } from "../data";

export default function TendChart() {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chartElement = document.getElementById("demo-chart");

    const chart = createChart(chartElement, {
      width: chartContainerRef.current.clientWidth,
      height: 600,
      rightPriceScale: {
        visible: true,
        borderColor: "rgba(197, 203, 206, 1)",
      },
      leftPriceScale: {
        visible: true,
        borderColor: "rgba(197, 203, 206, 1)",
      },
      layout: {
        background: {
          type: "solid",
          color: "#ffffff",
        },
        textColor: "rgba(33, 56, 77, 1)",
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
      crosshair: {
        mode: CrosshairMode.Magnet,
      },
      timeScale: {
        borderColor: "rgba(197, 203, 206, 1)",
      },
      handleScroll: {
        vertTouchDrag: false,
      },
    });

    const series1 = chart.addLineSeries({
      color: "rgba(4, 111, 232, 1)",
      lineWidth: 2,
      priceScaleId: "right",
    });

    series1.setData(demo_data_02);

    // const series2 = chart.addLineSeries({
    //   color: "red",
    //   lineWidth: 2,
    //   priceScaleId: "left",
    // });
    // series2.setData(demo_data_03);

    const series3 = chart.addLineSeries({
      color: "#333",
      lineWidth: 2,
      priceScaleId: "left",
    });
    series3.setData(demo_data_04);

    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div
      ref={chartContainerRef}
      style={{ width: "100%", height: "600px", position: "relative" }}
      id="demo-chart"
    />
  );
}
