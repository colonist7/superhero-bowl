export const imageURLBuilder = (path: string, extension: string, size?: string): string => {
	return path + (size ? size : '') + '.' + extension;
};
