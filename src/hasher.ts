import objectSorter = require('./objectSorter');
import { sha256 } from 'js-sha256';

namespace hasher {
  export interface Hasher {
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
function hasher(): hasher.Hasher {
  const sortObject = objectSorter();

  function hashObject(obj: any) {
    const sorted = sortObject(obj);
    return sha256.hex(sorted)
  }
  return {
    hash: hashObject,
    sort: sortObject,
    sortObject,
  };
}

export = hasher;
