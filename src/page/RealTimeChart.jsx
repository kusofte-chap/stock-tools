// TradingViewWidget.jsx

import { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_c47c4") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "NASDAQ:MSFT",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          // locale: "zh_CN",
          enable_publishing: false,
          withdateranges: true,
          range: "YTD",
          hide_side_toolbar: false,
          allow_symbol_change: true,
          watchlist: ["NASDAQ:MSFT"],
          details: true,
          hotlist: true,
          calendar: true,
          show_popup_button: true,
          popup_width: "1000",
          popup_height: "650",
          container_id: "tradingview_c47c4",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_c47c4" style={{ width: "100%", height: "100vh" }} />
      {/* <div className="tradingview-widget-copyright">
        <a
          href="https://cn.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">在TradingView上跟踪所有市场</span>
        </a>
      </div> */}
    </div>
  );
}
