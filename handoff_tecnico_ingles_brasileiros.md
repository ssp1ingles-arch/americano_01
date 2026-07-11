# HANDOFF TÉCNICO — INGLÊS PARA BRASILEIROS
# Resumo completo para continuação do projeto em novo chat

---

## 🎯 VISÃO GERAL DO PROJETO

Plataforma completa de aprendizado de inglês para brasileiros, hospedada no GitHub Pages.
Construída com HTML puro, CSS e JavaScript vanilla — sem frameworks.

**URL pública:** https://ssp1ingles-arch.github.io/americano_01/output/index.html
**Repositório:** https://github.com/ssp1ingles-arch/americano_01
**Pasta local:** `C:\Users\Samukka\Documents\Claude Projetos\Americano_01`
**Deploy:** duplo clique em `auto_push.bat` → commit + push automático → GitHub Pages atualiza

---

## 🛠️ STACK TÉCNICA

- HTML5 + CSS3 + JavaScript vanilla (sem frameworks)
- Fontes: Space Grotesk + Inter (Google Fonts)
- Progresso salvo em: `localStorage`
- Deploy: GitHub Pages via branch `main`
- Workflow CI: `.github/workflows/deploy.yml`

---

## 📁 ARQUITETURA DO PROJETO

```
Americano_01/
├── output/                     ← raiz pública (GitHub Pages serve daqui)
│   ├── index.html              ← Menu principal com cards de todos os sistemas
│   ├── sistema1/               ← Hub S1 + 89 lições individuais em subpastas
│   ├── sistema2/               ← Hub + pilar1-4/
│   ├── sistema3/               ← Hub + modulo1-4/
│   ├── sistema4/               ← Hub + modulo1-5/
│   ├── sistema5/               ← Hub + shadowing/
│   ├── sistema6/               ← Hub + conversas/
│   ├── sistema7/               ← Hub + colocacoes/
│   ├── sistema8/               ← [A CRIAR] Hub + estruturas/
│   └── jornada/                ← [DESABILITADA] index.html
├── auto_push.bat               ← Script de deploy
├── sistema1_conteudo.md        ← Conteúdo fonte (referência)
├── sistema2_conteudo.md
├── sistema3_conteudo.md
├── sistema4_conteudo.md
├── sistema5_conteudo.md
├── sistema6_conteudo.md
├── sistema7_conteudo.md
└── sistema8_conteudo.md        ← [A CRIAR com conteúdo abaixo]
```

---

## 🎨 DESIGN SYSTEM — CORES POR SISTEMA

```
Sistema 1 — Base Completa        → #64DFDF (ciano)
Sistema 2 — Inglês Real          → #F5C518 (âmbar)
Sistema 3 — Gramática Viva       → #A78BFA (violeta)
Sistema 4 — Inglês em Cena       → #FF6B6B (coral)
Sistema 5 — Frases Relâmpago     → #10B981 (verde esmeralda)
Sistema 6 — Conversas do Dia     → #0EA5E9 (azul céu)
Sistema 7 — Colocações Naturais  → #D946EF (magenta)
Sistema 8 — Estruturas Fixas     → #F97316 (laranja) ← NOVO
Jornada Completa                 → gradiente tricolor (desabilitada)

Fundo base: #0a0f1a (quase preto azulado)
Cards:      #0f1621 (azul muito escuro)
Texto:      #e2e8f0 (quase branco)
```

---

## 📚 SISTEMAS COMPLETOS (STATUS ATUAL)

### Sistema 1 — Base Completa ✅
- 89 lições, 13 módulos, 1068 questões
- Three.js r128 (cenas 3D com personagens)
- Pronomes, BE, Verbos, Modais, Preposições, Phrasal Verbs
- Pasta: `output/sistema1/` + 89 pastas de lições

### Sistema 2 — Inglês Real do Dia a Dia ✅
- 4 pilares: Frases Crescentes · 1000 Frases · 30 Padrões · 150 Textos
- SVG animado + CSS animations
- Pasta: `output/sistema2/`

### Sistema 3 — Gramática Viva ✅
- 4 módulos: 12 Tempos Verbais · 20 Verbos Irregulares · Basic vs Better · Padrões
- Pasta: `output/sistema3/`

### Sistema 4 — Inglês em Cena ✅
- Baseado em Top Notch (vídeo de comédia inglesa)
- 5 módulos: 20 Cenas · 5 Músicas · 4 Entrevistas · 50 Frases · 5 Role-plays
- Pasta: `output/sistema4/`

