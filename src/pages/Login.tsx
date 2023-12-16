import { devices } from "../constants";
import styled from "styled-components";

const Wrapper = styled.div`
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translateX(-50%);
	min-width: 300px;
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}
	h1 {
		text-align: center;
		font-size: 28px;
		color: var(--text-primary);
		text-transform: uppercase;
		@media only screen and (${devices.lg}) {
			font-size: 32px;
		}
	}
	button {
		padding: 16px 24px;
		font-size: 16px;
		letter-spacing: 0.8px;
		color: var(--text-secondary);
		background-color: var(--secondary-color);
		border: none;
		border-radius: 100px;
		cursor: pointer;
		transition: color, border, background-color 0.3s;
		@media only screen and (${devices.lg}) {
			font-size: 18px;
		}

		&:hover {
			color: var(--text-primary);
			background-color: var(--primary-color);
			border: 1px solid var(--secondary-color);
		}
	}
`;

export default function Login() {
	return (
		<Wrapper>
			<div>
				<h1>Welcome to GitHub API app!</h1>
				<button>Login with GitHub</button>
			</div>
		</Wrapper>
	);
}
