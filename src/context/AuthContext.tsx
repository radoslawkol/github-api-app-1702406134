import { Dispatch, SetStateAction, createContext, useState } from "react";
import { IUser } from "@interfaces/User";

interface AuthContextValue {
	user: IUser | null;
	setUser: Dispatch<SetStateAction<IUser | null>>;
}

export const AuthContext = createContext<AuthContextValue>({
	user: null,
	setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<IUser | null>(null);
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
