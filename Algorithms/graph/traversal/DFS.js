const {
    colorInitialize,
    Colors
} = require('../util');
/**
 * 
 * @param {*} graph 
 * @param {*} callback 
 */
const DFS = (graph, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getEdges();
    const color = colorInitialize(vertices);

    // for (let index = 0; index < vertices.length; index++) {
    for (let index = vertices.length - 1; index > 0; index--) {
        if (color[vertices[index]] == Colors.WHITE) {
            DFSeachVisited(vertices[index], color, adjList, callback);
        }
    }
}

/**
 * 
 * @param {*} vertices 
 * @param {*} colors 
 * @param {*} adjList 
 * @param {*} callback 
 */
const DFSeachVisited = (vertices, colors, adjList, callback) => {
    colors[vertices] = Colors.GREY;
    if (callback) {
        callback(vertices);
    }
    const neighbores = adjList.get(vertices);
    for (let index = 0; index < neighbores.length; index++) {
        if (colors[neighbores[index]] == Colors.WHITE) {
            DFSeachVisited(neighbores[index], colors, adjList, callback);
        }
    }
    colors[vertices] = Colors.BLACK;
}


/**
 * 
 * @param {*} graph 
 */
const DFSExplore = (graph) => {
    const vertices = graph.getVertices();
    const adjList = graph.getEdges();
    const color = colorInitialize(vertices);
    const discoveryTime = {};
    const finishTime = {};
    const predecessors = {};
    const time = {
        count: 0
    };

    for (let index = 0; index < vertices.length; index++) {
        const vertex = vertices[index];
        discoveryTime[vertex] = 0;
        finishTime[vertex] = 0;
        predecessors[vertex] = null;
    }

    for (let index = 0; index < vertices.length; index++) {
        if (color[vertices[index]] == Colors.WHITE) {
            DFSeachExploreVisited(vertices[index], color, adjList, discoveryTime, finishTime, predecessors, time);
        }
    }

    return {
        discoveryTime,
        finishTime,
        predecessors
    }
}

/**
 * 
 * @param {*} vertices 
 * @param {*} colors 
 * @param {*} adjList 
 * @param {*} discoveryTime 
 * @param {*} finishTime 
 * @param {*} predecessors 
 * @param {*} time 
 */
const DFSeachExploreVisited = (vertices, colors, adjList, discoveryTime, finishTime, predecessors, time) => {
    colors[vertices] = Colors.GREY;
    discoveryTime[vertices] = ++time.count;
    const neighbores = adjList.get(vertices);
    for (let index = 0; index < neighbores.length; index++) {
        if (colors[neighbores[index]] == Colors.WHITE) {
            predecessors[neighbores[index]] = vertices;
            DFSeachExploreVisited(neighbores[index], colors, adjList, discoveryTime, finishTime, predecessors, time);
        }
    }
    colors[vertices] = Colors.BLACK;
    finishTime[vertices] = ++time.count;
}


/* 
const { Graph } = require('../../../data_structure/Graph');
const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; //	{12}
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');


// DFS(graph, (x) => console.log(x));

// console.log(DFSExplore(graph));

// Path Exploring 
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
const result = DFSExplore(graphA);


const fTimes = result.finishTime;
const s = [];
for (let count = 0; count < myVerticesA.length; count++) {
    let max = 0;
    let maxName = null;
    for (i = 0; i < myVerticesA.length; i++) {
        if (fTimes[myVerticesA[i]] > max) {
            max = fTimes[myVerticesA[i]];
            maxName = myVerticesA[i];
        }
    }
    s.push(maxName);
    delete fTimes[maxName];
}


*/

module.exports = {
    DFS,
    DFSExplore
}