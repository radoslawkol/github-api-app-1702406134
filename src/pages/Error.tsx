import styled from "styled-components";
import { devices } from "../constants";

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	h1 {
		font-size: 24px;
		color: var(--error-color);
		text-transform: uppercase;
		font-weight: 300;
		@media only screen and (${devices.md}) {
			font-size: 32px;
		}
	}

	span {
		font-size: 24px;
		color: var(--error-color);
		letter-spacing: 4px;
		@media only screen and (${devices.md}) {
			font-size: 32px;
		}
	}
`;

export default function Error() {
	return (
		<Wrapper>
			<span>404</span>
			<h1>Page was not found!</h1>
		</Wrapper>
	);
}
