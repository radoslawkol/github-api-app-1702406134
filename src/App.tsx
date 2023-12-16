import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
	{ path: "/", element: <Dashboard />, errorElement: <Error /> },
	{ path: "/login", element: <Login /> },
]);

function App() {
	return <RouterProvider router={router} />;
}
export default App;
