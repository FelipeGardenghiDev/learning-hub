const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");

let imagemURL = '';

botaoIniciarCamera.addEventListener('click', async function () {
    try {
        const iniciarVideo = await navigator.mediaDevices
            .getUserMedia({ video: true, audio: false });

        botaoIniciarCamera.style.display = "none";
        campoCamera.style.display = "block";

        video.srcObject = iniciarVideo;
    } catch (erro) {
        console.warn("Câmera indisponível ou permissão não concedida:", erro);
        alert("Câmera não detectada ou permissão negada. Gerando captura biométrica simulada para prosseguir com a demonstração.");

        botaoIniciarCamera.style.display = "none";
        mensagem.style.display = "block";

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#1e3c72';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        ctx.font = '16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('✓ Foto Biométrica Simulada', canvas.width / 2, canvas.height / 2);

        imagemURL = canvas.toDataURL('image/jpeg');
    }
});

botaoTirarFoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL('image/jpeg');

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
});

botaoEnviarFoto.addEventListener('click', () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = receberDadosExistentes ? JSON.parse(receberDadosExistentes) : {};

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href = './abrir-conta-form-3.html';
});
