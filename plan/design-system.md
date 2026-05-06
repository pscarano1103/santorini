# Design System do Projeto Portfolio

## 1. Introdução

Este é um site institucional para a Santorini Autocenter, negócio de mecanica de autos localizado em Leiria-Portugal.

## 2. Fundação

- Pleta de cores:
  --text: #ffffff;
  --background: #181C1C;
  --cianEletrico: #01f5d1;
  --backgroundDestaque: #000000
  --verdePetronas: #00a19b;

- Tipografia para o css:
  @import url('https://fonts.googleapis.com/css?family=Akira%20Super:700|Creato%20Display:400');

  body {
  font-family: 'Creato Display';
  font-weight: 400;
  }

  h1, h2, h3, h4, h5 {
  font-family: 'Akira Super';
  font-weight: 700;
  }

  html {font-size: 100%;} /_ 16px _/

  h1 {font-size: 3.053rem; /_ 48.8px _/}

  h2 {font-size: 2.442rem; /_ 39.04px _/}

  h3 {font-size: 1.954rem; /_ 31.2px _/}

  h4 {font-size: 1.563rem; /_ 24.96px _/}

  h5 {font-size: 1.250rem; /_ 20px _/}

  small {font-size: 0.800rem; /_ 12.8px _/}

- Espaçamento
  -Grande (8px ou 16px);

## 3. Componentes

-Menu:

- O menu deve ficar fixo no topo do site
- imagem de log alinhado à esquerda
- itens do menu ao centro
- botão de CTA alinhado à direita
- Os itens do menu serão:
  -Home
  -Serviços
  -Sobre
  -siga os espaçamentos definidos na fundação

-Botões:
-Todos os botões vão: - Terão arredondamento de 4px - Terão fonte negrito - Seguirão espaçamento definido na fundação - Variações: - Primário: Seguirão a paleta a risca. - Secundário: Terá o valor invertido do fundo/texto - CTA: deve ter um linear gradient usando as cores da paleta descritas como primary e accent

- Campo de Texto (input):
  -Todos os inputs vão:
  - Terão arredondamento de 4px
  - Seguirão espaçamento definido na fundação

- Crrousel de marcas:
  -Deve ser um carrossel que vai ficar em constante movimento
  -vai conter todas as logos de marcas automotivas atuais
  -deve ficar abaixo da sessão hero

- Cards de serviços (no máximo 4):
  -todos os cards devem ter:
  -imagem de fundo coerente com a categoria
  -Título
  -breve descrição (máximo duas linhas)
  -Botão de saiba mais

## 4. Guia de uso

- No CSS sempre usar variáveis para cores e elementos da fundação ao invés de espalhar pelo código.
