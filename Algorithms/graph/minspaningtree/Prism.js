const INF = Number.MAX_SAFE_INTEGER;

/**
 * 
 * @param {Array} graph 
 */
const Prism = graph => {
    const key = [];
    const parent = [];
    const visited = [];
    const {
        length
    } = graph;

    for (let v = 0; v < length; v++) {
        key[v] = INF;
        visited[v] = false;
    }
    key[0] = 0;
    parent[0] = -1;
    for (let index = 0; index < length; index++) {
        const u = minKey(graph, visited, key);        
        visited[u] = true;
        for (let v = 0; v < length; v++) {
            if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }

    return {
        parent ,
        key
    };
}


const minKey = (graph, visited, key) => {
    let min = INF;
    let minIndex = -1;
    for (let v = 0; v < graph.length; v++) {
        if (visited[v] === false && key[v] <= min) {
            min = key[v];
            minIndex = v;
        }
    }

    return minIndex;
}


/* var graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]
];


console.log(Prism(graph));
 */


module.exports = {
    Prism
}