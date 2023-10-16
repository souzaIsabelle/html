
/*

1-
    let nome =  (prompt("Insira seu nome:"))
    let idade = Number(prompt("Insira Sua idade:"))
  
        if(idade >= 18){
            Boolean = true
            alert(`Pode entrar`)

        }else{
            alert(`Nao pode entrar`)
            Boolean = false
        }

      */  

        /*

        2-

        let peso = Number(prompt("Digite seu peso:"));
        let altura = Number(prompt("Digite sua altura:"));
        
        let pesoIDEAL = peso / altura * altura;
        
        if (peso > pesoIDEAL) {
            alert(`Você está acima do peso, seu peso ideal é ${pesoIDEAL.toFixed(2)}`);
        } else if (peso === pesoIDEAL) {
            alert(`Você está no seu peso ideal: ${pesoIDEAL.toFixed(2)}`);
        } else {
            alert(`Você está abaixo do peso, seu peso ideal é ${pesoIDEAL.toFixed(2)}`);
        }

        */

        /*

        3-

        let REAL = Number(prompt("Digite o valor:"))

        let Conversao = REAL / 5.14

        alert(`O valor convertido é ${Conversao.toFixed(2)}`)

        */

        /*

        4-

       let VALORProduto = Number(prompt("Digite o valor desejado:"));
        let estoque = 500;

        if(VALORProduto < estoque){
            alert(`Produtos Disponiveis`)
        }else{
            alert(`Quantidade não disponivel`)
        }

        */

        /*

        5-

        function calcularMediaPonderada() {
            let somaNotas = 0;
            let somaPesos = 0;
        
            for (let i = 1; i <= 3; i++) {
                const nota = parseFloat(prompt(`Digite a nota da prova ${i}:`));
                const peso = parseFloat(prompt(`Digite o peso da prova ${i}:`));
        
                somaNotas += nota * peso;
                somaPesos += peso;
            }
        
            alert(`A média ponderada das notas é: ${(somaNotas / somaPesos)}`); // media ponderada = somanotas / soma
        }

        */

        /*
        6-

        function fazerListaCompras() {
            const lista = prompt("Informe a lista de compras (separe os itens com vírgula): ").split(',');
        
            for (let i = 0; i < lista.length; i++) {
                alert(lista[i]);
            }
        }

        */

        /*
        7-

        function verificadorLogin() {
            const credenciais = {
                login: "usuario",
                senha: "senha123"
            };
        
            const login = prompt("Digite seu login: ");
            const senha = prompt("Digite sua senha: ");
        
            const loginCorreto = login === credenciais.login && senha === credenciais.senha;
        
            alert(loginCorreto ? "Login bem-sucedido!" : "Nome de usuário ou senha incorretos. Tente novamente.");
        
        }
        */

        /*

    8-
        function calculaDesconto() {
    const valorOriginal = parseFloat(prompt("Digite o valor original do produto:"));
    const percentualDesconto = parseFloat(prompt("Digite o percentual de desconto (%):"));

    if (percentualDesconto < 0 || percentualDesconto > 100) {
        alert("O percentual de desconto deve estar entre 0 e 100.");
    } else {
        const desconto = (valorOriginal * percentualDesconto) / 100;
        const valorComDesconto = valorOriginal - desconto;

        alert(`O desconto é de R$${desconto.toFixed(2)}. O valor com desconto é R$${valorComDesconto.toFixed(2)}.`);
    }
}

*/