"use strict";
/* Crie uma classe de Funcionários com os atributos nome, salario hora, dias
trabalhados, total de faltas no ano. Crie os getters e setters.
Crie um método para calcular o salário bruto que será a multiplicação do salario
hora pelos dias trabalhados.
Crie um método para calcular a PLR. Se o numero de faltas for igual a zero a PLR
será igual ao salário bruto. Se o número de faltas for igual a 1 a PLR será 94% do
salário bruto. Se o número de faltas for igual a 2 a PLR será 92% do salário bruto.
Se o número de faltas for igual a 3 a PLR será 90% do salário bruto. se o número de
faltas for igual a 4 a PLR será 88% do salário bruto. Se o número de faltas for maior
ou igual a 5 a PLR será zero.
Crie um método para calcular o desconto que será 5% do salário bruto.
Crie um método para calcular o salário liquido. Salario bruto - desconto + PLR.
Imprima as seguintes mensagens
O funcionário de nome xx tem o salário bruto de 999, teve 99 falta(s) e sua PLR foi
de 999
O funcionário de nome xx tem o salário bruto de 999, o desconto de 999, a PLR de
999 e o salário líquido de 9999 */
var Funcionarios = /** @class */ (function () {
    function Funcionarios(nome, salario, dias_trabalhados, faltas) {
        this._nome = nome;
        this._salario = salario;
        this._dias_trabalhados = dias_trabalhados;
        this._faltas = faltas;
    }
    Object.defineProperty(Funcionarios.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (salario) {
            this._salario = salario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "dias_trabalhados", {
        get: function () {
            return this._dias_trabalhados;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "faltas", {
        get: function () {
            return this._faltas;
        },
        set: function (faltas) {
            this._faltas = faltas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "dias_trabalhador", {
        set: function (dias_trabalhados) {
            this._dias_trabalhados = dias_trabalhados;
        },
        enumerable: false,
        configurable: true
    });
    Funcionarios.prototype.salarioBruto = function () {
        return this.salario * this.dias_trabalhados;
    };
    Funcionarios.prototype.calcPlr = function () {
        if (this.faltas === 0) {
            return this.salarioBruto();
        }
        else if (this.faltas === 1) {
            return this.salarioBruto() * 0.94;
        }
        else if (this.faltas === 2) {
            return this.salarioBruto() * 0.92;
        }
        else if (this.faltas === 3) {
            return this.salarioBruto() * 0.90;
        }
        else if (this.faltas === 4) {
            return this.salarioBruto() * 0.88;
        }
        else {
            return 0;
        }
    };
    Funcionarios.prototype.descSalario = function () {
        return this.salarioBruto() * 0.05;
    };
    Funcionarios.prototype.salarioLiquido = function () {
        return this.salarioBruto() - this.descSalario() + this.calcPlr();
    };
    return Funcionarios;
}());
var funcionarios = new Funcionarios('Gabriel', 80, 30, 2);
console.log("O funcionario de nome " + funcionarios.nome + " tem o salario bruto de  " + funcionarios.salarioBruto() + " e teve " + funcionarios.faltas + " faltas. Sua PLR foi de " + funcionarios.calcPlr());
console.log("O funcionario de nome " + funcionarios.nome + " tem o salario bruto de " + funcionarios.salarioBruto() + " o desconto de " + funcionarios.descSalario() + " a PLR de " + funcionarios.calcPlr() + " e o seu salario l\u00EDquido \u00E9 de " + funcionarios.salarioLiquido() + "  }");
