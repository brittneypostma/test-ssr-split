/** @type {import('./index').RequestHandler} */
export function get(event) {
	return {
		body: {
			event
		}
	};
}