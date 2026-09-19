# 🏓 PongCopilot

> **PongCopilot** é um jogo Pong clássico desenvolvido com **p5.js** e **GitHub Copilot**

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![p5.js](https://img.shields.io/badge/p5.js-ED225D?style=flat-square&logo=p5dotjs&logoColor=white)
![GitHub Copilot](https://img.shields.io/badge/GitHub%20Copilot-000?style=flat-square&logo=github&logoColor=white)

---

## ✨ Funcionalidades

- 🎮 **Controle duplo** — mouse, teclado ou toque
- 🤖 **IA adaptativa** — 3 níveis com diferenças reais de bola e IA
- 🎛️ **Dificuldade personalizada** — sliders para IA, tamanho da raquete e velocidade inicial da bola
- 🌍 **Idiomas completos** — interface, menus, narração e HUD em **pt-BR**, **inglês** ou **espanhol**
- 🌪️ **Spin na bola** — a trajetória muda conforme o movimento da raquete no impacto
- ✨ **Feedback visual do spin** — brilho e trilha destacam efeitos fortes na bola
- 👥 **Modo local para 2 jogadores** — duelo no mesmo teclado
- 🏆 **Modo torneio local** — série em partidas com lados alternando e vitórias acumuladas
- 🕹️ **Suporte a gamepad** — funciona no solo e no versus local
- ⚡ **Modo arcade** — power-ups opcionais com raridade e duração separados do modo clássico
- 🏆 **Condição de vitória** — primeiro a 7 pontos vence
- ⏸️ **Pausa** — pressione `P` ou `ESC` a qualquer momento
- 💥 **Efeitos de partículas** no gol
- 📊 **Placar visual** em tempo real
- 📈 **Tela de estatísticas** ao fim da partida
- 🥇 **Conquistas locais** — medalhas persistidas por feitos como rally longo, vitória perfeita e comeback
- 🔊 **Narração por voz** da pontuação após cada gol com seleção de voz no menu
- 🗣️ **Preview de voz** direto no menu
- 🎚️ **Ajustes em tempo real** — volume, velocidade da narração, intensidade da dificuldade e sliders customizados
- 🎮 **Painel de controles** — mostra bindings atuais de teclado, touch e gamepad no menu
- 🎵 **Trilha dinâmica** — sintetizada em tempo real, acelera com rally e match point
- 💾 **Persistência local** — recordes e configurações ficam salvos no navegador
- 📱 **Canvas responsivo** — se adapta a qualquer tamanho de tela com touch melhorado
- 🎬 **Transições animadas** — entrada suave entre menu, partida e fim de jogo
- ➖ **Linha central tracejada** ao estilo arcade clássico

## 🚀 Como jogar

1. Para melhor compatibilidade, sirva a pasta com um servidor local simples, por exemplo `python3 -m http.server 8000`, e abra `http://localhost:8000` no navegador  
2. Escolha o **idioma**, o **modo** entre clássico, versus, **arcade** ou **torneio**, ajuste a **dificuldade** e personalize os sliders se quiser  
3. No modo solo, controle a raquete esquerda com **mouse**, **toque**, **W/S** (ou **↑/↓**) ou **gamepad**  
4. No modo local, o jogador 1 usa **W/S** ou gamepad 1, e o jogador 2 usa **↑/↓**, gamepad 2 ou toque dividido por lados  
5. No torneio, os lados alternam a cada rodada e as vitórias acumulam até definir o campeão  
6. Marque **7 pontos** antes do adversario para vencer!

| Ação            | Controle              |
|-----------------|----------------------|
| Navegar no menu | Mouse / Toque / TAB / ←→ / ↑↓ / Enter |
| Trocar idioma | Seletor **Idioma** no menu |
| Testar voz | Botao TESTAR VOZ / Enter com foco |
| Ver controles | Botao CONTROLES / Enter com foco |
| Mover raquete no solo   | Mouse / Toque / W·S / ↑·↓ / Gamepad |
| Mover raquete no versus | Jogador 1: W·S, toque esquerdo ou gamepad 1 / Jogador 2: ↑·↓, toque direito ou gamepad 2 |
| Modo arcade | Mesmo controle do solo + power-ups raros no centro da arena |
| Modo torneio | Controles do versus + alternância automática de lados |
| Pausar / Retomar| P ou ESC             |
| Reiniciar       | Clique / Toque / Enter na tela de fim |

## 🛠️ Tecnologias

- **p5.js** — renderização canvas e loop de jogo
- **p5.sound** — efeitos sonoros
- **Web Speech API** — narração de pontuação
- **HTML5 / CSS3** — estrutura e estilo

## 📁 Estrutura

```
PongCopilot/
├── index.html       # Estrutura da página
├── sketch.js        # Lógica completa do jogo
├── style.css        # Estilos
└── src/
    ├── bola.png
    ├── barra01.png
    ├── barra02.png
    ├── fundo2.png
    ├── *.wav        # Efeitos sonoros
```

## 👤 Autor

**Felipe Gardenghi** — [@FelipeGardenghiDev](https://github.com/FelipeGardenghiDev)
