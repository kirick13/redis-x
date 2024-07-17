export type ZrangeOptionsJsdoc = {
    /**
     * Reverses the ordering, so elements are ordered from highest to lowest score, and score ties are resolved by reverse lexicographical ordering.
     * - Available since: 6.2.0
     * @type {true}
     */
    REV?: unknown;
    /**
     * Can be used to obtain a sub-range from the matching elements (similar to SELECT LIMIT offset, count in SQL).
     * A negative <count> returns all elements from the <offset>. Keep in mind that if <offset> is large, the sorted set needs to be traversed for <offset> elements before getting to the elements to return, which can add up to O(N) time complexity.
     * - Available since: 6.2.0.
     * @type {[ number, number ]}
     */
    LIMIT?: unknown;
    /**
     * Makes the command behave like ZRANGEBYSCORE and returns the range of elements from the sorted set having scores equal or between <start> and <stop>.
     * - Available since: 6.2.0.
     * @type {true}
     */
    BYSCORE?: unknown;
    /**
     * Makes the command behave like ZRANGEBYLEX and returns the range of elements from the sorted set between the <start> and <stop> lexicographical closed range intervals.
     * - Available since: 6.2.0.
     * @type {true}
     */
    BYLEX?: unknown;
    /**
     * Get the value of the key before the SET operation.
     * @type {true}
     */
    WITHSCORES?: unknown;
};