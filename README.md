# 📚 Learning Hub — Fundamentos, Exercícios & Laboratório Prático

> Repositório consolidado com desafios, projetos práticos de cursos e laboratórios de estudo em desenvolvimento web, lógica de programação e algoritmos.

---

## 🎯 Objetivo

Centralizar em uma estrutura limpa e navegável os projetos de fundamentos desenvolvidos ao longo da formação técnica (cursos da Alura, desafios de código e pequenos utilitários), mantendo o histórico de aprendizado organizado sem fragmentar múltiplos micro-repositórios.

---

## 🗂️ Estrutura do Repositório

```text
learning-hub/
├── alura-fundamentos-web/       # HTML5 Semântico, CSS3, Flexbox, Grid e Bootstrap
│   ├── aluraplus/               # Landing page responsiva de streaming
│   ├── meteora-vestimentas/     # E-commerce fictício de moda com Bootstrap
│   └── serenatto-cafe/          # Website institucional de cafeteria & bistrô
├── alura-javascript/            # Lógica, Manipulação de DOM, APIs do Navegador & Estado
│   ├── alugames/                # Gerenciamento de status de aluguel de board games
│   ├── fokus/                   # Timer Pomodoro com controle de áudio e temas
│   ├── gardenbank/              # Validação de formulários e regras de negócio no front
│   ├── jogo-numero-secreto/     # Jogo interativo com Web Speech API (voz)
│   └── lista-de-compras/        # Lista de compras persistida com LocalStorage
├── mini-projetos/               # Protótipos, experimentos e outros estudos
│   ├── code-connect/            # Feed e modal de publicação para devs
│   ├── organize/                # Sistema básico de gestão empresarial em PHP
│   └── pong-copilot/            # Pong clássico desenvolvido em p5.js
└── projetos-academicos/         # Projetos integradores e trabalhos acadêmicos
    └── flora-acessorios/        # Sistema de gestão de vendas e faturamento (UNIVESP)
```

---

## 📋 Detalhamento dos Projetos

### 🌐 Alura: Fundamentos Web

| Projeto | Tecnologias | Descrição / Aprendizados |
| :--- | :--- | :--- |
| [`aluraplus`](./alura-fundamentos-web/aluraplus) | HTML5, CSS3, Flexbox | Landing page moderna inspirada em serviços de streaming, explorando hierarquia tipográfica, botões interativos e responsividade com media queries. |
| [`meteora-vestimentas`](./alura-fundamentos-web/meteora-vestimentas) | HTML5, CSS3, Bootstrap 5 | E-commerce de moda utilizando componentes do Bootstrap, carrossel de banners, cards de produtos responsivos e modal de newsletter. |
| [`serenatto-cafe`](./alura-fundamentos-web/serenatto-cafe) | HTML5, CSS3, Grid | Website de cafeteria com cardápio dinâmico, paleta acolhedora e estrutura semântica para acessibilidade. |

---

### ⚡ Alura: JavaScript & APIs Web

| Projeto | Tecnologias | Descrição / Aprendizados |
| :--- | :--- | :--- |
| [`alugames`](./alura-javascript/alugames) | JavaScript, DOM | Controle de empréstimo e devolução de jogos, praticando alternância dinâmica de classes CSS e contagem de itens ativos. |
| [`fokus`](./alura-javascript/fokus) | JavaScript, Web Audio API | Timer pomodoro com contagem regressiva, seleção de intervalos (foco, pausa curta e longa), disparo de efeitos sonoros e alternância de temas. |
| [`gardenbank`](./alura-javascript/gardenbank) | JavaScript, Validação de Formulários | Validação customizada de campos de entrada, algoritmo verificador de CPF e cálculo de maioridade com feedback visual. |
| [`jogo-numero-secreto`](./alura-javascript/jogo-numero-secreto) | JavaScript, Web Speech API | Jogo de adivinhação numérica com interação por voz utilizando a Web Speech Recognition API do navegador. |
| [`lista-de-compras`](./alura-javascript/lista-de-compras) | JavaScript, Web Storage | Aplicação de lista de itens de mercado com persistência em `localStorage`, permitindo inserção, marcação de concluído e exclusão. |

---

### 🧪 Mini-Projetos & Protótipos

| Projeto | Tecnologias | Descrição / Aprendizados |
| :--- | :--- | :--- |
| [`code-connect`](./mini-projetos/code-connect) | HTML5, CSS3, JavaScript | Feed comunitário para desenvolvedores compartilharem snippets e projetos, com modal para envio de imagem e tags. |
| [`pong-copilot`](./mini-projetos/pong-copilot) | JavaScript, p5.js, Canvas | Jogo clássico de Pong em 2D desenvolvido com auxílio de IA (GitHub Copilot), explorando vetores, física básica e colisões no canvas. |
| [`organize`](./mini-projetos/organize) | PHP, MySQL, CSS | Protótipo de ERP/gestão financeira e cadastros para pequenos negócios. |

---

### 🎓 Projetos Acadêmicos & Integradores

| Projeto | Tecnologias | Descrição / Aprendizados |
| :--- | :--- | :--- |
| [`flora-acessorios`](./projetos-academicos/flora-acessorios) | PHP, MySQL, JavaScript, HTML5, CSS3 | Projeto Integrador UNIVESP (PJI310). Sistema web em 3 camadas para gestão de vendas, com dashboard de faturamento, cadastro de produtos/vendedores e modelagem de banco relacional. |

---

## 🚀 Como Executar os Projetos

A grande maioria dos projetos consiste em aplicações frontend puras (**HTML/CSS/JavaScript**):

1. **Via VS Code:**
   * Instale a extensão **Live Server**.
   * Abra a pasta do projeto desejado (ex: `alura-javascript/fokus/`).
   * Clique com o botão direito no `index.html` e selecione **Open with Live Server**.

2. **Via Navegador direto:**
   * Abra o arquivo `index.html` de qualquer subpasta diretamente no seu navegador de preferência.

3. **Para projetos em PHP (`organize` e `flora-acessorios`):**
   * Requerem servidor local com suporte a PHP e MySQL (ex: PHP Built-in Server `php -S localhost:8000`, XAMPP ou Docker).

---

## 👤 Autor

**Felipe Gardenghi**  
- LinkedIn: [linkedin.com/in/felipegardenghi](https://www.linkedin.com/in/felipegardenghi/)  
- Portfólio: [felipegardenghi.dev](https://felipegardenghi.dev) (ou consulte o repositório `/portfolio`)
