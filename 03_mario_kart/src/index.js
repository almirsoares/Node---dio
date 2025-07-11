const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

const player3 = {
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const player4 = {
  NOME: "Bowser",
  VELOCIDADE: 5,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const player5 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const player6 = {
  NOME: "Donkey Kong",
  VELOCIDADE:2,
  MANOBRABILIDADE: 3,
  PODER: 5,
  PONTOS: 0,
};

const player7 = {
  NOME: "Wario",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 3,
  PODER: 4,
  PONTOS: 0,
};

const player8 = {
  NOME: "Toad",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};


const players = [player1, player2, player3, player4, player5, player6, player7, player8];

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.3:
      result = "RETA";
      break;
    case random < 0.6:
      result = "CURVA";
      break;
    case random < 0.85:
      result = "CONFRONTO";
      break;
    default:
      result = "TRECHO CRÍTICO";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 10; round++) {

    round < 10 ? console.log(`🏁 Rodada ${round}`) : console.log(`🏁 Última rodada!?`);

    // sortear bloco
    let block;

    round === 1 ? block = "RETA" : block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTestSkill1 = 1;
    let totalTestSkill2 = 2;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        "manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

      await logRollResult(
        character1.NOME,
        "poder",
        diceResult1,
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        "poder",
        diceResult2,
        character2.PODER
      );

      if (powerResult1 > powerResult2 ) {
        if (character2.PONTOS > 0) {
          console.log(
            `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`
          );
          character2.PONTOS--;
        } else {
          console.log(
            `${character1.NOME} venceu o confronto! ${character2.NOME} não tinha pontos para perder 🐢`
          );
        }
      }

      if (powerResult2 > powerResult1) {
        if(character1.PONTOS > 0) {
          console.log(
            `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`
          );
          character1.PONTOS--;
        } else {
          console.log(
            `${character2.NOME} venceu o confronto! ${character1.NOME} não tinha pontos para perder 🐢`
          );
        }
      }

      console.log(
        powerResult2 === powerResult1 ? "Confronto empatado! Nenhum ponto foi perdido" : ""
      );
    }

    if (block === "TRECHO CRÍTICO") {

      console.log("🚧!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!🚧");
      console.log("🚧                   Trecho crítico!                   🚧");
      console.log(
        `🚧 ${character1.NOME} e ${character2.NOME} enfrentaram um trecho crítico! 🚧`
      );
      console.log("🚧!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!🚧");


      let criticalResult1 = diceResult1 + character1.VELOCIDADE + character1.MANOBRABILIDADE;
      let criticalResult2 = diceResult2 + character2.VELOCIDADE + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "trecho crítico",
        diceResult1,
        character1.VELOCIDADE + character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        "trecho crítico",
        diceResult2,
        character2.VELOCIDADE + character2.MANOBRABILIDADE
      );

      if (criticalResult1 > criticalResult2) {
        console.log(`${character1.NOME} venceu o trecho crítico!`);
        character1.PONTOS += 2;
      } else if (criticalResult2 > criticalResult1) {
        console.log(`${character2.NOME} venceu o trecho crítico!`);
        character2.PONTOS += 2;
      } else {
        console.log("Empate no trecho crítico!");
      }
    }

    // verificando o vencedor
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    } else {
      console.log("Que incrivel!!! A rodada terminou empatada! Nenhum ponto foi marcado");
    }

    // exibe os pontos atuais
    console.log(
      `${character1.NOME}: ${character1.PONTOS} ponto(s) | ${character2.NOME}: ${character2.PONTOS} ponto(s)`
    );
    
    console.log("-----------------------------");

    // verifica se a diferença de pontos é maior que a quantidade de rounds que ainda faltam
    if (round!=10 && Math.abs(character1.PONTOS - character2.PONTOS) > 10 - round) {
      console.log(
        `A diferença de pontos é maior que a quantidade de rodadas restantes. A corrida termina aqui!`
      );
      break;
    }

    // se estiver na última rodade e estiverem a mesma quantidade de pontos, continua a corrida
    if (round === 10 && character1.PONTOS === character2.PONTOS) {
      console.log("A corrida continua, pois ambos os jogadores estão empatados!");
      round--;
    }

  }
}

async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character2.PONTOS > character1.PONTOS)
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
}

function sortearDoisJogadores(lista) {
  const primeiroIndex = Math.floor(Math.random() * lista.length);
  let segundoIndex;

  do {
    segundoIndex = Math.floor(Math.random() * lista.length);
  } while (segundoIndex === primeiroIndex);

  return [lista[primeiroIndex], lista[segundoIndex]];
}

(async function main() {
  console.log("🏎️ Mario Kart! 🏎️\n");

  const [selected1, selected2] = sortearDoisJogadores(players);

  console.log(`🎲 Sorteando jogadores...\n`);
  await new Promise((res) => setTimeout(res, 1000));
  console.log(`🎮 ${selected1.NOME} vs 🕹️ ${selected2.NOME}\n`);

  await playRaceEngine(selected1, selected2);
  await declareWinner(selected1, selected2);
})();
