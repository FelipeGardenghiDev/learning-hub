// ─── Estados e constantes ──────────────────────────────────────────────────────
const STATE_MENU = 'menu';
const STATE_PLAYING = 'playing';
const STATE_PAUSED = 'paused';
const STATE_GAMEOVER = 'gameover';

const STORAGE_KEY = 'PongCopilot-settings-v2';
const LEGACY_STORAGE_KEYS = ['pong-copilot-settings-v2'];
const PONTOS_PARA_VENCER = 7;
const TECLA_ESPACO = 32;
const MENU_ITEMS = [
    'modo',
    'idioma',
    'dificuldade',
    'customAi',
    'customPaddle',
    'customBall',
    'voz',
    'testarVoz',
    'controles',
    'volume',
    'narracao',
    'intensidade',
    'jogar',
];

const LANGUAGE_OPTIONS = {
    'pt-BR': {
        label: 'Portugues (BR)',
        shortLabel: 'PT-BR',
        speechLang: 'pt-BR',
        voicePrefixes: ['pt-BR', 'pt'],
    },
    en: {
        label: 'English',
        shortLabel: 'EN',
        speechLang: 'en-US',
        voicePrefixes: ['en-US', 'en'],
    },
    es: {
        label: 'Espanol',
        shortLabel: 'ES',
        speechLang: 'es-ES',
        voicePrefixes: ['es-ES', 'es'],
    },
};

const I18N = {
    'pt-BR': {
        menuSubtitle1: 'Classico, versus, arcade e torneio em um unico menu',
        menuSubtitle2: 'TAB/↑↓ muda foco, ←→ ajusta, ENTER confirma',
        automatic: 'Automatica',
        unavailable: 'Indisponivel neste navegador',
        labels: {
            mode: 'Modo',
            language: 'Idioma',
            difficulty: 'Dificuldade',
            customAi: 'IA personalizada',
            customPaddle: 'Raquete personalizada',
            customBall: 'Bola personalizada',
            voice: 'Voz da narracao',
            testVoice: 'TESTAR VOZ',
            controls: 'CONTROLES',
            volume: 'Volume geral',
            narration: 'Velocidade da narracao',
            intensity: 'Intensidade geral',
            play: 'JOGAR',
        },
        descriptions: {
            language: 'Idioma completo da interface e da narracao automatica',
            testVoice: 'Reproduz uma amostra com os ajustes atuais',
            controls: 'Mostra teclado, touch e gamepad do modo atual',
            customAi: 'Precisao e agressividade da IA',
            customPaddle: 'Altura das duas raquetes',
            customBall: 'Velocidade inicial da bola',
            disabledCustom: 'Ative a dificuldade Personalizada para aplicar este slider',
            volume: 'Controla efeitos, trilha sintetica e narracao',
            narration: 'Velocidade da fala da Web Speech API',
            intensity: 'Escala ritmo da bola e agressividade geral',
            voiceAvailable: 'Escolha a voz da leitura do placar',
            voiceUnavailable: 'Web Speech API nao disponivel',
        },
        modes: {
            solo: { label: 'Solo', description: 'Voce contra a IA no modo classico' },
            versus: { label: '2 Jogadores', description: 'Duelo local no mesmo teclado, toque ou gamepad' },
            arcade: { label: 'Arcade', description: 'Solo com power-ups e ritmo mais agressivo' },
            torneio: { label: 'Torneio', description: 'Serie local com lados alternando e placar acumulado' },
        },
        difficulties: {
            facil: { label: 'Facil', description: 'Bola lenta e IA permissiva' },
            medio: { label: 'Medio', description: 'Equilibrio entre reflexo e velocidade' },
            dificil: { label: 'Dificil', description: 'Bola rapida e IA muito precisa' },
            custom: { label: 'Personalizada', description: 'Use os sliders logo abaixo para definir sua dificuldade.' },
        },
        game: {
            player: 'VOCE',
            cpu: 'CPU',
            arcadeCpu: 'ARCADE CPU',
            pauseTitle: 'PAUSADO',
            pauseHint: 'Pressione P ou ESC para continuar',
            menuBackPrompt: 'Toque, clique ou Enter para voltar ao menu',
            nextRoundPrompt: 'Toque, clique ou Enter para iniciar a proxima rodada',
            touchSolo: 'TOQUE E ARRASTE PARA MOVER SUA RAQUETE',
            touchLeft: 'TOQUE ESQUERDO',
            touchRight: 'TOQUE DIREITO',
            soloControlHint: 'Mouse, toque, teclado ou gamepad',
            leftControlHint: 'W/S ou gamepad 1',
            rightControlHint: 'Setas ou gamepad 2',
            arcadeTitle: 'MODO ARCADE',
            waitingPowerUp: 'Aguardando proximo power-up...',
            powerUpPrefix: 'Power-up',
            tournamentTitle: 'TORNEIO',
            roundLabel: 'Rodada',
            leftSideLabel: 'na esquerda',
            championLabel: 'Campeao do torneio',
            seriesLabel: 'Serie',
            finalSeriesLabel: 'Serie final',
            roundPrompt: 'Enter para a rodada {round}',
            controlsConnected: 'gamepad(s) conectado(s)',
            controlsAvailable: 'gamepad(s)',
            noGamepad: 'sem gamepad conectado',
            recordsPrefix: 'Recordes',
            achievementsPrefix: 'Conquistas',
            currentModePrefix: 'Modo selecionado',
            controlsPanelTitle: 'Controles do modo atual',
            close: 'Fechar',
            firstToWin: 'Primeiro a {points} pontos vence',
            youWon: 'VOCE VENCEU!',
            youLost: 'VOCE PERDEU!',
            won: 'VENCEU!',
        },
        stats: {
            bestRally: 'Melhor rally',
            maxSpeed: 'Velocidade maxima',
            maxSpin: 'Spin maximo',
            goals: 'Gols',
            rallyRecord: 'Recorde de rally',
            speedRecord: 'Recorde de velocidade',
            unlockedAchievements: 'Conquistas desbloqueadas nesta partida',
        },
        controlsPanel: {
            menuTitle: 'Menu',
            menuText: 'TAB/↑↓ muda foco, ←→ ajusta, Enter confirma, clique/toque seleciona.',
            pauseTitle: 'Pausa',
            pauseText: 'Pressione P ou ESC durante a partida.',
            soloTitle: 'Solo',
            soloText: 'Raquete esquerda: mouse, toque, W/S, ↑/↓ ou gamepad 1.',
            opponentTitle: 'Adversario',
            opponentText: 'A raquete direita e controlada pela IA.',
            arcadeTitle: 'Arcade',
            arcadeText: 'Mesmo controle do solo: mouse, toque, teclado ou gamepad 1.',
            powerupTitle: 'Power-ups',
            powerupText: 'Passe pela orb no centro para ativar efeitos temporarios e raros.',
            versusP1Title: 'Jogador 1',
            versusP1Text: 'W/S, toque no lado esquerdo ou gamepad 1.',
            versusP2Title: 'Jogador 2',
            versusP2Text: '↑/↓, toque no lado direito ou gamepad 2.',
            tournamentTitle: 'Torneio',
            tournamentText: 'Serie local ate 3 vitorias. Lados alternam entre J1 e J2 a cada rodada.',
            tournamentControlsTitle: 'Controles',
            tournamentControlsText: 'J1 usa W/S ou gamepad 1; J2 usa ↑/↓ ou gamepad 2; touch segue o lado da tela.',
        },
        speech: {
            preview: 'Teste de voz do menu do Pong. Ajuste volume e velocidade como preferir.',
            soloScore: 'Pontuacao: voce {left}, adversario {right}',
            versusScore: 'Placar: {leftName} {left}, {rightName} {right}',
        },
        achievements: {
            rally20: { label: 'Rally Mestre', description: 'Alcance um rally de 20 trocas.' },
            perfectWin: { label: 'Vitoria Perfeita', description: 'Venca uma partida por 7 a 0.' },
            comeback: { label: 'Reviravolta', description: 'Venca apos ficar 4 pontos atras.' },
            arcadeWin: { label: 'Campeao Arcade', description: 'Venca uma partida no modo arcade.' },
            tournamentChampion: { label: 'Campeao do Torneio', description: 'Conquiste uma serie completa no torneio.' },
        },
        powerups: {
            expand: { label: 'EXPANDIR', rarity: 'Comum', effect: 'RAQUETE EXPANDIDA' },
            shrink: { label: 'REDUZIR', rarity: 'Comum', effect: 'RAQUETE REDUZIDA' },
            turbo: { label: 'TURBO', rarity: 'Comum', effect: 'TURBO' },
            slow: { label: 'LENTO', rarity: 'Comum', effect: 'BOLA LENTA' },
            freeze: { label: 'FREIO', rarity: 'Raro', effect: 'CONGELADO' },
            spinburst: { label: 'SPIN+', rarity: 'Raro', effect: 'SPIN MAXIMO' },
            megaball: { label: 'MEGABOLA', rarity: 'Epico', effect: 'MEGABOLA' },
        },
    },
    en: {
        menuSubtitle1: 'Classic, versus, arcade and tournament in one menu',
        menuSubtitle2: 'TAB/↑↓ changes focus, ←→ adjusts, ENTER confirms',
        automatic: 'Automatic',
        unavailable: 'Unavailable in this browser',
        labels: {
            mode: 'Mode',
            language: 'Language',
            difficulty: 'Difficulty',
            customAi: 'Custom AI',
            customPaddle: 'Custom paddle',
            customBall: 'Custom ball',
            voice: 'Narration voice',
            testVoice: 'TEST VOICE',
            controls: 'CONTROLS',
            volume: 'Master volume',
            narration: 'Narration speed',
            intensity: 'Overall intensity',
            play: 'PLAY',
        },
        descriptions: {
            language: 'Full language for the interface and automatic narration',
            testVoice: 'Plays a sample using the current settings',
            controls: 'Shows current keyboard, touch and gamepad bindings',
            customAi: 'AI precision and aggression',
            customPaddle: 'Height of both paddles',
            customBall: 'Ball starting speed',
            disabledCustom: 'Enable Custom difficulty to use this slider',
            volume: 'Controls effects, synthesized music and narration',
            narration: 'Speech speed for the Web Speech API',
            intensity: 'Scales ball pace and overall aggression',
            voiceAvailable: 'Choose the voice used for score narration',
            voiceUnavailable: 'Web Speech API is not available',
        },
        modes: {
            solo: { label: 'Solo', description: 'You versus the AI in classic mode' },
            versus: { label: '2 Players', description: 'Local duel on the same keyboard, touch or gamepad' },
            arcade: { label: 'Arcade', description: 'Solo mode with power-ups and a faster pace' },
            torneio: { label: 'Tournament', description: 'Local series with side swaps and cumulative wins' },
        },
        difficulties: {
            facil: { label: 'Easy', description: 'Slower ball and forgiving AI' },
            medio: { label: 'Medium', description: 'Balanced reflexes and speed' },
            dificil: { label: 'Hard', description: 'Fast ball and highly accurate AI' },
            custom: { label: 'Custom', description: 'Use the sliders below to define your own difficulty.' },
        },
        game: {
            player: 'YOU',
            cpu: 'CPU',
            arcadeCpu: 'ARCADE CPU',
            pauseTitle: 'PAUSED',
            pauseHint: 'Press P or ESC to continue',
            menuBackPrompt: 'Tap, click or press Enter to return to the menu',
            nextRoundPrompt: 'Tap, click or press Enter to start the next round',
            touchSolo: 'TOUCH AND DRAG TO MOVE YOUR PADDLE',
            touchLeft: 'LEFT TOUCH',
            touchRight: 'RIGHT TOUCH',
            soloControlHint: 'Mouse, touch, keyboard or gamepad',
            leftControlHint: 'W/S or gamepad 1',
            rightControlHint: 'Arrows or gamepad 2',
            arcadeTitle: 'ARCADE MODE',
            waitingPowerUp: 'Waiting for the next power-up...',
            powerUpPrefix: 'Power-up',
            tournamentTitle: 'TOURNAMENT',
            roundLabel: 'Round',
            leftSideLabel: 'on the left side',
            championLabel: 'Tournament champion',
            seriesLabel: 'Series',
            finalSeriesLabel: 'Final series',
            roundPrompt: 'Enter for round {round}',
            controlsConnected: 'gamepad(s) connected',
            controlsAvailable: 'gamepad(s) available',
            noGamepad: 'no gamepad connected',
            recordsPrefix: 'Records',
            achievementsPrefix: 'Achievements',
            currentModePrefix: 'Selected mode',
            controlsPanelTitle: 'Current mode controls',
            close: 'Close',
            firstToWin: 'First to {points} points wins',
            youWon: 'YOU WON!',
            youLost: 'YOU LOST!',
            won: 'WON!',
        },
        stats: {
            bestRally: 'Best rally',
            maxSpeed: 'Top speed',
            maxSpin: 'Max spin',
            goals: 'Goals',
            rallyRecord: 'Rally record',
            speedRecord: 'Speed record',
            unlockedAchievements: 'Achievements unlocked in this match',
        },
        controlsPanel: {
            menuTitle: 'Menu',
            menuText: 'TAB/↑↓ changes focus, ←→ adjusts, Enter confirms, click/tap selects.',
            pauseTitle: 'Pause',
            pauseText: 'Press P or ESC during the match.',
            soloTitle: 'Solo',
            soloText: 'Left paddle: mouse, touch, W/S, ↑/↓ or gamepad 1.',
            opponentTitle: 'Opponent',
            opponentText: 'The right paddle is controlled by the AI.',
            arcadeTitle: 'Arcade',
            arcadeText: 'Same controls as solo: mouse, touch, keyboard or gamepad 1.',
            powerupTitle: 'Power-ups',
            powerupText: 'Pass through the center orb to trigger temporary and rare effects.',
            versusP1Title: 'Player 1',
            versusP1Text: 'W/S, left side touch or gamepad 1.',
            versusP2Title: 'Player 2',
            versusP2Text: '↑/↓, right side touch or gamepad 2.',
            tournamentTitle: 'Tournament',
            tournamentText: 'Local series up to 3 wins. Sides switch between P1 and P2 every round.',
            tournamentControlsTitle: 'Controls',
            tournamentControlsText: 'P1 uses W/S or gamepad 1; P2 uses ↑/↓ or gamepad 2; touch follows the screen side.',
        },
        speech: {
            preview: 'Pong menu voice test. Adjust the volume and speed however you like.',
            soloScore: 'Score: you {left}, opponent {right}',
            versusScore: 'Score: {leftName} {left}, {rightName} {right}',
        },
        achievements: {
            rally20: { label: 'Rally Master', description: 'Reach a rally of 20 exchanges.' },
            perfectWin: { label: 'Perfect Win', description: 'Win a match by 7 to 0.' },
            comeback: { label: 'Comeback', description: 'Win after trailing by 4 points.' },
            arcadeWin: { label: 'Arcade Champion', description: 'Win a match in arcade mode.' },
            tournamentChampion: { label: 'Tournament Champion', description: 'Win a full tournament series.' },
        },
        powerups: {
            expand: { label: 'EXPAND', rarity: 'Common', effect: 'PADDLE EXPANDED' },
            shrink: { label: 'SHRINK', rarity: 'Common', effect: 'PADDLE SHRUNK' },
            turbo: { label: 'TURBO', rarity: 'Common', effect: 'TURBO' },
            slow: { label: 'SLOW', rarity: 'Common', effect: 'SLOW BALL' },
            freeze: { label: 'FREEZE', rarity: 'Rare', effect: 'FROZEN' },
            spinburst: { label: 'SPIN+', rarity: 'Rare', effect: 'MAX SPIN' },
            megaball: { label: 'MEGABALL', rarity: 'Epic', effect: 'MEGABALL' },
        },
    },
    es: {
        menuSubtitle1: 'Clasico, versus, arcade y torneo en un solo menu',
        menuSubtitle2: 'TAB/↑↓ cambia el foco, ←→ ajusta, ENTER confirma',
        automatic: 'Automatica',
        unavailable: 'No disponible en este navegador',
        labels: {
            mode: 'Modo',
            language: 'Idioma',
            difficulty: 'Dificultad',
            customAi: 'IA personalizada',
            customPaddle: 'Paleta personalizada',
            customBall: 'Pelota personalizada',
            voice: 'Voz de la narracion',
            testVoice: 'PROBAR VOZ',
            controls: 'CONTROLES',
            volume: 'Volumen general',
            narration: 'Velocidad de narracion',
            intensity: 'Intensidad general',
            play: 'JUGAR',
        },
        descriptions: {
            language: 'Idioma completo de la interfaz y de la narracion automatica',
            testVoice: 'Reproduce una muestra con la configuracion actual',
            controls: 'Muestra los controles actuales de teclado, touch y gamepad',
            customAi: 'Precision y agresividad de la IA',
            customPaddle: 'Altura de ambas paletas',
            customBall: 'Velocidad inicial de la pelota',
            disabledCustom: 'Activa la dificultad Personalizada para usar este control',
            volume: 'Controla efectos, musica sintetizada y narracion',
            narration: 'Velocidad de voz de la Web Speech API',
            intensity: 'Escala el ritmo de la pelota y la agresividad general',
            voiceAvailable: 'Elige la voz usada para narrar el marcador',
            voiceUnavailable: 'La Web Speech API no esta disponible',
        },
        modes: {
            solo: { label: 'Solo', description: 'Tu contra la IA en el modo clasico' },
            versus: { label: '2 Jugadores', description: 'Duelo local con el mismo teclado, touch o gamepad' },
            arcade: { label: 'Arcade', description: 'Modo solo con power-ups y ritmo mas agresivo' },
            torneio: { label: 'Torneo', description: 'Serie local con lados alternados y victorias acumuladas' },
        },
        difficulties: {
            facil: { label: 'Facil', description: 'Pelota mas lenta e IA permisiva' },
            medio: { label: 'Medio', description: 'Equilibrio entre reflejos y velocidad' },
            dificil: { label: 'Dificil', description: 'Pelota rapida e IA muy precisa' },
            custom: { label: 'Personalizada', description: 'Usa los sliders de abajo para definir tu dificultad.' },
        },
        game: {
            player: 'TU',
            cpu: 'CPU',
            arcadeCpu: 'ARCADE CPU',
            pauseTitle: 'PAUSADO',
            pauseHint: 'Pulsa P o ESC para continuar',
            menuBackPrompt: 'Toca, haz clic o pulsa Enter para volver al menu',
            nextRoundPrompt: 'Toca, haz clic o pulsa Enter para iniciar la siguiente ronda',
            touchSolo: 'TOCA Y ARRASTRA PARA MOVER TU PALETA',
            touchLeft: 'TOQUE IZQUIERDO',
            touchRight: 'TOQUE DERECHO',
            soloControlHint: 'Mouse, touch, teclado o gamepad',
            leftControlHint: 'W/S o gamepad 1',
            rightControlHint: 'Flechas o gamepad 2',
            arcadeTitle: 'MODO ARCADE',
            waitingPowerUp: 'Esperando el siguiente power-up...',
            powerUpPrefix: 'Power-up',
            tournamentTitle: 'TORNEO',
            roundLabel: 'Ronda',
            leftSideLabel: 'en el lado izquierdo',
            championLabel: 'Campeon del torneo',
            seriesLabel: 'Serie',
            finalSeriesLabel: 'Serie final',
            roundPrompt: 'Enter para la ronda {round}',
            controlsConnected: 'gamepad(s) conectado(s)',
            controlsAvailable: 'gamepad(s) disponibles',
            noGamepad: 'ningun gamepad conectado',
            recordsPrefix: 'Records',
            achievementsPrefix: 'Logros',
            currentModePrefix: 'Modo seleccionado',
            controlsPanelTitle: 'Controles del modo actual',
            close: 'Cerrar',
            firstToWin: 'El primero en llegar a {points} puntos gana',
            youWon: 'HAS GANADO!',
            youLost: 'HAS PERDIDO!',
            won: 'GANO!',
        },
        stats: {
            bestRally: 'Mejor rally',
            maxSpeed: 'Velocidad maxima',
            maxSpin: 'Spin maximo',
            goals: 'Goles',
            rallyRecord: 'Record de rally',
            speedRecord: 'Record de velocidad',
            unlockedAchievements: 'Logros desbloqueados en esta partida',
        },
        controlsPanel: {
            menuTitle: 'Menu',
            menuText: 'TAB/↑↓ cambia el foco, ←→ ajusta, Enter confirma y clic/toque selecciona.',
            pauseTitle: 'Pausa',
            pauseText: 'Pulsa P o ESC durante la partida.',
            soloTitle: 'Solo',
            soloText: 'Paleta izquierda: mouse, touch, W/S, ↑/↓ o gamepad 1.',
            opponentTitle: 'Oponente',
            opponentText: 'La paleta derecha esta controlada por la IA.',
            arcadeTitle: 'Arcade',
            arcadeText: 'Mismos controles del solo: mouse, touch, teclado o gamepad 1.',
            powerupTitle: 'Power-ups',
            powerupText: 'Pasa por la orb del centro para activar efectos temporales y raros.',
            versusP1Title: 'Jugador 1',
            versusP1Text: 'W/S, toque en el lado izquierdo o gamepad 1.',
            versusP2Title: 'Jugador 2',
            versusP2Text: '↑/↓, toque en el lado derecho o gamepad 2.',
            tournamentTitle: 'Torneo',
            tournamentText: 'Serie local hasta 3 victorias. Los lados cambian entre J1 y J2 en cada ronda.',
            tournamentControlsTitle: 'Controles',
            tournamentControlsText: 'J1 usa W/S o gamepad 1; J2 usa ↑/↓ o gamepad 2; el touch sigue el lado de la pantalla.',
        },
        speech: {
            preview: 'Prueba de voz del menu de Pong. Ajusta el volumen y la velocidad como prefieras.',
            soloScore: 'Marcador: tu {left}, rival {right}',
            versusScore: 'Marcador: {leftName} {left}, {rightName} {right}',
        },
        achievements: {
            rally20: { label: 'Maestro del Rally', description: 'Alcanza un rally de 20 intercambios.' },
            perfectWin: { label: 'Victoria Perfecta', description: 'Gana una partida por 7 a 0.' },
            comeback: { label: 'Remontada', description: 'Gana despues de estar 4 puntos abajo.' },
            arcadeWin: { label: 'Campeon Arcade', description: 'Gana una partida en modo arcade.' },
            tournamentChampion: { label: 'Campeon del Torneo', description: 'Gana una serie completa del torneo.' },
        },
        powerups: {
            expand: { label: 'EXPANDIR', rarity: 'Comun', effect: 'PALETA EXPANDIDA' },
            shrink: { label: 'REDUCIR', rarity: 'Comun', effect: 'PALETA REDUCIDA' },
            turbo: { label: 'TURBO', rarity: 'Comun', effect: 'TURBO' },
            slow: { label: 'LENTO', rarity: 'Comun', effect: 'PELOTA LENTA' },
            freeze: { label: 'FRENO', rarity: 'Raro', effect: 'CONGELADO' },
            spinburst: { label: 'SPIN+', rarity: 'Raro', effect: 'SPIN MAXIMO' },
            megaball: { label: 'MEGABOLA', rarity: 'Epico', effect: 'MEGABOLA' },
        },
    },
};

