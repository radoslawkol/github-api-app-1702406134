import { AuthContext } from "@app/context/AuthContext";
import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logout from "@app/components/Logout";
import RecentRepoSection from "@app/components/RecentRepoSection";
import RepositoriesSearchBar from "@app/components/RepositoriesSearchBar";
import { devices } from "@app/constants";

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;

	header {
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--primary-color);
		box-shadow: 0 5px 8px var(--primary-color);

		img {
			width: 36px;
			height: 36px;
			border-radius: 50%;
		}
	}

	main {
		margin: 0 20px;
		display: flex;
		flex-direction: column;
		gap: 30px;

		@media only screen and (${devices.md}) {
			align-items: center;
		}

		section {
			padding: 20px;
			background: rgba(255, 255, 255, 0.19);
			border-radius: 16px;
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(5px);
			border: 1px solid rgba(255, 255, 255, 0.17);
			@media only screen and (${devices.md}) {
				width: 600px;
			}
			@media only screen and (${devices.lg}) {
				width: 800px;
			}
		}

		h2 {
			font-size: 20px;
		}
	}
`;

const Profile = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export default function Dashboard() {
	const { user } = useContext(AuthContext);

	return (
		<Wrapper>
			<header>
				<strong>Welcome, {user?.username}</strong>
				<Profile>
					<Link to={user?.profileUrl || ""} target='_blank'>
						<img src={user?.photos[0].value} />
					</Link>
					<Logout />
				</Profile>
			</header>
			<main>
				<section>
					<RecentRepoSection />
				</section>
				<section>
					<RepositoriesSearchBar />
				</section>
			</main>
		</Wrapper>
	);
}
