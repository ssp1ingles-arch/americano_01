# HANDOFF — Sistema 28: Reduções do Inglês Real
**Inglês para Brasileiros · ssp1ingles-arch.github.io/americano_01**
**Status:** Pronto para implementação via Claude Code
**Baseado em:** Mapeamento completo dos Sistemas 1–27 existentes

---

## 1. VISÃO GERAL DO SISTEMA

| Campo | Valor |
|---|---|
| ID | S28 |
| Título | Reduções do Inglês Real |
| Subtítulo | O inglês que nativos falam, não o que ensinam |
| Nível | B1–B2 |
| Fase | 7 — Fluência (ao lado de S20, S27, S24) |
| Cor de acento | `#F59E0B` (âmbar — energia da fala viva) |
| Emoji | 🎙️ |
| Pilares | 4 |
| Unidades totais | ~120 |

**Problema que resolve:** O brasileiro estuda inglês "formal" — escola, YouTube, cursos — mas quando ouve nativos falando rápido em músicas, filmes e séries, não entende. Porque ninguém ensina as *reduções*: as formas comprimidas e encadeadas que fazem parte do inglês real.

---

## 2. ESTRUTURA DE ARQUIVOS

```
output/
└── sistema28/
    ├── index.html                          ← Página principal do S28
    ├── pilar1_reducoes/
    │   └── index.html                      ← 50 Reduções Essenciais
    ├── pilar2_contexto/
    │   └── index.html                      ← Reduções em Músicas, Filmes e Séries
    ├── pilar3_connected_speech/
    │   └── index.html                      ← Fenômenos do Inglês Encadeado
    └── pilar4_treino/
        └── index.html                      ← Treino de Listening: Ouça e Decodifique
```

**Atualizar também:**
- `output/index.html` — adicionar S28 na FASE 7 e no contador de progresso
- Nav bar superior — já tem S1–S5 fixos, S28 não precisa ser adicionado (padrão da plataforma)

---

## 3. DESIGN SYSTEM (seguir padrão existente)

```css
/* Paleta base — igual a todos os sistemas */
--bg: #0d0d0d;
--surface: #1a1a1a;
--border: #2a2a2a;
--text: #e5e5e5;
--muted: #888;

/* Acento exclusivo do S28 */
--accent: #F59E0B;       /* âmbar */
--accent-dim: #92400E;   /* âmbar escuro para hover/destaque */
--accent-glow: rgba(245,158,11,0.15);

/* Tipografia — igual à plataforma */
font-family: 'Space Grotesk', sans-serif;  /* títulos */
font-family: 'Inter', sans-serif;           /* corpo */
```

**Regra de acento:** Use `--accent` apenas em: número do sistema, tag de nível, ícone do pilar ativo, barra de progresso, links hover. Nunca em texto de corpo.

---

## 4. PÁGINA PRINCIPAL: `sistema28/index.html`

### Estrutura HTML (inspirada em S2/index.html):

