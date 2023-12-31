import { Dispatch, createContext, useReducer } from "react";
import { IRepo } from "@interfaces/Repo";

interface BlocklistState {
	blockedRepositories: IRepo[];
}

interface BlocklistAction {
	type: string;
	payload?: IRepo;
}

const getLocalStorageData = () => {
	const storedData = localStorage.getItem("blocklist");
	return storedData ? JSON.parse(storedData) : [];
};

const initialState: BlocklistState = {
	blockedRepositories: getLocalStorageData(),
};

export const BlocklistContext = createContext<{
	state: BlocklistState;
	dispatch: Dispatch<BlocklistAction>;
}>({
	state: initialState,
	dispatch: () => {},
});

const blocklistReducer = (
	state: BlocklistState,
	action: BlocklistAction
): BlocklistState => {
	switch (action.type) {
		case "BLOCK_REPO": {
			const repoExist = state.blockedRepositories.find(
				(repo) => repo.id === action.payload?.id
			);

			if (repoExist) return state;

			const prevStorageData = getLocalStorageData();

			const repoExistsInStorage = prevStorageData.find(
				(repo: IRepo) => repo.id === action.payload?.id
			);

			if (!repoExistsInStorage) {
				localStorage.setItem(
					"blocklist",
					JSON.stringify([...prevStorageData, action.payload])
				);
			}

			return {
				...state,
				blockedRepositories: [...state.blockedRepositories, action.payload!],
			};
		}
		case "UNBLOCK_REPO": {
			const prevStorageData = getLocalStorageData();
			localStorage.setItem(
				"blocklist",
				JSON.stringify(
					prevStorageData.filter(
						(repo: IRepo) => repo.id !== action.payload?.id
					)
				)
			);

			return {
				...state,
				blockedRepositories: state.blockedRepositories.filter(
					(repo) => repo.id !== action.payload!.id
				),
			};
		}
		default:
			return state;
	}
};

export const BlocklistContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [state, dispatch] = useReducer(blocklistReducer, initialState);

	return (
		<BlocklistContext.Provider value={{ state, dispatch }}>
			{children}
		</BlocklistContext.Provider>
	);
};
