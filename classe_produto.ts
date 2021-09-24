class Produtos {
  _produto: string;
  _preco: number;
  _quantidade: number;

  constructor(produto: string, preco: number, quantidade: number) {
    this._produto = produto;
    this._preco = preco;
    this._quantidade = quantidade;
  }

  get produto(): string {
    return this._produto;
  }

  get preco(): number {
    return this._preco;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  set produto(produto: string) {
    if (!produto) {
      throw new Error("Produto não pode ser vazio");
    }
    this._produto = produto;
  }

  set preco(preco: number) {
    if (!preco || preco === 0) {
      throw new Error("Preço não pode ser vazio ou 0");
    }
    this._preco = preco;
  }

  set quantidade(quantidade: number) {
    if (!quantidade || quantidade === 0) {
      throw new Error("Quantidade não pode ser vazio ou 0");
    }
    this._quantidade = quantidade;
  }

  desconto() {
    if (this.quantidade <= 10) {
      return 0;
    } else if (this.quantidade > 10 || this.quantidade <= 20) {
      return this.preco * 0.1;
    }
    if (this.quantidade > 21 || this.quantidade <= 50) {
      return this.preco * 0.2;
    }
    if (this.quantidade > 50) {
      return this.preco * 0.25;
    }
  }
  valorFinal() {
    return this.quantidade * this.preco - this.desconto();
  }
}

const produtos = new Produtos("Camisa", 2800, 11);
console.log(
  `O produto ${produtos.produto} de preço ${
    produtos.preco
  }, quantidade comprada de ${
    produtos.quantidade
  }, teve o desconto de ${produtos.desconto()}  e o valor pago foi ${produtos.valorFinal()}}`
);

//try {

// produtos.produto = "";
//produtos.quantidade = 0;
//produtos.preco = 0;
//} catch (error) {
//console.log(error.message);
//}
