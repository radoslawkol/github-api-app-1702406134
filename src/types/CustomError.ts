export interface ICustomError extends Error {
	code?: number;
	status?: string;
	message: string;
}
