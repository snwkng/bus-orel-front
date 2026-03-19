export const donwloadFile = async (fileName: string, newName: string) => {
	const response: Blob = await $fetch(`/api/s3/download/${fileName}`);
	const link = document.createElement('a');
  link.download = newName;
	link.href = URL.createObjectURL(response);
	link.click();
	URL.revokeObjectURL(link.href);
};