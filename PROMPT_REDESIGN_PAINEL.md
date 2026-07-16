# PROMPT PARA CLAUDE CODE — REDESIGN COMPLETO DO PAINEL
# Cole este prompt inteiro no Claude Code (VS Code)
# Modelo recomendado: Claude Opus 4.8 ou Claude Fable

---

```
INSTRUÇÃO DE EXECUÇÃO: Execute TODOS os passos abaixo em sequência sem pedir confirmações intermediárias. Leia cada arquivo antes de modificá-lo. Reporte apenas ao final com lista completa de arquivos alterados.

PROJETO: Inglês para Brasileiros — Redesign Completo do Painel
PASTA RAIZ: C:\Users\Samukk99\Documents\Claude Code Projetos\Americano_01
PASTA OUTPUT: C:\Users\Samukk99\Documents\Claude Code Projetos\Americano_01\output\

---

## CONTEXTO DO PROJETO

Este é um painel de aprendizado de inglês com 27 sistemas de estudo (S1–S27) organizados em HTML estático. O problema atual: um novo usuário que entra no painel não sabe por onde começar, as seções são confusas, e a navegação entre sistemas é inconsistente.

OBJETIVO: Qualquer pessoa — incluindo alguém que nunca usou o painel — deve entrar, entender imediatamente o que é, escolher um ponto de entrada adequado ao seu nível, e navegar com confiança entre os sistemas.

REGRA ABSOLUTA: Não apagar nenhum conteúdo existente (vocabulário, frases, diálogos, flashcards, exercícios). Redesenhar a estrutura e navegação, não o conteúdo de aprendizado.

---

## PASSO 1 — LEITURA E MAPEAMENTO (não modifica nada ainda)

Leia os seguintes arquivos na íntegra:
1. output/index.html (painel principal — 1335 linhas)
2. output/jornada/index.html (jornada de 120 etapas)
3. output/sistema15/index.html (hub de um sistema de conteúdo)
4. output/sistema22/index.html (hub com 3 sub-páginas)
5. output/sistema17/index.html (hub de Super Sentences)
6. output/sistema27/index.html (hub mais recente — Shadowing)

Após ler, mapeie internamente:
- Quais sistemas existem e suas seções atuais
- Quais elementos CSS são compartilhados vs únicos por arquivo
- Quais links de navegação existem (back, breadcrumb, nav)

---

## PASSO 2 — REDESIGN DO PAINEL PRINCIPAL (output/index.html)

Reescreva output/index.html COMPLETAMENTE do zero. Mantenha o design dark (#080c14), as fontes Space Grotesk + Inter, e todos os links existentes para os sistemas. O novo arquivo deve ter esta estrutura:

### 2.1 — VARIÁVEIS CSS (manter todas as existentes, adicionar novas)
Adicionar às variáveis existentes:
```css
--level-init: #10B981;    /* verde — nível iniciante */
--level-inter: #0EA5E9;   /* azul — intermediário */
--level-conv: #F5C518;    /* âmbar — conversação */
--level-adv: #A78BFA;     /* violeta — avançado */
```

### 2.2 — BARRA DE NAVEGAÇÃO FIXA (topo)
Navbar fixa com height 52px, fundo rgba(8,12,20,.94), backdrop-filter blur(14px).
Conteúdo da navbar:
- Esquerda: logo "🇺🇸 Inglês para Brasileiros" (link para index.html)
- Centro (desktop): 4 âncoras internas: #comecar | #sistemas | #jornada | #progresso
  Labels: "Onde Começar" | "Todos os Sistemas" | "Jornada" | "Progresso"
  (Âncoras internas, não links externos)
- Direita: badge "27 Sistemas" (contador estático)

Mobile: navbar mostra apenas logo + ícone menu hambúrguer que abre drawer lateral com os mesmos 4 links.

### 2.3 — HERO / BOAS-VINDAS
Logo/badge discreto no topo: "INGLÊS PARA BRASILEIROS"

Título principal (grande, bold):
"Aprenda inglês do jeito certo."

Subtítulo (menor, cor --tm):
"27 sistemas de estudo organizados por nível e objetivo. Escolha seu ponto de entrada e comece agora."

3 STAT CARDS horizontais (responsivos):
- "27" / "Sistemas de Estudo"
- "500+" / "Expressões & Vocabulário"
- "12" / "Tópicos do Dia a Dia"

### 2.4 — SEÇÃO "POR ONDE COMEÇAR?" (id="comecar")
Título da seção: "Por onde começar?"
Subtítulo pequeno: "Escolha seu nível atual:"

3 CARDS DE NÍVEL (grid 3 colunas, responsivo 1 coluna no mobile):

CARD 1 — INICIANTE (cor --level-init, verde)
- Badge: "🟢 Iniciante"
- Ícone: 🌱
- Título: "Estou começando do zero"
- Texto: "Comece pela base: pronúncia, gramática essencial e vocabulário do dia a dia."
- Lista de 3 sistemas recomendados:
  · Sistema 11 — Como Aprender Inglês
  · Sistema 1 — Base Completa
  · Sistema 23 — Inglês do Zero
- Botão primário: "Começar pelo S11 →" (link para ./sistema11/index.html)

CARD 2 — INTERMEDIÁRIO (cor --level-inter, azul)
- Badge: "🔵 Intermediário"
- Ícone: 📈
- Título: "Já sei o básico, quero evoluir"
- Texto: "Expanda seu vocabulário, aprenda expressões reais e comece a construir frases longas."
- Lista de 3 sistemas recomendados:
  · Sistema 15 — Expressões Idiomáticas
  · Sistema 17 — Super Sentences
  · Sistema 22 — Situações Reais
- Botão primário: "Começar pelo S15 →" (link para ./sistema15/index.html)

CARD 3 — CONVERSAÇÃO (cor --level-conv, âmbar)
- Badge: "🟡 Quero Conversar"
- Ícone: 💬
- Título: "Quero falar com confiança"
- Texto: "Diálogos reais, shadowing e prática de fala para ganhar fluência rapidamente."
- Lista de 3 sistemas recomendados:
  · Sistema 26 — Diálogos do Dia a Dia
  · Sistema 18 — How Was Your Day?
  · Sistema 27 — Shadowing com Propósito
- Botão primário: "Começar pelo S26 →" (link para ./sistema26/index.html)

Abaixo dos 3 cards, linha separadora + texto centralizado:
"Prefere seguir uma trilha estruturada?" + botão outline "Ver a Jornada Completa →" (link para ./jornada/index.html)

### 2.5 — BANNER "JORNADA COMPLETA" (id="jornada")
Card largo com gradiente sutil (cyan → âmbar → violeta), borda luminosa:
- Ícone grande: 🗺️
- Título: "Jornada Completa — Do Zero ao Avançado"
- Texto: "120 etapas organizadas em sequência lógica. Siga a trilha e nunca fique sem saber o que estudar a seguir."
- Dois stats: "120 etapas" | "Progresso salvo automaticamente"
- Botão CTA grande: "Acessar a Jornada →" (link para ./jornada/index.html)

### 2.6 — SEÇÃO "TODOS OS SISTEMAS" (id="sistemas")
Título: "Todos os Sistemas"
Subtítulo: "Clique em qualquer card para acessar o sistema. Use os filtros para encontrar o que procura."

FILTROS (linha de chips clicáveis com JavaScript):
Chips: [Todos] [🌱 Iniciante] [📈 Intermediário] [💬 Conversação] [🔥 Fluência] [📚 Gramática]
(Cada chip filtra os cards por data-level attribute)

GRID DE CARDS (2 colunas desktop, 1 coluna mobile):
Reorganizar os 27 sistemas em 5 grupos com título de grupo acima:

---
GRUPO A — "🌱 Para Começar" (data-group="comecar")
Cards:
- S11 (data-level="iniciante") — Como Aprender Inglês 📚 — "O método que vai guiar todo o seu aprendizado" — Tags: [Método] [Essencial]
- S1 (data-level="iniciante") — Base Completa 🏗️ — "Pronúncia, verbo to be e estrutura básica em inglês" — Tags: [Gramática] [Fundação]
- S13 (data-level="iniciante") — Vocabulário A1 📖 — "As palavras mais usadas no inglês do dia a dia" — Tags: [Vocabulário] [A1]
- S23 (data-level="iniciante") — Inglês do Zero 🔤 — "40 verbos essenciais, pronomes e tempo verbal A1-A2" — Tags: [Gramática] [A1-A2]

---
GRUPO B — "📚 Gramática & Estrutura" (data-group="gramatica")
Cards:
- S3 (data-level="intermediario") — Gramática Viva ⚡ — "Tempos verbais e estruturas que nativos realmente usam" — Tags: [Gramática] [Intermediário]
- S9 (data-level="intermediario") — Went ou Gone? 🔄 — "Past Simple vs Present Perfect — a diferença que muda tudo" — Tags: [Gramática] [Intermediário]
- S2 (data-level="intermediario") — Inglês Real do Dia a Dia 🗓️ — "Frases práticas para situações cotidianas" — Tags: [Frases] [Intermediário]
- S5 (data-level="intermediario") — Frases Relâmpago ⚡ — "Blocos prontos para usar imediatamente" — Tags: [Frases] [Chunks]
- S7 (data-level="intermediario") — Colocações Naturais 🎯 — "Combinações de palavras que soam nativas" — Tags: [Vocabulário] [Intermediário]
- S8 (data-level="intermediario") — Estruturas Fixas 🔒 — "Padrões gramaticais que se repetem" — Tags: [Gramática] [Padrões]

---
GRUPO C — "💬 Vocabulário & Expressões" (data-group="vocabulario")
Cards:
- S15 (data-level="intermediario") — Expressões Idiomáticas 🎭 — "Take it easy, piece of cake — expressões que nativos adoram" — Tags: [Expressões] [Idioms]
- S16 (data-level="intermediario") — Inglês com Filmes 🎬 — "Frases reais extraídas de filmes americanos" — Tags: [Filmes] [Frases]
- S21 (data-level="avancado") — The Birthday Party 📖 — "Vocabulário literário de um conto americano de 1946" — Tags: [Literatura] [Avançado]
- S17 (data-level="intermediario") — Super Sentences 🎯 — "Construa frases longas e complexas nível por nível" — Tags: [Fala] [Progressivo]
- S25 (data-level="intermediario") — Super Sentences Vol. 2 🎯 — "11 novas histórias progressivas — do simples ao avançado" — Tags: [Fala] [Progressivo]

---
GRUPO D — "🗣️ Conversação & Situações" (data-group="conversacao")
Cards:
- S26 (data-level="conversacao") — Diálogos do Dia a Dia 💬 — "30+ diálogos reais em 12 situações — prática em dupla" — Tags: [Diálogos] [Situações]
- S22 (data-level="conversacao") — Situações Reais 🗺️ — "1200 frases em 27 situações: aeroporto, hotel, médico..." — Tags: [Frases] [Situações]
- S18 (data-level="conversacao") — How Was Your Day? ☀️ — "Conversas reais para descrever o seu dia" — Tags: [Conversação] [Diário]
- S19 (data-level="conversacao") — Conversação Diária 🗣️ — "500 perguntas e respostas para treinar fluência" — Tags: [Q&A] [Fluência]
- S20 (data-level="conversacao") — Conversas Reais 🌿 — "Inglês de podcast: memórias, viagens e vida cotidiana" — Tags: [Podcast] [Natural]
- S4 (data-level="conversacao") — Inglês em Cena 🎭 — "Diálogos dramatizados para treinar fala" — Tags: [Diálogos] [Drama]
- S6 (data-level="conversacao") — Conversas do Dia a Dia ☕ — "Inglês casual e natural em contextos reais" — Tags: [Conversação] [Casual]
- S12 (data-level="conversacao") — Rotina da Noite 🌙 — "Vocabulário e frases para o fim do dia" — Tags: [Rotina] [Vocabulário]
- S14 (data-level="conversacao") — Vida Saudável 🍎 — "Inglês para falar de saúde, exercício e bem-estar" — Tags: [Saúde] [Vocabulário]

---
GRUPO E — "🔥 Fluência & Avançado" (data-group="fluencia")
Cards:
- S24 (data-level="avancado") — Pense em Inglês 🧠 — "10 estratégias reais para parar de traduzir mentalmente" — Tags: [Fluência] [Mentalidade]
- S27 (data-level="avancado") — Shadowing com Propósito 🎤 — "7 textos motivacionais para treinar voz, ritmo e vocabulário" — Tags: [Shadowing] [Avançado]
- S10 (data-level="avancado") — Teste seu Nível 🏆 — "Diagnóstico completo para saber onde você está" — Tags: [Teste] [Diagnóstico]
- S11 (NOTA: já está no Grupo A — não duplicar)

JAVASCRIPT PARA FILTROS:
Ao clicar em um chip de filtro:
- "Todos": mostrar todos os cards e todos os títulos de grupo
- Outros chips: mostrar apenas cards com data-level correspondente, ocultar grupos que ficaram vazios
- O chip ativo tem estilo diferente (borda brilhante, fundo levemente colorido)
- Transição suave (opacity + transform) nos cards filtrados

### 2.7 — SEÇÃO PROGRESSO (id="progresso")
Título: "Meu Progresso"
Subtítulo: "Baseado nos sistemas que você visitou neste navegador."

Card com barra de progresso geral:
- "X de 27 sistemas visitados" (JS lê localStorage)
- Barra de progresso visual (width calculado via JS)
- Abaixo: grid de badges pequenos para cada S1-S27
  · Badge verde com ✓ = já visitado (detectado via localStorage key "s{N}_visited")
  · Badge cinza = ainda não visitado
  · Ao passar o mouse: tooltip com nome do sistema

JAVASCRIPT: ao carregar a página, verificar localStorage para cada sistema. Quando o usuário visitar um sistema (output/sistemaX/index.html), salvar localStorage.setItem('s{N}_visited', 'true'). Adicionar esse script a TODOS os index.html dos sistemas S1-S27.

### 2.8 — RODAPÉ
Simples: "Inglês para Brasileiros · Estude com consistência · 🇺🇸"
Links discretos: "Painel Principal" | "Jornada Completa"

---

## PASSO 3 — PADRONIZAR NAVEGAÇÃO NOS SISTEMAS S15 A S27

Para cada arquivo output/sistema{N}/index.html onde N vai de 15 a 27:

### 3.1 — NAVBAR GLOBAL (adicionar se não existir, padronizar se já existe)
Navbar fixa 48px no topo, idêntica à do painel principal:
```html
<nav class="gnav">
  <a href="../../index.html" class="gnav-logo">🇺🇸 <span>Inglês para Brasileiros</span></a>
  <a href="../../index.html" class="gnav-btn gnav-home">← Painel</a>
  <a href="../../jornada/index.html" class="gnav-btn gnav-jornada">Jornada</a>
