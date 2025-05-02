'use client';

import { MyComponent } from 'react-library';

export default function ClientTestPage() {
	return (
		<main>
			<h2>Client-Only Version</h2>
			<MyComponent first="Bart" last="Simpson"></MyComponent>
		</main>
	);
}

