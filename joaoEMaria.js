let maria = 2;
let joao = 1;

function getJoao() {
  return joao;
}

function getMaria() {
  return maria;
}
function deMariaParaJoao()
   {
       joao = joao + maria;
       maria = 0;
   }

function deJoaoParaMaria()
   {
       maria = maria + joao;
       joao = 0
   }

function setJoao(novoValor) {
  if (novoValor >= 0) {
    joao = novoValor;
  } else {
    joao = 0;
  }
}


function setMaria(novoValor) {
  if (novoValor >= 0) {
    maria = novoValor;
  } else {
    maria = 0;
  }
}

export {
  getJoao,
  getMaria,
  setJoao,
  setMaria,
  deMariaParaJoao,
  deJoaoParaMaria,
};
