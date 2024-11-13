document.getElementById('calcularBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o redirecionamento sem o cálculo

    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let dica = "";

    // Limpar mensagens de erro
    document.getElementById('peso-error').textContent = "";
    document.getElementById('altura-error').textContent = "";

    // Validação do peso (não pode ser maior que 300kg e nem negativo ou zero)
    if (isNaN(peso) || peso <= 0 || peso > 300) {
        document.getElementById('peso-error').textContent = "Por favor, insira um peso válido (de 1 a 300kg).";
        return;
    }

    // Validação da altura (deve ser maior que 0 e razoável)
    if (isNaN(altura) || altura <= 0 || altura > 2.5) {
        document.getElementById('altura-error').textContent = "Por favor, insira uma altura válida (de 0,1 a 2,5 metros).";
        return;
    }

    // Se a altura for maior que 3 metros, divide por 100
    if (altura >= 3) {
        altura = altura / 100;  // Converte altura de centímetros para metros
    }

    // Validar altura depois da conversão
    if (altura >= 3) {
        document.getElementById('altura-error').textContent = "A altura deve ser menor que 3 metros.";
        return;
    }

    // Exibir carregando
    document.getElementById('loading').style.display = 'block';

    // Calculando o IMC
    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.6) {
        classificacao = "Abaixo do peso";
        dica = "É importante manter uma alimentação saudável e buscar orientação profissional.";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
        dica = "Continue mantendo hábitos saudáveis.";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
        dica = "Considere ajustar sua alimentação e incluir atividades físicas.";
    } else {
        classificacao = "Obesidade";
        dica = "Recomenda-se consultar um médico para ajustes no estilo de vida.";
    }

    // Redirecionar para a página de resultados
    setTimeout(() => {
        localStorage.setItem('resultado', `IMC: ${imc.toFixed(2)} - ${classificacao}`);
        localStorage.setItem('dica', dica);
        window.location.href = "result.html";
    }, 1500);
});