const MODOS_JOGO = {
    solo: { label: 'Solo', descricao: 'Voce contra a IA no modo classico' },
    versus: { label: '2 Jogadores', descricao: 'Duelo local no mesmo teclado, toque ou gamepad' },
    arcade: { label: 'Arcade', descricao: 'Solo com power-ups e ritmo mais agressivo' },
    torneio: { label: 'Torneio', descricao: 'Serie local com lados alternando e placar acumulado' },
};

const CONFIG_DIFICULDADE = {
    facil: {
        label: 'Facil',
        descricao: 'Bola lenta e IA permissiva',
        aiSpeed: 3.6,
        aiPredictionFactor: 3.4,
        aiDeadZone: 20,
        aiErrorMargin: 26,
        playerPaddleHeight: 74,
        computerPaddleHeight: 80,
        ballStartSpeed: 4.4,
        ballMaxSpeed: 8.8,
        ballSpeedStep: 1.03,
    },
    medio: {
        label: 'Medio',
        descricao: 'Equilibrio entre reflexo e velocidade',
        aiSpeed: 5.4,
        aiPredictionFactor: 5.5,
        aiDeadZone: 14,
        aiErrorMargin: 14,
        playerPaddleHeight: 64,
        computerPaddleHeight: 68,
        ballStartSpeed: 5.7,
        ballMaxSpeed: 12.8,
        ballSpeedStep: 1.05,
    },
    dificil: {
        label: 'Dificil',
        descricao: 'Bola rapida e IA muito precisa',
        aiSpeed: 8.1,
        aiPredictionFactor: 7.2,
        aiDeadZone: 8,
        aiErrorMargin: 5,
        playerPaddleHeight: 58,
        computerPaddleHeight: 60,
        ballStartSpeed: 7.2,
        ballMaxSpeed: 17,
        ballSpeedStep: 1.08,
    },
};

const POWER_UP_TYPES = [
    { id: 'expand', label: 'EXPANDIR', raridade: 'Comum', peso: 24, duracao: 520, cor: [80, 220, 140] },
    { id: 'shrink', label: 'REDUZIR', raridade: 'Comum', peso: 22, duracao: 520, cor: [255, 110, 110] },
    { id: 'turbo', label: 'TURBO', raridade: 'Comum', peso: 18, duracao: 500, cor: [90, 180, 255] },
    { id: 'slow', label: 'LENTO', raridade: 'Comum', peso: 16, duracao: 220, cor: [255, 210, 90] },
    { id: 'freeze', label: 'FREIO', raridade: 'Raro', peso: 10, duracao: 420, cor: [150, 245, 255] },
    { id: 'spinburst', label: 'SPIN+', raridade: 'Raro', peso: 8, duracao: 0, cor: [255, 120, 220] },
    { id: 'megaball', label: 'MEGABOLA', raridade: 'Epico', peso: 5, duracao: 360, cor: [255, 150, 60] },
];