```html
<!-- Nav bar: igual a todos os sistemas -->
<!-- Breadcrumb: ← Painel Principal / Sistema 28 — Reduções do Inglês Real -->

<header class="sys-header">
  <div class="sys-label">Sistema 28 · B1–B2</div>
  <h1>Reduções do<br><span class="accent">Inglês Real</span></h1>
  <p class="sys-sub">O inglês que nativos falam, não o que ensinam.<br>
  Decodifique músicas, filmes e conversas reais.</p>

  <div class="stats-row">
    <div><strong>4</strong><span>Pilares</span></div>
    <div><strong>50</strong><span>Reduções</span></div>
    <div><strong>120</strong><span>Exemplos Reais</span></div>
    <div><strong>3</strong><span>Fenômenos</span></div>
  </div>

  <div class="how-to">
    <h3>Como usar o Sistema 28</h3>
    <ol>
      <li>Pilar 1 — Aprenda as 50 reduções mais usadas</li>
      <li>Pilar 2 — Veja essas reduções em músicas, filmes e séries</li>
      <li>Pilar 3 — Entenda por que o inglês "gruda" as palavras</li>
      <li>Pilar 4 — Treine seu ouvido: ouça, transcreva, compare</li>
    </ol>
  </div>
</header>

<!-- Grid de pilares: igual ao S2 -->
<section class="pillars-grid">
  <a href="pilar1_reducoes/index.html" class="pilar-card">
    <span class="pilar-icon">✂️</span>
    <div class="pilar-num">Pilar 1</div>
    <div class="pilar-title">50 Reduções Essenciais</div>
    <p>As formas comprimidas que nativos usam sem perceber.
    Wanna, gonna, gotta, dunno, coulda, woulda e mais 44.</p>
    <div class="pilar-meta">5 categorias · 50 reduções · Com exemplos reais</div>
    <div class="pilar-cta">Estudar →</div>
  </a>

  <a href="pilar2_contexto/index.html" class="pilar-card">
    <span class="pilar-icon">🎬</span>
    <div class="pilar-num">Pilar 2</div>
    <div class="pilar-title">Músicas, Filmes e Séries</div>
    <p>As mesmas reduções do Pilar 1, mas agora no contexto real:
    letras de músicas, falas de personagens, cenas do cotidiano.</p>
    <div class="pilar-meta">3 fontes · 60 exemplos · Inglês autêntico</div>
    <div class="pilar-cta">Explorar →</div>
  </a>

  <a href="pilar3_connected_speech/index.html" class="pilar-card">
    <span class="pilar-icon">🔗</span>
    <div class="pilar-num">Pilar 3</div>
    <div class="pilar-title">Connected Speech</div>
    <p>Por que "did you" vira "didja" e "want to" vira "wanna"?
    Aprenda os 4 fenômenos que encadeiam o inglês falado.</p>
    <div class="pilar-meta">4 fenômenos · Exemplos sonoros · Com regras</div>
    <div class="pilar-cta">Entender →</div>
  </a>

  <a href="pilar4_treino/index.html" class="pilar-card">
    <span class="pilar-icon">👂</span>
    <div class="pilar-num">Pilar 4</div>
    <div class="pilar-title">Treino de Ouvido</div>
    <p>Você ouve uma frase em velocidade nativa e tenta transcrever.
    Depois vê a resposta com explicação de cada redução presente.</p>
    <div class="pilar-meta">20 exercícios · Do fácil ao avançado · Autocorreção</div>
    <div class="pilar-cta">Treinar →</div>
  </a>
</section>
```

---

## 5. PILAR 1 — 50 REDUÇÕES ESSENCIAIS

**Arquivo:** `pilar1_reducoes/index.html`

**Estrutura de interface:** igual ao Pilar 1 do S2 (seletor de categoria + cards de conteúdo com progresso).

**Organização em 5 categorias (10 reduções cada):**

---

### CATEGORIA 1: Want/Go/Have + TO (as mais usadas)

| # | Redução | Original | Pronúncia (pt) | Exemplo Real |
|---|---|---|---|---|
| 1 | **wanna** | want to | "UÂna" | "I wanna go home." |
| 2 | **gonna** | going to | "GÔna" | "She's gonna call you." |
| 3 | **gotta** | got to / have got to | "GÓta" | "I gotta go now." |
| 4 | **hafta** | have to | "HÁFta" | "You hafta see this." |
| 5 | **supposta** | supposed to | "saPÓSta" | "I was supposta call him." |
| 6 | **usedta** | used to | "IÚSta" | "He usedta live here." |
| 7 | **oughta** | ought to | "ÔTa" | "You oughta try this." |
| 8 | **needta** | need to | "NÍta" | "We needta talk." |
| 9 | **tryda** | trying to | "TRÁIda" | "I'm tryda sleep!" |
| 10 | **aimta** | am going to | "ÂIMta" | "I'm aimta fix this." |

---

### CATEGORIA 2: Should/Would/Could + HAVE (os arrependimentos)

| # | Redução | Original | Pronúncia (pt) | Exemplo Real |
|---|---|---|---|---|
| 11 | **shoulda** | should have | "SHÚda" | "I shoulda known better." |
| 12 | **woulda** | would have | "WÚda" | "I woulda called you." |
| 13 | **coulda** | could have | "KÚda" | "You coulda asked me." |
| 14 | **mighta** | might have | "MÂIta" | "She mighta left already." |
| 15 | **musta** | must have | "MÚSta" | "It musta been cold." |
| 16 | **woulda been** | would have been | "WÚda bin" | "That woulda been nice." |
| 17 | **shoulda been** | should have been | "SHÚda bin" | "It shoulda been you." |
| 18 | **coulda been** | could have been | "KÚda bin" | "We coulda been great." |
| 19 | **musta been** | must have been | "MÚSta bin" | "That musta been hard." |
| 20 | **needn'ta** | needn't have | "NÍdinta" | "You needn'ta worry." |

