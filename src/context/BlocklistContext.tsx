import { Dispatch, createContext, useReducer } from "react";
import { IRepo } from "@interfaces/Repo";

interface BlocklistState {
	blockedRepositories: IRepo[];
}

interface BlocklistAction {
	type: string;
	payload?: IRepo;
}

const initialState: BlocklistState = {
	blockedRepositories: [],
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
		case "ADD_REPO": {
			const repoExist = state.blockedRepositories.find(
				(repo) => repo.id === action.payload?.id
			);

			if (repoExist) return state;

			return {
				...state,
				blockedRepositories: [...state.blockedRepositories, action.payload!],
			};
		}
		case "DELETE_REPO":
			return {
				...state,
				blockedRepositories: state.blockedRepositories.filter(
					(repo) => repo.id !== action.payload!.id
				),
			};
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
