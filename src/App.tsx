import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Particles from "@tsparticles/react";
import Login from "@pages/Login";
import Dashboard from "@pages/Dashboard";
import Error from "@pages/Error";
import { useParticles } from "@hooks/useParticles";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Dashboard />,
		errorElement: <Error />,
	},
	{ path: "/login", element: <Login /> },
]);

function App() {
	const { init, particlesLoaded, options } = useParticles();

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
	} else return <RouterProvider router={router} />;
}
export default App;
