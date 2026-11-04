type ApiErrorBody = {
	error?: { message?: string | string[] };
	message?: string | string[];
};

export const getApiErrorMessage = (error: unknown): string | undefined => {
	if (!error || typeof error !== 'object' || !('data' in error)) {
		return undefined;
	}
	const body = (error as { data?: ApiErrorBody | null }).data;
	const raw = body?.error?.message ?? body?.message;
	if (Array.isArray(raw)) {
		return raw.join('. ');
	}
	return raw;
};