### Sistema 5 — Frases Relâmpago ✅
- Shadowing: 150 frases em 10 grupos de 15
- 3 modos: Shadowing · Lista · Quiz + Auto-play com timer
- Pasta: `output/sistema5/`

### Sistema 6 — Conversas do Dia a Dia ✅
- Canal Lovely English (Kelly)
- 14 conversas × 7 Q&A = 98 pares
- 5 modos: Conversa · Praticar Q · Praticar A · Role-Play · Quiz
- Pasta: `output/sistema6/`

### Sistema 7 — Colocações Naturais ✅
- "Stop Choosing the Wrong Verbs" (Elena, English in Moments)
- 100 colocações: MAKE(25) · DO(25) · HAVE(25) · GET+TAKE(25)
- 4 modos: Estudo Completo · Qual Verbo? · Errado vs Certo · Flash Cards
- Pasta: `output/sistema7/`

### Jornada Completa — DESABILITADA ⏸️
- 120 etapas pedagógicas em 5 fases
- Desabilitada temporariamente (ocultar card e remover do nav)
- Pasta: `output/jornada/` (manter arquivos, só ocultar)

---

## 🧭 NAVEGAÇÃO ATUAL

Barra superior com dropdown "Sistemas ▼" contendo todos os sistemas.
Breadcrumb padrão: `← Menu Principal / Sistema X — Nome`
Parâmetro `?origem=jornada` detectado em JS para alterar breadcrumb quando acessado pela Jornada.

---

## ⚠️ REORGANIZAÇÃO RECOMENDADA

Com 8 sistemas, o menu principal está ficando denso.
Sugestão para implementar junto com o Sistema 8:

**NOVA ESTRUTURA DO MENU PRINCIPAL (output/index.html):**

```
TÍTULO: Inglês para Brasileiros

[Seção: FUNDAÇÃO]
Card S1 — Base Completa (ciano)
Card S3 — Gramática Viva (violeta)

[Seção: VOCABULÁRIO & FRASES]
Card S2 — Inglês Real (âmbar)
Card S5 — Frases Relâmpago (verde)
Card S7 — Colocações Naturais (magenta)
Card S8 — Estruturas Fixas (laranja)

[Seção: CONVERSAÇÃO]
Card S4 — Inglês em Cena (coral)
Card S6 — Conversas do Dia a Dia (azul)

[Seção: JORNADA — oculta por enquanto]
```

Esta reorganização torna mais fácil escolher por onde começar.

---

## 🔧 INSTRUÇÃO CRÍTICA PARA O CLAUDE CODE

**IMPORTANTE:** O usuário não tem tempo para ficar confirmando cada passo.
Ao receber o prompt completo do sistema, o Claude Code deve:

1. Ler o arquivo de conteúdo completo
2. Executar TODOS os passos em sequência SEM pedir confirmações
3. Criar todos os arquivos HTML de uma vez
4. Atualizar a navegação em todos os arquivos relevantes
5. Reportar apenas ao final com o resumo do que foi feito

O prompt para o Claude Code deve sempre incluir:
```
INSTRUÇÃO DE EXECUÇÃO: Execute todos os passos abaixo em sequência
sem pedir confirmações intermediárias. Reporte apenas ao final.
```

---

## 🔮 COMO ADICIONAR SISTEMAS FUTUROS (APÓS S8)

Para cada novo sistema, o usuário vai colar no Claude (chat):
1. Nome do vídeo do YouTube
2. Transcrição do vídeo

O Claude (chat) então:
1. Analisa o conteúdo e identifica o tema pedagógico
2. Define nome, cor e ícone do sistema
3. Estrutura o conteúdo em módulos
4. Gera o arquivo `sistemaN_conteudo.md` completo
5. O usuário salva o arquivo na pasta e cola o prompt no Claude Code
6. Claude Code executa tudo sem confirmações

**Sequência de cores disponíveis para próximos sistemas:**
- S9: #06B6D4 (ciano mais escuro)
- S10: #84CC16 (verde limão)
- S11: #FB923C (laranja claro)
- S12: #818CF8 (índigo)

---

## 🆕 SISTEMA 8 — ESTRUTURAS FIXAS

### CONTEÚDO COMPLETO

**Nome:** Estruturas Fixas
**Subtítulo:** Fórmulas que geram frases infinitas
**Cor:** #F97316 (laranja)
**Ícone:** 🧱
**Fonte:** "Forma correta de aprender a montar qualquer frase em inglês para conversar | Inglês rápido e fácil"

