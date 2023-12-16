import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import { particlesOptions } from "./utils/particles-config";
import { Container } from "@tsparticles/engine";

const router = createBrowserRouter([
	{ path: "/", element: <Dashboard />, errorElement: <Error /> },
	{ path: "/login", element: <Login /> },
]);

function App() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const particlesLoaded = (container: Container | undefined): Promise<void> => {
		return new Promise<void>((resolve) => {
			resolve();
		});
	};
	const options = useMemo(() => particlesOptions, []);

	if (init) {
		return (
			<>
				<Particles
					id='tsparticles'
					particlesLoaded={particlesLoaded}
					options={options}
				/>
				<RouterProvider router={router} />
			</>
		);
	}

	return <RouterProvider router={router} />;
}
export default App;
