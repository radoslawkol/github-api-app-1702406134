import { BlocklistContext } from "@app/context/BlocklistContext";
import { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { IRepo } from "@app/types/Repo";

const Wrapper = styled.div`
	& > div {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	div:first-child {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	article {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.142);
		border-radius: 15px;
	}
`;
export default function BlockReposList() {
	const { state, dispatch } = useContext(BlocklistContext);

	const handleUnblock = (repo: IRepo) => {
		dispatch({ type: "UNBLOCK_REPO", payload: repo });
	};

	return (
		<Wrapper>
			<div>
				<h2>Repositories Blocklist</h2>
				<span>{state?.blockedRepositories?.length} blocked</span>
			</div>
			{state?.blockedRepositories.length > 0 && (
				<div style={{ marginTop: "20px" }}>
					{state.blockedRepositories.map((repo) => (
						<article key={repo.id}>
							<span>{repo.name}</span>
							<Button onClick={() => handleUnblock(repo)}>Unblock</Button>
						</article>
					))}
				</div>
			)}
		</Wrapper>
	);
}
