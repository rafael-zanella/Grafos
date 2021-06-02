 const GrafoMA = require('./GrafoMA');

// const novoGrafo = new GrafoMA(8, false);
// novoGrafo.exibirGrafo();
 
// novoGrafo.aresta(2, 3);
// novoGrafo.exibirGrafo();
 
// novoGrafo.aresta(1, 2);
// novoGrafo.exibirGrafo();
// console.log(`Total de vertices: ${novoGrafo.vertices.size}`);
// console.log(`Lista de arestas [${novoGrafo.listaArestas()}]`);
// console.log(`Grau [V${2}] = ${novoGrafo.grau(2)}`);
// console.log(`Existe aresta [${2}, ${1}]? ${novoGrafo.existeAresta(2, 1)}`);
// console.log(`Adjacentes [V${2}] = ${novoGrafo.adjacentes(2)}`);
// console.log(`Grau medio = ${novoGrafo.grauMedio()}`);
// console.log(`Grau minimo = ${novoGrafo.grauMinimo()}`);
// console.log(`Grau maximo = ${novoGrafo.grauMaximo()}`);

// //novoGrafo.removeAresta(3, 3);
// //novoGrafo.exibirGrafo();


const warshallGraph = new GrafoMA(6, true);

warshallGraph.aresta(0, 1);
warshallGraph.aresta(1, 2);
warshallGraph.aresta(2, 3);
warshallGraph.aresta(1, 4);
warshallGraph.aresta(2, 5);

warshallGraph.exibirGrafo();

warshallGraph.warshallAlgorithm();

warshallGraph.exibirGrafo();
