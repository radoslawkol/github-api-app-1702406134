import { IRepo } from "@app/types/Repo";
import styled from "styled-components";

const RepoContainer = styled.article`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	padding: 10px;
	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.142);
	border-radius: 15px;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;

		div {
			gap: 4px;
		}
	}

	button {
		padding: 4px 8px;
		border: 1px solid var(--secondary-color);
		border-radius: 15px;
		cursor: pointer;
		transition: transform 0.3s;
		&:hover {
			transform: scale(1.05);
			box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
		}
	}
`;

export default function SearchResultItem({
	repo,
	onBlockRepository,
}: {
	repo: IRepo;
	onBlockRepository: () => void;
}) {
	return (
		<RepoContainer>
			<strong>{repo?.name}</strong>
			<div>
				<div>
					<b>{repo?.stars}</b>
					<span>★</span>
				</div>
				<button onClick={onBlockRepository}>Hide</button>
			</div>
		</RepoContainer>
	);
}
