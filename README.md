# 1 Binary Search
When given a sorted array of data, binary search is a way of searching through that data to find an element in O(log n) time using a divide and conquer approach. It doesn’t require you to look through the entire array in a linear way, which would have a linear big O runtime of O(n).

# 2 Binary Search Trees
Binary search trees are a type of tree data structure with the added condition that each element to the left of a node must be less than that parent node, and each element to the right of a node must be greater than that parent node. Each left and right subtree is also itself a binary search tree, which makes searching for elements more efficient.

A binary tree is an efficient data structure for fast data storage and retrieval due to its O(log N) runtime. It is a specialized tree data structure that is made up of a root node, and at most two child branches or subtrees. Each child node is itself a binary tree.

# 3 Depth-First Search
Depth-first graph search continues down a path until it reaches the end. It is helpful for determining if a path exists between two vertices. DFS has many applications, including topological sorting and detecting cycles, but one of the more interesting real-world applications is that it can be used to solve problems that have a singular correct answer (a path between the start state and end state), such as a sudoku exercise.

There are three main traversal orders that you’ll come across for graph traversal:

## Preorder
Preorder, in which each vertex is added to the “visited” list and added to the output list BEFORE getting added to the stack.

## Postorder
Postorder, in which each vertex is added to the “visited” list and added to the output list AFTER it is popped off the stack.

## Reverse Post-Order
Reverse Post-Order (also known as Topological Sort), which returns an output list that is exactly the reverse of the post-order list.

# 4 Breadth-First Search
Breadth-first graph search approach checks the values of all neighboring vertices before moving into another level of depth. This is an incredibly inefficient way to find just any path between two vertices, but it’s an excellent way to identify the shortest path between them. Because of this, BFS is helpful for figuring out directions from one place to another.