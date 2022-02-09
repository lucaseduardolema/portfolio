function calcular(tipo, valor){
           
    if(tipo === "acao"){
      if(valor === 'c') {
        //limpar o visor atribuindo um valor vazio ao id do visor
        document.getElementById('resultado').value = ''
      }
      
      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
        //se o tipo acao e valor for algum desses simbolos, irá concatenar com o que ja esta na tela
        document.getElementById('resultado').value += valor
        
      }

      if(valor === '=') {
        /*se o valor for o simbolo '=' sera atribuido o que esta na tela a variavel
        valor campo a transformação (eval) da string para number e atribuido ao id
        o valor dessa operação*/
        var valor_campo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valor_campo
      }

    } else if(tipo === "valor") {
      //se o tipo for valor o valor digitado sera concatenado com o que esta na tela
      //var valor_campo = document.getElementById('resultado').value 
      document.getElementById('resultado').value += /*valor_campo +*/ valor
    }
  }