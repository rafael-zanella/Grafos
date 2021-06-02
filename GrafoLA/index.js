const Vertice = require('./Vertice');
const Aresta = require('./Aresta');

class GrafoLA {

  constructor() {
    this.grafo = new Set();
  }

  adicionarVertice(vertice) {
    this.grafo.add(vertice);
  }

  adicionarAresta(aresta) {
    // TODO
  }

}

module.exports = GrafoLA;