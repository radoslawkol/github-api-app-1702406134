import { AuthContext } from "@app/context/AuthContext";
import { useContext } from "react";
import styled from "styled-components";

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
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}
	}
`;

export default function Dashboard() {
	const { user } = useContext(AuthContext);
	return (
		<Wrapper>
			<header>
				<strong>Welcome, {user?.username}</strong>
				<img src={user?.photos[0].value} />
			</header>
		</Wrapper>
	);
}
