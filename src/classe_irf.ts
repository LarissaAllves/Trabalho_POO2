// Crie uma classe para calcular o imposto de renda. Crie uma classe Pai com os
// atributos nome e renda anual. Crie os getters e setters com as suas validações. Crie
// uma classe filha Pessoa Física para herdar da classe Pai e com o atributo gastos
// com saúde, crie os getter e setter com a validação.
//Crie uma classe filha Pessoa
// Jurídica para herdar da classe Pai e com o atributo número de funcionários. Crie o
// getter e o setter com a validação.
// Regras para os cálculos
// Pessoa Física: Pessoas cuja renda foi abaixo de 20.000,00 pagam 15% de imposto.
// Pessoas com renda maior ou igual a 20.000,00 pagam imposto de 25%. Se a
// pessoa teve gastos com saúde, 50% destes gastos são abatidos no imposto.
// Exemplo: Se uma pessoa cuja renda foi de 50.000,00 e teve 2.000,00 em gastos
// com saúde, o imposto fica: (50.000,00 * 25%) - (2000 * 50%) = 11.500,00
// Pessoa Jurídica: Pessoas jurídicas pagam 16% de imposto, porém, se a empresa
// possuir mais de 10 funcionários, ela paga 14% de imposto. Exemplo: Uma empresa
// Trabalho de POO II 2
// cuja renda foi de 400.000,00 e possui 25 funcionários, o imposto fica: 400.000,00 *
// 14% = 56.000,00

class Irf {
  private _nome: string;
  private _rendaAnual: number;

  constructor(nome: string, rendaAnual: number) {
    this._nome = nome;
    this._rendaAnual = rendaAnual;
  }

  get nome(): string {
    return this._nome;
  }
  get rendaAnual(): number {
    return this._rendaAnual;
  }

  set nome(nome: string) {
    if (!nome) {
      throw new Error("NOme não pode ser vazio");
    }
    this._nome = nome;
  }

  set rendaAnual(rendaAnual: number) {
    if (!rendaAnual) {
      throw new Error("Renda anual deve ser informada");
    }
    this._rendaAnual = rendaAnual;
  }
}
class PessoaFisica extends Irf {
  private _gastosSaude: number;

  constructor(nome: string, rendaAnual: number, gastosSaude: number) {
    super(nome, rendaAnual);
    this._gastosSaude = gastosSaude;
  }
  get gastosSaude(): number {
    return this._gastosSaude;
  }

  set gastosSaude(gastosSaude: number) {
    if (!gastosSaude) {
      throw new Error("Valor deve ser informado");
    }
    this._gastosSaude = gastosSaude;
  }

  irfPF() {
    if (this.rendaAnual < 20000 && this?.gastosSaude) {
      return (this.rendaAnual * 0.15 - this.gastosSaude * 0.5).toFixed(2);
    } else if (this.rendaAnual >= 20000 && this?.gastosSaude) {
      return (this.rendaAnual * 0.25 - this.gastosSaude * 0.5).toFixed(2);
    }
  }
}
class PessoaJuridica extends Irf {
  private _numerodeFunc: number;
  constructor(nome: string, rendaAnual: number, numerodeFunc: number) {
    super(nome, rendaAnual);
    this._numerodeFunc = numerodeFunc;
  }
  get numerodeFunc(): number {
    return this._numerodeFunc;
  }

  set numerodeFunc(numerodeFunc: number) {
    if (!numerodeFunc) {
      throw new Error("Numero de funcionarios deve ser informado");
    }
    this._numerodeFunc = numerodeFunc;
  }
  irfPJ() {
    if (this.numerodeFunc >= 10) {
      return this.rendaAnual * 0.14;
    } else {
      return this.rendaAnual * 0.16;
    }
  }
}

const pf = new PessoaFisica("Fatima", 10000, 2000);
console.log(`Calculo imposto de renda pessoa física ${pf.irfPF()}`);

const pj = new PessoaJuridica("abc", 400000, 5);
console.log(
  `Calculo imposto de renda pessoa juridica ${pj.irfPJ().toFixed(2)}`
);

try {
  pf.nome = "Larissa";
  pf.rendaAnual = 1000;
  pf.gastosSaude = 200;
  pj.nome = "HGS";
  pj.numerodeFunc = 10;
  pj.rendaAnual = 4500;
} catch (err) {
  console.log(err.message);
}