**O que é único no Sistema 8:**
Diferente dos outros sistemas, o Sistema 8 ensina FÓRMULAS — estruturas fixas que funcionam como moldes. Você aprende uma fórmula e pode gerar dezenas de frases novas apenas trocando o verbo ou complemento. É a forma mais eficiente de expandir a produção oral rapidamente.

**Diferença dos outros sistemas:**
- S5 (Frases Relâmpago) = frases curtas prontas para shadowing
- S8 (Estruturas Fixas) = fórmulas que GERAM frases novas infinitas

---

### ESTRUTURA 01 — I KNOW HOW TO + [VERBO]
**PT:** Eu sei + [verbo]
**EN:** I know how to + [verbo base]

**Quando usar:** para expressar habilidades — coisas que você sabe COMO fazer

**MACETE PARA BRASILEIROS:**
Em português dizemos "eu sei dirigir" mas em inglês é obrigatório o "how":
"I know HOW to drive" (eu sei COMO dirigir)
Sem o "how" soa incompleto em inglês.

**5 EXEMPLOS COM ÁUDIO MENTAL:**

| Português | Inglês |
|-----------|--------|
| Eu sei dirigir um carro. | I know how to drive a car. |
| Eu sei usar um computador. | I know how to use a computer. |
| Eu sei como encontrar a resposta. | I know how to find the answer. |
| Eu sei me acalmar quando estou com raiva. | I know how to calm down when I'm angry. |
| Eu sei usar o transporte público na cidade. | I know how to use public transport in the city. |

**LISTA DE VERBOS PARA PRATICAR:**

| Português | Inglês | Frase completa |
|-----------|--------|----------------|
| dirigir | drive | I know how to drive |
| usar | use | I know how to use |
| encontrar | find | I know how to find |
| me acalmar | calm down | I know how to calm down |
| cozinhar | cook | I know how to cook |
| falar | speak | I know how to speak |
| dançar | dance | I know how to dance |
| pedir (restaurante) | order | I know how to order |
| nadar | swim | I know how to swim |
| ouvir | listen | I know how to listen |
| aprender | learn | I know how to learn |
| me expressar | express myself | I know how to express myself |

**VOCABULÁRIO DO GRUPO:**

| PT | EN |
|----|----|
| dirigir | drive |
| carro | car |
| usar | use |
| encontrar | find |
| computador | computer |
| resposta | answer |
| público | public |
| cidade | city |
| raiva | anger / angry |

**ERROS CLÁSSICOS:**
- ❌ "I know drive a car." → ✅ "I know how to drive a car."
- ❌ "I know to drive a car." → ✅ "I know how to drive a car."
- ❌ "I know how drive." → ✅ "I know how to drive." (não esquecer o "to")

**EXPANSÃO CRIATIVA — CRIE AS SUAS:**
- I know how to ___ in Portuguese but not in English. (Eu sei ___ em português mas não em inglês.)
- I know how to ___ but I need more practice. (Eu sei ___ mas preciso de mais prática.)

---

### ESTRUTURA 02 — I REALIZED THAT + [FRASE]
**PT:** Percebi que / Eu percebi que
**EN:** I realized that + [sujeito + verbo + complemento]

**Quando usar:** para expressar quando você percebe ou compreende algo importante — uma realização, insight ou descoberta.

**PRONÚNCIA:** "I realized that" pode ser pronunciado com os sons unidos: "I realize that" (o D e o TH se unem naturalmente)

**5 EXEMPLOS:**

| Português | Inglês |
|-----------|--------|
| Percebi que eu estava errado. | I realized that I was wrong. |
| Percebi que a vida é curta. | I realized that life is short. |
| Percebi que preciso estudar mais. | I realized that I need to study more. |
| Percebi que estávamos perdidos. | I realized that we were lost. |
| Percebi que preciso mudar meus hábitos. | I realized that I need to change my habits. |

**LISTA DE REALIZAÇÕES PARA PRATICAR:**

| Percepção (PT) | Inglês |
|----------------|--------|
| Eu estava errado | I was wrong |
| A vida é curta | life is short |
| Preciso estudar mais | I need to study more |
| Estávamos perdidos | we were lost |
| Preciso mudar meus hábitos | I need to change my habits |
| Você tem razão | you are right |
| O tempo passa rápido | time passes quickly |
| Eu não estava ouvindo | I wasn't listening |
| Precisamos de ajuda | we need help |
| Cometi um erro | I made a mistake |

**VOCABULÁRIO DO GRUPO:**

