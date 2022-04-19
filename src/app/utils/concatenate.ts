const concatenate =
	(prefix: string) =>
	(name: string): string =>
		prefix.concat('/', name);

export default concatenate;
