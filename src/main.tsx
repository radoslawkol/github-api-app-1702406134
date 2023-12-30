import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext.tsx";
import { BlocklistContextProvider } from "./context/BlockListContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<BlocklistContextProvider>
					<App />
				</BlocklistContextProvider>
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
