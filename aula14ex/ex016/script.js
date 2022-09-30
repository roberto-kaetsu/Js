function contador() {
    let i = document.getElementById('txti')
    let f = document.getElementById('txtf')
    let p = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        window.alert(`erro`)
    } else {
        res.innerHTML = 'contando:'
        let ini = Number(i.value)
        let fim = Number(f.value)
        let passa = Number(p.value)

        for(let c = ini; c <= fim; c += passa) {
            res.innerHTML += ` ${c} \u{1f602}`
        }
        res.innerText += 
    }
    
   
} 
