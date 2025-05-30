import { MyComponent, MyInput } from "react-library";

export default function SSRTestPage() {
  return (
    <main>
      <h2>SSR Version</h2>
      <MyComponent first="Bart" last="Simpson"></MyComponent>
      <MyInput
        inputValidator={(v) =>
          Promise.resolve(v === "error" ? "You typed 'error'!" : "")
        }
      ></MyInput>
    </main>
  );
}
