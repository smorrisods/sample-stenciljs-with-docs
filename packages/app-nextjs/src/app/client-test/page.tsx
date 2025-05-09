// 'use client';

// import { MyComponent } from 'react-library';

// export default function ClientTestPage() {
// 	return (
// 		<main>
// 			<h2>Client-Only Version</h2>
// 			<MyComponent first="Bart" last="Simpson"></MyComponent>
// 		</main>
// 	);
// }

"use client";

// import { useEffect } from "react";
// import { defineCustomElements } from "stencil-library/loader";
import { MyComponent } from "react-library";

// function WebComponentsInitializer() {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       defineCustomElements(window);
//     }
//   }, []);

//   return null; // This component doesn't render anything
// }

export default function ClientTestPage() {
  //   WebComponentsInitializer();
  return (
    <main>
      <h2>Client-Only Version</h2>
      <MyComponent first="Bart" last="Simpson"></MyComponent>
    </main>
  );
}
