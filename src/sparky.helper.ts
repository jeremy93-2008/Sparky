/**
 * @internal
 */
interface ISortArray {
    bigArray: any[];
    smallArray: any[];
}

/**
 * @internal
 */
export function arrayAreSame(array1: any[], array2: any[]) {
    if(!array1 || !array2) return false;
    const { bigArray, smallArray } = sortArrayInObject(array1, array2);

    return bigArray.every((big, i) => {
        return big == (smallArray ? smallArray[i] : null);
    })
}

/**
 * @internal
 */
function sortArrayInObject(array1: any[], array2: any[]): ISortArray {
    const length_1 = array1.length;
    const length_2 = array2.length;

    if(length_1 > length_2) return { bigArray: array1, smallArray: array2 }

    return { bigArray: array2, smallArray: array1 }
}