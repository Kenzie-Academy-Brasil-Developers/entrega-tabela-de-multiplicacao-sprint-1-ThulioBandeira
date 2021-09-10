function tabelaMultiplicação() {
    //TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let x = [];
    for (let i = 0; i <= 10; i++) {
        x[i] = [];
        for(let j = 0; j<11; j++){
            x[i].push(j*i)
            

        }
    }
    console.table(x)
}

