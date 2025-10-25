import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

const NewTabReactRenderer = ({ children }: { children: React.ReactNode }) => {
  const newWindow = useRef<Window | null>(null);
  const containerEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 1. Open new window
    newWindow.current = window.open(
      "",
      "",
      "width=800,height=600,left=200,top=200"
    );

    if (!newWindow.current) {
      alert("Pop-up blocked! Please allow pop-ups for this site.");
      return;
    }

    // 2. Create container div inside new window document
    containerEl.current = newWindow.current.document.createElement("div");
    newWindow.current.document.body.appendChild(containerEl.current);

    // 3. Add basic styles (optional)
    const styleEl = newWindow.current.document.createElement("style");
    styleEl.textContent = `
      body { font-family: Arial, sans-serif; padding: 20px; }
      h1, h2, h3 { color: #2563eb; }
      p { line-height: 1.6; }
    `;
    newWindow.current.document.head.appendChild(styleEl);

    // 4. Clean up when component unmounts
    return () => {
      newWindow.current?.close();
    };
  }, []);

  if (!containerEl.current || !newWindow.current) return null;

  // 5. Create React root and render children inside new tab container
  const root = ReactDOM.createRoot(containerEl.current);
  root.render(children);

  return null;
};

export default NewTabReactRenderer;
