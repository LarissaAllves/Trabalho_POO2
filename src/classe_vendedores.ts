// Crie uma classe chamada Vendedores com os atributos nome, salario e valor da
// venda. Crie os getters e setters e as validações. Crie um método desconto para
// calcular 8% do salário.

// Crie uma classe filha chamada Vendedor de Pessoa Física com o atributo região,
// crie o getter e setter com validação para aceitar somente as regiões sul, sudeste,
// centro-oeste, norte e nordeste. Crie um método para calcular a comissão. Se a
// região for sul a comissão será de 10% sobre o valor da venda. Se a região for
// sudeste a comissão será de 12% sobre o valor da venda, se a região for centrooeste a comissão será de 14% sobre o valor da venda, se a região for norte a
// comissão será de 15% sobre o valor da venda, Se a região for nordeste a comissão
// será de 17% sobre o valor da venda. Crie o método para calcular o salário total que
// será o salario mais a comissão.

// Crie uma classe filha chamada Pessoa Jurídica com os atributos nome da empresa,
// total de funcionários, crie os getters, setters e as suas validações. Crie um método
// para calcular a comissão. Se o valor da venda for menor que 5.000,00 o valor da
// comissão será de 2% sobre o valor da venda. Se o valor da venda for maior ou igual
// a 5.000,00 e menor que 10.000,00 o valor da comissão será de 4% sobre o valor da
// venda. Se o valor da venda for maior ou igual a 10.000,00 o valor da comissão será
// de 6% sobre o valor da venda. Crie um método salario Total que será a soma do
// salario mais comissão e mais R$ 200,00 se o número de funcionários for menor que
// 100 ou mais R$ 300,00 se o número de funcionários for maior ou igual a 100

class Vendedores {
  protected _nome: string;
  protected _salario: number;
  protected _valordaVenda: number;

  constructor(nome: string, salario: number, valordaVenda: number) {
    this._nome = nome;
    this._salario = salario;
    this._valordaVenda = valordaVenda;
  }
  get nome(): string {
    return this._nome;
  }
  get salario(): number {
    return this._salario;
  }
  get valordaVenda(): number {
    return this._valordaVenda;
  }

  set nome(nome: string) {
    if (!nome) {
      throw new Error("Nome deve ser definido");
    }
    this._nome = nome;
  }
  set salario(salario: number) {
    if (!salario) {
      throw new Error("Salario deve ser definido");
    }
    this._salario = salario;
  }
  set valordaVenda(valordaVenda: number) {
    if (!valordaVenda) {
      throw new Error("Valor da Venda deve ser definido");
    }
    this._valordaVenda = valordaVenda;
  }

  calcDesc() {
    return this.salario * 0.08;
  }
}

class VendedorPF extends Vendedores {
  static REGIAO = ["Sul", "Sudeste", "Centro-Oeste'", "Norte", "Nordeste"];

  private _regiao: string;

  constructor(
    nome: string,
    salario: number,
    valordaVenda: number,
    regiao: string
  ) {
    super(nome, salario, valordaVenda);
    this._regiao = regiao;
  }
  get regiao(): string {
    return this._regiao;
  }
  set regiao(regiao: string) {
    if (!VendedorPF.REGIAO.includes(regiao)) {
      throw new Error("Digite uma região válida");
    }
    this._regiao = regiao;
  }
  public calComission(): number {
    if (this._regiao === "Sul") {
      return this.valordaVenda * 0.1;
    } else if (this._regiao === "Sudeste") {
      return this.valordaVenda * 0.12;
    } else if (this._regiao === "Centro-Oeste") {
      return this.valordaVenda * 0.14;
    } else if (this._regiao === "Norte") {
      return this.valordaVenda * 0.15;
    } else if (this._regiao === "Nordeste") {
      return this.valordaVenda * 0.17;
    }
    return 0;
  }
  public salarioLiquido() {
    return this.salario + this.calComission();
  }
}

class VendedorPJ extends Vendedores {
  private _nomeEmpresa: string;
  private _quantFuncionario: number;
  constructor(
    nome: string,
    salario: number,
    valordaVenda: number,
    nomeEmpresa: string,
    quantFuncionario: number
  ) {
    super(nome, salario, valordaVenda);
    this._nomeEmpresa = nomeEmpresa;
    this._quantFuncionario = quantFuncionario;
  }
  get nomeEmpresa(): string {
    return this._nomeEmpresa;
  }
  get quantFuncionario(): number {
    return this._quantFuncionario;
  }

  set nomeEmpresa(nomeEmpresa: string) {
    if (!nomeEmpresa) {
      throw new Error("Nome da Empresa deve ser definido");
    }
    this._nomeEmpresa = nomeEmpresa;
  }

  set quantFuncionario(quantFuncionario: number) {
    if (!quantFuncionario) {
      throw new Error("Quantidade de funcionarios deve ser definido");
    }
    this._quantFuncionario = quantFuncionario;
  }
  public calcValor(): number {
    if (this.valordaVenda < 5000) {
      return this.valordaVenda * 0.02;
    } else if (this.valordaVenda >= 5000 && this.valordaVenda < 10000) {
      return this.valordaVenda * 0.04;
    } else if (this.valordaVenda >= 10000) {
      return this.valordaVenda * 0.06;
    }
    return 0;
  }
  public salarioTotal(): number {
    if (this.quantFuncionario < 100) {
      return this.salario + this.calcValor() + 200;
    } else if (this.valordaVenda >= 100) {
      return this.salario + this.calcValor() + 300;
    }
    return 0;
  }
}

const vendedores = new Vendedores("Beatriz", 1000, 500);
console.log(vendedores);
console.log(`Calculo do desconto: ${vendedores.calcDesc()}`);

const vendedorPF = new VendedorPF("Beatriz", 1000, 500, "Sudeste");
console.log(
  `Calculo da comissão da pessoa FISICA: ${vendedorPF.calComission()}`
);
console.log(`Calculo do salario PESSOA FISICA: ${vendedorPF.salarioLiquido()}`);

const vendedorPJ = new VendedorPJ("Bruno", 1500, 400, "abc", 80);
console.log(
  `Calculo do salario total PESSOA JURIDICA: ${vendedorPJ.salarioTotal()}`
);

try {
  vendedores.nome = "TESTE";
  vendedores.salario = 1000;
  vendedores.valordaVenda = 0;
} catch (error) {
  console.log(error.message);
}
