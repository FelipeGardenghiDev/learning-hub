> [!WARNING]
> ### ⚠️ PROJETO LEGADO (v1) — SUBSTITUÍDO PELA VERSÃO 2
> Este repositório preserva a **Versão 1 (Legada)** do site oficial da banda Revanche (construída originalmente com HTML5 e Vanilla JS).
> 
> A versão oficial, moderna e atualmente em produção no domínio oficial [bandarevanche.com.br](https://bandarevanche.com.br) foi completamente reconstruída em **Next.js 16 (App Router), React 19, TypeScript estrito e Tailwind CSS v4**.
> 
> 👉 **Acesse o repositório atual da v2:** **[FelipeGardenghiDev/revanche-website-v2](https://github.com/FelipeGardenghiDev/revanche-website-v2)**

---

<div align="center">

# 🎸 REVANCHE — Site Oficial (v1 - Legada)

**Tributo visceral ao emo dos anos 2000 e à Fresno.**

[![Site Oficial v2](https://img.shields.io/badge/🌐_Site_Oficial_(v2)-bandarevanche.com.br-AB2217?style=for-the-badge)](https://bandarevanche.com.br)
[![Repositório v2](https://img.shields.io/badge/Repositório-v2_(Next.js_16)-blue?style=for-the-badge)](https://github.com/FelipeGardenghiDev/revanche-website-v2)
[![Status](https://img.shields.io/badge/Status-Legado_/_Arquivado-lightgrey?style=for-the-badge)]()

</div>

---

## 📖 Sobre o Projeto

Site oficial da **Revanche**, banda de tributo ao universo emo dos anos 2000 com foco na Fresno. O site apresenta a banda, divulga a agenda de shows, exibe galerias de fotos dos membros e centraliza os canais de contato e imprensa.

Desenvolvido com tecnologias puramente front-end para funcionar perfeitamente no **GitHub Pages**, sem necessidade de back-end ou banco de dados.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| **HTML5** | Estrutura semântica das páginas |
| **Tailwind CSS** (via CDN) | Estilização utilitária e responsividade |
| **JavaScript (Vanilla)** | Interatividade: menu mobile, lightbox, carrossel, agenda |
| **Font Awesome 6** | Ícones |
| **Google Fonts — Montserrat** | Tipografia oficial da banda |
| **GitHub Gist** | Fonte de dados dinâmica para a agenda de shows |
| **Google Analytics 4** | Monitoramento de tráfego e comportamento |

---

## ✨ Funcionalidades

- 🎨 **Parallax background** com foto da banda em todas as páginas
- 📱 **Totalmente responsivo** — menu hamburguer, grid adaptativo, carrossel mobile
- 🔍 **SEO completo** — meta tags, Open Graph (WhatsApp/Facebook) e Twitter Card
- ♿ **Acessível** — navegação por teclado, `aria-label`, `aria-expanded`, `focus-visible`
- 🖼️ **Lightbox** nas galerias de fotos dos membros — navegação por setas, teclado (← →) e swipe mobile
- 📅 **Agenda dinâmica** via GitHub Gist — sem precisar mexer no código para atualizar shows
- 🎟️ **Botão destaque** dinâmico via GitHub Gist — exibe o próximo show com link de ingresso
- 🎵 **Embed do Spotify** com a playlist oficial
- 🤝 **Carrossel de parceiros** com suporte a drag/swipe no mobile
- ⚡ **Lazy loading** em todas as imagens abaixo da dobra
- 🛒 **Loja** (em desenvolvimento)

---

## 📁 Estrutura do Projeto

```
revanche-website/
│
├── index.html              # Página principal
├── felipe.html             # Página do Felipe Gardenghi
├── edu.html                # Página do Eduardo Opaleiro
├── leo.html                # Página do Leonan Artal
├── yago.html               # Página do Yago Borges
├── loja.html               # Loja (em desenvolvimento)
│
└── assets/
    ├── img/
    │   ├── Logo-Revanche-PNG.png
    │   ├── Felipe.jpg
    │   ├── Eduardo.jpg
    │   ├── Leonan.jpg
    │   ├── Yago.jpg
    │   ├── banda/
    │   │   └── banda.jpg           # Foto usada no parallax
    │   ├── felipe/                 # Galeria de fotos (Fe 1-6.JPG)
    │   ├── edu/                    # Galeria de fotos (Edu 1-6.JPG)
    │   ├── leo/                    # Galeria de fotos (Leo 1-6.JPG)
    │   └── yago/                   # Galeria de fotos (Ynhago 1-6.JPG)
    ├── parceiros/                  # Logos dos parceiros
    └── merch/                      # Imagens de merchandise
```

---

## 🗓️ Como Atualizar a Agenda de Shows

A agenda é carregada dinamicamente a partir de um **GitHub Gist**, sem precisar alterar o código do site.

**Acesse:** [gist.github.com](https://gist.github.com) → busque pelo arquivo `shows.json`

### Formato do JSON:

```json
{
  "_instrucoes": "Adicione shows no array 'shows'. Array vazio [] exibe 'EM BREVE ANUNCIAREMOS MAIS DATAS!'.",
  "_exemplo": {
    "data": "30 AGO 2026",
    "local": "Toca do Jack",
    "cidade": "Ribeirão Preto/SP",
    "status": "confirmado",
    "ingresso_url": "https://link-para-ingresso.com",
    "ingresso_texto": "COMPRAR INGRESSO"
  },
  "_status_opcoes": "confirmado = exibe link | em_breve = exibe 'INFO EM BREVE'",
  "shows": [
    {
      "data": "30 AGO 2026",
      "local": "Toca do Jack",
      "cidade": "Ribeirão Preto/SP",
      "status": "confirmado",
      "ingresso_url": "https://link-para-ingresso.com",
      "ingresso_texto": "COMPRAR INGRESSO"
    }
  ]
}
```

| Campo | Valores possíveis |
|---|---|
| `status` | `"confirmado"` — exibe link de ingresso \| `"em_breve"` — exibe "INFO EM BREVE" |
| `shows: []` | Exibe mensagem "Em breve mais datas!" |

> ⚠️ **Atenção com o cache:** a URL do Gist utilizada é sempre a versão mais recente (`/raw/shows.json`), com `?nocache=Date.now()` para garantir que o navegador não use versão antiga.

---

## 🎟️ Como Atualizar o Botão Destaque

O botão principal da home exibe o próximo show em destaque, carregado de um **GitHub Gist** separado (`show-destaque.json`).

**Acesse:** [gist.github.com](https://gist.github.com) → busque pelo arquivo `show-destaque.json`

### Formato do JSON:

```json
{
  "_instrucoes": "Para exibir show: preencha o array 'destaque' com 1 objeto. Para ocultar: deixe o array vazio [].",
  "_exemplo": {
    "evento": "NOME DO EVENTO",
    "cidade": "Cidade/UF",
    "data": "DD/MM/AAAA",
    "ingresso_url": "https://link-dos-ingressos",
    "ingresso_texto": "INGRESSOS JÁ DISPONÍVEIS!"
  },
  "destaque": [
    {
      "evento": "RESSACA EMO",
      "cidade": "Ribeirão Preto/SP",
      "data": "28/02/2026",
      "ingresso_url": "https://link-dos-ingressos",
      "ingresso_texto": "INGRESSOS JÁ DISPONÍVEIS!"
    }
  ]
}
```

| Estado | Comportamento |
|---|---|
| `destaque: []` | Exibe "FIQUE LIGADO QUE LOGO ANUNCIAREMOS MAIS DATAS!" |
| Com objeto, sem `ingresso_url` | Exibe nome do show, sem link |
| Com objeto e `ingresso_url` | Exibe nome do show com link abrindo em nova aba |

---

## 🖥️ Como Rodar Localmente

Por ser um projeto puramente estático, basta abrir os arquivos em qualquer servidor local:

```bash
# Opção 1: VS Code com extensão Live Server
# Clique com botão direito em index.html → "Open with Live Server"

# Opção 2: Python
python -m http.server 8000

# Opção 3: Node.js (npx)
npx serve .
```

---

## 🎨 Paleta de Cores

| Nome | Hex | Uso |
|---|---|---|
| `rev-primary` | `#AB2217` | Vermelho — cor principal da marca |
| `rev-secondary` | `#D9CDB5` | Off-white vintage — texto e detalhes |
| `rev-black` | `#000000` | Fundo |

---

## 👥 A Banda

| Membro | Instrumento | Página |
|---|---|---|
| Felipe Gardenghi | Vocal / Guitarra | [felipe.html](felipe.html) |
| Eduardo Opaleiro | Guitarra / Voz de Apoio | [edu.html](edu.html) |
| Yago Borges | Baixo / Voz de Apoio | [yago.html](yago.html) |
| Leonan Artal | Bateria | [leo.html](leo.html) |

---

## 🤝 Parceiros

- [Caramujo Store](https://instagram.com/caramujo_store)
- [Toca do Jack](https://instagram.com/toca_pub_underground)
- [Os Pirata](https://instagram.com/ospirata_sao_carlos)

---

## 📬 Contato

- 🌐 [bandarevanche.com.br](https://bandarevanche.com.br)
- 📧 contato@bandarevanche.com
- 📱 [Instagram](https://instagram.com/banda.revanche) · [TikTok](https://tiktok.com/@bandarevanche) · [Spotify](https://open.spotify.com/playlist/3uoiG5vPNcJg1i81Dlv5Ae)

---

<div align="center">

Desenvolvido por **FG SOFTWARE** &copy; 2026 REVANCHE — Todos os direitos reservados.

</div>
