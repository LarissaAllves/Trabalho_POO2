class conversao {
  static min_segundo(min: number) {
    return min * 60;
  }

  static horaMinuto(hora: number) {
    return hora * 60;
  }

  static semanaDia(semana: number) {
    return semana * 7;
  }

  static diaHora(dia: number) {
    return dia * 24;
  }

  static anoMes(ano: number) {
    return ano * 365.25;
  }

  static mesDia(mes: number) {
    return mes * 30;
  }
}

console.log(`${conversao.min_segundo(1)} segundos`);
console.log(`${conversao.horaMinuto(1)} minutos`);
console.log(`${conversao.semanaDia(1)} dias`);
console.log(`${conversao.diaHora(1)} horas`);
console.log(`${conversao.mesDia(1)} dias`);
console.log(`${conversao.anoMes(1)} dias`);
