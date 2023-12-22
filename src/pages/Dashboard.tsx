import { AuthContext } from "@app/context/AuthContext";
import { useContext } from "react";
import styled from "styled-components";
import LogoutIcon from "@assets/logoutIcon.svg";
import { logout } from "@helpers/logout";
import { Link, redirect } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

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
`;

const Profile = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const StyledLogoutIcon = styled(LogoutIcon)`
	width: 28px;
	height: 28px;
	cursor: pointer;
`;

export default function Dashboard() {
	const { user } = useContext(AuthContext);

	const { data, isError, error, refetch } = useQuery({
		queryKey: ["logout"],
		queryFn: logout,
		enabled: false,
	});

	if (isError) {
		toast.error(error.message);
	}

	if (data?.status === "success") {
		window.location.reload();
		redirect("/login");
	}

	return (
		<Wrapper>
			<header>
				<strong>Welcome, {user?.username}</strong>
				<Profile>
					<Link to={user?.profileUrl || ""} target='_blank'>
						<img src={user?.photos[0].value} />
					</Link>
					<StyledLogoutIcon onClick={() => refetch()} />
				</Profile>
			</header>
		</Wrapper>
	);
}
