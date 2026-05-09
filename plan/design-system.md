# Design System do Projeto Portfolio

## 1. Introdução

Este é um site institucional para a Santorini Autocenter, negócio de mecanica de autos localizado em Leiria-Portugal.

## 2. Fundação

- Pleta de cores:
  --text: #ffffff;
  --background: #181c1c;
  --cianEletrico: #01f5d1;
  --backgroundDestaque: #000000;
  --verdePetronas: #00a19b;
  --primaryGradient: linear-gradient(to right, #01f5d1 100%, #00a19b 100%);
  --secondaryGradient: linear-gradient(to left, #00a19b 80%, #01f5d1 80%);

- Tipografia para o css:
  --font-title: "Space Grotesk", sans-serif;
  --font-text: "Inter", sans-serif;

- Espaçamento
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;

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
-Todos os botões vão: - Terão fonte negrito - Seguirão espaçamento definido na fundação - Variações: - Primário: Seguirão a paleta a risca uyilizando os gradients especificados. - Secundário: terá o fundo branco e texto na cor do brackground - CTA: deve ter um linear gradient usando o descrito na fundação.

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
- Gerar um arquivo css para cada sessão, o arquivo deve conter como titulo o nome da sessão criada.
- o Site defe funcionar bem em dispositivos digitais então otimize cada parte de código gerada para que seja responsivo e adaptativo quando necessário.
- não invente nada, utilizes todos os conteúdos que ja estão no design do figma.
