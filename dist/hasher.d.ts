declare namespace hasher {
    interface Hasher {
        /**
         * Create hash of an object
         * @param object source object
         * @returns hash string of an object
         */
        hash(object: any): string;
        /**
         * Create sorted string from an object
         * @param object source object
         * @returns sorted string from an object
         */
        sort(object: any): string;
        /**
         * Create sorted string from an object
         * @param object source object
         * @returns sorted string from an object
         * @alias sort
         */
        sortObject(object: any): string;
    }
}
/**
 * Hasher constructor
 * @param options hasher options
 */
declare function hasher(): hasher.Hasher;
export = hasher;
//# sourceMappingURL=hasher.d.ts.map