const ACHIEVEMENTS = {
    rally20: { label: 'Rally Mestre', descricao: 'Alcance um rally de 20 trocas.' },
    perfectWin: { label: 'Vitoria Perfeita', descricao: 'Vença uma partida por 7 a 0.' },
    comeback: { label: 'Reviravolta', descricao: 'Vença apos ficar 4 pontos atras.' },
    arcadeWin: { label: 'Campeao Arcade', descricao: 'Vença uma partida no modo arcade.' },
    tournamentChampion: { label: 'Campeao do Torneio', descricao: 'Conquiste uma serie completa no torneio.' },
};

// ─── Assets ────────────────────────────────────────────────────────────────────
let bolaImagem, jogadorImagem, computadorImagem, fundoImagem;
let quicarSom, golSom;

// ─── Estado global ─────────────────────────────────────────────────────────────
let gameState = STATE_MENU;
let estadoAnterior = STATE_MENU;
let frameEntradaEstado = 0;
let overlayTransicaoAlpha = 255;

let idiomaSelecionado = 'pt-BR';
let modoJogoSelecionado = 'solo';
let dificuldadeSelecionada = 'medio';
let volumeAudio = 0.7;
let velocidadeNarracao = 1;
let intensidadeDificuldade = 1;
let customAiNivel = 0.5;
let customPaddleNivel = 0.5;
let customBallNivel = 0.5;

let pontosJogador = 0;
let pontosComputador = 0;
let particulas = [];
let bola, jogador, computador;
let menuFocusIndex = 0;
let synthSuportado = false;
let vozesDisponiveis = [{ label: 'Automatica', voice: null, lang: 'pt-BR' }];
let indiceVozSelecionada = 0;
let voiceUriPersistida = null;
let estatisticasPartida = criarEstatisticasPartida();
let recordesPersistidos = { melhorRally: 0, velocidadeMaxima: 0 };
let achievementsPersistidos = {};
let medalhasDesbloqueadasRecentes = [];
let ultimoContatoLado = 'esquerda';
let painelControlesAberto = false;
let layoutBotaoFecharControles = null;
let serieTorneio = criarEstadoTorneio();
let rodadaAtualIniciada = false;
let partidaCompetidores = { esquerda: 'J1', direita: 'CPU' };

let powerUpAtual = null;
let proximoPowerUpFrame = 0;
let efeitosArcade = criarEfeitosArcade();

let trilhaOsc = null;
let audioInicializado = false;

// ─── Classes ───────────────────────────────────────────────────────────────────
class Raquete {
    constructor(x, lado, alturaBase, controle) {
        this.x = x;
        this.y = height / 2 - alturaBase / 2;
        this.w = 10;
        this.h = alturaBase;
        this.alturaBase = alturaBase;
        this.lado = lado;
        this.controle = controle;
        this.velocidadeY = 0;
    }

    update() {
        const yAnterior = this.y;
        this.aplicarAlturaAtual();

        if (this.controle.tipo === 'ia') {
            this.atualizarControleIA();
        } else if (this.controle.tipo === 'teclado') {
            this.atualizarControleTeclado();
        } else {
            this.atualizarControlePonteiro();
        }

        this.y = constrain(this.y, 0, height - this.h);
        this.velocidadeY = this.y - yAnterior;
    }

    aplicarAlturaAtual() {
        const efeito = obterEfeitoArcade(this.lado);
        const alturaAnterior = this.h;
        this.h = this.alturaBase * efeito.sizeScale;

        if (alturaAnterior !== this.h) {
            this.y += (alturaAnterior - this.h) / 2;
        }
    }

    atualizarControlePonteiro() {
        const velocidade = obterVelocidadeRaquete(this);
        const eixoGamepad = obterEixoGamepad(this.controle.gamepadIndex);

        if (abs(eixoGamepad) > 0.12) {
            this.y += eixoGamepad * velocidade;
            return;
        }

        if (algumaTeclaPressionada(this.controle.upKeys)) {
            this.y -= velocidade;
        } else if (algumaTeclaPressionada(this.controle.downKeys)) {
            this.y += velocidade;
        } else {
            const toque = obterToquePorLado(this.lado);
            if (toque) {
                this.y = toque.y - this.h / 2;
            } else {
                this.y = mouseY - this.h / 2;
            }
        }
    }

    atualizarControleTeclado() {
        const velocidade = obterVelocidadeRaquete(this);
        const eixoGamepad = obterEixoGamepad(this.controle.gamepadIndex);

        if (abs(eixoGamepad) > 0.12) {
            this.y += eixoGamepad * velocidade;
            return;
        }

        if (algumaTeclaPressionada(this.controle.upKeys)) {
            this.y -= velocidade;
        } else if (algumaTeclaPressionada(this.controle.downKeys)) {
            this.y += velocidade;
        } else {
            const toque = obterToquePorLado(this.lado);
            if (toque) {
                this.y = toque.y - this.h / 2;
            }
        }
    }

    atualizarControleIA() {
        const config = getConfiguracaoPartida();
        const centroRaquete = this.y + this.h / 2;
        const alvoY = bola.y
            + bola.vy * config.aiPredictionFactor
            + sin(frameCount * 0.05) * config.aiErrorMargin;
        const velocidade = obterVelocidadeRaquete(this);

        if (alvoY < centroRaquete - config.aiDeadZone) {
            this.y -= velocidade;
        } else if (alvoY > centroRaquete + config.aiDeadZone) {
            this.y += velocidade;
        }
    }

    desenha() {
        const img = this.lado === 'esquerda' ? jogadorImagem : computadorImagem;
        image(img, this.x, this.y, this.w, this.h);
    }
}

class Bola {
    constructor() {
        this.r = 12;
        this.angulo = 0;
        this.trilha = [];
        this.intensidadeSpinVisual = 0;
        this.direcaoSpinVisual = 1;
        this.reset();
    }

    reset() {
        const config = getConfiguracaoPartida();
        const angulo = random(-PI / 4, PI / 4);
        const direcao = random() > 0.5 ? 1 : -1;

        this.r = 12;
        this.x = width / 2;
        this.y = height / 2;
        this.vx = cos(angulo) * config.ballStartSpeed * direcao;
        this.vy = sin(angulo) * config.ballStartSpeed;
        this.angulo = 0;
        this.trilha = [];
        this.intensidadeSpinVisual = 0;
        this.direcaoSpinVisual = 1;
        estatisticasPartida.rallyAtual = 0;
    }

    update() {
        const efeitoBola = obterEfeitoArcade('bola');
        this.r = 12 * efeitoBola.radiusScale;
        this.x += this.vx;
        this.y += this.vy;
        this.angulo += sqrt(this.vx * this.vx + this.vy * this.vy) / 30;
        this.registrarTrilha();
        this.intensidadeSpinVisual *= 0.93;

        estatisticasPartida.velocidadeMaxima = max(
            estatisticasPartida.velocidadeMaxima,
            sqrt(this.vx * this.vx + this.vy * this.vy)
        );

        if (this.y - this.r < 0) {
            this.y = this.r;
            this.vy *= -1;
        }

        if (this.y + this.r > height) {
            this.y = height - this.r;
            this.vy *= -1;
        }

        if (this.x - this.r < 0) {
            registrarGol('direita', this.x, this.y);
            return;
        }

        if (this.x + this.r > width) {
            registrarGol('esquerda', this.x, this.y);
            return;
        }

        this.verificaColisaoRaquete(jogador);
        this.verificaColisaoRaquete(computador);

        if (estaModoArcade()) {
            verificarColisaoPowerUp();
        }
    }

    verificaColisaoRaquete(raquete) {
        if (!colideRetanguloCirculo(this.x, this.y, this.r, raquete.x, raquete.y, raquete.w, raquete.h)) {
            return;
        }

        const indoParaRaqueteErrada = (raquete.lado === 'esquerda' && this.vx >= 0)
            || (raquete.lado === 'direita' && this.vx <= 0);

        if (indoParaRaqueteErrada) {
            return;
        }

        ultimoContatoLado = raquete.lado;
        tocarSom(quicarSom, 0.55, obterTaxaSomQuicar());

        const config = getConfiguracaoPartida();
        const centroRaquete = raquete.y + raquete.h / 2;
        const impactoNormalizado = constrain((this.y - centroRaquete) / (raquete.h / 2), -1, 1);
        const anguloBase = impactoNormalizado * radians(60);
        const velocidadeAtual = min(
            sqrt(this.vx * this.vx + this.vy * this.vy) * config.ballSpeedStep,
            config.ballMaxSpeed
        );
        const spin = raquete.velocidadeY * config.spinInfluence;
        let novoVy = sin(anguloBase) * velocidadeAtual + spin;
        const limiteVertical = velocidadeAtual * 0.88;

        novoVy = constrain(novoVy, -limiteVertical, limiteVertical);

        const direcaoX = raquete.lado === 'esquerda' ? 1 : -1;
        const velocidadeHorizontal = sqrt(max(velocidadeAtual * velocidadeAtual - novoVy * novoVy, 1.8));

        this.x = raquete.lado === 'esquerda'
            ? raquete.x + raquete.w + this.r
            : raquete.x - this.r;
        this.vx = velocidadeHorizontal * direcaoX;
        this.vy = novoVy;
        this.intensidadeSpinVisual = clamp(abs(spin) / 2.2, 0, 1);
        this.direcaoSpinVisual = spin === 0 ? this.direcaoSpinVisual : Math.sign(spin);

        estatisticasPartida.rallyAtual++;
        estatisticasPartida.melhorRally = max(estatisticasPartida.melhorRally, estatisticasPartida.rallyAtual);
        estatisticasPartida.spinMaximo = max(estatisticasPartida.spinMaximo, abs(spin));
    }

    registrarTrilha() {
        this.trilha.push({
            x: this.x,
            y: this.y,
            spin: this.intensidadeSpinVisual,
            direcao: this.direcaoSpinVisual,
        });

        if (this.trilha.length > 12) {
            this.trilha.shift();
        }
    }

    desenha() {
        this.desenhaTrilhaSpin();

        push();
        translate(this.x, this.y);
        rotate(this.angulo);
        image(bolaImagem, -this.r, -this.r, this.r * 2, this.r * 2);
        pop();
    }

    desenhaTrilhaSpin() {
        if (this.trilha.length === 0) {
            return;
        }

        const brilho = clamp(this.intensidadeSpinVisual, 0, 1);
        const corGlow = this.direcaoSpinVisual >= 0
            ? color(80, 190, 255, 115 + brilho * 70)
            : color(255, 165, 60, 115 + brilho * 70);

        noStroke();

        if (brilho > 0.08) {
            fill(red(corGlow), green(corGlow), blue(corGlow), 55 + brilho * 80);
            ellipse(this.x, this.y, this.r * 3.2 + brilho * 18, this.r * 3.2 + brilho * 18);
        }

        for (let i = 0; i < this.trilha.length; i++) {
            const ponto = this.trilha[i];
            const t = (i + 1) / this.trilha.length;
            const alpha = 16 + t * 68 + ponto.spin * 44;
            const tamanho = this.r * (0.62 + t * 0.78 + ponto.spin * 0.52);
            const corPonto = ponto.direcao >= 0 ? color(70, 180, 255, alpha) : color(255, 165, 60, alpha);
            fill(corPonto);
            ellipse(ponto.x, ponto.y, tamanho, tamanho);
        }
    }
}

class Particula {
    constructor(x, y, cor) {
        this.x = x;
        this.y = y;
        this.cor = cor;
        this.vx = random(-6, 6);
        this.vy = random(-6, 6);
        this.vida = 255;
        this.tamanho = random(4, 12);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.94;
        this.vy *= 0.94;
        this.vida -= 7;
    }

    desenha() {
        push();
        noStroke();
        fill(red(this.cor), green(this.cor), blue(this.cor), this.vida);
        ellipse(this.x, this.y, this.tamanho);
        pop();
    }

    estaMorta() {
        return this.vida <= 0;
    }
}

// ─── Utilitarios ───────────────────────────────────────────────────────────────
function algumaTeclaPressionada(codigos) {
    return codigos.some((codigo) => keyIsDown(codigo));
}

function clamp(valor, minimo, maximo) {
    return min(max(valor, minimo), maximo);
}

function getLanguageConfig() {
    return LANGUAGE_OPTIONS[idiomaSelecionado] || LANGUAGE_OPTIONS['pt-BR'];
}

function t(chave, variaveis = {}) {
    const partes = chave.split('.');
    let valor = I18N[idiomaSelecionado] || I18N['pt-BR'];

    for (const parte of partes) {
        valor = valor && valor[parte];
    }

    if (typeof valor !== 'string') {
        return chave;
    }

    return valor.replace(/\{(\w+)\}/g, (_, nome) => `${variaveis[nome] ?? ''}`);
}

