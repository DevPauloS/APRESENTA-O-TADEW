const quntNumerosSorteados = document.querySelector('#quantidade')
const numMin = document.querySelector('#entre')
const numMax = document.querySelector('#entre2')
const sorteio = document.querySelector('.sortear')
const container = document.querySelector('.containerNumeroSorteado')


const sorteia = (min, max) => {
    const aleatorio = Math.round(Math.random() * (max - min) + min)
    return aleatorio
}

const chamaF = (num) => {
    container.innerHTML = ''
    if (num > 1) {
        container.innerHTML += `      
        <div class="resultado">
        <div class="info">    
            <h1>Sorteio</h1>
            <p>Os números sorteados foi:</p>
            <div class="seila"></div>
        </div>
        </div>
        
        <div class="voltar">
            <button class="btnVoltar2">Voltar para página principal</button>
        </div>
        `

        for (let i = 0; i < num; i++) {
            const info = document.querySelector('.seila')
            const numMinValue = Number(numMin.value)
            const numMaxValue = Number(numMax.value)
            const numeroSorteado = sorteia(numMinValue, numMaxValue)
            info.innerHTML += `<span>${numeroSorteado}</span>`
        }
        const btnVoltar = document.querySelector('.btnVoltar2')
        btnVoltar.addEventListener('click', () => {
            container.style.display = 'none'
            document.querySelector('.resultado').style.display = 'none'
            document.querySelector('.App').style.display = 'flex'
            sorteio.style.display = 'flex'
        })

        sorteio.addEventListener('click', () => {
            container.style.display = 'block'
        })
    }
   
}




sorteio.addEventListener('click', () => {
    document.querySelector('.App').style.display = 'none'
    sorteio.style.display = 'none'
    const numMinValue = Number(numMin.value)
    const numMaxValue = Number(numMax.value)
    const quantValue = quntNumerosSorteados.value
    const numeroSorteado = sorteia(numMinValue, numMaxValue)
    if (quantValue > 1) {
        chamaF(quantValue)
    } else {
        container.innerHTML = `
        <div class="resultado">
        <div class="info">    
            <h1>Sorteio</h1>
            <p>O número sorteado foi:</p>
            <span>${numeroSorteado}</span>
        </div>
        </div>
        
        <div class="voltar">
            <button class="btnVoltar">Voltar para página principal</button>
        </div>
        `
    }
    
    const btnVoltar = document.querySelector('.btnVoltar')

    btnVoltar.addEventListener('click', () => {
        document.querySelector('.resultado').style.display = 'none'
        document.querySelector('.voltar').style.display = 'none'
        document.querySelector('.App').style.display = 'flex'
        sorteio.style.display = 'flex'

    })
    
})