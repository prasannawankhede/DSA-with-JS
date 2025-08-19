// function ReverseAnArray(arr){
//     if(arr.length === 0){
//         return null;
//     }
//     let result = [];
//     for(let i = arr.length - 1; i>=0 ;i--){
//         result.push(arr[i]);
//     }
//     return result;
// }

function ReverseAnArray(arr){
    if(arr.length === 0){
        return null;
    }

    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }
    return arr;
}

module.exports = ReverseAnArray;
