/**
 * Increments the number stored at `<key>` by `<increment>`.
 * If the key does not exist, it is set to `0` before performing the operation.
 * An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer.
 * - Available since: 1.0.0.
 * - Time complexity: O(1).
 * @param key -
 * @param increment -
 * @returns -
 */
export function input(key, increment) {
	return [["INCRBY", key, String(increment)]];
}