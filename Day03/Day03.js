// Primeiro passo: Escolha da área de atuação
let area = prompt("Você quer seguir para a área de Front-End ou Back-End?");

if (area === "Front-End") {
    let tecnologia = prompt("Você quer aprender React ou Vue?");
    alert(`Muito bom! ${tecnologia} é uma ótima escolha para o Front-End.`);
} else if (area === "Back-End") {
    let tecnologia = prompt("Você quer aprender C# ou Java?");
    alert(`Ótima escolha! ${tecnologia} é muito utilizado no Back-End.`);
} else {
    alert("Escolha inválida. Por favor, reinicie o jogo e escolha Front-End ou Back-End.");
}

// Segundo passo: Especialização ou Full-Stack
let escolha = prompt("Você quer seguir se especializando na área escolhida ou se tornar Full-Stack?");

if (escolha === "Especializar") {
    alert("Ótima escolha! Continue aprofundando seus conhecimentos na sua área escolhida.");
} else if (escolha === "Full-Stack") {
    alert("Boa decisão! Agora você precisa aprender as tecnologias do outro lado.");
} else {
    alert("Opção inválida. Escolha entre Especializar ou Full-Stack.");
}

// Terceiro passo: Tecnologias adicionais
let continuar = true;
while (continuar) {
    let novaTecnologia = prompt("Digite uma tecnologia que você gostaria de aprender:");
    alert(`Interessante! ${novaTecnologia} é uma ótima tecnologia para aprender.`);
    
    let resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (Responda 'ok' para continuar ou qualquer outra coisa para sair)");
    
    if (resposta.toLowerCase() !== "ok") {
        continuar = false;
    }
}

alert("Obrigado por participar! Boa sorte na sua jornada de aprendizado.");
