export interface IUser {
	displayName: string;
	id: string;
	nodeId: string;
	photos: { value: string }[];
	profileUrl: string;
	provider: string;
	username: string;
}
