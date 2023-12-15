/*Dijkstra's Algorithm

Sources:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
    https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
    https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/
    https://www.programiz.com/dsa/dijkstra-algorithm
*/
function dijkstra(graph, sourceNode){
    var dist = [];
    var visited = [];
    var infinity = Math.pow(10, 1000);
    var current = nodeValue(sourceNode);
    for(i = 0; i < graph.length; i++){
        dist[i] = infinity;
        visited[i] = false;
    }
    dist[current] = 0
    while(visited.includes(false)){
        visited[current] = true;
        for(j = 0; j < graph.length; j++){
            if(graph[current][j] != 0 && dist[current] + graph[current][j] < dist[j])
                dist[j] = dist[current] + graph[current][j];
            }
            current++;
    }   
    return dist;
}
graph();
function graph(){
    var adjList = [];
    var nodes=['A','B','C'];
    for (var i = 0; i < nodes.length; i++)
        adjList.push([]);
    addEdge(adjList, 0, 'B', 3);
    addEdge(adjList, 1, 'C', 4);
    addEdge(adjList, 2, 'A', 1);
    var matrix = convertToAdjMatrix(adjList);
    test(matrix, nodes);
    nodes.push('D');
    for (var i = adjList.length; i < nodes.length; i++)
        adjList.push([]);
    addEdge(adjList, 0, 'C', 5);
    addEdge(adjList, 1, 'D', 8);
    var matrix = convertToAdjMatrix(adjList);
    test(matrix, nodes);
    nodes.push('E');
    for (var i = adjList.length; i < nodes.length; i++)
        adjList.push([]);
    addEdge(adjList, 0, 'D', 1);
    addEdge(adjList, 0, 'E', 11);
    addEdge(adjList, 1, 'E', 7);
    addEdge(adjList, 2, 'B', 9);
    addEdge(adjList, 2, 'E', 4);
    addEdge(adjList, 3, 'A', 3);
    addEdge(adjList, 4, 'D', 1);
    var matrix = convertToAdjMatrix(adjList);
    test(matrix, nodes);
    nodes.push('F');
    for (var i = adjList.length; i < nodes.length; i++)
        adjList.push([]);
    addEdge(adjList, 1, 'A', 3);
    addEdge(adjList, 2, 'F', 9);
    addEdge(adjList, 3, 'D', 2);
    addEdge(adjList, 3, 'E', 13);
    addEdge(adjList, 4, 'F', 4);
    addEdge(adjList, 5, 'A', 12);
    addEdge(adjList, 5, 'B', 1);
    addEdge(adjList, 5, 'C', 6);
    addEdge(adjList, 5, 'D', 11);
    addEdge(adjList, 5, 'E', 8);
    var matrix = convertToAdjMatrix(adjList);
    test(matrix, nodes);
}

function addEdge(adjList,node1,node2,weight){
    var arr = [node2, weight];
    adjList[node1].push(arr);
}

function nodeValue(node){
    var val=0;
    if(node == 'A')
        val = 0;
    else if(node == 'B')
        val = 1;
    else if(node == 'C')
        val = 2;
    else if(node == 'D')
        val = 3;
    else if(node == 'E')
        val = 4;
    else if(node == 'F')
        val = 5;
    else if(node == 'G')
        val = 6;
    else if(node == 'H')
        val = 7;
    else return node;
    return val;
}

function convertToAdjMatrix(adjList){
    var adjMatrix = Array(adjList.length);
    for (var i = 0; i < adjList.length; i++)
        adjMatrix[i] = Array(adjList.length).fill(0);
    for(var i=0;i<adjList.length;i++){
        for(var j = 0; j<adjList.length;j++){
            if(adjList[i][j] != null){
                var val = nodeValue(adjList[i][j][0]);
                adjMatrix[i][val] = adjList[i][j][1];
            }
        }
    }
    return adjMatrix;
}

function test(adjMatrix, nodes){
    var start = 'A';
    var result = dijkstra(adjMatrix, start);
    console.log("Shortest paths: ");
    for(i = 0; i < adjMatrix.length; i++){
        console.log(start + " to " + nodes[i] + " = " + result[i]);
    }
}
