/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    let adjList = Array.from({ length: n }, () => []);
for (let i = 0; i < invocations.length; i++) {
  for (let j of invocations[i]) {
    adjList[i].push(j);  // Add directed edge from method i to method j
  }
}

// Tarjan's algorithm variables
let index = 0;
let indices = new Array(n).fill(-1);
let lowLink = new Array(n).fill(-1);
let onStack = new Array(n).fill(false);
let stack = [];
let sccs = [];
let isSuspicious = new Array(n).fill(false);

// Tarjan's algorithm to find SCCs
function tarjan(v) {
  indices[v] = lowLink[v] = index++;
  stack.push(v);
  onStack[v] = true;

  for (let neighbor of adjList[v]) {
    if (indices[neighbor] === -1) {
      tarjan(neighbor);
      lowLink[v] = Math.min(lowLink[v], lowLink[neighbor]);
    } else if (onStack[neighbor]) {
      lowLink[v] = Math.min(lowLink[v], indices[neighbor]);
    }
  }

  if (lowLink[v] === indices[v]) {
    let scc = [];
    let w;
    do {
      w = stack.pop();
      onStack[w] = false;
      scc.push(w);
    } while (w !== v);
    sccs.push(scc);
  }
}

// Run Tarjan's algorithm for all nodes
for (let i = 0; i < n; i++) {
  if (indices[i] === -1) {
    tarjan(i);
  }
}

// Mark all methods in SCCs with more than 1 method as suspicious
for (let scc of sccs) {
  if (scc.length > 1) {
    for (let method of scc) {
      isSuspicious[method] = true;
    }
  }
}

// Collect all non-suspicious methods
let result = [];
for (let i = 0; i < n; i++) {
  if (!isSuspicious[i]) {
    result.push(i);
  }
}

return result;

};

let n = 4, k = 1, invocations = [[1,2],[0,1],[3,2]]
console.log(remainingMethods(n,k,invocations))
