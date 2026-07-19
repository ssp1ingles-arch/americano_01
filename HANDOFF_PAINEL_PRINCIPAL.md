# HANDOFF — Novo Painel Principal + Sistema 03+
**Inglês para Brasileiros · ssp1ingles-arch.github.io/americano_01**
**Status:** Pronto para implementação via Claude Code
**Data:** 2026-07-19

---

## VISÃO GERAL

Criar um novo painel raiz que sirva de entrada para todos os sistemas da plataforma. A plataforma deixa de começar direto nos 27 sistemas e passa a ter uma camada acima — três grandes portais — cada um com identidade própria.

```
output/index.html  ← NOVO (painel dos 3 portais)
       │
       ├── output/sistema01/index.html  ← atual output/index.html (movido)
       │         └── S1 a S27 (intactos, sem alteração de conteúdo)
       │
       ├── output/sistema02/index.html  ← HANDOFF_SISTEMA28.md (já entregue)
       │         └── 4 pilares de Reduções
       │
       └── output/sistema03/index.html  ← baseado em Sala_001 (ver Etapa 4)
                 └── sistema04, 05... se o conteúdo exigir
```

---

## ETAPA 1 — MOVER O HUB ATUAL

### 1.1 Criar `output/sistema01/index.html`

Copiar o conteúdo completo de `output/index.html` atual para `output/sistema01/index.html`.

Ajustes obrigatórios no arquivo copiado:
- Ler todos os 27 sistemas e escolher um **título curto e honesto** para o Sistema 01 (ex: "Inglês do Zero ao Avançado" ou "Base Completa — 27 Sistemas"). Decidir com base no conteúdo — não usar placeholder.
- Trocar o link "← Painel Principal" do breadcrumb para `../index.html`
- Manter todos os links internos para S1–S27 funcionando com caminhos relativos corretos (ex: `../sistema1/index.html` em vez de `sistema1/index.html`)

### 1.2 Atualizar links em S1–S27

Em **todos** os arquivos `output/sistema*/index.html` e suas sub-páginas, toda ocorrência de:
```
href="../../output/index.html"
href="../index.html"  (quando apontar para o hub geral)
```
deve ser atualizada para apontar para `output/sistema01/index.html` no nível correto.

**Atenção:** Os links internos entre lições dentro de cada sistema (ex: `../01_pronomes_sujeito/index.html`) **não mudam** — só os links que sobem até o hub principal.

---

## ETAPA 2 — CRIAR O NOVO `output/index.html` (Painel Principal)

### Design

```css
/* Paleta do painel — neutra, serve de entrada para os 3 portais */
--bg: #0a0a0a;
--surface: #141414;
--border: #222;
--text: #e5e5e5;
--muted: #666;

/* Cada portal tem sua cor — extrair das respectivas plataformas */
--s01-accent: /* cor do sistema01 — verificar no CSS atual */;
--s02-accent: #F59E0B;   /* âmbar — Reduções */
--s03-accent: /* decidir após analisar Sala_001 — sugestão: #6366F1 índigo */;

font-family: 'Space Grotesk', sans-serif;
font-family: 'Inter', sans-serif;
```

### Estrutura HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inglês para Brasileiros — Escolha seu Caminho</title>
  <!-- mesmos imports de fonte e CSS da plataforma atual -->
</head>
<body>

  <header class="painel-header">
    <div class="marca">◈ Inglês para Brasileiros</div>
    <h1>Escolha seu<br><em>caminho</em></h1>
    <p class="sub">Três sistemas independentes. Cada um com propósito, ritmo e formato próprios.</p>
  </header>

  <main class="portais-grid">

    <!-- PORTAL 01 -->
    <a href="sistema01/index.html" class="portal-card" data-sistema="01">
      <div class="portal-num">01</div>
      <div class="portal-icon"><!-- ícone decidido pelo Claude Code com base no conteúdo --></div>
      <h2 class="portal-title"><!-- título decidido pelo Claude Code --></h2>
      <p class="portal-desc"><!-- descrição de 1 linha baseada nos 27 sistemas --></p>
      <div class="portal-meta">
        <span>27 sistemas</span>
        <span>A1 → C1</span>
        <span>Completo</span>
      </div>
      <div class="portal-cta">Entrar →</div>
    </a>

    <!-- PORTAL 02 -->
    <a href="sistema02/index.html" class="portal-card" data-sistema="02">
      <div class="portal-num">02</div>
      <div class="portal-icon">🎙️</div>
      <h2 class="portal-title">Reduções do Inglês Real</h2>
      <p class="portal-desc">O inglês que nativos falam — não o que ensinam. Wanna, gonna, gotta e mais 47 reduções do dia a dia.</p>
      <div class="portal-meta">
        <span>4 pilares</span>
        <span>B1–B2</span>
        <span>50 reduções</span>
      </div>
      <div class="portal-cta">Entrar →</div>
    </a>

    <!-- PORTAL 03 (e 04, 05... se houver overflow) -->
    <a href="sistema03/index.html" class="portal-card" data-sistema="03">
      <div class="portal-num">03</div>
      <div class="portal-icon"><!-- decidido após analisar Sala_001 --></div>
      <h2 class="portal-title"><!-- título extraído do conteúdo de Sala_001 --></h2>
      <p class="portal-desc"><!-- descrição extraída do conteúdo --></p>
      <div class="portal-meta">
        <!-- preencher após análise -->
      </div>
      <div class="portal-cta">Entrar →</div>
    </a>

  </main>

  <footer class="painel-footer">
    <p>Plataforma completa · Do zero à fluência · Sem mensalidade</p>
  </footer>