---

### CATEGORIA 3: LET/GIVE/GET + ME/YOU (pedidos e ações)

| # | Redução | Original | Pronúncia (pt) | Exemplo Real |
|---|---|---|---|---|
| 21 | **lemme** | let me | "LÉmi" | "Lemme think about it." |
| 22 | **gimme** | give me | "GÍmi" | "Gimme a second." |
| 23 | **getcha** | get you | "GÉtcha" | "I'll getcha back for that." |
| 24 | **gotcha** | got you | "GÓtcha" | "Gotcha. I understand." |
| 25 | **letcha** | let you | "LÉtcha" | "I won't letcha down." |
| 26 | **tellya** | tell you | "TÉLya" | "I tellya, it was crazy." |
| 27 | **ya** | you | "ya" | "What are ya doing?" |
| 28 | **yer / your** | your | "yer" | "Is that yer car?" |
| 29 | **'em** | them | "'em" | "Tell 'em I'm coming." |
| 30 | **'im** | him | "'im" | "Did you see 'im?" |

---

### CATEGORIA 4: DO/DID/WHAT + YOU (perguntas rápidas)

| # | Redução | Original | Pronúncia (pt) | Exemplo Real |
|---|---|---|---|---|
| 31 | **dunno** | don't know | "daNÔ" | "I dunno what to do." |
| 32 | **whaddya** | what do you | "UÓdya" | "Whaddya think?" |
| 33 | **whatcha** | what are you | "UÓtcha" | "Whatcha doing?" |
| 34 | **didja** | did you | "DÍdja" | "Didja see that?" |
| 35 | **wouldja** | would you | "WÚdja" | "Wouldja do that for me?" |
| 36 | **couldja** | could you | "KÚdja" | "Couldja help me?" |
| 37 | **doncha** | don't you | "DÔNcha" | "Doncha worry about it." |
| 38 | **wontcha** | won't you | "UÔNcha" | "Wontcha come with me?" |
| 39 | **dontcha** | don't you | "DÔNcha" | "Dontcha know?" |
| 40 | **d'you** | do you | "dya" | "D'you want some?" |

---

### CATEGORIA 5: Expressões Comprimidas do Dia a Dia

| # | Redução | Original | Pronúncia (pt) | Exemplo Real |
|---|---|---|---|---|
| 41 | **kinda** | kind of | "KÂINda" | "It's kinda weird." |
| 42 | **sorta** | sort of | "SÔRta" | "I sorta knew it." |
| 43 | **lotta** | a lot of | "LÓta" | "There's a lotta work." |
| 44 | **outta** | out of | "ÔUta" | "I'm outta here." |
| 45 | **c'mon** | come on | "kaMÓN" | "C'mon, let's go!" |
| 46 | **dunno** | do not know | "daNÔ" | "Dunno, you tell me." |
| 47 | **ain't** | am/is/are not | "ÂINT" | "I ain't done yet." |
| 48 | **I'mma** | I am going to | "ÂIma" | "I'mma call you later." |
| 49 | **y'all** | you all | "yôl" | "Y'all ready for this?" |
| 50 | **'cause** | because | "kaz" | "I left 'cause it was late." |

---

**Template de card para cada redução (JS-driven):**
```javascript
// Estrutura de dados
const reducoes = [
  {
    id: 1,
    categoria: 1,
    reducao: "wanna",
    original: "want to",
    pronuncia: "UÂna",
    nivel: "A2",
    exemplos: [
      { frase: "I wanna go home.", traducao: "Eu quero ir pra casa.", fonte: "Conversa cotidiana" },
      { frase: "She wanna know if you're coming.", traducao: "Ela quer saber se você vai.", fonte: "Friends, S03E04" },
      { frase: "I just wanna have fun.", traducao: "Eu só quero me divertir.", fonte: "Cyndi Lauper — Girls Just Wanna Have Fun" }
    ],
    dica: "WANNA só vira redução de 'want to' quando vem seguido de verbo no infinitivo. 'What do you want?' não vira 'wanna'.",
    armadilha: "❌ 'I want you' NÃO vira 'I wanna you'. Funciona só com verbo depois."
  },
  // ... demais 49 reduções
]
```

