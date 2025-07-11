# 🏎️ Desafio de Projeto do Felipão: Mario Kart.JS

<table>
  <tr>
    <td>
      <img src="./docs/header.gif" alt="Mario Kart" width="200">
    </td>
    <td>
      <b>Objetivo:</b>
      <p>
        Mario Kart.JS é um desafio de lógica inspirado na famosa série de jogos da Nintendo. 
        O objetivo é simular corridas entre personagens clássicos, utilizando atributos como 
        <strong>Velocidade</strong>, <strong>Manobrabilidade</strong> e <strong>Poder</strong>, 
        em pistas aleatórias com eventos distintos.
      </p>
    </td>
  </tr>
</table>

## 🧑‍🚀 Jogadores disponíveis

<table style="border-collapse: collapse; width: 100%; text-align: center;">
  <tr>
    <td><strong>Mario</strong><br><img src="./docs/mario.gif" width="60"/><br>Vel: 4<br>Man: 3<br>Pod: 3</td>
    <td><strong>Peach</strong><br><img src="./docs/peach.gif" width="60"/><br>Vel: 3<br>Man: 4<br>Pod: 2</td>
    <td><strong>Yoshi</strong><br><img src="./docs/yoshi.gif" width="60"/><br>Vel: 2<br>Man: 4<br>Pod: 3</td>
    <td><strong>Bowser</strong><br><img src="./docs/bowser.gif" width="60"/><br>Vel: 5<br>Man: 2<br>Pod: 5</td>
  </tr>
  <tr>
    <td><strong>Luigi</strong><br><img src="./docs/luigi.gif" width="60"/><br>Vel: 3<br>Man: 4<br>Pod: 4</td>
    <td><strong>Donkey Kong</strong><br><img src="./docs/dk.gif" width="60"/><br>Vel: 2<br>Man: 3<br>Pod: 5</td>
    <td><strong>Wario</strong><br>🎮<br>Vel: 3<br>Man: 3<br>Pod: 4</td>
    <td><strong>Toad</strong><br>🎮<br>Vel: 3<br>Man: 4<br>Pod: 2</td>
  </tr>
</table>

## 🧩 Regras & Mecânicas

### 🎯 Objetivo
Dois personagens são sorteadas aleatoriamente para disputar uma corrida com até **10 rodadas**. Em cada rodada, ocorre um tipo de bloco de pista aleatório, e os jogadores somam um dado de 6 lados com seus atributos para competir por pontos.

### 📍 Tipos de Bloco de Pista

- **RETA** 🛣️  
  Usa o atributo **VELOCIDADE** + dado. Quem vencer, ganha **1 ponto**.

- **CURVA** 🌀  
  Usa o atributo **MANOBRABILIDADE** + dado. Quem vencer, ganha **1 ponto**.

- **CONFRONTO** 🥊  
  Usa o atributo **PODER** + dado. Quem perder, **perde 1 ponto** (mínimo 0).  
  Empates não alteram os pontos.

- **TRECHO CRÍTICO** 🚧  
  Usa **VELOCIDADE + MANOBRABILIDADE** + dado.  
  Quem vencer, ganha **2 pontos**. Empates não pontuam.

### 🧮 Outras Regras

- Nenhum jogador pode ter pontuação negativa.
- Caso a diferença de pontos se torne maior que o número de rodadas restantes, a corrida é encerrada antecipadamente.
- Se ao final das 10 rodadas houver empate, rodadas extras são realizadas até haver um vencedor.

## 🏁 Condição de Vitória

✅ Vence quem acumular mais pontos ao final da corrida.

---

## 🎲 Execução

- Os personagens são sorteados automaticamente.
- A corrida se inicia com narração no terminal.
- Pontuações são exibidas a cada rodada.

### Exemplo de comando:

```bash
node index.js
