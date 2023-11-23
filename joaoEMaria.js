//

function getJoao() {
    return joao
}
function getMaria() {
    return maria
}

function setJoao(novoValor){
    if(novoValor>0){
        joao=novoValor;
    }
    else{
        joao=0;
    }
 }
 
 
 function getMaria(){
    return maria;
 }
 function setMaria(novoValor){
    if(novoValor>0){
        maria=novoValor;
    }
    else{
        maria=0;
    }
 }
 

function deMariaParaJoao(){}
function deJoaoParaMaria(){}

export { getJoao, getMaria, setJoao, setMaria, deMariaParaJoao, deJoaoParaMaria};
