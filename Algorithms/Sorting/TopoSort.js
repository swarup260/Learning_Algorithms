/**
 * complexity of Topo/Top Sort is O(v+e)
 * v -> Vertices of graph
 * e -> Edges of graph
 * @param {*} graph 
 */
const topSort = graph => {
    const vertices = graph.getVertices();
    const adjList = graph.getEdges();
    const visited = new Set();
    const ordering = [];
    const index = vertices - 1;

    for (let index = 0; index < vertices.length; index++) {
        let visitedNode = []
        const vertex = vertices[index];
        if (!visited.has(vertex)) {
            dfs(vertex, visited, visitedNode, adjList);
        }
        for (let index = 0; index < visitedNode.length; index++) {
            ordering.push(visitedNode[index]);
        }

    }

    return ordering;
}


/**
 * 
 * @param {*} vertex 
 * @param {*} visited 
 * @param {*} visitedNode 
 * @param {*} adjList 
 */
const dfs = (vertex, visited, visitedNode, adjList) => {
    visited.add(vertex);

    const neighbores = adjList.get(vertex);
    for (let index = 0; index < neighbores.length; index++) {
        const node = neighbores[index];
        if (!visited.has(node)) {
            dfs(node, visited, visitedNode, adjList)
        }
    }
    visitedNode.push(vertex);
}


/* 

const graphA = new Graph(true); //	directed	graph
let myVerticesA = ['A', 'B', 'C', 'D', 'E', 'F'];
for (i = 0; i < myVerticesA.length; i++) {
    graph.addVertex(myVerticesA[i]);
}
graphA.addEdge('A', 'D');
graphA.addEdge('A', 'C');
graphA.addEdge('B', 'D');
graphA.addEdge('B', 'E');
graphA.addEdge('C', 'F');
graphA.addEdge('F', 'E');

*/

module.exports = {
    topSort
}