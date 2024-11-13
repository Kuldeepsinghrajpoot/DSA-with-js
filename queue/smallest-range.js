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
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            this.getParentIndex(index) >= 0 &&
            this.heap[this.getParentIndex(index)].value > this.heap[index].value
        ) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    extractMin() {
        if (this.heap.length === 0) {
            throw new Error("Heap is empty");
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

        if (left < this.heap.length && this.heap[left].value < this.heap[smallest].value) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right].value < this.heap[smallest].value) {
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
            throw new Error("Heap is empty");
        }
        return this.heap[0];
    }
}

function findSmallestRange(lists, K) {
    // Initialize the min-heap
    const minHeap = new MinHeap();
    let currentMax = -Infinity;

    // Insert the first element of each list into the min-heap
    for (let i = 0; i < K; i++) {
        minHeap.insert({ value: lists[i][0], listIndex: i, elementIndex: 0 });
        currentMax = Math.max(currentMax, lists[i][0]);
    }

    let minRange = [-Infinity, Infinity];

    while (true) {
        const minElement = minHeap.extractMin();
        const currentMin = minElement.value;

        // Update the range if a smaller range is found
        if (currentMax - currentMin < minRange[1] - minRange[0]) {
            minRange = [currentMin, currentMax];
        }

        // Get the next element from the same list
        const nextElementIndex = minElement.elementIndex + 1;
        if (nextElementIndex < lists[minElement.listIndex].length) {
            const nextElement = lists[minElement.listIndex][nextElementIndex];
            minHeap.insert({ value: nextElement, listIndex: minElement.listIndex, elementIndex: nextElementIndex });
            currentMax = Math.max(currentMax, nextElement);
        } else {
            break; // No more elements in the current list
        }
    }

    return minRange;
}

// Example usage:
const lists = [
    [1, 10, 11],
    [2, 3, 20],
    [5, 6, 12]
];
const K = lists.length;
console.log(findSmallestRange(lists, K)); // Should output the correct smallest range