</body>
</html>
```

### CSS do painel (adicionar ao arquivo)

```css
.painel-header {
  text-align: center;
  padding: 80px 24px 48px;
}

.painel-header h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  line-height: 1.1;
  margin: 16px 0;
}

.painel-header em {
  font-style: normal;
  /* gradiente ou cor de destaque — decidir com base no visual geral */
  color: #e5e5e5;
  opacity: 0.6;
}

.portais-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px 80px;
}

.portal-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text);
  transition: border-color 0.2s, transform 0.2s;
}

.portal-card:hover {
  border-color: var(--accent-for-this-card);
  transform: translateY(-2px);
}

/* Acento por card — usando data-sistema */
.portal-card[data-sistema="01"] { --accent-for-this-card: /* cor do S01 */; }
.portal-card[data-sistema="02"] { --accent-for-this-card: #F59E0B; }
.portal-card[data-sistema="03"] { --accent-for-this-card: #6366F1; }

.portal-num {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--accent-for-this-card);
  text-transform: uppercase;
}

.portal-title {
  font-size: 1.4rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  margin: 0;
}

.portal-desc {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.5;
  flex: 1;
}

.portal-meta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.portal-meta span {
  font-size: 0.75rem;
  color: var(--muted);
  background: var(--border);
  padding: 3px 8px;
  border-radius: 4px;
}

.portal-cta {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-for-this-card);
  margin-top: 8px;
}
```

---

## ETAPA 3 — IMPLEMENTAR SISTEMA 02 (Reduções)

Ler o arquivo `HANDOFF_SISTEMA28.md` na raiz do projeto e implementar integralmente conforme a **Seção 11 — Sequência de Implementação** daquele documento.

O Sistema 02 vai para `output/sistema02/` (não `output/sistema28/` — adaptar os caminhos do HANDOFF conforme necessário).

---

## ETAPA 4 — ANALISAR SALA_001 E CRIAR SISTEMA 03+

Esta é a etapa mais importante. O Claude Code deve executar os passos abaixo em sequência.

### 4.1 Inventário

```bash
# Listar todos os arquivos da pasta
Get-ChildItem -Recurse "C:\Users\Samukk99\Documents\Claude Code Projetos\Sala_001" | Select-Object FullName, Extension, Length
```

### 4.2 Leitura e classificação

Ler **cada arquivo** da pasta. Para cada um, extrair:
- Tema principal
- Tipo de conteúdo (vocabulário, gramática, diálogo, exercício, áudio, texto, etc.)
- Nível aparente (A1 / A2 / B1 / B2 / C1)
- Formato (tabela, lista, narrativa, Q&A, etc.)

Registrar internamente um **mapa de conteúdo** com todos esses dados antes de criar qualquer arquivo HTML.

### 4.3 Decisão de arquitetura

Com base no mapa de conteúdo:

**Se o conteúdo total for equivalente a até ~60 unidades:**
→ Criar somente `output/sistema03/` com pilares internos

**Se o conteúdo total for equivalente a 60–150 unidades:**
→ Criar `output/sistema03/` e `output/sistema04/`, dividindo por nível ou tema

**Se o conteúdo total for acima de 150 unidades:**
→ Criar quantos sistemas forem necessários (sistema03, 04, 05...), sempre mantendo coerência temática dentro de cada um

**Regra de divisão:** nunca cortar um tema no meio. Se "verbos irregulares" cabe em 40 unidades, vai inteiro num sistema — não divide entre dois.

### 4.4 Regras de criação de conteúdo

**OBRIGATÓRIO — Formatos diferentes dos Sistemas 01 e 02:**

O Sistema 01 já usa: cards de lição, frases crescentes, 1000 frases, textos curtos, shadowing.
O Sistema 02 usa: cards de redução, abas de contexto, cards de fenômeno, treino de transcrição.

Para o Sistema 03+, **criar formatos novos**. Sugestões (escolher os mais adequados ao conteúdo da Sala_001):

| Formato | Descrição |
|---|---|
| **Mapa Mental Interativo** | Conceito central + ramificações clicáveis |
| **Diálogo Revelado** | Frase por frase, o aluno adivinha o próximo antes de ver |
| **Antes e Depois** | Frase errada → explicação → frase correta |
| **Quiz de Contexto** | 4 opções, mas a resposta depende da situação |
| **Linha do Tempo** | Conteúdo organizado cronologicamente (tempos verbais, evolução) |
| **Cartão de Memória** | Frente/verso — sem múltipla escolha, só recall puro |
| **Comparação PT↔EN** | Dois textos lado a lado — mesmo conteúdo nos dois idiomas |
| **Erro Clássico** | "O brasileiro fala X. O nativo fala Y. Por quê?" |
| **Imersão Situacional** | Uma situação (aeroporto, reunião, jantar) com todo o vocabulário integrado |

**Usar pelo menos 3 formatos diferentes ao longo do Sistema 03+.** Nunca usar o mesmo formato duas vezes seguidas em blocos grandes.

**OBRIGATÓRIO — Do mais fácil para o mais avançado:**
- Cada sistema começa no menor nível do conteúdo daquele sistema
- A progressão é gradual — nunca pular mais de um nível entre unidades consecutivas
- Sinalizar o nível em cada unidade (A1 / A2 / B1 / B2)

**OBRIGATÓRIO — Não desperdiçar conteúdo:**
- Todo arquivo útil de Sala_001 deve virar ao menos uma unidade
- Conteúdo redundante: mesclar em uma unidade única, não descartar
- Conteúdo muito curto: agrupar com conteúdos relacionados

**PERMITIDO — Reformular livremente:**
- Reescrever explicações com linguagem mais clara
- Criar exemplos adicionais para ilustrar o conteúdo original
- Reorganizar a ordem de apresentação para melhorar a progressão pedagógica

### 4.5 Estrutura mínima de cada sistema criado

```
output/sistema0X/
├── index.html          ← hub do sistema (lista pilares/módulos)
└── [modulo_nome]/
    └── index.html      ← conteúdo do módulo
