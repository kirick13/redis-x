/**
 * Checks if a value is a plain object.
 * @param value Value to check.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPlainObject(value) {
	return (
		typeof value === "object" &&
		value !== null &&
		Array.isArray(value) !== true &&
		value.constructor === Object &&
		Object.getPrototypeOf(value) === Object.prototype
	);
}
/**
 * Dummy function to use to trick TypeScript types.
 * @param result -
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function dummyReplyTransform(result) {
	return result;
}
/**
 * Converts a string array to an object.
 * @param values A flat array containing the keys and the values.
 * @returns Object with keys and values.
 */
export function stringBulkToObject(values) {
	const object = {};
	for (let index = 0; index < values.length; index += 2) {
		object[values[index]] = values[index + 1];
	}
	return object;
}