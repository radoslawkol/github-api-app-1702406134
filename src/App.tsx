import { useState } from "react";
import ReactLogo from "./assets/react.svg";
import styles from "styled-components";

const Button = styles.button`
	color: yellow;
	background-color: var(--primary-color);
`;

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='main'>
			<div>
				<a href='https://react.dev' target='_blank'>
					<ReactLogo height={60} width={60} fill='#b41818' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<Button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</Button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}
export default App;