function getModoDefinicao(id) {
    return {
        label: t(`modes.${id}.label`),
        descricao: t(`modes.${id}.description`),
    };
}

function getLanguageLabel(id) {
    return LANGUAGE_OPTIONS[id] ? LANGUAGE_OPTIONS[id].label : id;
}

function getPowerUpTexto(id, campo) {
    return t(`powerups.${id}.${campo}`);
}

function getAchievementTexto(id, campo) {
    return t(`achievements.${id}.${campo}`);
}

function criarEstatisticasPartida() {
    return {
        rallyAtual: 0,
        melhorRally: 0,
        velocidadeMaxima: 0,
        spinMaximo: 0,
        golsJogador: 0,
        golsComputador: 0,
        maiorDesvantagemEsquerda: 0,
        maiorDesvantagemDireita: 0,
    };
}

function criarEfeitosArcade() {
    return {
        esquerda: { sizeScale: 1, speedScale: 1, until: 0, label: null },
        direita: { sizeScale: 1, speedScale: 1, until: 0, label: null },
        bola: { radiusScale: 1, until: 0, label: null },
    };
}

function criarEstadoTorneio() {
    return {
        ativo: false,
        aguardandoProxima: false,
        round: 1,
        targetWins: 3,
        wins: { J1: 0, J2: 0 },
        ladoEsquerdo: 'J1',
        ultimoVencedor: null,
        campeao: null,
    };
}

function estaModoVersus() {
    return modoJogoSelecionado === 'versus';
}

function estaModoArcade() {
    return modoJogoSelecionado === 'arcade';
}

function estaModoTorneio() {
    return modoJogoSelecionado === 'torneio';
}

function estaModoCompetitivoLocal() {
    return estaModoVersus() || estaModoTorneio();
}

function getChavesModo() {
    return Object.keys(MODOS_JOGO);
}

function getChavesIdioma() {
    return Object.keys(LANGUAGE_OPTIONS);
}

function getChavesDificuldade() {
    return ['facil', 'medio', 'dificil', 'custom'];
}

function getConfiguracaoDificuldade() {
    if (dificuldadeSelecionada !== 'custom') {
        return {
            ...CONFIG_DIFICULDADE[dificuldadeSelecionada],
            label: t(`difficulties.${dificuldadeSelecionada}.label`),
            descricao: t(`difficulties.${dificuldadeSelecionada}.description`),
        };
    }

    const aiBase = map(customAiNivel, 0, 1, 2.8, 9.6);
    const paddleBase = map(customPaddleNivel, 0, 1, 54, 92);
    const ballBase = map(customBallNivel, 0, 1, 4.1, 8.8);

    return {
        label: t('difficulties.custom.label'),
        descricao: t('difficulties.custom.description'),
        aiSpeed: aiBase,
        aiPredictionFactor: map(customAiNivel, 0, 1, 3.2, 8.4),
        aiDeadZone: map(customAiNivel, 0, 1, 24, 6),
        aiErrorMargin: map(customAiNivel, 0, 1, 28, 4),
        playerPaddleHeight: paddleBase,
        computerPaddleHeight: paddleBase * 0.98,
        ballStartSpeed: ballBase,
        ballMaxSpeed: ballBase * 2.3,
        ballSpeedStep: map(customBallNivel, 0, 1, 1.02, 1.09),
    };
}

function getConfiguracaoPartida() {
    const base = getConfiguracaoDificuldade();
    const intensidadeNormalizada = map(intensidadeDificuldade, 0.7, 1.5, 0, 1);
    const arcadismo = estaModoArcade() ? 1.08 : 1;

    return {
        ...base,
        ballStartSpeed: base.ballStartSpeed * intensidadeDificuldade * arcadismo,
        ballMaxSpeed: base.ballMaxSpeed * intensidadeDificuldade * arcadismo,
        ballSpeedStep: 1 + (base.ballSpeedStep - 1) * map(intensidadeNormalizada, 0, 1, 0.85, 1.35),
        aiSpeed: base.aiSpeed * intensidadeDificuldade,
        aiPredictionFactor: base.aiPredictionFactor * map(intensidadeNormalizada, 0, 1, 0.9, 1.14),
        aiDeadZone: base.aiDeadZone / map(intensidadeNormalizada, 0, 1, 0.92, 1.3),
        aiErrorMargin: base.aiErrorMargin / map(intensidadeNormalizada, 0, 1, 0.95, 1.55),
        spinInfluence: map(intensidadeNormalizada, 0, 1, 0.16, 0.3),
        keyboardSpeed: map(intensidadeNormalizada, 0, 1, 6.3, 8.5),
        pointerSpeed: map(intensidadeNormalizada, 0, 1, 7, 9),
    };
}

function getRotulosPlacar() {
    const traduzirCompetidor = (id) => {
        if (id === 'PLAYER') return t('game.player');
        if (id === 'CPU') return t('game.cpu');
        if (id === 'ARCADE_CPU') return t('game.arcadeCpu');
        return id;
    };

    return [traduzirCompetidor(partidaCompetidores.esquerda), traduzirCompetidor(partidaCompetidores.direita)];
}

function getTituloGameOver() {
    if (estaModoVersus() || modoJogoSelecionado === 'torneio') {
        return pontosJogador > pontosComputador
            ? `${getRotulosPlacar()[0]} ${t('game.won')}`
            : `${getRotulosPlacar()[1]} ${t('game.won')}`;
    }

    return pontosJogador >= PONTOS_PARA_VENCER ? t('game.youWon') : t('game.youLost');
}

function getDescricaoDificuldade() {
    if (dificuldadeSelecionada === 'custom') {
        return t('difficulties.custom.description');
    }

    return estaModoCompetitivoLocal()
        ? `${getConfiguracaoDificuldade().descricao} no ritmo da bola`
        : getConfiguracaoDificuldade().descricao;
}

function getVozSelecionada() {
    return vozesDisponiveis[indiceVozSelecionada] || vozesDisponiveis[0];
}

function getTextoModoAtual() {
    const modo = getModoDefinicao(modoJogoSelecionado);
    return `${modo.label} - ${modo.descricao}`;
}

function getTextoDificuldadeAtual() {
    return `${getConfiguracaoDificuldade().label} - ${encurtarTexto(getDescricaoDificuldade(), 44)}`;
}

function formatarPercentual(valor) {
    return `${round(valor * 100)}%`;
}

function formatarVelocidadeNarracao() {
    return `${nf(velocidadeNarracao, 1, 2)}x`;
}

function formatarVelocidade(valor) {
    return `${nf(valor, 1, 1)} px/f`;
}

function formatarSpin(valor) {
    return `${nf(valor, 1, 2)}`;
}

function formatarSliderCustomAI() {
    return `${nf(map(customAiNivel, 0, 1, 2.8, 9.6), 1, 1)}`;
}

function formatarSliderCustomPaddle() {
    return `${round(map(customPaddleNivel, 0, 1, 54, 92))} px`;
}

function formatarSliderCustomBall() {
    return `${nf(map(customBallNivel, 0, 1, 4.1, 8.8), 1, 1)} px/f`;
}

function colideRetanguloCirculo(cx, cy, raio, x, y, w, h) {
    const pontoMaisProximoX = constrain(cx, x, x + w);
    const pontoMaisProximoY = constrain(cy, y, y + h);
    const distanciaX = cx - pontoMaisProximoX;
    const distanciaY = cy - pontoMaisProximoY;
    return distanciaX * distanciaX + distanciaY * distanciaY <= raio * raio;
}

function adicionarParticulas(x, y, cor) {
    for (let i = 0; i < 35; i++) {
        particulas.push(new Particula(x, y, cor));
    }
}

function tocarSom(som, multiplicador = 1, taxa = 1) {
    if (!som) {
        return;
    }

    som.rate(taxa);
    som.setVolume(clamp(volumeAudio * multiplicador, 0, 1));
    som.play();
}

function reproduzirPreviewVoz() {
    garantirAudioLiberado();

    if (!synthSuportado || !('speechSynthesis' in window)) {
        return;
    }

    const synth = window.speechSynthesis;
    const voz = getVozSelecionada();
    const msg = new SpeechSynthesisUtterance(t('speech.preview'));
    msg.lang = voz.voice ? (voz.lang || getLanguageConfig().speechLang) : getLanguageConfig().speechLang;
    msg.rate = velocidadeNarracao;
    msg.volume = volumeAudio;

    if (voz.voice) {
        msg.voice = voz.voice;
    }

    synth.cancel();
    synth.speak(msg);
}

function falaPontos() {
    if (!synthSuportado || !('speechSynthesis' in window)) {
        return;
    }

    const synth = window.speechSynthesis;
    const voz = getVozSelecionada();
    const [leftName, rightName] = getRotulosPlacar();
    const texto = estaModoCompetitivoLocal()
        ? t('speech.versusScore', { leftName, rightName, left: pontosJogador, right: pontosComputador })
        : t('speech.soloScore', { left: pontosJogador, right: pontosComputador });
    const msg = new SpeechSynthesisUtterance(texto);

    msg.lang = voz.voice ? (voz.lang || getLanguageConfig().speechLang) : getLanguageConfig().speechLang;
    msg.rate = velocidadeNarracao;
    msg.volume = volumeAudio;

    if (voz.voice) {
        msg.voice = voz.voice;
    }

    synth.cancel();
    synth.speak(msg);
}

function sincronizarVozesDisponiveis() {
    if (!('speechSynthesis' in window)) {
        synthSuportado = false;
        vozesDisponiveis = [{ label: t('unavailable'), voice: null, lang: getLanguageConfig().speechLang }];
        indiceVozSelecionada = 0;
        return;
    }

    synthSuportado = true;
    const vozes = window.speechSynthesis.getVoices();
    const vistos = new Set();
    const unicas = [];

    for (const voz of vozes) {
        const chave = voz.voiceURI || `${voz.name}-${voz.lang}`;
        if (vistos.has(chave)) {
            continue;
        }

        vistos.add(chave);
        unicas.push(voz);
    }

    unicas.sort((a, b) => {
        const config = getLanguageConfig();
        const rank = (voz) => {
            const lang = (voz.lang || '').toLowerCase();
            const [firstPrefix, secondPrefix] = config.voicePrefixes.map((prefix) => prefix.toLowerCase());
            if (lang === firstPrefix) return 0;
            if (lang.startsWith(secondPrefix)) return 1;
            if (lang.startsWith('pt')) return 2;
            if (lang.startsWith('en')) return 3;
            if (lang.startsWith('es')) return 4;
            return 5;
        };

        return rank(a) - rank(b) || a.name.localeCompare(b.name);
    });

    vozesDisponiveis = [
        { label: t('automatic'), voice: null, lang: getLanguageConfig().speechLang },
        ...unicas.map((voz) => ({
            label: `${voz.name} (${voz.lang})`,
            voice: voz,
            lang: voz.lang,
        })),
    ];

    if (voiceUriPersistida) {
        const indicePersistido = vozesDisponiveis.findIndex((item) => item.voice && item.voice.voiceURI === voiceUriPersistida);
        if (indicePersistido >= 0) {
            indiceVozSelecionada = indicePersistido;
        }
    } else {
        indiceVozSelecionada = min(indiceVozSelecionada, vozesDisponiveis.length - 1);
    }
}

function obterGamepadsConectados() {
    if (!navigator.getGamepads) {
        return [];
    }

    return Array.from(navigator.getGamepads()).filter(Boolean);
}

function obterEixoGamepad(indice) {
    if (indice == null || !navigator.getGamepads) {
        return 0;
    }

    const gamepad = navigator.getGamepads()[indice];
    if (!gamepad) {
        return 0;
    }

    const eixo = gamepad.axes[1] ?? 0;
    const dpadCima = gamepad.buttons[12] && gamepad.buttons[12].pressed ? -1 : 0;
    const dpadBaixo = gamepad.buttons[13] && gamepad.buttons[13].pressed ? 1 : 0;
    const valor = abs(eixo) > abs(dpadCima + dpadBaixo) ? eixo : dpadCima + dpadBaixo;

    return abs(valor) > 0.14 ? valor : 0;
}

function obterToquePorLado(lado) {
    if (touches.length === 0) {
        return null;
    }

    if (!estaModoCompetitivoLocal()) {
        return touches[0];
    }

    for (const toque of touches) {
        if (lado === 'esquerda' && toque.x <= width / 2) {
            return toque;
        }

        if (lado === 'direita' && toque.x > width / 2) {
            return toque;
        }
    }

    return null;
}

function obterVelocidadeRaquete(raquete) {
    const config = getConfiguracaoPartida();
    const efeito = obterEfeitoArcade(raquete.lado);
    const base = raquete.controle.tipo === 'ia'
        ? config.aiSpeed
        : raquete.controle.tipo === 'ponteiro'
            ? config.pointerSpeed
            : config.keyboardSpeed;
    return base * efeito.speedScale;
}