| PT | EN |
|----|----|
| errado | wrong |
| vida | life |
| curta | short |
| estudar | study |
| mais | more |
| mudar | change |
| hábitos | habits |
| perdido | lost |
| perceber | realize |
| importante | important |

**NUANCE IMPORTANTE — PRESENT vs PAST:**
- I realize that = Eu percebo que (presente — insight atual)
- I realized that = Eu percebi que (passado — insight que tive antes)
- Ambos são usados. No vídeo o professor aceita os dois.

**EXPANSÃO CRIATIVA:**
- I realized that ___ when I was younger. (Percebi que ___ quando era mais jovem.)
- I suddenly realized that ___. (De repente percebi que ___.)

---

### ESTRUTURA 03 — IT'S TOO LATE TO + [VERBO]
**PT:** É tarde demais para + [verbo]
**EN:** It's too late to + [verbo base]

**Quando usar:** quando algo já passou do momento adequado para ser feito — quando a janela de oportunidade se fechou.

**5 EXEMPLOS:**

| Português | Inglês |
|-----------|--------|
| É tarde demais para mudar de ideia. | It's too late to change my mind. |
| É tarde demais para mudar o que aconteceu. | It's too late to change what happened. |
| É tarde demais para dizer adeus. | It's too late to say goodbye. |
| É tarde demais para fazer qualquer coisa agora. | It's too late to do anything now. |
| É tarde demais para recomeçar. | It's too late to start over. |

**LISTA DE VERBOS PARA PRATICAR:**

| PT | EN | Frase |
|----|-----|-------|
| mudar | change | It's too late to change |
| dizer | say | It's too late to say |
| fazer | do | It's too late to do |
| sair | go out | It's too late to go out |
| consertar | fix | It's too late to fix |
| ligar | call | It's too late to call |
| estudar | study | It's too late to study |
| comprar | buy | It's too late to buy |
| cancelar | cancel | It's too late to cancel |
| voltar | go back | It's too late to go back |
| recomeçar | start over | It's too late to start over |
| desistir | give up | It's too late to give up |

**VOCABULÁRIO DO GRUPO:**

| PT | EN |
|----|----|
| tarde | late |
| mudar | change |
| o quê | what |
| dizer | say |
| adeus | goodbye |
| algo/qualquer coisa | anything |
| fazer | do |
| começar/recomeçar | start / start over |
| mente (de "mudar de ideia") | mind |

**EXPRESSÃO ESPECIAL:**
- "Change my mind" = mudar de ideia (literalmente: mudar minha mente)
- "Start over" = recomeçar do zero (literalmente: começar de novo)

**VARIAÇÕES ÚTEIS:**
- "It's never too late to ___." = Nunca é tarde demais para ___.
- "Is it too late to ___?" = É tarde demais para ___?
- "I hope it's not too late to ___." = Espero que não seja tarde demais para ___.

---

### ESTRUTURAS EXTRAS (EXPANSÃO DO SISTEMA 8)
*Sugestões pedagógicas para enriquecer o sistema além do vídeo:*

**ESTRUTURA 04 — I'M TRYING TO + [VERBO]**
Eu estou tentando + [verbo]
- I'm trying to improve my English.
- I'm trying to understand you.
- I'm trying to be patient.

**ESTRUTURA 05 — I USED TO + [VERBO]**
Eu costumava + [verbo] (hábito do passado)
- I used to live in São Paulo.
- I used to be afraid of speaking.
- I used to think that English was impossible.

**ESTRUTURA 06 — I'M AFRAID OF + [VERBO-ING]**
Eu tenho medo de + [verbo]
- I'm afraid of making mistakes.
- I'm afraid of speaking in public.
- I'm afraid of forgetting the words.

**ESTRUTURA 07 — I WISH I COULD + [VERBO]**
Eu queria poder + [verbo]
- I wish I could speak English fluently.
- I wish I could understand movies without subtitles.
- I wish I could practice more.

**ESTRUTURA 08 — IT'S WORTH + [VERBO-ING]**
Vale a pena + [verbo]
- It's worth trying.
- It's worth learning English.
- It's worth the effort.

---

### DESAFIO DE TRADUÇÃO (do vídeo — usar no quiz do sistema)

**Grupo 1 — I know how to:**
1. Eu sei dirigir um carro. → I know how to drive a car.
2. Eu sei usar um computador. → I know how to use a computer.
3. Eu sei como encontrar a resposta. → I know how to find the answer.
4. Eu sei me acalmar quando estou com raiva. → I know how to calm down when I'm angry.
5. Eu sei usar o transporte público na cidade. → I know how to use public transport in the city.

