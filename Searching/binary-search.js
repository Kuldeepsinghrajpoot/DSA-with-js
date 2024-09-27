function binarySearch(arr,key) {

    let start =0;
    let end = arr.length-1;

    while(start<=end){
        let mid = Math.floor((start+end)/2);

        if(key===arr[mid]){
            return {index:mid,value:arr[mid]};
        }else if(key<arr[mid]){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
}

console.log(binarySearch([1, 2, 3, 4, 5,-1,0], 0));
// todo: binary search is a technique to search for an element in a sorted array in O(log n) time complexity 