const testGraph = require('../3 Depth First Traversal/testGraph');
const Queue = require('../../10 Linear Data Structures/3 Queues/Queue');

const breadthFirstTraversal = (start) => {

  const visitedVertices = [start];
  const visitQueue = new Queue();
  visitQueue.enqueue(start);

  while(!visitQueue.isEmpty()) {

    const current = visitQueue.dequeue();
    console.log(current.data);
    
    current.edges.forEach((edge) => {

      const neighbor = edge.end;

      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        visitQueue.enqueue(neighbor)
      }

    })

  }

};

breadthFirstTraversal(testGraph.vertices[0]);