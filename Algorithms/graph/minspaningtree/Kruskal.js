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