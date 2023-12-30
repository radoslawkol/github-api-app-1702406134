import { getRepositories } from "@app/helpers/getRepositories";
import { useQuery } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

const RepoContainer = styled.div`
	margin: 20px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	strong {
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
	}
`;

const SpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export default function RecentRepoSection() {
	const { data, isLoading } = useQuery({
		queryKey: ["recentRepo"],
		queryFn: getRepositories,
	});

	if (isLoading) {
		return (
			<SpinnerWrapper>
				<TailSpin
					visible={true}
					height='60'
					width='60'
					color='#000000'
					ariaLabel='tail-spin-loading'
					radius='1'
				/>
			</SpinnerWrapper>
		);
	}

	return (
		<>
			<h2>Recent Repository</h2>
			<RepoContainer>
				<strong>{data?.repository?.name || data.message}</strong>
				{data?.repository && (
					<div>
						<b>{data?.repository?.stars}</b>
						<span>★</span>
					</div>
				)}
			</RepoContainer>
		</>
	);
}
