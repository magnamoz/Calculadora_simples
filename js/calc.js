

//função para adicionar os números no visor
function insereNumeros (num){
    if (typeof visorGlobal == 'undefined'){
        document.calcform.visor.value = '';
    }
    document.calcform.visor.value = document.calcform.visor.value + num
    visorGlobal = 1
}

//função para limpar o visor e também as variáveis 
function limpaTela(){
    document.calcform.visor.value = '';
    delete visorGlobal
    delete operGlobal
    delete valorGlobal
}

// função para executar as operações da calculadora (chamada ao clicar no número)
function atribuirOper(oper, valor1, valor2){
    if (oper == "somar"){
        var valor = parseInt(valor1) + parseInt(valor2)
    } else if (oper == "subtrair"){
        var valor = parseInt(valor1) - parseInt(valor2)
    } else if (oper == "multiplicar"){
        var valor = parseInt(valor1) * parseInt(valor2)
    } else {
        var valor = parseInt(valor1) / parseInt(valor2)
    }
    return (valor)
}

//função para passar as ações do usuário
function calcUser(oper) {
    var valor = document.calcform.visor.value 
    delete visorGlobal

    if (typeof operGlobal != 'undefined' && oper == 'resultado'){
        valorGlobal = atribuirOper(operGlobal, valorGlobal, valor)
        document.calcform.visor.value = valorGlobal
        delete oper
        delete valorGlobal
        return (0)
    }

    if (typeof valorGlobal != 'undefined') {
        valorGlobal = atribuirOper(operGlobal, valorGlobal, valor)
        operGlobal = oper
        document.calcform.visor.value = valorGlobal
    } else {
        valorGlobal = valor
        operGlobal = oper
    }
}
