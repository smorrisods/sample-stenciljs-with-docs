"use client";

import { MyComponent, MyInput } from "react-library";

export default function ClientTestPage() {
  return (
    <main>
      <h2>Client-Only Version</h2>
      <MyComponent first="Bart" last="Simpson"></MyComponent>
      <MyInput
        inputValidator={(v) =>
          Promise.resolve(v === "error" ? "You typed 'error'!" : "")
        }
      ></MyInput>
    </main>
  );
}
