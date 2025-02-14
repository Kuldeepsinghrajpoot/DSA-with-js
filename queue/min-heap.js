class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index1], this.heap[index2]];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
      while (this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
        this.swap(this.getParentIndex(index), index);
        index = this.getParentIndex(index);
      }
    }
  
    extractMin() {
      if (this.heap.length === 0) {
        throw new Error('Heap is empty');
      }
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return min;
    }
  
    heapifyDown(index) {
      let smallest = index;
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);
  
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest !== index) {
        this.swap(index, smallest);
        this.heapifyDown(smallest);
      }
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    size() {
      return this.heap.length;
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error('Heap is empty');
      }
      return this.heap[0];
    }
  }
  
  class Solution {
    kthLargestSum(arr, k) {
      // Create an instance of MinHeap
      const minHeap = new MinHeap();
  
      // Function to calculate all subarray sums and maintain k largest sums in the min-heap
      for (let start = 0; start < arr.length; start++) {
        let currentSum = 0;
        for (let end = start; end < arr.length; end++) {
          currentSum += arr[end];
  
          if (minHeap.size() < k) {
            minHeap.insert(currentSum);
          } else if (currentSum > minHeap.peek()) {
            minHeap.extractMin();
            minHeap.insert(currentSum);
          }
        }
      }
  
      // The root of the min-heap is the k-th largest sum
      return minHeap.peek();
    }
  }
  
  
  // Example Usage
  const solution = new Solution();
  const arr = [1, 2, 3, 4];
  const k = 3;
  console.log(solution.kthLargestSum(arr, k)); // Outputs the 3rd largest sum of contiguous subarrays
  