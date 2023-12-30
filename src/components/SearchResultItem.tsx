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
		gap: 4px;
	}
`;

export default function SearchResultItem({ repo }: { repo: IRepo }) {
	return (
		<RepoContainer>
			<strong>{repo?.name}</strong>
			<div>
				<b>{repo?.stars}</b>
				<span>★</span>
			</div>
		</RepoContainer>
	);
}
