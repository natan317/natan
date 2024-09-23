let botaoAtivo = null;

function exibirImagem(opcao, botao) {
    let imagem = document.getElementById("imagem");
    let texto = document.getElementById("texto");

    if (opcao == 'sol') {
        imagem.src = "sol.png"; 
        imagem.style.display = "block";
        texto.innerText = "Você escolheu o Sol! Uma estrela que ilumina o nosso dia.";
    } else if (opcao == 'lua') { 
        imagem.src = "lua.png"; 
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Lua! Ela brilha durante a noite.";
    } else if (opcao == 'estrela') { 
        imagem.src = "estrela.png"; 
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Estrela! Um dos pontos brilhantes do ceu noturno.";
    }
    else if (opcao == 'foguete') { 
        imagem.src = "foguete.png"; 
        imagem.style.display = "block";
        texto.innerText = "Foguete do Ilo MUski, Não tem ré novinha";
    }
    else if (opcao == 'terra') { 
        imagem.src = "terra.png"; 
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Terra, formigueiro de pessoas.";
    }
    else {
        imagem.style.display = "none";
        texto.innerText = "Opção inválida. EScolha entre Sol, Lua ou Estrela.";
    }
    if (botaoAtivo) {
        botaoAtivo.classList.remove('active');
    }
    botao.classList.add('active');
    botaoAtivo = botao;
}