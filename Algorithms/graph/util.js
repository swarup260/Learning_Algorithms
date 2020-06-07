
const Colors = {
    WHITE: 0, //Vertex not visted 
    GREY: 1, //Vertex  visted but not explored
    BLACK: 2 //Vertex  explored Complete
}

const colorInitialize = vertices => {
    const colors = {};
    vertices.forEach(vertex => {
        colors[vertex] = Colors.WHITE;
    });

    return colors;
}


module.exports = {
    colorInitialize,
    Colors
}