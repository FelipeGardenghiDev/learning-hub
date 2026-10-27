# 🏦 MoniBank — Validação de Formulários & Biometria

<p align="center">
  <img src="https://imgur.com/mIBmcEL.png" alt="Javascript: validando formulários">
</p>

<p align="center">
  <strong>Projeto de estudo Alura:</strong> Formulário completo de criação de contas para o banco digital fictício <em>MoniBank</em>.
</p>

---

## 🎯 Objetivos de Aprendizado
* Validação de campos de formulário no cliente utilizando a **Constraint Validation API** e eventos de `blur` e `invalid`.
* Algoritmo de validação de **CPF** com cálculo dos dois dígitos verificadores e rejeição de sequências repetidas.
* Validação de data de nascimento com verificação de **maioridade (+18 anos)**.
* Integração com a API de mídia do navegador (`navigator.mediaDevices.getUserMedia`) para captura de foto biométrica com câmera e desenho em `<canvas>` com fallback para simulação.
* Persistência do estado do fluxo de cadastro em etapas no `localStorage`.

## 🛠️ Tecnologias Utilizadas
* **HTML5** semântico
* **CSS3** (Flexbox, reset e layout modular)
* **JavaScript ES6+** (Módulos nativos, MediaDevices API, Canvas API, LocalStorage)

---

## 🚀 Como Executar

Por utilizar módulos nativos (`type="module"`), abra a pasta com qualquer servidor web local:

```bash
# Usando npx serve
npx serve .

# Ou extensão Live Server no VS Code
```

Acesse `http://localhost:3000` ou abra a partir do **Learning Hub** na seção `alura-javascript/monibank`.
