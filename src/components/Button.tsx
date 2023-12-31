import styled from "styled-components";

const ButtonEl = styled.button`
	padding: 4px 8px;
	border: 1px solid var(--secondary-color);
	border-radius: 15px;
	cursor: pointer;
	transition: transform 0.3s;
	&:hover {
		transform: scale(1.05);
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
	}
`;

interface IProps {
	children: React.ReactNode;
	onClick: () => void;
}

export default function Button({ children, onClick }: IProps) {
	return <ButtonEl onClick={onClick}>{children}</ButtonEl>;
}