**Grupo 2 — I realized that:**
1. Percebi que eu estava errado. → I realized that I was wrong.
2. Percebi que a vida é curta. → I realized that life is short.
3. Percebi que preciso estudar mais. → I realized that I need to study more.
4. Percebi que estávamos perdidos. → I realized that we were lost.
5. Percebi que preciso mudar meus hábitos. → I realized that I need to change my habits.

**Grupo 3 — It's too late to:**
1. É tarde demais para mudar de ideia. → It's too late to change my mind.
2. É tarde demais para mudar o que aconteceu. → It's too late to change what happened.
3. É tarde demais para dizer adeus. → It's too late to say goodbye.
4. É tarde demais para fazer qualquer coisa agora. → It's too late to do anything now.
5. É tarde demais para recomeçar. → It's too late to start over.

---

## PROMPT COMPLETO PARA O CLAUDE CODE — SISTEMA 8

```
INSTRUÇÃO DE EXECUÇÃO: Execute TODOS os passos abaixo em sequência
sem pedir confirmações intermediárias. Reporte apenas ao final com
o resumo do que foi feito.

═══════════════════════════════════════════════════
PROJETO: Sistema 8 — Estruturas Fixas
PASTA RAIZ: C:\Users\Samukka\Documents\Claude Projetos\Americano_01
CONTEÚDO: Leia sistema8_conteudo.md completamente antes de começar.
═══════════════════════════════════════════════════

IDENTIDADE VISUAL:
Nome: Estruturas Fixas
Subtítulo: Fórmulas que geram frases infinitas
Cor: #F97316 (laranja)
Ícone: 🧱

ESTRUTURA DE PASTAS:
output/
└── sistema8/
    ├── index.html          ← Hub do Sistema 8
    └── estruturas/
        └── index.html      ← Página principal (tudo aqui)

═══════════════════════════════════════════════════
LAYOUT DA PÁGINA ESTRUTURAS
output/sistema8/estruturas/index.html
═══════════════════════════════════════════════════

SEÇÃO 1 — HERO:
🧱 ESTRUTURAS FIXAS
"Aprenda uma fórmula. Gere frases infinitas."
"Uma estrutura fixa é um molde — você aprende uma vez
e pode criar dezenas de frases apenas trocando o verbo."

SEÇÃO 2 — SELETOR DE ESTRUTURA:
Tabs ou cards para cada estrutura:
[🧱 I know how to] [💡 I realized that] [⏰ It's too late to]
[🔄 I'm trying to] [📅 I used to] [😨 I'm afraid of] [✨ I wish]
(as 3 primeiras são do vídeo, as outras são expansão)

SEÇÃO 3 — CARD DE ESTRUTURA:
┌──────────────────────────────────────────────────┐
│ 🧱 ESTRUTURA 01                                 │
│                                                  │
│ ┌─── FÓRMULA ──────────────────────────────┐   │
│ │                                           │   │
│ │   I know how to + [VERBO]                │   │
│ │   Eu sei + [verbo]                       │   │
│ │                                           │   │
│ └───────────────────────────────────────────┘   │
│                                                  │
│ 📖 QUANDO USAR:                                 │
│ Para expressar habilidades — coisas que você    │
│ sabe COMO fazer.                                │
│                                                  │
│ ⚠️ MACETE PARA BRASILEIROS:                     │
│ ❌ "I know drive" → ✅ "I know HOW to drive"   │
│ O "how" é obrigatório em inglês!               │
│                                                  │
│ 💬 EXEMPLOS:                                    │
│ • I know how to drive a car.                   │
│   (Eu sei dirigir um carro.)                   │
│ • I know how to use a computer.                │
│   (Eu sei usar um computador.)                 │
│ [mostrar todos os 5 exemplos]                  │
│                                                  │
│ 🎯 PRATIQUE — complete a frase:                 │
│ I know how to ___                              │
│ [drive] [cook] [swim] [dance] [speak] [order] │
│ (botões clicáveis que completam a frase)       │
│                                                  │
│ 📝 DESAFIO — Traduza:                          │
│ "Eu sei cozinhar."                             │
│ [campo de texto] [Ver resposta]                │
└──────────────────────────────────────────────────┘

4 MODOS DE ESTUDO:
[● Aprender] [○ Praticar] [○ Desafio] [○ Quiz]

MODO APRENDER: mostra fórmula + explicação + exemplos completos
MODO PRATICAR: mostra fórmula, usuário completa com verbos (botões)
MODO DESAFIO: PT → EN, campo de texto livre
MODO QUIZ: 4 opções, qual tradução está correta?

═══════════════════════════════════════════════════
HUB DO SISTEMA 8
output/sistema8/index.html
═══════════════════════════════════════════════════

HEADER:
Badge: "🧱 SISTEMA 8 — ESTRUTURAS FIXAS"
Título: "Fórmulas que geram frases infinitas"
Subtítulo: "Aprenda uma estrutura. Crie dezenas de frases novas."
Stats: 8 estruturas · 60+ exemplos · 4 modos de prática

2 cards:
[🧱 INICIAR ESTUDO]  [🎯 DESAFIO DIRETO]

═══════════════════════════════════════════════════
TAREFA 1 — DESABILITAR JORNADA COMPLETA
═══════════════════════════════════════════════════

Em output/index.html:
- Encontrar o card da Jornada Completa
- Adicionar style="display:none" no card
- NÃO deletar o arquivo — apenas ocultar

Em TODOS os arquivos com barra de nav:
- Remover o botão "🗺 Jornada" do dropdown "Sistemas ▼"
- OU adicionar display:none no item

═══════════════════════════════════════════════════
TAREFA 2 — REORGANIZAR MENU PRINCIPAL
═══════════════════════════════════════════════════

Em output/index.html, reorganizar os cards em 3 seções:

SEÇÃO: FUNDAÇÃO
- Sistema 1 — Base Completa (ciano)
- Sistema 3 — Gramática Viva (violeta)

SEÇÃO: VOCABULÁRIO & FRASES
- Sistema 2 — Inglês Real (âmbar)
- Sistema 5 — Frases Relâmpago (verde)
- Sistema 7 — Colocações Naturais (magenta)
- Sistema 8 — Estruturas Fixas (laranja) ← NOVO

SEÇÃO: CONVERSAÇÃO
- Sistema 4 — Inglês em Cena (coral)
- Sistema 6 — Conversas do Dia a Dia (azul)

Cada seção com título pequeno em uppercase acima dos cards.
Grid responsivo: 2 colunas desktop, 1 coluna mobile.

═══════════════════════════════════════════════════
TAREFA 3 — CRIAR SISTEMA 8
═══════════════════════════════════════════════════

PASSO 1: Criar output/sistema8/estruturas/index.html
PASSO 2: Criar output/sistema8/index.html
PASSO 3: Atualizar output/index.html (novo card + reorganização)
PASSO 4: Adicionar Sistema 8 no dropdown nav de todos os arquivos
PASSO 5: Ocultar Jornada (card + nav)

Executar todos os 5 passos sem pedir confirmações.
Reportar resumo ao final.

PADRÕES OBRIGATÓRIOS:
- Breadcrumb: ← Menu Principal / Sistema 8 — Estruturas Fixas
- Parâmetro ?origem=jornada detectado em JS (manter compatibilidade)
- Mobile: botão ← voltar fixo bottom-left, botão ↑ topo bottom-right
- Font-size mínimo 16px
- Tabelas com overflow-x: auto
```

