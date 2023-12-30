import { devices } from "@app/constants";
import { getRepositories } from "@app/helpers/getRepositories";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResultItem from "./SearchResultItem";
import { IRepo } from "@app/types/Repo";
import { TailSpin } from "react-loader-spinner";

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
			font-size: 16px;
			max-width: 800px;
		}
	}

	& > div {
		padding: 16px;
		margin: 20px 0;
		max-height: 400px;
		overflow: auto;
	}

	ul {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	p {
		margin: 20px 0;
	}
`;

const SpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export default function RepositoriesSearchBar() {
	const [searchTerm, setSearchTerm] = useState("");
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

	const { data, isLoading } = useQuery({
		queryKey: ["repositories", { search: debouncedSearchTerm }],
		queryFn: ({ signal }) =>
			getRepositories({ signal, searchTerm: debouncedSearchTerm }),
		enabled: searchTerm.trim() !== "",
	});

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedSearchTerm(searchTerm);
		}, 500);
		return () => clearTimeout(timeoutId);
	}, [searchTerm]);

	return (
		<Container>
			<input
				type='text'
				onChange={(e) => setSearchTerm(e.target.value)}
				value={searchTerm}
				placeholder='Search for repositories'
			/>

			{debouncedSearchTerm && (
				<div>
					{isLoading && (
						<SpinnerWrapper>
							<TailSpin
								visible={true}
								height='40'
								width='40'
								color='#000000'
								ariaLabel='tail-spin-loading'
								radius='1'
							/>
						</SpinnerWrapper>
					)}
					{data?.repositories?.length > 0 ? (
						<ul>
							{data.repositories.map((repo: IRepo) => (
								<SearchResultItem repo={repo} key={repo.name} />
							))}
						</ul>
					) : !isLoading ? (
						<p>No matches found</p>
					) : null}
				</div>
			)}
		</Container>
	);
}
