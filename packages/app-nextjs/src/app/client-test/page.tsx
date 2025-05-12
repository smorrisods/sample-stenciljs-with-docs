"use client";

import { useEffect } from "react";
import { MyComponent } from "react-library";

export default function ClientTestPage() {
  useEffect(() => {
    console.log("🧪 MyComponent (raw):", MyComponent);
    console.log("🧪 MyComponent (string):", MyComponent?.toString?.());
  }, []);

  return (
    <main>
      <h2>Client-Only Version</h2>
      <MyComponent first="Bart" last="Simpson"></MyComponent>
    </main>
  );
}
