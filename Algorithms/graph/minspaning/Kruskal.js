const INF = Number.MAX_SAFE_INTEGER;
const Kruskal = graph => {
    let ne = 0;
    let a, b, u, v;
    const parent = [];
    const {
        length
    } = graph;
    const cost = InitializeCost(graph, length);
    while (ne < length-1) {
        for (let i = 0 , min = INF; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (cost[i][j] < min) {
                    min = cost[i][j];
                    a = u = i;
                    b = v = j;  
                }
                
            }
        }
        u = find(u, parent);
        v = find(v , parent);
        if (union(u,v,parent)) {
            ne ++;
        }
        cost[a][b] = cost[b][a] = INF;
    }

    return parent;
}


const InitializeCost = (graph, length) => {
    const cost = [];

    for (let i = 0; i < length; i++) {
        cost[i] = [];
        for (let j = 0; j < length; j++) {
            if (i === j) {
                cost[i][j] = 0
            } else if (graph[i][j]) {
                cost[i][j] = graph[i][j];
            } else {
                cost[i][j] = INF;
            }

        }

    }
    return cost;
}

/**
 * check if the cycle is form or not
 * @param {Number} i 
 * @param {Array} parent 
 */
const find = (i , parent) => {
    while(parent[i]){
        i = parent[i]
    }
    return i;
}

/**
 * 
 * @param {Number} i 
 * @param {Number} j 
 * @param {Array} parent 
 */
const union = (i,j,parent) => {
    if (i !== j) {
        parent[j] = i;
        return true;

    }
    return false;
}

// var graph = [
//     [0, 2, 4, 0, 0, 0],
//     [2, 0, 2, 4, 2, 0],
//     [4, 2, 0, 0, 3, 0],
//     [0, 4, 0, 0, 3, 2],
//     [0, 2, 3, 3, 0, 2],
//     [0, 0, 0, 2, 2, 0]
// ];


// console.log(Kruskal(graph));

module.exports = {
    Kruskal
}