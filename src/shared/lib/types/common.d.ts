declare type SelectItem = {
	id: number;
	name: string;
};

declare type ApiResponse<T> = {
	success: boolean;
	data: T;
	meta: {
		timestamp: Date,
		path: string,
		statusCode: number,
	};
};