function obterTaxaSomQuicar() {
    const rally = estatisticasPartida.rallyAtual;
    const matchPoint = max(pontosJogador, pontosComputador) >= PONTOS_PARA_VENCER - 1;
    return clamp(0.95 + rally * 0.012 + (matchPoint ? 0.08 : 0), 0.9, 1.35);
}

function obterTaxaSomGol() {
    const matchPoint = max(pontosJogador, pontosComputador) >= PONTOS_PARA_VENCER - 1;
    return matchPoint ? 1.14 : 1;
}

function garantirAudioLiberado() {
    if (audioInicializado) {
        return;
    }

    if (typeof userStartAudio === 'function') {
        userStartAudio();
    }

    audioInicializado = true;
}

function configurarTrilhaDinamica() {
    if (typeof p5 === 'undefined' || typeof p5.Oscillator !== 'function') {
        return;
    }

    trilhaOsc = new p5.Oscillator('triangle');
    trilhaOsc.start();
    trilhaOsc.amp(0, 0.01);
}

function atualizarTrilhaDinamica() {
    if (!trilhaOsc) {
        return;
    }

    let alvoAmp = 0;
    let alvoFreq = 110;

    if (gameState === STATE_PLAYING) {
        const rally = estatisticasPartida.rallyAtual;
        const velocidade = bola ? sqrt(bola.vx * bola.vx + bola.vy * bola.vy) : 0;
        const matchPoint = max(pontosJogador, pontosComputador) >= PONTOS_PARA_VENCER - 1;
        alvoAmp = (0.012 + min(rally * 0.0024, 0.03) + (matchPoint ? 0.028 : 0) + (estaModoArcade() ? 0.01 : 0)) * volumeAudio;
        alvoFreq = 120 + velocidade * 7 + rally * 2 + (matchPoint ? 18 : 0) + (estaModoArcade() ? 14 : 0);
    }

    trilhaOsc.freq(alvoFreq, 0.12);
    trilhaOsc.amp(alvoAmp, 0.18);
}

