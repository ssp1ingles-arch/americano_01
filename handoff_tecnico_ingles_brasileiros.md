# HANDOFF TÉCNICO — INGLÊS PARA BRASILEIROS
# Atualizado: Julho 2026

---

## 1. VISÃO GERAL DO PROJETO

**Plataforma:** Inglês para Brasileiros  
**URL pública:** https://ssp1ingles-arch.github.io/americano_01/output/index.html  
**Repositório:** https://github.com/ssp1ingles-arch/americano_01  
**Branch:** `main`  
**Deploy:** GitHub Pages (pasta `output/` na raiz do repositório)

**Workflow fixo:**
1. Usuário cola transcrição de vídeo no Cowork
2. Cowork analisa e gera `sistemaN_conteudo.md` → salva direto em `Americano_01`
3. Usuário copia o prompt embutido no arquivo → cola no Claude Code (VS Code)
4. Claude Code cria todos os HTMLs
5. Usuário roda `auto_push.bat` para publicar

---

## 2. CAMINHOS CRÍTICOS

| Referência | Caminho |
|-----------|---------|
| Pasta raiz do projeto | `C:\Users\Samukk99\Documents\Claude Code Projetos\Americano_01` |
| Onde salvar conteúdos | Direto na pasta raiz (não em subpastas, não em outputs) |
| HTMLs do site | `Americano_01\output\` |
| Hub de cada sistema | `output\sistemaN\index.html` |
| Página de prática | `output\sistemaN\[pasta]\index.html` |
| Index principal | `output\index.html` |

**Caminho bash (shell):** `/sessions/happy-ecstatic-meitner/mnt/Americano_01/`

---

## 3. AUTO_PUSH.BAT — VERSÃO CORRETA

```bat
@echo off
cd "C:\Users\Samukk99\Documents\Claude Code Projetos\Americano_01"
git add .
git commit -m "Atualizacao automatica — %date% %time%"
git push origin main
echo.
echo ================================
echo  Push concluido com sucesso!
echo ================================
pause
```

**ATENÇÃO:** O `cd` deve ir para a raiz `Americano_01`, NÃO para `Americano_01\output`. O `.git` fica na raiz.

---

## 4. GIT — CONFIGURAÇÃO

```bash
git config --global user.email "usuario.ia.appi@gmail.com"
git config --global user.name "ia-appi"
```

Se o `.git` sumir, recriar com:
```bash
git init
git remote add origin https://github.com/ssp1ingles-arch/americano_01.git
git fetch origin
git branch -M main
git add .
git commit -m "Reinicialização do repositório"
git push origin main --force
```

---

## 5. SISTEMAS EXISTENTES — NÃO RECRIAR

| Sistema | Nome | Arquivo de conteúdo | Observação |
|---------|------|---------------------|------------|
| S1 | — | — | Sem arquivo de conteúdo |
| S2–S7 | — | `sistema2–7_conteudo.md` | ✅ Existem |
| S8 | — | Sem arquivo | Verificar se HTML existe |
| S9 | Went ou Gone? | `sistema9_conteudo.md` | ✅ (verificar se foi movido de outputs) |
| S10 | Teste seu Nível | `sistema10_conteudo.md` | ✅ (verificar se foi movido de outputs) |
| S11 | Como Aprender Inglês | `sistema11_conteudo.md` | ✅ |
| S12 | Rotina da Noite | `sistema12_conteudo.md` | ✅ |
| S13 | Vocabulário A1 | `sistema13_conteudo.md` | ✅ |
| S14 | Vida Saudável | `sistema14_conteudo.md` | ✅ |

**Próximo:** S15 em diante.

**Regra anti-duplicata:** Antes de criar qualquer sistema, verificar os arquivos `sistemaN_conteudo.md` existentes na pasta raiz. Se o conteúdo do vídeo já foi processado, não recriar — nem mesmo com nome diferente.

---

## 6. IDENTIDADE VISUAL — DESIGN SYSTEM

**Fontes:** Google Fonts — Space Grotesk + Inter  
**Framework:** HTML5 + CSS3 + JavaScript vanilla (sem frameworks)  
**Cor:** cada sistema tem uma cor distinta

### Cores já usadas (evitar repetição):
- S9: `#06B6D4` ciano
- S10: `#84CC16` verde lima
- S11: `#FB923C` laranja
- S12: `#818CF8` índigo
- S13: `#2DD4BF` turquesa
- S14: `#34D399` verde esmeralda

---

## 7. PADRÕES DE HTML — OBRIGATÓRIOS EM TODO SISTEMA

- Breadcrumb em todas as páginas
- Detecção de origem: `?origem=jornada` via JavaScript
- Botões fixos no mobile
- Font-size mínimo: 16px
- Tabelas: sempre `overflow-x: auto` no container
- localStorage para rastreamento de progresso
- Estrutura mínima: Hub (`output/sistemaN/index.html`) + Conteúdo (`output/sistemaN/[pasta]/index.html`)

---

## 8. FORMATOS DE SISTEMA POR TIPO

### Tipo A — Q&A (S12, S14)
Vídeos com perguntas e respostas curtas sobre rotina ou hábito.
- 3 modos: Aprender · Praticar · Quiz Aleatório
- Seletor de temas (tabs ou dropdown)
- Modo Aprender: pergunta → resposta → "Ver tradução"
- Modo Praticar: campo de texto → "Ver resposta"
- Modo Quiz: múltipla escolha com 4 opções

