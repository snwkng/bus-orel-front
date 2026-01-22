declare type SelectItem = {
	name?: string;
	_id?: string | number;
	id?: string | number;
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