function salvarPreferencias() {
    try {
        const vozAtual = getVozSelecionada();
        const dados = {
            idiomaSelecionado,
            modoJogoSelecionado,
            dificuldadeSelecionada,
            volumeAudio,
            velocidadeNarracao,
            intensidadeDificuldade,
            customAiNivel,
            customPaddleNivel,
            customBallNivel,
            voiceUri: vozAtual && vozAtual.voice ? vozAtual.voice.voiceURI : null,
            recordesPersistidos,
            achievementsPersistidos,
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
    } catch (error) {
        // Ignora indisponibilidade de armazenamento no navegador.
    }
}

function carregarPreferencias() {
    try {
        let bruto = localStorage.getItem(STORAGE_KEY);
        let chaveOrigem = STORAGE_KEY;

        if (!bruto) {
            for (const legacyKey of LEGACY_STORAGE_KEYS) {
                bruto = localStorage.getItem(legacyKey);
                if (bruto) {
                    chaveOrigem = legacyKey;
                    break;
                }
            }
        }

        if (!bruto) {
            return;
        }

        const dados = JSON.parse(bruto);

        if (chaveOrigem !== STORAGE_KEY) {
            localStorage.setItem(STORAGE_KEY, bruto);
            localStorage.removeItem(chaveOrigem);
        }

        idiomaSelecionado = LANGUAGE_OPTIONS[dados.idiomaSelecionado] ? dados.idiomaSelecionado : idiomaSelecionado;
        modoJogoSelecionado = MODOS_JOGO[dados.modoJogoSelecionado] ? dados.modoJogoSelecionado : modoJogoSelecionado;
        dificuldadeSelecionada = getChavesDificuldade().includes(dados.dificuldadeSelecionada) ? dados.dificuldadeSelecionada : dificuldadeSelecionada;
        volumeAudio = clamp(dados.volumeAudio ?? volumeAudio, 0, 1);
        velocidadeNarracao = clamp(dados.velocidadeNarracao ?? velocidadeNarracao, 0.7, 1.5);
        intensidadeDificuldade = clamp(dados.intensidadeDificuldade ?? intensidadeDificuldade, 0.7, 1.5);
        customAiNivel = clamp(dados.customAiNivel ?? customAiNivel, 0, 1);
        customPaddleNivel = clamp(dados.customPaddleNivel ?? customPaddleNivel, 0, 1);
        customBallNivel = clamp(dados.customBallNivel ?? customBallNivel, 0, 1);
        voiceUriPersistida = dados.voiceUri || null;

        if (dados.recordesPersistidos) {
            recordesPersistidos = {
                melhorRally: dados.recordesPersistidos.melhorRally || 0,
                velocidadeMaxima: dados.recordesPersistidos.velocidadeMaxima || 0,
            };
        }

        if (dados.achievementsPersistidos) {
            achievementsPersistidos = dados.achievementsPersistidos;
        }
    } catch (error) {
        // Ignora erros de leitura de armazenamento.
    }
}

function alterarIdioma(delta) {
    const chaves = getChavesIdioma();
    const indiceAtual = chaves.indexOf(idiomaSelecionado);
    const novoIndice = (indiceAtual + delta + chaves.length) % chaves.length;
    idiomaSelecionado = chaves[novoIndice];
    sincronizarVozesDisponiveis();
    salvarPreferencias();
}

function alterarModo(delta) {
    const chaves = getChavesModo();
    const indiceAtual = chaves.indexOf(modoJogoSelecionado);
    const novoIndice = (indiceAtual + delta + chaves.length) % chaves.length;
    modoJogoSelecionado = chaves[novoIndice];
    if (!estaModoTorneio()) {
        limparSerieTorneio();
    }
    salvarPreferencias();
}

function alterarDificuldade(delta) {
    const chaves = getChavesDificuldade();
    const indiceAtual = chaves.indexOf(dificuldadeSelecionada);
    const novoIndice = (indiceAtual + delta + chaves.length) % chaves.length;
    dificuldadeSelecionada = chaves[novoIndice];
    salvarPreferencias();
}

function alterarVoz(delta) {
    if (!synthSuportado || vozesDisponiveis.length <= 1) {
        return;
    }

    indiceVozSelecionada = (indiceVozSelecionada + delta + vozesDisponiveis.length) % vozesDisponiveis.length;
    salvarPreferencias();
}

function alterarSlider(id, delta) {
    if (id === 'volume') {
        volumeAudio = clamp(volumeAudio + delta, 0, 1);
    } else if (id === 'narracao') {
        velocidadeNarracao = clamp(velocidadeNarracao + delta, 0.7, 1.5);
    } else if (id === 'intensidade') {
        intensidadeDificuldade = clamp(intensidadeDificuldade + delta, 0.7, 1.5);
    } else if (id === 'customAi') {
        customAiNivel = clamp(customAiNivel + delta, 0, 1);
    } else if (id === 'customPaddle') {
        customPaddleNivel = clamp(customPaddleNivel + delta, 0, 1);
    } else if (id === 'customBall') {
        customBallNivel = clamp(customBallNivel + delta, 0, 1);
    }

    salvarPreferencias();
}

function definirSliderPorProporcao(id, proporcao) {
    const t = clamp(proporcao, 0, 1);

    if (id === 'volume') {
        volumeAudio = t;
    } else if (id === 'narracao') {
        velocidadeNarracao = map(t, 0, 1, 0.7, 1.5);
    } else if (id === 'intensidade') {
        intensidadeDificuldade = map(t, 0, 1, 0.7, 1.5);
    } else if (id === 'customAi') {
        customAiNivel = t;
    } else if (id === 'customPaddle') {
        customPaddleNivel = t;
    } else if (id === 'customBall') {
        customBallNivel = t;
    }

    salvarPreferencias();
}

function obterValorSlider(id) {
    if (id === 'volume') return volumeAudio;
    if (id === 'narracao') return map(velocidadeNarracao, 0.7, 1.5, 0, 1);
    if (id === 'intensidade') return map(intensidadeDificuldade, 0.7, 1.5, 0, 1);
    if (id === 'customAi') return customAiNivel;
    if (id === 'customPaddle') return customPaddleNivel;
    return customBallNivel;
}

function obterTextoSlider(id) {
    if (id === 'volume') return formatarPercentual(volumeAudio);
    if (id === 'narracao') return formatarVelocidadeNarracao();
    if (id === 'intensidade') return formatarPercentual(intensidadeDificuldade);
    if (id === 'customAi') return formatarSliderCustomAI();
    if (id === 'customPaddle') return formatarSliderCustomPaddle();
    return formatarSliderCustomBall();
}

function obterDescricaoSlider(id) {
    if (dificuldadeSelecionada !== 'custom' && (id === 'customAi' || id === 'customPaddle' || id === 'customBall')) {
        return t('descriptions.disabledCustom');
    }

    if (id === 'customAi') return t('descriptions.customAi');
    if (id === 'customPaddle') return t('descriptions.customPaddle');
    if (id === 'customBall') return t('descriptions.customBall');
    if (id === 'volume') return t('descriptions.volume');
    if (id === 'narracao') return t('descriptions.narration');
    return t('descriptions.intensity');
}

function obterDefinicoesMenu() {
    const vozAtual = getVozSelecionada();
    const modoAtual = getModoDefinicao(modoJogoSelecionado);

    return [
        { id: 'modo', tipo: 'selector', label: t('labels.mode'), valor: modoAtual.label, descricao: modoAtual.descricao },
        { id: 'idioma', tipo: 'selector', label: t('labels.language'), valor: getLanguageLabel(idiomaSelecionado), descricao: t('descriptions.language') },
        { id: 'dificuldade', tipo: 'selector', label: t('labels.difficulty'), valor: getConfiguracaoDificuldade().label, descricao: getDescricaoDificuldade() },
        { id: 'customAi', tipo: 'slider', label: t('labels.customAi'), valor: obterTextoSlider('customAi'), descricao: obterDescricaoSlider('customAi'), disabled: dificuldadeSelecionada !== 'custom' },
        { id: 'customPaddle', tipo: 'slider', label: t('labels.customPaddle'), valor: obterTextoSlider('customPaddle'), descricao: obterDescricaoSlider('customPaddle'), disabled: dificuldadeSelecionada !== 'custom' },
        { id: 'customBall', tipo: 'slider', label: t('labels.customBall'), valor: obterTextoSlider('customBall'), descricao: obterDescricaoSlider('customBall'), disabled: dificuldadeSelecionada !== 'custom' },
        { id: 'voz', tipo: 'selector', label: t('labels.voice'), valor: synthSuportado ? encurtarTexto(vozAtual.label, 24) : t('unavailable'), descricao: synthSuportado ? t('descriptions.voiceAvailable') : t('descriptions.voiceUnavailable') },
        { id: 'testarVoz', tipo: 'button', label: t('labels.testVoice'), descricao: t('descriptions.testVoice') },
        { id: 'controles', tipo: 'button', label: t('labels.controls'), descricao: t('descriptions.controls') },
        { id: 'volume', tipo: 'slider', label: t('labels.volume'), valor: obterTextoSlider('volume'), descricao: obterDescricaoSlider('volume') },
        { id: 'narracao', tipo: 'slider', label: t('labels.narration'), valor: obterTextoSlider('narracao'), descricao: obterDescricaoSlider('narracao') },
        { id: 'intensidade', tipo: 'slider', label: t('labels.intensity'), valor: obterTextoSlider('intensidade'), descricao: obterDescricaoSlider('intensidade') },
        { id: 'jogar', tipo: 'primaryButton', label: t('labels.play'), descricao: t('game.firstToWin', { points: PONTOS_PARA_VENCER }) },
    ];
}

function obterLayoutMenu() {
    const defs = obterDefinicoesMenu();
    const panelW = min(560, width - 44);
    const titleY = max(54, height * 0.09);
    const startY = titleY + 64;
    const gap = 8;
    const rows = {};
    let cursorY = startY;

    for (const def of defs) {
        let h = 46;
        if (def.tipo === 'slider') h = 50;
        if (def.tipo === 'button') h = 42;
        if (def.tipo === 'primaryButton') h = 50;

        rows[def.id] = {
            x: width / 2 - panelW / 2,
            y: cursorY,
            w: def.tipo === 'button' || def.tipo === 'primaryButton' ? min(240, panelW) : panelW,
            h,
            arrowW: 48,
        };

        rows[def.id].x = width / 2 - rows[def.id].w / 2;
        cursorY += h + gap;
    }

    return { defs, rows, titleY };
}

function obterAreaInternaSeletor(row) {
    return {
        leftArrow: { x: row.x, y: row.y, w: row.arrowW, h: row.h },
        rightArrow: { x: row.x + row.w - row.arrowW, y: row.y, w: row.arrowW, h: row.h },
    };
}

function obterAreaSlider(row) {
    const trilhoX = row.x + 18;
    const trilhoY = row.y + row.h - 16;
    const trilhoW = row.w - 36;
    const trilhoH = 7;

    return {
        trilho: { x: trilhoX, y: trilhoY, w: trilhoW, h: trilhoH },
        clicavel: { x: trilhoX, y: trilhoY - 10, w: trilhoW, h: 28 },
    };
}

function pontoDentro(px, py, area) {
    return px >= area.x && px <= area.x + area.w && py >= area.y && py <= area.y + area.h;
}

function navegarFocoMenu(delta) {
    menuFocusIndex = (menuFocusIndex + delta + MENU_ITEMS.length) % MENU_ITEMS.length;
}

function ajustarItemFocadoMenu(delta) {
    const id = MENU_ITEMS[menuFocusIndex];

    if (id === 'modo') {
        alterarModo(delta);
    } else if (id === 'idioma') {
        alterarIdioma(delta);
    } else if (id === 'dificuldade') {
        alterarDificuldade(delta);
    } else if (id === 'voz') {
        alterarVoz(delta);
    } else if (id === 'testarVoz') {
        if (delta > 0) reproduzirPreviewVoz();
    } else if (id === 'controles') {
        if (delta > 0) painelControlesAberto = true;
    } else {
        alterarSlider(id, delta * 0.05);
    }
}

function ativarItemFocadoMenu() {
    const id = MENU_ITEMS[menuFocusIndex];

    if (id === 'jogar') {
        iniciarJogo();
    } else if (id === 'testarVoz') {
        reproduzirPreviewVoz();
    } else if (id === 'controles') {
        painelControlesAberto = true;
    } else {
        ajustarItemFocadoMenu(1);
    }
}

function tratarInteracaoMenu(px, py) {
    const { defs, rows } = obterLayoutMenu();

    for (let i = 0; i < defs.length; i++) {
        const def = defs[i];
        const row = rows[def.id];
        if (!pontoDentro(px, py, row)) {
            continue;
        }

        menuFocusIndex = i;

        if (def.tipo === 'selector') {
            const areas = obterAreaInternaSeletor(row);
            if (pontoDentro(px, py, areas.leftArrow)) {
                ajustarSeletor(def.id, -1);
            } else if (pontoDentro(px, py, areas.rightArrow)) {
                ajustarSeletor(def.id, 1);
            } else if (px < row.x + row.w / 2) {
                ajustarSeletor(def.id, -1);
            } else {
                ajustarSeletor(def.id, 1);
            }
            return true;
        }

        if (def.tipo === 'slider') {
            const area = obterAreaSlider(row).clicavel;
            definirSliderPorProporcao(def.id, (px - area.x) / area.w);
            return true;
        }

        if (def.id === 'testarVoz') {
            reproduzirPreviewVoz();
            return true;
        }

        if (def.id === 'controles') {
            painelControlesAberto = true;
            return true;
        }

        if (def.id === 'jogar') {
            iniciarJogo();
            return true;
        }
    }

    return false;
}

function ajustarSeletor(id, delta) {
    if (id === 'modo') {
        alterarModo(delta);
    } else if (id === 'idioma') {
        alterarIdioma(delta);
    } else if (id === 'dificuldade') {
        alterarDificuldade(delta);
    } else if (id === 'voz') {
        alterarVoz(delta);
    }
}

function obterEfeitoArcade(lado) {
    if (!estaModoArcade()) {
        return lado === 'bola'
            ? { radiusScale: 1, until: 0, label: null }
            : { sizeScale: 1, speedScale: 1, until: 0, label: null };
    }

    const efeito = efeitosArcade[lado];
    if (frameCount > efeito.until) {
        if (lado === 'bola') {
            efeito.radiusScale = 1;
        } else {
            efeito.sizeScale = 1;
            efeito.speedScale = 1;
        }
        efeito.label = null;
    }

    return efeito;
}

function aplicarPowerUp(tipo, lado) {
    const alvo = efeitosArcade[lado];
    const inimigoLado = lado === 'esquerda' ? 'direita' : 'esquerda';
    const inimigo = efeitosArcade[inimigoLado];
    const efeitoBola = efeitosArcade.bola;

    if (tipo.id === 'expand') {
        alvo.sizeScale = 1.35;
        alvo.until = frameCount + tipo.duracao;
        alvo.label = getPowerUpTexto(tipo.id, 'effect');
    } else if (tipo.id === 'shrink') {
        inimigo.sizeScale = 0.72;
        inimigo.until = frameCount + tipo.duracao;
        inimigo.label = getPowerUpTexto(tipo.id, 'effect');
    } else if (tipo.id === 'turbo') {
        alvo.speedScale = 1.35;
        alvo.until = frameCount + tipo.duracao;
        alvo.label = getPowerUpTexto(tipo.id, 'effect');
    } else if (tipo.id === 'slow') {
        bola.vx *= 0.82;
        bola.vy *= 0.82;
        alvo.label = getPowerUpTexto(tipo.id, 'effect');
        alvo.until = frameCount + tipo.duracao;
    } else if (tipo.id === 'freeze') {
        inimigo.speedScale = 0.68;
        inimigo.until = frameCount + tipo.duracao;
        inimigo.label = getPowerUpTexto(tipo.id, 'effect');
    } else if (tipo.id === 'spinburst') {
        bola.vy += lado === 'esquerda' ? -4.2 : 4.2;
        bola.intensidadeSpinVisual = 1;
        bola.direcaoSpinVisual = lado === 'esquerda' ? -1 : 1;
        alvo.label = getPowerUpTexto(tipo.id, 'effect');
        alvo.until = frameCount + 180;
    } else if (tipo.id === 'megaball') {
        efeitoBola.radiusScale = 1.45;
        efeitoBola.until = frameCount + tipo.duracao;
        efeitoBola.label = getPowerUpTexto(tipo.id, 'effect');
    }

    adicionarParticulas(powerUpAtual.x, powerUpAtual.y, color(...tipo.cor));
}

function spawnPowerUp() {
    const totalPeso = POWER_UP_TYPES.reduce((soma, item) => soma + item.peso, 0);
    let rolagem = random(totalPeso);
    let tipo = POWER_UP_TYPES[0];

    for (const item of POWER_UP_TYPES) {
        rolagem -= item.peso;
        if (rolagem <= 0) {
            tipo = item;
            break;
        }
    }

    powerUpAtual = {
        tipo,
        x: random(width * 0.34, width * 0.66),
        y: random(height * 0.2, height * 0.8),
        r: 18,
        pulso: random(TWO_PI),
    };
}

function atualizarArcade() {
    if (!estaModoArcade()) {
        powerUpAtual = null;
        return;
    }

    obterEfeitoArcade('esquerda');
    obterEfeitoArcade('direita');

    if (!powerUpAtual && frameCount >= proximoPowerUpFrame) {
        spawnPowerUp();
        proximoPowerUpFrame = frameCount + floor(random(280, 520));
    }

    if (powerUpAtual) {
        powerUpAtual.pulso += 0.08;
    }
}

function verificarColisaoPowerUp() {
    if (!powerUpAtual) {
        return;
    }

    const distancia = dist(bola.x, bola.y, powerUpAtual.x, powerUpAtual.y);
    if (distancia > bola.r + powerUpAtual.r) {
        return;
    }

    aplicarPowerUp(powerUpAtual.tipo, ultimoContatoLado);
    powerUpAtual = null;
}

function atualizarDesvantagemPartida() {
    const diferenca = pontosJogador - pontosComputador;
    estatisticasPartida.maiorDesvantagemEsquerda = max(estatisticasPartida.maiorDesvantagemEsquerda, max(0, -diferenca));
    estatisticasPartida.maiorDesvantagemDireita = max(estatisticasPartida.maiorDesvantagemDireita, max(0, diferenca));
}

function desbloquearConquista(id) {
    if (achievementsPersistidos[id]) {
        return;
    }

    achievementsPersistidos[id] = true;
    medalhasDesbloqueadasRecentes.push(id);
}

function avaliarConquistasPartida(vencedorLado) {
    const perdedorPontos = vencedorLado === 'esquerda' ? pontosComputador : pontosJogador;
    const desvantagemVencedor = vencedorLado === 'esquerda'
        ? estatisticasPartida.maiorDesvantagemEsquerda
        : estatisticasPartida.maiorDesvantagemDireita;

    if (estatisticasPartida.melhorRally >= 20) {
        desbloquearConquista('rally20');
    }

    if (perdedorPontos === 0) {
        desbloquearConquista('perfectWin');
    }

    if (desvantagemVencedor >= 4) {
        desbloquearConquista('comeback');
    }

    if (estaModoArcade() && vencedorLado === 'esquerda') {
        desbloquearConquista('arcadeWin');
    }
}

function registrarGol(lado, x, y) {
    if (lado === 'direita') {
        pontosComputador++;
        estatisticasPartida.golsComputador++;
        adicionarParticulas(x, y, color(255, 80, 80));
    } else {
        pontosJogador++;
        estatisticasPartida.golsJogador++;
        adicionarParticulas(x, y, color(80, 220, 120));
    }

    atualizarDesvantagemPartida();
    tocarSom(golSom, 0.85, obterTaxaSomGol());
    falaPontos();

    if (pontosJogador >= PONTOS_PARA_VENCER || pontosComputador >= PONTOS_PARA_VENCER) {
        finalizarPartida();
        return;
    }

    bola.reset();
}

function atualizarRecordes() {
    recordesPersistidos.melhorRally = max(recordesPersistidos.melhorRally, estatisticasPartida.melhorRally);
    recordesPersistidos.velocidadeMaxima = max(recordesPersistidos.velocidadeMaxima, estatisticasPartida.velocidadeMaxima);
    salvarPreferencias();
}

function prepararSerieTorneio() {
    if (!serieTorneio.ativo || serieTorneio.campeao) {
        serieTorneio = criarEstadoTorneio();
        serieTorneio.ativo = true;
    }
}

function finalizarRodadaTorneio(vencedorId) {
    serieTorneio.ativo = true;
    serieTorneio.ultimoVencedor = vencedorId;
    serieTorneio.wins[vencedorId] += 1;

    if (serieTorneio.wins[vencedorId] >= serieTorneio.targetWins) {
        serieTorneio.campeao = vencedorId;
        serieTorneio.aguardandoProxima = false;
        desbloquearConquista('tournamentChampion');
    } else {
        serieTorneio.aguardandoProxima = true;
        serieTorneio.round += 1;
        serieTorneio.ladoEsquerdo = serieTorneio.ladoEsquerdo === 'J1' ? 'J2' : 'J1';
    }
}

function limparSerieTorneio() {
    serieTorneio = criarEstadoTorneio();
}

function mudarEstado(novoEstado) {
    estadoAnterior = gameState;
    gameState = novoEstado;
    frameEntradaEstado = frameCount;
    overlayTransicaoAlpha = 255;
}

function finalizarPartida() {
    medalhasDesbloqueadasRecentes = [];
    const vencedorLado = pontosJogador > pontosComputador ? 'esquerda' : 'direita';
    avaliarConquistasPartida(vencedorLado);

    if (estaModoTorneio()) {
        const vencedorId = vencedorLado === 'esquerda' ? partidaCompetidores.esquerda : partidaCompetidores.direita;
        finalizarRodadaTorneio(vencedorId);
    }

    atualizarRecordes();
    salvarPreferencias();
    mudarEstado(STATE_GAMEOVER);
}

function iniciarJogo() {
    garantirAudioLiberado();

    const config = getConfiguracaoPartida();
    if (estaModoTorneio()) {
        prepararSerieTorneio();
        partidaCompetidores = {
            esquerda: serieTorneio.ladoEsquerdo,
            direita: serieTorneio.ladoEsquerdo === 'J1' ? 'J2' : 'J1',
        };
    } else if (estaModoVersus()) {
        partidaCompetidores = { esquerda: 'J1', direita: 'J2' };
    } else {
        partidaCompetidores = { esquerda: 'PLAYER', direita: estaModoArcade() ? 'ARCADE_CPU' : 'CPU' };
    }

    const controleEsquerda = estaModoCompetitivoLocal()
        ? { tipo: 'teclado', upKeys: [87], downKeys: [83], gamepadIndex: 0 }
        : { tipo: 'ponteiro', upKeys: [87, UP_ARROW], downKeys: [83, DOWN_ARROW], gamepadIndex: 0 };
    const controleDireita = estaModoCompetitivoLocal()
        ? { tipo: 'teclado', upKeys: [UP_ARROW], downKeys: [DOWN_ARROW], gamepadIndex: 1 }
        : { tipo: 'ia' };
    const alturaDireita = estaModoCompetitivoLocal() ? config.playerPaddleHeight : config.computerPaddleHeight;

    pontosJogador = 0;
    pontosComputador = 0;
    particulas = [];
    estatisticasPartida = criarEstatisticasPartida();
    efeitosArcade = criarEfeitosArcade();
    ultimoContatoLado = 'esquerda';
    powerUpAtual = null;
    proximoPowerUpFrame = frameCount + floor(random(260, 440));
    rodadaAtualIniciada = true;

    bola = new Bola();
    jogador = new Raquete(30, 'esquerda', config.playerPaddleHeight, controleEsquerda);
    computador = new Raquete(width - 40, 'direita', alturaDireita, controleDireita);

    salvarPreferencias();
    mudarEstado(STATE_PLAYING);
}

function desenhaCartaoFoco(x, y, w, h, raio = 12) {
    noFill();
    stroke(255, 235, 120);
    strokeWeight(3);
    rect(x - 3, y - 3, w + 6, h + 6, raio + 2);
    noStroke();
}

function encurtarTexto(texto, limite) {
    if (!texto || texto.length <= limite) {
        return texto;
    }

    return `${texto.slice(0, limite - 3)}...`;
}

function progressoEntradaEstado() {
    return clamp((frameCount - frameEntradaEstado) / 20, 0, 1);
}

function desenharTransicao() {
    overlayTransicaoAlpha = max(0, overlayTransicaoAlpha - 22);

    if (overlayTransicaoAlpha <= 0) {
        return;
    }

    fill(0, 0, 0, overlayTransicaoAlpha);
    noStroke();
    rect(0, 0, width, height);
}

function sairOuAvancarGameOver() {
    if (estaModoTorneio() && serieTorneio.aguardandoProxima) {
        iniciarJogo();
        return;
    }

    if (estaModoTorneio()) {
        limparSerieTorneio();
    }

    mudarEstado(STATE_MENU);
}

// ─── p5.js lifecycle ───────────────────────────────────────────────────────────
function preload() {
    bolaImagem = loadImage('./src/bola.png');
    jogadorImagem = loadImage('./src/barra01.png');
    computadorImagem = loadImage('./src/barra02.png');
    fundoImagem = loadImage('./src/fundo2.png');
    quicarSom = loadSound('./src/446100__justinvoke__bounce.wav');
    golSom = loadSound('./src/274178__littlerobotsoundfactory__jingle_win_synth_02.wav');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont('sans-serif');

    carregarPreferencias();
    sincronizarVozesDisponiveis();
    configurarTrilhaDinamica();

    bola = new Bola();
    jogador = new Raquete(30, 'esquerda', getConfiguracaoPartida().playerPaddleHeight, { tipo: 'ponteiro', upKeys: [87], downKeys: [83], gamepadIndex: 0 });
    computador = new Raquete(width - 40, 'direita', getConfiguracaoPartida().computerPaddleHeight, { tipo: 'ia' });

    if ('speechSynthesis' in window && typeof window.speechSynthesis.addEventListener === 'function') {
        window.speechSynthesis.addEventListener('voiceschanged', sincronizarVozesDisponiveis);
    } else if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = sincronizarVozesDisponiveis;
    }

    frameEntradaEstado = frameCount;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    if (jogador) jogador.x = 30;
    if (computador) computador.x = width - 40;
}

