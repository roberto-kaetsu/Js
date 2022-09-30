function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente. `)
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ``
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if (fsex[0].checked) {
          genero = `homem`
        if (idade >= 0 && idade < 10) {
            //crianca
            img.setAttribute('src','fotocrianca_m.png')
        } else if (idade < 21) {
            // jovem
            img.setAttribute('src', 'fotojovem_m.png')            
        } else if (idade < 50) {
            // adulto
            img.setAttribute('src', 'fotoadulto_m.png')
        } else {
            // idoso
            img.setAttribute('src', 'fotoidoso_m.png')
        }
       } else if (fsex[1].checked){
          genero = 'mulher'
          if (idade >= 0 && idade < 10) {
            //crianca
            img.setAttribute('src','fotocrianca_f.png')
        } else if (idade < 21) {
            // jovem
            img.setAttribute('src', 'fotojovem_f.png')            
        } else if (idade < 50) {
            // adulto
            img.setAttribute('src', 'fotoadulto_f.png')
        } else {
            // idoso
            img.setAttribute('src', 'fotoidoso_f.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}
