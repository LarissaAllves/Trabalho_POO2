// Crie uma classe Fatura com os atributos números, descrição, quantidade
// Comprada e preço. Crie um método valor da Fatura para multiplicar a quantidade
// comprada pelo preço

class Fatura {
  private _numeros: string;
  private _descricao: string;
  private _quantidadeComprada: number;
  private _preco: number;

  constructor(
    numeros: string,
    descricao: string,
    quantidadeComprada: number,
    preco: number
  ) {
    this._numeros = numeros;
    this._descricao = descricao;
    this._quantidadeComprada = quantidadeComprada;
    this._preco = preco;
  }
  get numeros(): string {
    return this._numeros;
  }
  get descricao(): string {
    return this._descricao;
  }
  get quantidadeComprada(): number {
    return this.quantidadeComprada;
  }

  get preco(): number {
    return this.preco;
  }

  set numeros(numeros: string) {
    this._numeros = numeros;
  }

  set descricao(descricao: string) {
    this._descricao = descricao;
  }
  set quantidadeComprada(quantidadeComprada: number) {
    this._quantidadeComprada = quantidadeComprada;
  }
  set preco(preco: number) {
    this.preco = preco;
  }
  calculoFatura() {
    return this._quantidadeComprada * this._preco;
  }
}

const fatura = new Fatura("10", "blusa", 2, 40);
console.log(fatura);

console.log(fatura.calculoFatura());
