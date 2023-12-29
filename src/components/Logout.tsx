import styled from "styled-components";
import LogoutIcon from "@assets/logoutIcon.svg";
import { logout } from "@helpers/logout";
import { redirect } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const StyledLogoutIcon = styled(LogoutIcon)`
	width: 28px;
	height: 28px;
	cursor: pointer;
`;

export default function Logout() {
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
	return <StyledLogoutIcon onClick={() => refetch()} />;
}
