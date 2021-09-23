"use strict";
var conversao = /** @class */ (function () {
    function conversao() {
    }
    conversao.min_segundo = function (min) {
        return min * 60;
    };
    conversao.horaMinuto = function (hora) {
        return hora * 60;
    };
    conversao.semanaDia = function (semana) {
        return semana * 7;
    };
    conversao.diaHora = function (dia) {
        return dia * 24;
    };
    conversao.anoMes = function (ano) {
        return ano * 365.25;
    };
    conversao.mesDia = function (mes) {
        return mes * 30;
    };
    return conversao;
}());
console.log(conversao.min_segundo(1) + " segundos");
console.log(conversao.horaMinuto(1) + " minutos");
console.log(conversao.semanaDia(1) + " dias");
console.log(conversao.diaHora(1) + " horas");
console.log(conversao.mesDia(1) + " dias");
console.log(conversao.anoMes(1) + " dias");
