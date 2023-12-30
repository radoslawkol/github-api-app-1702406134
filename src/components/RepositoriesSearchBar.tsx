import { devices } from "@app/constants";
import { getRepositories } from "@app/helpers/getRepositories";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	@media only screen and (${devices.md}) {
		text-align: center;
	}
	input {
		width: 100%;
		padding: 6px 10px;
		border-radius: 100px;
		border: none;
		outline-color: var(--color-primary);

		@media only screen and (${devices.md}) {
			padding: 8px 16px;
			font-size: 18px;
			max-width: 800px;
		}
	}
`;

export default function RepositoriesSearchBar() {
	const [searchTerm, setSearchTerm] = useState("");

	const { data, isLoading } = useQuery({
		queryKey: ["repositories", { search: searchTerm }],
		queryFn: ({ signal }) => getRepositories({ signal, searchTerm }),
	});
	return (
		<Container>
			<input
				type='text'
				onChange={(e) => setSearchTerm(e.target.value)}
				value={searchTerm}
				placeholder='Search for repositories'
			/>
		</Container>
	);
}
