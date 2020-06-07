const {
    colorInitialize,
    Colors
} = require('../util')
const {
    Queue
} = require('./Queue');

const {
    StackObject
} = require('./Stack')



/**
 * 
 * @param {*} graph 
 * @param {*} initialVertice 
 * @param {*} callback 
 */

const BFS = (graph, initialVertice, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getEdges();
    const color = colorInitialize(vertices);
    const queue = new Queue();
    queue.equeue(initialVertice);
    while (!queue.isEmpty()) {
        const vertex = queue.dequeue();
        color[vertex] = Colors.GREY;
        let neighbores = adjList.get(vertex);

        neighbores.forEach(node => {
            if (color[node] === Colors.WHITE) {
                queue.equeue(node);
                color[node] = Colors.GREY;
            }
        });
        color[vertex] = Colors.BLACK;
        if (callback) {
            callback(vertex);
        }
    }
}


/**
 * 
 * @param {*} graph 
 * @param {*} initialVertice 
 */
const BFSShortPath = (graph, initialVertice) => {
    const vertices = graph.getVertices();
    const adjList = graph.getEdges();
    const distance = {};
    const predecessors = {};
    const queue = new Queue();
    const color = colorInitialize(vertices);
    // initailize the distance and predecessors;
    for (let index = 0; index < vertices.length; index++) {
        distance[vertices[index]] = 0;
        predecessors[vertices[index]] = null;
    }
    queue.equeue(initialVertice);
    while (!queue.isEmpty()) {
        const vertex = queue.dequeue();
        let neighbores = adjList.get(vertex);
        color[vertex] = Colors.GREY;
        neighbores.forEach(vertexN => {
            if (color[vertexN] == Colors.WHITE) {
                queue.equeue(vertexN);
                color[vertexN] = Colors.GREY;
                /* Short */
                predecessors[vertexN] = vertex;
                distance[vertexN] = distance[vertex] + 1;
            }

            color[vertex] = Colors.BLACK;
        })
    }

    const fromVertex = vertices[0];
    for (let index = 1; index < vertices.length; index++) {
        const toVertex = vertices[index];
        const stack = new StackObject();

        for (let v = toVertex; v != fromVertex; v = predecessors[v]) {
            stack.push(v);
        }

        stack.push(fromVertex);
        let s = stack.pop();
        while (!stack.isEmpty()) {
            s += ` -> ${stack.pop()}`
        }

        console.log(s)
    }



    // return {
    //     distance,
    //     predecessors
    // }
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


// BFS(graph,myVertices[0], (x) => console.log("Vertex Visited : ",x));

// BFSShortPath(graph, myVertices[0]);



*/
module.exports = {
    BFS,
    BFSShortPath
}