let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

let continuar = true;

while (continuar) {
    let escolha = prompt("Você deseja adicionar ou remover uma comida da lista de compras? (adicionar/remover/sair)").toLowerCase();

    if (escolha === "adicionar") {
        let comida = prompt("Qual comida você deseja adicionar?");
        let categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces, outros)").toLowerCase();

        if (categoria === "frutas") {
            frutas.push(comida);
        } else if (categoria === "laticínios") {
            laticinios.push(comida);
        } else if (categoria === "congelados") {
            congelados.push(comida);
        } else if (categoria === "doces") {
            doces.push(comida);
        } else {
            outros.push(comida);
        }
    }
    else if (escolha === "remover") {
        if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0 && outros.length === 0) {
            alert("A lista de compras está vazia. Adicione itens antes de tentar remover.");
            continue;
        }

        console.log("Lista de compras atual:");
        console.log(`Frutas: ${frutas.join(", ")}`);
        console.log(`Laticínios: ${laticinios.join(", ")}`);
        console.log(`Congelados: ${congelados.join(", ")}`);
        console.log(`Doces: ${doces.join(", ")}`);
        console.log(`Outros: ${outros.join(", ")}`);

        let comidaRemover = prompt("Digite o nome do item que deseja remover:");

        function removerItem(lista, item) {
            let index = lista.indexOf(item);
            if (index !== -1) {
                lista.splice(index, 1);
                return true;
            }
            return false;
        }

        let removido = removerItem(frutas, comidaRemover) ||
                       removerItem(laticinios, comidaRemover) ||
                       removerItem(congelados, comidaRemover) ||
                       removerItem(doces, comidaRemover) ||
                       removerItem(outros, comidaRemover);

        if (removido) {
            alert(`O item '${comidaRemover}' foi removido da lista.`);
        } else {
            alert("Não foi possível encontrar o item dentro da lista!");
        }
    }
    else if (escolha === "sair") {
        continuar = false;
        alert("Obrigado por usar a lista de compras!");
    } else {
        alert("Opção inválida! Escolha entre 'adicionar', 'remover' ou 'sair'.");
    }
}
