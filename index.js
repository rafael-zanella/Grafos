 const GrafoMA = require('./GrafoMA');

/* 
// TESTE DO GRAFO DE MATRIZ ADJACENTE 
const novoGrafo = new GrafoMA(8, false);
novoGrafo.exibirGrafo();
 
novoGrafo.aresta(2, 3);
novoGrafo.exibirGrafo();
 
novoGrafo.aresta(1, 2);
novoGrafo.exibirGrafo();
console.log(`Total de vertices: ${novoGrafo.vertices.size}`);
console.log(`Lista de arestas [${novoGrafo.listaArestas()}]`);
console.log(`Grau [V${2}] = ${novoGrafo.grau(2)}`);
console.log(`Existe aresta [${2}, ${1}]? ${novoGrafo.existeAresta(2, 1)}`);
console.log(`Adjacentes [V${2}] = ${novoGrafo.adjacentes(2)}`);
console.log(`Grau medio = ${novoGrafo.grauMedio()}`);
console.log(`Grau minimo = ${novoGrafo.grauMinimo()}`);
console.log(`Grau maximo = ${novoGrafo.grauMaximo()}`);

//novoGrafo.removeAresta(3, 3);
//novoGrafo.exibirGrafo();
*/

/*
// TESTE DO ALGORITMO WARSHALL
const graph = new GrafoMA(6, true);

graph.aresta(0, 1);
graph.aresta(1, 2);
graph.aresta(2, 3);
graph.aresta(1, 4);
graph.aresta(2, 5);

graph.exibirGrafo();
graph.warshallAlgorithm();
graph.exibirMatrixAcessibilidade();
*/

/*
// TESTE DO ALGORITMO DE DIJKSTRA
const graph = new GrafoMA(6, true);

graph.aresta(0, 1, 3);
graph.aresta(0, 2, 1);
graph.aresta(2, 1, 4);
graph.aresta(2, 3, 4);
graph.aresta(1, 3, 2);
graph.aresta(1, 4, 1);
graph.aresta(3, 4, 3);
graph.aresta(3, 5, 2);
graph.aresta(4, 5, 1);

graph.exibirGrafo();
graph.dijkstraFind(2)
*/

// TESTE ALGORITMO DE FLOYD WARSHALL
const graph = new GrafoMA(5, true, "floyd-warshall");

graph.aresta(1, 2, 8);
graph.aresta(1, 4, 1);
graph.aresta(2, 3, 1);
graph.aresta(3, 1, 4);
graph.aresta(4, 2, 2);
graph.aresta(4, 3, 9);

graph.floydWarshallAlgorithm();
