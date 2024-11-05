function criaCartao(categoria, pergunta, resposta) {
   let cartao = document.createElement('article')

 cartao.ClassName = 'cartao'
 cartao.innerHTML = `
<div class="cartao__conteudo">
                    <h3>${categoria}</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>${Pergunta}</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>${Resposta}</p>
                    </div>
                </div>
 `
 let container = document.getElementById ('container')
 container.appendChild(cartao)
}