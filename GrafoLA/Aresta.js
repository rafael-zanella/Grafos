class Aresta {
  constructor(vertice1, vertice2) {
    this.aresta = [vertice1, vertice2];
  }

  get vertices() {
    return this.aresta;
  }
}

module.exports = Aresta;