const {
    Dictionary
} = require('./Dictionary');

const { Queue } = require('./Queue')

const Colors = {
    WHITE : 0, //Vertex not visted 
    GREY : 1, //Vertex  visted but not explored
    BLACK : 2 //Vertex  explored Complete
}


class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Dictionary();
    }

    /* Add Vertex */
    addVertex(vertex) {
        if (!this.adjList.get(vertex)) {
            this.vertices.push(vertex);
            this.adjList.set(vertex, []);
        }
    }

    /* Add Edge */
    addEdge(vertexX, vertexY) {
        if (!this.adjList.get(vertexX)) {
            this.addVertex(vertexX)
        }
        if (!this.adjList.get(vertexY)) {
            this.addVertex(vertexY)
        }
        this.adjList.get(vertexX).push(vertexY);
        if (!this.isDirected) {
            this.adjList.get(vertexY).push(vertexX);
        }
    }

    getVertices() {
        return this.vertices;
    }

    getEdges() {
        return this.adjList;
    }

    toString() {
        let str = "";
        for (let index = 0; index < this.vertices.length; index++) {
            str += `${this.vertices[index]} -> ${this.adjList.get(this.vertices[index]).join(" ")} \n`;
        }
        return str;
    }

}



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


const colorInitialize = vertices => {
    const colors = {};
    vertices.forEach(vertex => {
        colors[vertex] = Colors.WHITE;
    });

    return colors;
}


const BFS = (graph , initialVertice , callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getEdges();
    const color = colorInitialize(vertices);    
    const queue = new Queue();
    queue.equeue(initialVertice);
    while (!queue.isEmpty()){
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

BFS(graph,myVertices[0], (x) => console.log("Vertex Visited : ",x));



// console.log(graph.getVertices());
// console.log(graph.toString());