```

O hub de cada sistema deve seguir o mesmo padrão visual dos outros, mas com **cor de acento própria** (diferente de S01 e S02).

Sugestão de paleta para S03+:
- Sistema 03: `#6366F1` (índigo)
- Sistema 04: `#10B981` (esmeralda)
- Sistema 05: `#EC4899` (rosa)
- Sistema 06+: continuar com cores do espectro, nunca repetir

---

## ETAPA 5 — ATUALIZAR PAINEL PRINCIPAL COM SISTEMAS CRIADOS

Depois de criar todos os sistemas baseados em Sala_001, voltar ao `output/index.html` (painel principal) e:

- Adicionar um card para cada novo sistema criado
- Preencher título, descrição, metadados e cor de acento corretos
- Se houver mais de 3 sistemas no total, ajustar o grid para acomodar todos (ex: `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`)

---

## ETAPA 6 — VERIFICAÇÃO FINAL

Antes de rodar o `auto_push.bat`, verificar:

- [ ] `output/index.html` abre o painel com os 3+ portais
- [ ] Portal 01 → leva para `output/sistema01/index.html` (hub dos 27 sistemas)
- [ ] Portal 02 → leva para `output/sistema02/index.html` (Reduções)
- [ ] Portal 03+ → leva para os sistemas da Sala_001
- [ ] Dentro de cada sistema, o botão "← Voltar" sobe um nível corretamente
- [ ] Nenhum link quebrado nos sistemas S1–S27 originais
- [ ] Progresso salvo no localStorage não foi apagado (checar chaves existentes)

---

## ETAPA 7 — PUBLICAR

```bash
auto_push.bat
```

---

## RESUMO DA SEQUÊNCIA

```
1. Mover output/index.html → output/sistema01/index.html (ajustar links)
2. Criar output/index.html novo (painel dos portais)
3. Implementar output/sistema02/ (ler HANDOFF_SISTEMA28.md)
4. Ler e mapear toda a pasta Sala_001
5. Decidir quantos sistemas criar (03, 04, 05...)
6. Criar output/sistema03/ ... output/sistema0X/ com conteúdo de Sala_001
7. Atualizar output/index.html com todos os portais
8. Verificação final de links
9. auto_push.bat
```

---

*Documento gerado em 19/07/2026 — Colar no Claude Code e pedir para executar etapa por etapa*
