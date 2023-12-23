import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import Particles from "@tsparticles/react";
import Login from "@pages/Login";
import Dashboard from "@pages/Dashboard";
import Error from "@pages/Error";
import { useParticles } from "@hooks/useParticles";
import { getUser } from "@helpers/getUser";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
	const { init, particlesLoaded, options } = useParticles();
	const { user, setUser } = useContext(AuthContext);

	const { data } = useQuery({
		queryKey: ["authenticatedUser"],
		queryFn: getUser,
	});

	useEffect(() => {
		if (data?.user) {
			setUser(data.user);
		}
	}, [data, setUser]);

	const router = createBrowserRouter([
		{
			path: "/",
			element: user ? <Dashboard /> : <Navigate to='/login' />,
			errorElement: <Error />,
		},
		{
			path: "/login",
			element: user ? <Navigate to='/' /> : <Login />,
		},
	]);

	if (init) {
		return (
			<>
				<Particles
					id='tsparticles'
					particlesLoaded={particlesLoaded}
					options={options}
				/>
				<ToastContainer />
				<RouterProvider router={router} />
			</>
		);
	} else
		return (
			<>
				<RouterProvider router={router} />
				<ToastContainer />
			</>
		);
}
export default App;
