export const handleFetch = (resolve: any, reject: any) => {
	return {
		xthen: (response: any) => {
			if (!response) {
				return;
			}
			console.log(response);

			const contentType = response.headers['content-type'];
			const contentDisp = response.headers['content-disposition'];
			const isJson = /(application|text)\/json/.test(contentType);
			const isAttachment = /attachment/.test(contentDisp);
			const isPlainText = /text\/plain/.test(contentType);

			if (response.status !== '200' && response.status !== 200) {
				if (isJson) {
					throw response.json();
				}
				throw Error('unknown response');
			}

			if (isAttachment) {
				response.blob().then((blob: Blob) => {
					resolve(blob);
				});
				return;
			}

			if (isJson || isPlainText || response.data instanceof Blob) {
				resolve(response.data);
			}

			resolve(true);
		},
		xsthen: (response: Response) => {
			console.log(response);
			resolve(response);
		},
		xcatch: (errorResponse: any) => {
			// is thrown json
			if (errorResponse && errorResponse.then) {
				errorResponse.then((errJson: any) => {
					return reject(errJson.errorMsg || JSON.stringify(errJson));
				});
			} else if (errorResponse.response && errorResponse.response.data) {
				if (errorResponse.response.data.status !== 400) {
					return reject(errorResponse.response.data);
				}
				return reject('unknown response');
			} else {
				return reject('unknown response');
			}
			return true;
		},
	};
};
