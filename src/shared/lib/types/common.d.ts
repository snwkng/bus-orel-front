declare type SelectItem = {
	id: number;
	name: string;
};

declare type ApiPagination = {
	total: number;
	page: number;
	limit: number;
	lastPage: number;
};

declare type ApiResponse<T> = {
	success: boolean;
	data: T;
	meta: {
		timestamp: Date;
		path: string;
		statusCode: number;
		pagination?: ApiPagination;
	};
};