---

## 6. PILAR 2 — MÚSICAS, FILMES E SÉRIES

**Arquivo:** `pilar2_contexto/index.html`

**Formato:** 3 abas (Músicas / Filmes e Séries / Conversas Reais), com 20 exemplos cada.

**Estrutura de dados para cada exemplo:**

```javascript
const exemplos = {
  musicas: [
    {
      id: 1,
      titulo: "Girls Just Wanna Have Fun",
      artista: "Cyndi Lauper",
      trecho_original: "Girls just wanna have fun",
      forma_formal: "Girls just want to have fun",
      reducoes_presentes: ["wanna"],
      analise: "WANNA substitui WANT TO. A música ficou famosa justamente por soar natural e coloquial."
    },
    {
      id: 2,
      titulo: "Watcha Say",
      artista: "Jason Derulo",
      trecho_original: "What did you say?",
      forma_coloquial: "Whatcha say?",
      reducoes_presentes: ["whatcha"],
      analise: "'Whatcha' comprime 'what did you'. O título da música USA essa redução."
    },
    {
      id: 3,
      titulo: "I Gotta Feeling",
      artista: "Black Eyed Peas",
      trecho_original: "I've got a feeling",
      forma_coloquial: "I gotta feeling",
      reducoes_presentes: ["gotta"],
      analise: "GOTTA aqui não é 'have to' — é 'have got a'. Contexto muda o significado!"
    },
    {
      id: 4,
      titulo: "Gonna Fly Now",
      artista: "Rocky (trilha sonora)",
      trecho_original: "Going to fly now",
      forma_coloquial: "Gonna fly now",
      reducoes_presentes: ["gonna"],
      analise: "GONNA é a redução mais usada na música americana. 'Going to' praticamente não existe em músicas."
    },
    {
      id: 5,
      titulo: "Shoulda Put a Ring on It",
      artista: "Beyoncé — Single Ladies",
      trecho_original: "should have put a ring on it",
      forma_coloquial: "shoulda put a ring on it",
      reducoes_presentes: ["shoulda"],
      analise: "SHOULDA é 'should have'. Usado para arrependimento. Beyoncé fala de algo que não foi feito no passado."
    },
    // ... 15 mais
  ],
  filmes_series: [
    {
      id: 1,
      obra: "The Office",
      personagem: "Michael Scott",
      frase_original: "I don't know what to say",
      frase_reduzida: "I dunno what to say",
      reducoes_presentes: ["dunno"],
      contexto: "Michael em momento de constrangimento típico da série."
    },
    {
      id: 2,
      obra: "Friends",
      personagem: "Joey Tribbiani",
      frase_original: "Could you be any more obvious?",
      frase_reduzida: "Couldja be any more obvious?",
      reducoes_presentes: ["couldja"],
      contexto: "Joey questionando Chandler na icônica estrutura de pergunta da série."
    },
    {
      id: 3,
      obra: "Breaking Bad",
      personagem: "Jesse Pinkman",
      frase_original: "I am going to handle it",
      frase_reduzida: "I'mma handle it",
      reducoes_presentes: ["I'mma"],
      contexto: "Jesse assumindo responsabilidade — tom urbano e coloquial marcante."
    },
    // ... 17 mais
  ],
  conversas_reais: [
    {
      id: 1,
      situacao: "Pedindo ajuda",
      frase_formal: "Could you give me a minute?",
      frase_real: "Couldja gimme a minute?",
      reducoes_presentes: ["couldja", "gimme"],
      analise: "Dois reduções numa frase só. Acontece o tempo todo em conversas reais."
    },
    // ... 19 mais
  ]
}
```

---

## 7. PILAR 3 — CONNECTED SPEECH

**Arquivo:** `pilar3_connected_speech/index.html`

**Estrutura:** 4 seções (fenômenos), cada uma com explicação + exemplos + exercício de reconhecimento.

