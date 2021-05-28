class GrafoMA {
  constructor(quantidadeVertices, isDirecionado) {
    this.quantidadeVertices = quantidadeVertices;
    this.isDirecionado = isDirecionado;
 
    this.grafo = []
    this.grafo.length = quantidadeVertices;
    for(let i = 0; i < quantidadeVertices; i++) {
      this.grafo[i] = [];
      this.grafo[i].length = quantidadeVertices;
      this.grafo[i].fill(0);
    }
 
    this.vertices = new Set();
  }
 
  grauMedio() {
    let numeroGraus = 0;
    for(let i = 0; i < this.vertices.size; i++) {
      numeroGraus += this.grau([...this.vertices.keys()][i])
    }
    return numeroGraus / this.vertices.size;
  }
 
  adjacentes(vertice) {
    const set = new Set();
    // verificar linha
    this.grafo[vertice].map((x, indice) => {
      if(x === 1) set.add(indice);
    })
    // verificar coluna
    this.grafo.forEach((arr, indice) => {
      if(arr[vertice] === 1) set.add(indice)
    })
    return [...set];
  }
 
  existeAresta(vertice1, vertice2) {
    return !!this.grafo[vertice1][vertice2];
  }
 
  grau(vertice) {
    return this.adjacentes(vertice).length;
  }
 
  listaArestas() {
    let listaDeArestas = new Array();
    for(let i = 0; i < this.quantidadeVertices; i ++) {
      for(let j = 0; j < this.quantidadeVertices; j ++) {
        if(this.grafo[i][j] === 1) {
          listaDeArestas.push(`[${i}, ${j}]`);
        }
      }
    }
    return listaDeArestas;
  }
 
  aresta(vertice1, vertice2) {
    this.grafo[vertice1][vertice2] = 1;
    
    if (!this.isDirecionado) this.grafo[vertice2][vertice1] = 1;

    this.vertices.add(vertice1);
    this.vertices.add(vertice2);
  }
 
  removeAresta(vertice1, vertice2) {
    if (this.existeAresta(vertice1, vertice2)) {
      this.grafo[vertice1][vertice2] = 0;
      this.grafo[vertice2][vertice1] = 0;
    } else {
      console.log('O grafo não possui a aresta informada');
    }
  }

  exibirGrafo() {
    console.log('\n\n');
    for(let i = 0; i < this.grafo.length; i++) {
      let linha = '';
      for(let j = 0; j < this.grafo.length; j++) {
        linha = linha + ' ' + this.grafo[i][j];
      }
      console.log(linha);
    }
    console.log('\n\n');
  }

  grauMinimo() {
    let menorGrau = Infinity;
    for(let i = 0; i < this.vertices.size; i++) {
      const grauAtual = this.grau([...this.vertices.keys()][i]);
      if (grauAtual < menorGrau) menorGrau = grauAtual;
    }

    return menorGrau === Infinity ? null : menorGrau;
  }

  grauMaximo() {
    let maiorGrau = 0;
    for(let i = 0; i < this.vertices.size; i++) {
      const grauAtual = this.grau([...this.vertices.keys()][i]);
      if (grauAtual > maiorGrau) maiorGrau = grauAtual;
    }

    return maiorGrau;
  }
}
 

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

