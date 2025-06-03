var duplicateZeros = function(arr) {
    let n = arr.length;
    let result = new Array(n); // temporary array

    let i = 0; // index for original array
    let j = 0; // index for result array

    while (i < n && j < n) {
        if (arr[i] === 0) {
            result[j] = 0;
            j++;
            if (j < n) result[j] = 0; // only write if within boundsAdd commentMore actions
            j++;
        } else {
            result[j] = arr[i];
            j++;
        }
        i++;
    }

    // Copy result back into original array
    for (let k = 0; k < n; k++) {
        arr[k] = result[k];
    }
};

arr = [1,0,2,3,0,4,5,0]
console.log(duplicateZeros(arr));

//Output: [1,0,0,2,3,0,0,4]