</nav>
```
CSS: fundo rgba(8,12,20,.94), backdrop-filter blur(14px), border-bottom 1px solid rgba(255,255,255,.07).

### 3.2 — BREADCRUMB (padronizar em todos os hubs)
Padrão: "Painel Principal › Sistema N — Nome"
Onde "Painel Principal" é link para ../../index.html.
Posição: logo abaixo da navbar (não dentro dela).

### 3.3 — SEÇÃO "PRÓXIMO PASSO" (adicionar no FINAL de cada hub, antes do footer)
Card discreto ao final de cada sistema hub (output/sistemaX/index.html) com:
- Título pequeno: "Concluiu este sistema? Continue:"
- 2 cards lado a lado (ou 1 em mobile):
  · "← Anterior" (link para o sistema numericamente anterior)
  · "Próximo →" (link para o sistema numericamente seguinte)
- Exceção: S15 anterior = link para Jornada; S27 próximo = link para Jornada

Mapa de navegação sequencial para os hubs S15-S27:
- S15 → próximo: S16
- S16 → próximo: S17
- S17 → próximo: S18
- S18 → próximo: S19
- S19 → próximo: S20
- S20 → próximo: S21
- S21 → próximo: S22
- S22 → próximo: S23
- S23 → próximo: S24
- S24 → próximo: S25
- S25 → próximo: S26
- S26 → próximo: S27
- S27 → próximo: Jornada Completa

### 3.4 — SCRIPT DE PROGRESSO (adicionar em TODOS os hubs S1-S27)
Adicionar antes do </body> de cada output/sistemaX/index.html:
```html
<script>
// Registrar visita para rastreamento de progresso
localStorage.setItem('s{N}_visited', 'true');
</script>
```
(Substituir {N} pelo número correto de cada sistema)

---

## PASSO 4 — MELHORAR output/jornada/index.html

Leia o arquivo atual (1303 linhas). Faça apenas estas melhorias pontuais sem reescrever do zero:

### 4.1 — NAVBAR (mesmo padrão do passo 3.1)
Se não existir: adicionar navbar igual com link "← Painel".
Se existir: verificar se tem link para ../../index.html e ajustar se necessário.
Atenção: o caminho correto é ../index.html (jornada está em output/jornada/, não output/sistema/).

### 4.2 — BOTÃO DE RETORNO FLUTUANTE (mobile)
Adicionar botão FAB "← Painel" no canto inferior esquerdo (mobile only, display:none no desktop).

### 4.3 — INDICAÇÃO DE PROGRESSO
Se a jornada já tem progresso via localStorage, ótimo. Se não tem: adicionar localStorage.setItem('jornada_visited', 'true') ao carregar a página.

---

## PASSO 5 — CRIAR output/nav.js (script global compartilhado)

Criar ou atualizar o arquivo output/nav.js com:

```javascript
// nav.js — Script global de navegação e progresso
// Incluído em todos os sistemas via <script src="../../nav.js">