---

### Fenômeno 1: LINKING (Ligação de Sons)

**O que é:** Quando uma palavra termina em consoante e a próxima começa em vogal, os sons se juntam.

| Escrito | Falado | Explicação |
|---|---|---|
| "turn it off" | "tur-ni-toff" | turn + it + off = soa como uma palavra só |
| "pick it up" | "pi-ki-tup" | pick + it + up se encadeiam |
| "get out" | "ge-TAUT" | o T de get cola no AU de out |
| "come on" | "ka-MON" | come + on = "c'mon" |
| "hold on" | "hol-DON" | o D de hold vai pro ON |

**Dica para o brasileiro:** Em português, fazemos isso também! "Faz assim" → "fa-ZA-sim". Em inglês é igual, mas mais rápido.

---

### Fenômeno 2: ELISION (Sons que Desaparecem)

**O que é:** Alguns sons simplesmente são engolidos na fala rápida.

| Escrito | Falado | O que sumiu |
|---|---|---|
| "next day" | "nex day" | O T de "next" desaparece |
| "last night" | "las night" | O T de "last" desaparece |
| "must be" | "muss be" | O T de "must" desaparece |
| "and" | "'n'" | Vira só o N entre palavras |
| "him" | "'im" | O H inicial some |
| "her" | "'er" | O H inicial some |
| "them" | "'em" | O TH inicial some |

**Regra:** Sons que desaparecem mais: T antes de consoante, H em palavras átonas (him, her, his), TH em them.

---

### Fenômeno 3: ASSIMILATION (Sons que se Transformam)

**O que é:** Um som muda de forma para facilitar a articulação com o som vizinho.

| Escrito | Falado | O que aconteceu |
|---|---|---|
| "did you" | "didja" | D + Y = J (como "dj") |
| "would you" | "wouldja" | D + Y = J |
| "could you" | "couldja" | D + Y = J |
| "what you" | "whatcha" | T + Y = CH (como "tch") |
| "got you" | "gotcha" | T + Y = CH |
| "meet you" | "meetcha" | T + Y = CH |
| "don't you" | "doncha" | T + Y = CH |
| "can't you" | "cancha" | T + Y = CH |

**Regra de ouro:** D + Y = "dj" (como em "jeans"). T + Y = "tch" (como em "tchau"). Isso explica metade das reduções mais confusas!

---

### Fenômeno 4: WEAK FORMS (Palavras que Encolhem)

**O que é:** Palavras pequenas (preposições, artigos, auxiliares) têm uma forma fraca em fala não-enfática.

| Palavra | Forma Forte | Forma Fraca | Exemplo |
|---|---|---|---|
| and | /ænd/ | /ən/ ou /n/ | "fish 'n' chips" |
| to | /tuː/ | /tə/ | "going to" → "gonna" |
| for | /fɔːr/ | /fər/ | "I did it fer you" |
| of | /ɒv/ | /əv/ ou /ə/ | "lotta" = lot of |
| have | /hæv/ | /həv/ ou /əv/ | "shoulda" = should have |
| the | /ðiː/ | /ðə/ | "gimme the ball" → "gimme da ball" |
| a | /eɪ/ | /ə/ | "Give me a sec" → "gimme ə sec" |
| them | /ðem/ | /əm/ | "Tell 'em" |
| him | /hɪm/ | /ɪm/ | "Ask 'im" |
| her | /hɜːr/ | /ər/ | "Call 'er" |

**Por que isso importa:** Em inglês falado rápido, 90% das palavras funcionais usam a forma fraca. Se você espera ouvir "and" como /ænd/, vai perder metade das frases.

---

## 8. PILAR 4 — TREINO DE OUVIDO

**Arquivo:** `pilar4_treino/index.html`

**Mecânica:** Exercício de "ouça → escreva → revele". Como o Pilar 1 do S2 (frases crescentes), mas com foco em decodificação.

**20 exercícios em 4 níveis (5 por nível):**

---

### NÍVEL 1 — Uma redução por frase (Iniciante)

