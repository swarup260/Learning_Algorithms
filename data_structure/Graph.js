const {
    Dictionary
} = require('./Dictionary');

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

module.exports = {
    Graph
}