### Tipo B — Vocabulário (S13)
Vídeos com palavras e frases de exemplo.
- 4 modos: Flashcard · Lista · Praticar · Quiz
- Modo Lista: tabela com busca + filtro por categoria
- Modo Praticar: frase com lacuna (fill in the blank)
- Modo Quiz: tradução PT → opções EN

### Tipo C — Gramática/Comparativo (S9)
Vídeos que comparam estruturas ou explicam nuances de uso.
- Ênfase em contexto e situações reais
- Exemplos contrastivos
- Tabelas comparativas com overflow-x

### Tipo D — Teste/Avaliação (S10)
Sistema de diagnóstico de nível A1→C2.
- Questões progressivas com feedback e explicação
- Resultado com nível e recomendações

### Tipo E — Guia/Método (S11)
Artigo estruturado em seções, sem quiz.
- Seções com títulos claros
- Links para outros sistemas quando relevante

---

## 9. ⚠️ REGRA PRINCIPAL PARA ANÁLISE DE TRANSCRIÇÕES

> **Foco em VOCABULÁRIO e suas NUANCES — nunca nas regras gramaticais ou métodos de ensino do vídeo.**

Ao receber uma transcrição, o Cowork deve:

1. **Extrair o vocabulário real:** palavras, expressões, phrasal verbs, colocações e frases que aparecem no vídeo
2. **Priorizar nuances:** diferenças de registro (formal/informal), contexto de uso, falsas traduções, armadilhas comuns para brasileiros
3. **Ignorar a metodologia do professor:** a sequência pedagógica, os exercícios do vídeo, as explicações de regra — tudo isso é irrelevante
4. **Melhorar e completar:** se o vídeo tiver lacunas óbvias, acrescentar vocabulário relacionado de mesmo nível
5. **Corrigir:** imprecisões de tradução ou uso inadequado devem ser corrigidos antes de incluir
6. **Unificar vídeos:** quando dois vídeos têm conteúdo complementar do mesmo tema/nível, gerar um único sistema

**Exemplo:**
- Vídeo ensina: "use 'went' for simple past, use 'have gone' for present perfect" → isso é regra, ignorar como conteúdo principal
- Arquivo deve ter: contextos reais, quando brasileiros erram, nuances went/have gone/have been em conversas reais → isso é vocabulário em uso

---

## 10. ESTRUTURA DO ARQUIVO `sistemaN_conteudo.md`

```
# SISTEMA N — NOME
# Conteúdo completo para o Claude Code

## IDENTIDADE VISUAL
Nome, Subtítulo, Cor (hex), Ícone (emoji), Fonte (título do vídeo)

## O QUE É ÚNICO NO SISTEMA N
Diferencial em relação aos outros sistemas (1 parágrafo)

## ESTRUTURA — [N TEMAS / CATEGORIAS]
Lista dos agrupamentos com descrição

## CONTEÚDO PRINCIPAL
Tabelas, Q&A, listas — dependendo do tipo

## VOCABULÁRIO CHAVE (quando aplicável)
Tabela PT | EN com 15–25 palavras essenciais

## PROMPT COMPLETO PARA O CLAUDE CODE — SISTEMA N
[bloco de código com instruções para criar os HTMLs]
```

---

## 11. PROMPT PARA CLAUDE CODE — PADRÃO

```
INSTRUÇÃO DE EXECUÇÃO: Execute TODOS os passos abaixo em sequência
sem pedir confirmações intermediárias. Reporte apenas ao final.

PROJETO: Sistema N — Nome
PASTA RAIZ: C:\Users\Samukk99\Documents\Claude Code Projetos\Americano_01

IDENTIDADE VISUAL: [nome, subtítulo, cor hex, ícone]

ESTRUTURA DE PASTAS:
output/sistemaN/index.html
output/sistemaN/[pasta]/index.html

LAYOUT: [descrição detalhada de cada seção e modo]

DADOS: [instruir a ler sistemaN_conteudo.md para os dados completos]

HUB: [badge, título, stats, cards com links]

ATUALIZAR output/index.html:
- Adicionar card SN na seção correta (cor, ícone)
- Adicionar no dropdown nav

PADRÕES: breadcrumb, ?origem=jornada, mobile buttons, font 16px.
Reportar ao final.
```

---

## 12. SEÇÕES DO INDEX PRINCIPAL

Os sistemas são agrupados no `output/index.html`:
- **GRAMÁTICA** — estruturas, comparativos, nuances de uso
- **CONVERSAÇÃO** — Q&A, rotinas, diálogos
- **VOCABULÁRIO & FRASES** — listas, flashcards, frases de exemplo
- **TESTE & DIAGNÓSTICO** — avaliações de nível
- **GUIAS** — artigos e métodos

Sempre informar ao Claude Code em qual seção inserir o novo card.

---

## 13. REGRAS INVIOLÁVEIS — CHECKLIST

- [ ] Salvar `.md` direto em `Americano_01` (nunca em outputs do Cowork)
- [ ] Verificar duplicatas antes de criar
- [ ] Claude Code cria HTMLs — Cowork só cria `.md`
- [ ] Foco em vocabulário e nuances, não em metodologia do vídeo
- [ ] Melhorar, completar e corrigir o conteúdo — não copiar cegamente
- [ ] Unificar vídeos complementares quando fizer sentido
- [ ] auto_push.bat: `cd` sempre na raiz, nunca em `\output`
- [ ] Git identity: `usuario.ia.appi@gmail.com` / `ia-appi`