function keyPressed() {
    if (gameState === STATE_MENU) {
        if (painelControlesAberto) {
            if (keyCode === ESCAPE || keyCode === ENTER || keyCode === RETURN || key === 'c' || key === 'C') {
                painelControlesAberto = false;
                return false;
            }
            return false;
        }

        if (keyCode === TAB) {
            navegarFocoMenu(keyIsDown(SHIFT) ? -1 : 1);
            return false;
        }

        if (keyCode === UP_ARROW) {
            navegarFocoMenu(-1);
            return false;
        }

        if (keyCode === DOWN_ARROW) {
            navegarFocoMenu(1);
            return false;
        }

        if (keyCode === LEFT_ARROW) {
            ajustarItemFocadoMenu(-1);
            return false;
        }

        if (keyCode === RIGHT_ARROW) {
            ajustarItemFocadoMenu(1);
            return false;
        }

        if (keyCode === ENTER || keyCode === RETURN || keyCode === TECLA_ESPACO) {
            ativarItemFocadoMenu();
            return false;
        }
    }

    if (key === 'p' || key === 'P' || keyCode === ESCAPE) {
        if (gameState === STATE_PLAYING) {
            mudarEstado(STATE_PAUSED);
        } else if (gameState === STATE_PAUSED) {
            mudarEstado(STATE_PLAYING);
        }

        return false;
    }

    if (gameState === STATE_GAMEOVER && (keyCode === ENTER || keyCode === RETURN || keyCode === TECLA_ESPACO)) {
        sairOuAvancarGameOver();
        return false;
    }
}

function mousePressed() {
    garantirAudioLiberado();

    if (gameState === STATE_MENU) {
        if (painelControlesAberto) {
            painelControlesAberto = false;
            return false;
        }
        tratarInteracaoMenu(mouseX, mouseY);
        return false;
    }

    if (gameState === STATE_GAMEOVER) {
        sairOuAvancarGameOver();
        return false;
    }
}

function touchStarted() {
    garantirAudioLiberado();

    if (gameState === STATE_MENU) {
        if (painelControlesAberto) {
            painelControlesAberto = false;
            return false;
        }
        const toque = touches[0] || { x: mouseX, y: mouseY };
        tratarInteracaoMenu(toque.x, toque.y);
        return false;
    }

    if (gameState === STATE_GAMEOVER) {
        sairOuAvancarGameOver();
        return false;
    }

    if (gameState === STATE_PLAYING) {
        return false;
    }
}

// ─── Loop principal ────────────────────────────────────────────────────────────
function draw() {
    desenhaFundo();
    atualizarTrilhaDinamica();

    if (gameState === STATE_MENU) {
        desenhaMenu();
    } else if (gameState === STATE_PLAYING) {
        atualizaJogo();
        desenhaJogo();
    } else if (gameState === STATE_PAUSED) {
        desenhaJogo();
        desenhaPausa();
    } else if (gameState === STATE_GAMEOVER) {
        desenhaJogo();
        desenhaGameOver();
    }

    desenharTransicao();
}

function atualizaJogo() {
    for (let i = particulas.length - 1; i >= 0; i--) {
        particulas[i].update();
        if (particulas[i].estaMorta()) {
            particulas.splice(i, 1);
        }
    }

    atualizarArcade();
    bola.update();
    jogador.update();
    computador.update();
}

// ─── Desenho ───────────────────────────────────────────────────────────────────
function desenhaFundo() {
    const canvasRatio = width / height;
    const fundoRatio = fundoImagem.width / fundoImagem.height;
    const zoom = canvasRatio > fundoRatio
        ? width / fundoImagem.width
        : height / fundoImagem.height;
    const sw = fundoImagem.width * zoom;
    const sh = fundoImagem.height * zoom;

    image(fundoImagem, (width - sw) / 2, (height - sh) / 2, sw, sh);
}

function desenhaJogo() {
    desenhaLinhaCentral();
    for (const p of particulas) p.desenha();
    desenhaPlacares();
    desenhaGuiasTouch();
    desenhaHudArcade();
    desenhaHudTorneio();
    desenhaPowerUp();
    bola.desenha();
    jogador.desenha();
    computador.desenha();
    desenhaDicasGamepad();
}

function desenhaLinhaCentral() {
    stroke(255, 255, 255, 90);
    strokeWeight(2);

    for (let y = 0; y < height; y += 32) {
        line(width / 2, y, width / 2, y + 20);
    }

    noStroke();
}

function desenhaPlacares() {
    const rotulos = getRotulosPlacar();

    noStroke();
    textAlign(CENTER, TOP);
    textSize(14);
    fill(220, 220, 220, 180);
    text(rotulos[0], width / 4, 18);
    text(rotulos[1], (width / 4) * 3, 18);

    textSize(52);
    fill(255, 255, 255, 215);
    text(pontosJogador, width / 4, 34);
    text(pontosComputador, (width / 4) * 3, 34);

    textSize(12);
    fill(210, 210, 210, 160);
    if (estaModoCompetitivoLocal()) {
        text(t('game.leftControlHint'), width / 4, 92);
        text(t('game.rightControlHint'), (width / 4) * 3, 92);
    } else {
        text(t('game.soloControlHint'), width / 4, 92);
    }
}

function desenhaGuiasTouch() {
    if (touches.length === 0 && width > 820) {
        return;
    }

    noStroke();
    textAlign(CENTER, CENTER);
    textSize(12);

    if (estaModoCompetitivoLocal()) {
        fill(70, 140, 230, 36);
        rect(0, height - 88, width / 2, 88);
        fill(230, 150, 70, 36);
        rect(width / 2, height - 88, width / 2, 88);

        fill(215, 235, 255, 165);
        text(`${t('game.touchLeft')}: ${getRotulosPlacar()[0]}`, width / 4, height - 24);
        fill(255, 225, 180, 165);
        text(`${t('game.touchRight')}: ${getRotulosPlacar()[1]}`, (width / 4) * 3, height - 24);
    } else {
        fill(70, 140, 230, 34);
        rect(0, height - 80, width, 80);
        fill(215, 235, 255, 165);
        text(t('game.touchSolo'), width / 2, height - 23);
    }
}

function desenhaHudTorneio() {
    if (!estaModoTorneio()) {
        return;
    }

    fill(10, 10, 10, 120);
    rect(width - 222, 118, 204, 70, 12);

    noStroke();
    fill(255, 235, 150);
    textAlign(LEFT, CENTER);
    textSize(13);
    text(`${t('game.tournamentTitle')} - ${t('game.roundLabel')} ${serieTorneio.round}`, width - 206, 138);
    fill(220);
    textSize(12);
    text(`J1 ${serieTorneio.wins.J1} x ${serieTorneio.wins.J2} J2`, width - 206, 160);
    text(`${getRotulosPlacar()[0]} ${t('game.leftSideLabel')}`, width - 206, 178);
}

function desenhaHudArcade() {
    if (!estaModoArcade()) {
        return;
    }

    fill(10, 10, 10, 120);
    rect(18, 116, 280, 78, 12);

    noStroke();
    fill(255, 230, 120);
    textAlign(LEFT, CENTER);
    textSize(13);
    text(t('game.arcadeTitle'), 32, 136);
    textSize(12);
    fill(220);
    text(
        powerUpAtual
            ? `${t('game.powerUpPrefix')}: ${getPowerUpTexto(powerUpAtual.tipo.id, 'label')} (${getPowerUpTexto(powerUpAtual.tipo.id, 'rarity')})`
            : t('game.waitingPowerUp'),
        32,
        158
    );

    const efeitoEsquerda = obterEfeitoArcade('esquerda').label;
    const efeitoDireita = obterEfeitoArcade('direita').label;
    const efeitoBola = obterEfeitoArcade('bola').label;
    if (efeitoEsquerda || efeitoDireita || efeitoBola) {
        fill(150, 230, 180);
        text([efeitoEsquerda, efeitoDireita, efeitoBola].filter(Boolean).join(' | '), 32, 178);
    }
}

function desenhaDicasGamepad() {
    const gamepads = obterGamepadsConectados();
    if (gamepads.length === 0) {
        return;
    }

    textAlign(RIGHT, TOP);
    textSize(12);
    fill(220, 220, 220, 165);
    text(`${gamepads.length} ${t('game.controlsConnected')}`, width - 18, 18);
}

function obterLinhasPainelControles() {
    const linhasBase = [
        { titulo: t('controlsPanel.menuTitle'), texto: t('controlsPanel.menuText') },
        { titulo: t('controlsPanel.pauseTitle'), texto: t('controlsPanel.pauseText') },
    ];

    if (modoJogoSelecionado === 'solo') {
        return [
            ...linhasBase,
            { titulo: t('controlsPanel.soloTitle'), texto: t('controlsPanel.soloText') },
            { titulo: t('controlsPanel.opponentTitle'), texto: t('controlsPanel.opponentText') },
        ];
    }

    if (modoJogoSelecionado === 'arcade') {
        return [
            ...linhasBase,
            { titulo: t('controlsPanel.arcadeTitle'), texto: t('controlsPanel.arcadeText') },
            { titulo: t('controlsPanel.powerupTitle'), texto: t('controlsPanel.powerupText') },
        ];
    }

    if (modoJogoSelecionado === 'versus') {
        return [
            ...linhasBase,
            { titulo: t('controlsPanel.versusP1Title'), texto: t('controlsPanel.versusP1Text') },
            { titulo: t('controlsPanel.versusP2Title'), texto: t('controlsPanel.versusP2Text') },
        ];
    }

    return [
        ...linhasBase,
        { titulo: t('controlsPanel.tournamentTitle'), texto: t('controlsPanel.tournamentText') },
        { titulo: t('controlsPanel.tournamentControlsTitle'), texto: t('controlsPanel.tournamentControlsText') },
    ];
}

