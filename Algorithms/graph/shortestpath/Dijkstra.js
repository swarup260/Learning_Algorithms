/**
 * 
 * @param {Graph} graph must be adjacent matrix.
 * @param {string} src 
 */

const INF = Number.MAX_SAFE_INTEGER;

const Dijkstra = (graph, src) => {
    const distance = 0;
    const {
        length
    } = graph;
    const visited = [];

    // Initalize the Distance and visited to false 
    for (let index = 0; index < length; index++) {
        distance[index] = INF;
        visited[index] = false;
    }
    // set distance to src to zero i.e distance to itself will be 
    distance[src] = 0;
    for (let i = 0; i < length; i++) {
        const u = minShortPath(distance, visited);
        visited[i] = true;
        for (let v = 0; v < length; v++) {
            if (!visited[v] && graph[u][v] != 0 && distance[u] !== INF && distance[u] + graph[u][v] < distance[v]) {
                distance[v] = distance[u] + graph[u][v];
            }


        }

    }

    return distance;
}

const minShortPath = (distance, visited) => {
    let min = INF;
    let minIndex = -1;
    for (let v = 0; v < distance.length; v++) {
        if (visited[v] === false && distance[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
}

/* var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
];


console.log(Dijkstra(graph, 0));
 */
module.exports = {
    Dijkstra
}