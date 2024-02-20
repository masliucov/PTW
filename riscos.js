"use strict";
$(document).ready(function () {
    // Função para atualizar a imagem e mudar a cor do botão selecionado
    function updateImageAndButtonColor() {
        let totalPoints = 0;

        // Somar os pontos dos botões selecionados
        $(".age-button.selected, .imc-button.selected, .stress-button.selected").each(function () {
            totalPoints += parseInt($(this).data("points"));
        });
        // Manda para a consola o número de pontos
        console.log("Total de pontos:", totalPoints);
        // Atualizar a imagem conforme o total de pontos
        if (totalPoints >= 0 && totalPoints <= 5) {
            $("#risk-image").attr("src", "risco/risco-nulo.jpg");
            //Altera a cor da borda para verde
            $("#risk-image").css("border-color", "green");
        } else if (totalPoints >= 6 && totalPoints <= 12) {
            $("#risk-image").attr("src", "risco/risco-moderado.jpg");
            // Altera a cor da borda para laranja
            $("#risk-image").css("border-color", "orange");
        } else if (totalPoints >= 13) {
            $("#risk-image").attr("src", "risco/risco-alto.jpg");
            // Altera a cor da borda para vermelho
            $("#risk-image").css("border-color", "red");
        }
    }

    // Selecionar niveis
    $("#nivel").on('change', function () {
        let numNiveis = parseInt($(this).val());

        // Verificar se o número de níveis está dentro do intervalo
        if (numNiveis >= 3 && numNiveis <= 6) {
            // Limpar os botões de stress existentes
            $(".stress-button").remove();

            // Adicionar os botões de stress de acordo com o número especificado
            for (let i = 1; i <= numNiveis; i++) {
                $(".stress.section").append('<button id="stress-button-' + i + '" data-points="' 
                + (i - 1) * 2 + '" class="stress-button">Nível ' + i + '</button>');
            }

            // Mostrar a seção do calculador
            $(".container").show();
        } else {
            alert("Por favor, insira um número de níveis entre 3 e 6.");
        }
    });

    // Ao clicar em um botão de idade
    $(".age-button").on('click', function () {
        let $this = $(this);

        // Remover a classe 'selected' de todos os botões de idade
        $(".age-button").removeClass("selected");

        // Adicionar a classe 'selected' ao botão clicado
        $this.addClass("selected");

        // Mudar a cor do botão clicado
        $(".age-button").css("background-color", "grey");
        $this.css("background-color", "red");

        // Atualizar a imagem e a cor do botão
        updateImageAndButtonColor();
    });

    // Ao clicar em um botão de IMC
    $(".imc-button").on('click', function () {
        let $this = $(this);

        // Remover a classe 'selected' de todos os botões de IMC
        $(".imc-button").removeClass("selected");

        // Adicionar a classe 'selected' ao botão clicado
        $this.addClass("selected");

        // Mudar a cor do botão clicado
        $(".imc-button").css("background-color", "grey");
        $this.css("background-color", "red");

        // Atualizar a imagem e a cor do botão
        updateImageAndButtonColor();
    });

    // Ao clicar em um botão de stress
    $(document).on('click', '.stress-button', function () {
        let $this = $(this);

        // Remover a classe 'selected' de todos os botões de stress
        $(".stress-button").removeClass("selected");

        // Adicionar a classe 'selected' ao botão clicado
        $this.addClass("selected");

        // Mudar a cor do botão clicado
        $(".stress-button").css("background-color", "grey");
        $this.css("background-color", "red");

        // Atualizar a imagem e a cor do botão
        updateImageAndButtonColor();
    });

    // Ao clicar no botão de reiniciar
    $("#reset-button").on('click', function () {
        // Remover a classe 'selected' de todos os botões
        $(".age-button, .imc-button, .stress-button").removeClass("selected");

        // Atualizar a imagem para a imagem inicial
        $("#risk-image").attr("src", "risco/risco-nulo.jpg");

        // Resetar a cor dos botões para cinza
        $(".age-button, .imc-button, .stress-button").css("background-color", "grey");
    });
});