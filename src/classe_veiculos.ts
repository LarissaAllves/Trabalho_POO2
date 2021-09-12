// Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e
// quantidade de dias.
//Crie os getters e setters. No setters crie validações para não
// aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor
// zero.
//Crie um método passeio para receber a quantidade de dias e o valor da
// locação. O sistema calcule o total que será a multiplicação da quantidade de dias
// pelo valor da locação.

class Veiculos {
  _modelo: string;
  _marca: string;
  _ano: string;
  _valorLocacao: number;
  _quantidade: number;

  constructor(
    modelo: string,
    marca: string,
    ano: string,
    valorLocacao: number,
    quantidade: number
  ) {
    this._modelo = modelo;
    this._marca = marca;
    this._ano = ano;
    this._valorLocacao = valorLocacao;
    this._quantidade = quantidade;
  }
  get modelo(): string {
    return this._modelo;
  }

  get marca(): string {
    return this._marca;
  }
  get ano(): string {
    return this._ano;
  }
  get valorLocacao(): number {
    return this._valorLocacao;
  }
  get quantidade(): number {
    return this._quantidade;
  }
  set modelo(modelo: string) {
    if (!modelo) {
      throw new Error("Modelo não pode ser vazio.");
    }
    this._modelo = modelo;
  }

  set marca(marca: string) {
    if (!marca) {
      throw new Error("Marca não pode ser vazio");
    }
    this._marca = marca;
  }

  set ano(ano: string) {
    if (!ano) {
      throw new Error("Ano não pode ser vazio");
    }
    this._ano = ano;
  }
  set valorLocacao(valorLocacao: number) {
    if (!valorLocacao) {
      throw new Error("Valor não pode ser vazio");
    }
    this._valorLocacao = valorLocacao;
  }
  set quantidade(quantidade: number) {
    if (!quantidade) {
      throw new Error("Quantidade não pode ser vazio");
    }
  }
  passeio() {
    return this._quantidade * this._valorLocacao;
  }
}

const veiculos = new Veiculos("LOGAN", "RENaUlT", "2015", 200, 2);

console.log(veiculos);
console.log(veiculos.passeio());

try {
  veiculos.modelo = "logan";
  veiculos.marca = "renault";
  veiculos.ano = "2015";
  veiculos.valorLocacao = 100;
  veiculos.quantidade = 2;
  console.log(veiculos);
  console.log(veiculos.passeio());
} catch (error) {
  console.log(error.message);
}
