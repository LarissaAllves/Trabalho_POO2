// Crie uma classe Pessoa com os atributos nome, sexo e idade. Crie os getters e
// setters. No setters valide se o nome for em branco retorne uma mensagem de nome
// inválido.
//Se o sexo for diferente de Masculino ou Feminino retorne uma mensagem
// inválida.
//Se a idade for 0 retorne uma mensagem de idade inválida.
//Crie um método
// para receber a idade, se a idade for maior ou igual a 18 exibir a mensagem pessoa
// maior de idade, caso contrário exibir a mensagem pessoa menor de idade.

class Pessoa {
  private _nome: string;
  private _sexo: string;
  private _idade: number;
  static DEFINE_SEXO = ["Feminino", "Masculino"];

  constructor(nome: string, idade: number, sexo: string) {
    this._nome = nome;
    this._sexo = sexo;
    this._idade = idade;
  }

  get idade(): number {
    return this._idade;
  }
  get sexo(): string {
    return this._sexo;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    if (!nome) {
      throw new Error("Nome Invalido");
    }
    this._nome = nome;
  }

  set idade(idade: number) {
    if (idade === 0) {
      throw new Error("Idade invalido");
    }
    this._idade = idade;
  }

  set sexo(sexo: string) {
    if (!Pessoa.DEFINE_SEXO.includes(sexo)) {
      throw new Error("Sexo Invalido");
    }
    this._sexo = sexo;
  }

  static CheckIdade(idade: number) {
    if (idade >= 18) {
      console.log("Maior de Idade");
    } else {
      console.log("Menor de Idade");
    }
  }
}

const pessoa = new Pessoa("Larissa", 23, "feminino");
console.log(pessoa);
console.log(pessoa.nome, pessoa.idade, pessoa.sexo);

try {
  pessoa.nome = "Larissa";
  pessoa.sexo = "Feminino";
  pessoa.idade = 17;
  Pessoa.CheckIdade(pessoa.idade);
} catch (error) {
  console.log(error.message);
}
