function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;

    let nivel;

    switch (true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias >= 10 && vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias > 20 && vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias > 50 && vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias > 80 && vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias > 90 && vitorias <= 100:
            nivel = "Lendário";
            break;
        case vitorias >= 101:
            nivel = "Imortal";
            break;
        default:
            nivel = "Nível não determinado";
    }

    return "O Herói tem um saldo de " + saldoVitorias + " está no nível de " + nivel;
}

let resultado = calcularNivel(35, 10);
console.log(resultado);