---

## 📋 CHECKLIST DE PENDÊNCIAS

- [x] Sistema 1 — completo
- [x] Sistema 2 — completo
- [x] Sistema 3 — completo
- [x] Sistema 4 — completo
- [x] Sistema 5 — completo
- [x] Sistema 6 — completo
- [x] Sistema 7 — completo
- [ ] Sistema 8 — conteúdo pronto, aguarda execução no Claude Code
- [ ] Jornada — desabilitar (ocultar card + remover do nav)
- [ ] Reorganização do menu (3 seções)
- [ ] Deploy final (auto_push.bat após tudo pronto)
- [ ] Sistema 9+ — aguarda próximos vídeos do usuário

---

## 🔄 FLUXO PARA PRÓXIMOS SISTEMAS

1. Usuário cola no Claude Chat: nome do vídeo + transcrição
2. Claude Chat: analisa → gera `sistemaN_conteudo.md` completo com:
   - Conteúdo pedagógico estruturado
   - Prompt completo para Claude Code (com instrução de execução sem confirmações)
3. Usuário: salva o .md na pasta `Americano_01`
4. Usuário: cola o prompt no Claude Code
5. Claude Code: executa tudo em sequência sem confirmar
6. Usuário: roda `auto_push.bat` para fazer deploy

**Próxima cor disponível:** S9 = #06B6D4 (ciano escuro)
