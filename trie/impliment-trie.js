function TrieNode() {
    // store the children in object
    this.children = {};
    // this define the end of the string
    this.isEndofWord = false
}
// define the constructor function for the operation like insert search element
function Trie() {
    this.root = new TrieNode();
}

// Insert data in Trie data Structure
Trie.prototype.insert = function (word) {
    // now calling the treiNode
    let node = this.root;
    for (let char of word) {
        if (!node.children[char])
            // jaha par eak element nahi milta h waha se eak element ko empty object ke throught put karwa diya h node eak eak char ko
            node.children[char] = new TrieNode();
        node = node.children[char];
    }
    node.isEndofWord = true;
}

// searching word in trie, if found return true else false;
Trie.prototype.search = function (word) {
    let node = this.root;
    for (let char of word) {
        // checking each element those are found or not in tree;
        if (!node.children[char])
            return false;
        // yaha se element milta h to node m dalwa diya kyun ye eak object ki eak chain h
        node = node.children[char];
    }
    return node.isEndofWord;
}
// calling the function and passing the values
const trie = new Trie();
['hello', 'how', 'are', 'you', 'your'].forEach((i) => trie.insert(i))
console.log(trie.search('you'))
console.log(trie.search('your'))

// console.log(JSON.stringify(trie, null, 2))