```javascript
const exercicios = [
  {
    id: 1,
    nivel: 1,
    frase_ouvida: "I wanna go.", // o aluno OUVe isso
    transcricao_correta: "I wanna go.",
    forma_formal: "I want to go.",
    reducoes: ["wanna = want to"],
    dica: "Procure o som 'UÂna' — é sempre want to."
  },
  {
    id: 2,
    nivel: 1,
    frase_ouvida: "She's gonna call.",
    transcricao_correta: "She's gonna call.",
    forma_formal: "She is going to call.",
    reducoes: ["gonna = going to"],
    dica: "'GÔna' é sempre going to."
  },
  {
    id: 3,
    nivel: 1,
    frase_ouvida: "I dunno.",
    transcricao_correta: "I dunno.",
    forma_formal: "I don't know.",
    reducoes: ["dunno = don't know"],
    dica: "Som 'daNÔ' = I don't know. Super comum!"
  },
  {
    id: 4,
    nivel: 1,
    frase_ouvida: "Gimme a sec.",
    transcricao_correta: "Gimme a second.",
    forma_formal: "Give me a second.",
    reducoes: ["gimme = give me"],
    dica: "'GÍmi' = give me. Pedir algo de forma natural."
  },
  {
    id: 5,
    nivel: 1,
    frase_ouvida: "It's kinda good.",
    transcricao_correta: "It's kinda good.",
    forma_formal: "It's kind of good.",
    reducoes: ["kinda = kind of"],
    dica: "'KÂINda' = kind of. Suaviza afirmações."
  },
]
```

### NÍVEL 2 — Duas reduções por frase

```javascript
[
  {
    id: 6,
    nivel: 2,
    frase_ouvida: "I wanna gimme a call later.",
    transcricao_correta: "I wanna give you a call later.",
    forma_formal: "I want to give you a call later.",
    reducoes: ["wanna = want to", "ya = you (informal)"]
  },
  {
    id: 7,
    nivel: 2,
    frase_ouvida: "Didja see 'em?",
    transcricao_correta: "Didja see 'em?",
    forma_formal: "Did you see them?",
    reducoes: ["didja = did you", "'em = them"]
  },
  {
    id: 8,
    nivel: 2,
    frase_ouvida: "She's gonna lemme know.",
    transcricao_correta: "She's gonna lemme know.",
    forma_formal: "She is going to let me know.",
    reducoes: ["gonna = going to", "lemme = let me"]
  },
  {
    id: 9,
    nivel: 2,
    frase_ouvida: "Couldja gimme a hand?",
    transcricao_correta: "Couldja gimme a hand?",
    forma_formal: "Could you give me a hand?",
    reducoes: ["couldja = could you", "gimme = give me"]
  },
  {
    id: 10,
    nivel: 2,
    frase_ouvida: "I dunno whatcha mean.",
    transcricao_correta: "I dunno whatcha mean.",
    forma_formal: "I don't know what you mean.",
    reducoes: ["dunno = don't know", "whatcha = what you"]
  },
]
```

### NÍVEL 3 — Três ou mais reduções

```javascript
[
  {
    id: 11,
    nivel: 3,
    frase_ouvida: "I shoulda told 'im I was gonna be late.",
    transcricao_correta: "I shoulda told 'im I was gonna be late.",
    forma_formal: "I should have told him I was going to be late.",
    reducoes: ["shoulda = should have", "'im = him", "gonna = going to"]
  },
  {
    id: 12,
    nivel: 3,
    frase_ouvida: "Doncha wanna come with us?",
    transcricao_correta: "Doncha wanna come with us?",
    forma_formal: "Don't you want to come with us?",
    reducoes: ["doncha = don't you", "wanna = want to"]
  },
  {
    id: 13,
    nivel: 3,
    frase_ouvida: "I coulda told ya, but I dunno.",
    transcricao_correta: "I coulda told ya, but I dunno.",
    forma_formal: "I could have told you, but I don't know.",
    reducoes: ["coulda = could have", "ya = you", "dunno = don't know"]
  },
  {
    id: 14,
    nivel: 3,
    frase_ouvida: "Lemme ask 'im if he's gonna show up.",
    transcricao_correta: "Lemme ask 'im if he's gonna show up.",
    forma_formal: "Let me ask him if he is going to show up.",
    reducoes: ["lemme = let me", "'im = him", "gonna = going to"]
  },
  {
    id: 15,
    nivel: 3,
    frase_ouvida: "Whaddya think? Shoulda we go?",
    transcricao_correta: "Whaddya think? Shoulda we go?",
    forma_formal: "What do you think? Should we have gone?",
    reducoes: ["whaddya = what do you", "shoulda = should have"]
  },
]
```