(function() {
  // 1. Registrar visita ao sistema atual
  const path = window.location.pathname;
  const match = path.match(/sistema(\d+)/);
  if (match) {
    localStorage.setItem('s' + match[1] + '_visited', 'true');
  }
  if (path.includes('/jornada/')) {
    localStorage.setItem('jornada_visited', 'true');
  }

  // 2. Atualizar contador de progresso se existir elemento #prog-count
  const progCount = document.getElementById('prog-count');
  if (progCount) {
    let count = 0;
    for (let i = 1; i <= 27; i++) {
      if (localStorage.getItem('s' + i + '_visited')) count++;
    }
    progCount.textContent = count;
  }
})();
```

Nos hubs S15-S27, substituir o script inline de progresso por:
```html
<script src="../../nav.js"></script>
```
(Ajustar o caminho: sistemas em output/sistemaN/ precisam de ../../nav.js)

---

## PASSO 6 — VERIFICAÇÃO FINAL

Após todas as modificações:

1. Verificar que output/index.html tem links corretos para TODOS os 27 sistemas (./sistemaN/index.html)
2. Verificar que output/jornada/index.html tem link correto para ../index.html (não ../../)
3. Verificar que cada hub S15-S27 tem link "← Painel Principal" apontando para ../../index.html
4. Verificar que os filtros JavaScript do painel funcionam (testar mentalmente o fluxo)
5. Confirmar que nenhum conteúdo de estudo foi removido (vocabulário, flashcards, diálogos)
6. Confirmar que as sub-páginas (output/sistema22/situacoes/, etc.) não foram alteradas

---

## PADRÕES OBRIGATÓRIOS PARA TODOS OS ARQUIVOS MODIFICADOS

- Font-size mínimo 16px em todo texto de conteúdo
- Tabelas com overflow-x: auto
- Imagens (se houver) com max-width: 100%
- Todos os botões/links com área clicável mínima de 44x44px no mobile
- Cores de texto com contraste mínimo 4.5:1 sobre o fundo dark (#080c14)
- Transições de hover: max 0.25s ease

---

## RELATÓRIO FINAL

Ao terminar, reportar:
1. Lista completa de arquivos modificados (com número de linhas antes/depois)
2. Qualquer decisão de design tomada que divergiu das instruções (com justificativa)
3. Qualquer arquivo que NÃO foi possível modificar e por quê
4. Instruções para testar: "Abra output/index.html no navegador e faça X, Y, Z"
```
