import { MyComponent } from "react-library";

export default function SSRTestPage() {
	return (
		<main>
			<h2>SSR Version</h2>
			<MyComponent first="Bart" last="Simpson"></MyComponent>
		</main>
	);
}