function desenhaPainelControles() {
    const linhas = obterLinhasPainelControles();
    const panelW = min(640, width - 52);
    const panelH = 120 + linhas.length * 54;
    const panelX = width / 2 - panelW / 2;
    const panelY = height / 2 - panelH / 2;

    fill(0, 0, 0, 175);
    noStroke();
    rect(0, 0, width, height);

    fill(18, 18, 18, 235);
    stroke(115, 145, 200);
    strokeWeight(1.5);
    rect(panelX, panelY, panelW, panelH, 16);

    noStroke();
    fill(255);
    textAlign(LEFT, CENTER);
    textSize(24);
    text(t('game.controlsPanelTitle'), panelX + 24, panelY + 30);

    textSize(12);
    fill(190);
    text(`${t('game.currentModePrefix')}: ${getModoDefinicao(modoJogoSelecionado).label}`, panelX + 24, panelY + 56);

    let y = panelY + 92;
    for (const linha of linhas) {
        fill(45, 45, 45, 220);
        rect(panelX + 20, y - 18, panelW - 40, 42, 12);

        fill(155, 215, 255);
        textSize(13);
        text(linha.titulo, panelX + 34, y - 2);

        fill(235);
        textSize(12);
        text(linha.texto, panelX + 140, y - 2);
        y += 54;
    }

    layoutBotaoFecharControles = { x: panelX + panelW - 130, y: panelY + panelH - 48, w: 104, h: 30 };
    fill(70, 120, 210);
    stroke(120, 180, 255);
    strokeWeight(1.5);
    rect(layoutBotaoFecharControles.x, layoutBotaoFecharControles.y, layoutBotaoFecharControles.w, layoutBotaoFecharControles.h, 10);

    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(13);
    text(t('game.close'), layoutBotaoFecharControles.x + layoutBotaoFecharControles.w / 2, layoutBotaoFecharControles.y + layoutBotaoFecharControles.h / 2);
}

function desenhaMenu() {
    const { defs, rows, titleY } = obterLayoutMenu();
    const intro = progressoEntradaEstado();
    const offsetY = (1 - intro) * 18;

    fill(0, 0, 0, 180);
    noStroke();
    rect(0, 0, width, height);

    textAlign(CENTER, CENTER);
    fill(255);
    textSize(min(66, width * 0.11));
    text('PONG', width / 2, titleY - offsetY);

    textSize(15);
    fill(208);
    text(t('menuSubtitle1'), width / 2, titleY + 30 - offsetY * 0.4);
    text(t('menuSubtitle2'), width / 2, titleY + 50 - offsetY * 0.4);

    for (let i = 0; i < defs.length; i++) {
        const def = defs[i];
        const row = rows[def.id];
        const focado = menuFocusIndex === i;

        if (def.tipo === 'selector') {
            desenhaLinhaSeletor(row, def.label, def.valor, def.descricao, focado);
        } else if (def.tipo === 'slider') {
            desenhaLinhaSlider(row, def.label, def.valor, def.descricao, def.id, focado, def.disabled);
        } else if (def.tipo === 'button') {
            desenhaBotaoSecundario(row, def.label, def.descricao, focado);
        } else if (def.tipo === 'primaryButton') {
            desenhaBotaoPrimario(row, def.label, def.descricao, focado);
        }
    }

    desenhaRodapeMenu(rows.jogar.y + rows.jogar.h + 24);

    if (painelControlesAberto) {
        desenhaPainelControles();
    }
}

function desenhaLinhaSeletor(row, label, valor, descricao, focado) {
    if (focado) {
        desenhaCartaoFoco(row.x, row.y, row.w, row.h, 14);
    }

    const areas = obterAreaInternaSeletor(row);

    fill(35, 35, 35, 220);
    stroke(120, 120, 120);
    strokeWeight(1);
    rect(row.x, row.y, row.w, row.h, 14);

    fill(60, 60, 60);
    rect(areas.leftArrow.x, areas.leftArrow.y, areas.leftArrow.w, areas.leftArrow.h, 14, 0, 0, 14);
    rect(areas.rightArrow.x, areas.rightArrow.y, areas.rightArrow.w, areas.rightArrow.h, 0, 14, 14, 0);

    noStroke();
    fill(160);
    textAlign(LEFT, CENTER);
    textSize(13);
    text(label, row.x + 14, row.y + 12);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(22);
    text('<', areas.leftArrow.x + areas.leftArrow.w / 2, row.y + row.h / 2 + 2);
    text('>', areas.rightArrow.x + areas.rightArrow.w / 2, row.y + row.h / 2 + 2);

    textSize(17);
    text(encurtarTexto(valor, 28), row.x + row.w / 2, row.y + row.h / 2 - 2);

    textSize(11);
    fill(175);
    text(encurtarTexto(descricao, 56), row.x + row.w / 2, row.y + row.h / 2 + 14);
}

function desenhaLinhaSlider(row, label, valorTexto, descricao, id, focado, disabled) {
    if (focado) {
        desenhaCartaoFoco(row.x, row.y, row.w, row.h, 14);
    }

    fill(disabled ? color(28, 28, 28, 215) : color(35, 35, 35, 220));
    stroke(120, 120, 120);
    strokeWeight(1);
    rect(row.x, row.y, row.w, row.h, 14);

    noStroke();
    fill(disabled ? 115 : 160);
    textAlign(LEFT, CENTER);
    textSize(13);
    text(label, row.x + 14, row.y + 12);

    fill(disabled ? 150 : 255);
    textAlign(RIGHT, CENTER);
    textSize(13);
    text(valorTexto, row.x + row.w - 14, row.y + 12);

    const area = obterAreaSlider(row).trilho;
    const progresso = obterValorSlider(id);
    const knobX = area.x + area.w * progresso;

    fill(70);
    rect(area.x, area.y, area.w, area.h, 6);

    fill(disabled ? color(90, 90, 90) : color(70, 170, 255));
    rect(area.x, area.y, area.w * progresso, area.h, 6);

    fill(disabled ? 170 : 255);
    ellipse(knobX, area.y + area.h / 2, 14, 14);

    fill(disabled ? 120 : 175);
    textAlign(LEFT, CENTER);
    textSize(10);
    text(encurtarTexto(descricao, 62), row.x + 14, row.y + row.h - 8);
}

function desenhaBotaoSecundario(row, label, descricao, focado) {
    if (focado) {
        desenhaCartaoFoco(row.x, row.y, row.w, row.h, 14);
    }

    fill(55, 75, 115, 235);
    stroke(120, 180, 255);
    strokeWeight(1.5);
    rect(row.x, row.y, row.w, row.h, 12);

    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(17);
    text(label, row.x + row.w / 2, row.y + row.h / 2 - 5);
    textSize(10);
    fill(205);
    text(descricao, row.x + row.w / 2, row.y + row.h / 2 + 10);
}

function desenhaBotaoPrimario(row, label, descricao, focado) {
    if (focado) {
        desenhaCartaoFoco(row.x, row.y, row.w, row.h, 14);
    }

    fill(60, 140, 220);
    stroke(120, 180, 255);
    strokeWeight(2);
    rect(row.x, row.y, row.w, row.h, 12);

    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(label, row.x + row.w / 2, row.y + row.h / 2 - 5);
    textSize(11);
    fill(222);
    text(descricao, row.x + row.w / 2, row.y + row.h / 2 + 12);
}

function desenhaRodapeMenu(y) {
    const gamepads = obterGamepadsConectados();
    const totalConquistas = Object.values(achievementsPersistidos).filter(Boolean).length;

    textAlign(CENTER, CENTER);
    textSize(11);
    fill(130);
    text(`${t('game.recordsPrefix')}: ${t('stats.bestRally').toLowerCase()} ${recordesPersistidos.melhorRally} | ${t('stats.maxSpeed').toLowerCase()} ${formatarVelocidade(recordesPersistidos.velocidadeMaxima)}`, width / 2, y);
    text(
        `${t('game.achievementsPrefix')}: ${totalConquistas}/${Object.keys(ACHIEVEMENTS).length} | ${gamepads.length > 0 ? `${gamepads.length} ${t('game.controlsAvailable')}` : t('game.noGamepad')}`,
        width / 2,
        y + 16
    );
}

function desenhaPausa() {
    fill(0, 0, 0, 150);
    noStroke();
    rect(0, 0, width, height);

    textAlign(CENTER, CENTER);
    textSize(60);
    fill(255);
    text(t('game.pauseTitle'), width / 2, height / 2 - 24);

    textSize(20);
    fill(190);
    text(t('game.pauseHint'), width / 2, height / 2 + 34);
}

function desenhaPainelEstatisticas() {
    const dados = [
        { label: t('stats.bestRally'), valor: `${estatisticasPartida.melhorRally}` },
        { label: t('stats.maxSpeed'), valor: formatarVelocidade(estatisticasPartida.velocidadeMaxima) },
        { label: t('stats.maxSpin'), valor: formatarSpin(estatisticasPartida.spinMaximo) },
        {
            label: t('stats.goals'),
            valor: `${getRotulosPlacar()[0]} ${estatisticasPartida.golsJogador} / ${getRotulosPlacar()[1]} ${estatisticasPartida.golsComputador}`,
        },
        { label: t('stats.rallyRecord'), valor: `${recordesPersistidos.melhorRally}` },
        { label: t('stats.speedRecord'), valor: formatarVelocidade(recordesPersistidos.velocidadeMaxima) },
    ];

    const panelW = min(640, width - 52);
    const cardGap = 12;
    const cardW = (panelW - cardGap * 2) / 3;
    const cardH = 72;
    const startX = width / 2 - panelW / 2;
    const startY = height / 2 + 64;

    textAlign(LEFT, CENTER);

    for (let i = 0; i < dados.length; i++) {
        const coluna = i % 3;
        const linha = floor(i / 3);
        const x = startX + coluna * (cardW + cardGap);
        const y = startY + linha * (cardH + cardGap);

        fill(20, 20, 20, 178);
        stroke(90, 90, 90, 160);
        strokeWeight(1);
        rect(x, y, cardW, cardH, 12);

        noStroke();
        fill(160);
        textSize(13);
        text(dados[i].label, x + 16, y + 20);

        fill(255);
        textSize(20);
        text(dados[i].valor, x + 16, y + 46);
    }
}

function desenhaPainelConquistasRecentes() {
    if (medalhasDesbloqueadasRecentes.length === 0) {
        return;
    }

    const panelW = min(540, width - 80);
    const x = width / 2 - panelW / 2;
    const y = height - 164;

    fill(20, 20, 20, 178);
    stroke(110, 170, 255, 150);
    strokeWeight(1);
    rect(x, y, panelW, 72, 14);

    noStroke();
    fill(255, 230, 120);
    textAlign(LEFT, CENTER);
    textSize(14);
    text(t('stats.unlockedAchievements'), x + 18, y + 20);

    fill(235);
    textSize(12);
    const nomes = medalhasDesbloqueadasRecentes.map((id) => getAchievementTexto(id, 'label')).join(' | ');
    text(encurtarTexto(nomes, 72), x + 18, y + 48);
}

function desenhaGameOver() {
    const intro = progressoEntradaEstado();
    const slideY = (1 - intro) * 24;

    fill(0, 0, 0, 172);
    noStroke();
    rect(0, 0, width, height);

    textAlign(CENTER, CENTER);
    textSize(52);
    fill(pontosJogador > pontosComputador ? color(80, 220, 120) : color(255, 80, 80));
    text(getTituloGameOver(), width / 2, height / 2 - 68 - slideY);

    textSize(38);
    fill(255);
    text(`${pontosJogador}  x  ${pontosComputador}`, width / 2, height / 2 - 8 - slideY * 0.6);

    desenhaPainelEstatisticas();
    desenhaPainelConquistasRecentes();

    if (estaModoTorneio()) {
        textSize(18);
        fill(220, 220, 255);
        const textoTorneio = serieTorneio.campeao
            ? `${t('game.championLabel')}: ${serieTorneio.campeao} | ${t('game.finalSeriesLabel')} ${serieTorneio.wins.J1} x ${serieTorneio.wins.J2}`
            : `${t('game.seriesLabel')}: J1 ${serieTorneio.wins.J1} x ${serieTorneio.wins.J2} J2 | ${t('game.roundPrompt', { round: serieTorneio.round })}`;
        text(textoTorneio, width / 2, height / 2 + 236);
    }

    textSize(18);
    fill(180);
    text(
        estaModoTorneio() && serieTorneio.aguardandoProxima
            ? t('game.nextRoundPrompt')
            : t('game.menuBackPrompt'),
        width / 2,
        height - 44
    );
}

function desenhaPowerUp() {
    if (!powerUpAtual) {
        return;
    }

    const pulso = sin(powerUpAtual.pulso) * 0.5 + 0.5;
    const cor = color(...powerUpAtual.tipo.cor, 180);

    noStroke();
    fill(red(cor), green(cor), blue(cor), 40 + pulso * 60);
    ellipse(powerUpAtual.x, powerUpAtual.y, powerUpAtual.r * 3.1, powerUpAtual.r * 3.1);

    fill(red(cor), green(cor), blue(cor), 220);
    ellipse(powerUpAtual.x, powerUpAtual.y, powerUpAtual.r * 2, powerUpAtual.r * 2);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(10);
    text(getPowerUpTexto(powerUpAtual.tipo.id, 'label'), powerUpAtual.x, powerUpAtual.y);
}
