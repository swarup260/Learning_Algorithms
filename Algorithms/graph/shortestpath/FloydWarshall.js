/**
 * 
 * @param {Graph} graph 
 * @param {string} src 
 */
/* 
Algo 
Create a |V| x |V| matrix, M, that will describe the distances between vertices
For each cell (i, j) in M:
    if i == j:
        M[i][j] = 0
    if (i, j) is an edge in E:
        M[i][j] = weight(i, j)
    else:
        M[i][j] = infinity

for k from 1 to |V|:
    for i from 1 to |V|:
        for j from 1 to |V|:
            if M[i][j] > M[i][k] + M[k][j]:
                M[i][j] = M[i][k] + M[k][j]


Floyd-Warshall	O(|V|^{3})O(∣V∣ )



*/
const FloyWarshall = (graph) => {
    const distance = [];
    const {
        length
    } = graph;
    // Initalize the Distance 
    for (let i = 0; i < length; i++) {
        distance[i] = [];
        for (let j = 0; j < length; j++) {
            if (i === j) {
                distance[i][j] = 0;
            } else if (graph[i][j] > 0) {
                distance[i][j] = graph[i][j];
            } else {
                distance[i][j] = Infinity;
            }

        }

    }

    for (let k = 0; k < length; k++) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (distance[i][k] + distance[k][j] < distance[i][j]) {
                    distance[i][j] = distance[i][k] + distance[k][j];

                }

            }

        }

    }




    return distance;
}



/* var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
];

console.log(FloyWarshall(graph));
 */


module.exports = {
    FloyWarshall
}