### NÍVEL 4 — Nativo em velocidade real (Avançado)

```javascript
[
  {
    id: 16,
    nivel: 4,
    frase_ouvida: "I dunno whatcha gonna do but I woulda done it differently.",
    transcricao_correta: "I dunno whatcha gonna do but I woulda done it differently.",
    forma_formal: "I don't know what you are going to do but I would have done it differently.",
    reducoes: ["dunno", "whatcha", "gonna", "woulda"]
  },
  {
    id: 17,
    nivel: 4,
    frase_ouvida: "Y'all shoulda told 'em we were gonna be outta here by eight.",
    transcricao_correta: "Y'all shoulda told 'em we were gonna be outta here by eight.",
    forma_formal: "You all should have told them we were going to be out of here by eight.",
    reducoes: ["y'all", "shoulda", "'em", "gonna", "outta"]
  },
  {
    id: 18,
    nivel: 4,
    frase_ouvida: "Didja tellya boss you coulda done it faster?",
    transcricao_correta: "Didja tell your boss you coulda done it faster?",
    forma_formal: "Did you tell your boss you could have done it faster?",
    reducoes: ["didja", "yer = your", "coulda"]
  },
  {
    id: 19,
    nivel: 4,
    frase_ouvida: "I'mma lemme know if I'm gonna needta come back.",
    transcricao_correta: "I'mma let you know if I'm gonna needta come back.",
    forma_formal: "I am going to let you know if I am going to need to come back.",
    reducoes: ["I'mma", "lemme → letcha", "gonna", "needta"]
  },
  {
    id: 20,
    nivel: 4,
    frase_ouvida: "Couldja gimme lotta space? I kinda hafta think.",
    transcricao_correta: "Couldja gimme a lotta space? I kinda hafta think.",
    forma_formal: "Could you give me a lot of space? I kind of have to think.",
    reducoes: ["couldja", "gimme", "lotta", "kinda", "hafta"]
  },
]
```

---

## 9. ATUALIZAR: `output/index.html`

### Na FASE 7, adicionar após S27:

```html
[S28Reduções do Inglês RealB1-B2 · O inglês que nativos realmente falam](output/sistema28/index.html)
```

### No contador de Progresso Geral, adicionar:

```html
<div>Sistema 28<br>0 / 120</div>
```

---

## 10. NOTAS DE IMPLEMENTAÇÃO PARA CLAUDE CODE

1. **Copiar estrutura HTML** do `sistema2/index.html` — é o template mais próximo (4 pilares, mesmos elementos)
2. **Cor de acento:** trocar a variável CSS de acento para `#F59E0B` em todo o S28
3. **Pilar 1:** usar o mesmo padrão de seletor lateral + card central do `pilar1_frases_crescentes/index.html` do S2
4. **Pilar 2:** 3 abas (Músicas / Filmes / Conversas) com toggle JS simples
5. **Pilar 3:** layout de "card + exemplo" — sem interatividade complexa, só leitura
6. **Pilar 4:** mecânica de "revelar resposta" — botão que mostra a transcrição correta após o usuário tentar
7. **Progresso:** localStorage com chave `s28_progress` — mesmo padrão dos outros sistemas
8. **Não mexer** em nenhum arquivo de S1–S27 exceto `output/index.html`

---

## 11. SEQUÊNCIA DE IMPLEMENTAÇÃO (para Claude Code)

```
1. Criar output/sistema28/index.html (página principal)
2. Criar output/sistema28/pilar1_reducoes/index.html (50 reduções)
3. Criar output/sistema28/pilar2_contexto/index.html (músicas/filmes)
4. Criar output/sistema28/pilar3_connected_speech/index.html (fenômenos)
5. Criar output/sistema28/pilar4_treino/index.html (exercícios)
6. Editar output/index.html (adicionar S28 na FASE 7 + contador)
7. Rodar auto_push.bat para publicar
```

---

*Documento gerado em 18/07/2026 — Pronto para colar no Claude Code*
