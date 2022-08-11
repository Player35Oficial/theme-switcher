const html = document.querySelector("html")
const checkbox = document.getElementById("powerbutton")

const themePrefer = () => {
    html.style.setProperty("--bg", localStorage.getItem("theme"))
    if (checkbox.checked == false && localStorage.getItem("theme") == "#232c35") {
        checkbox.checked = true
    }
}


/* Cria uma função para poder selecionar elementos e propriedades (usados nos objetos) */
const getStyle = (element, style) => {
    window
        .getComputedStyle(element)
        .getPropertyValue(style)
}

/* Criar os objetos que guardarão os valores das cores dos temas */
const initialColors = {
    /* Usa a função para pegar o valor de --bg ou atribui o valor padrão de background */
    bg: getStyle(html, "--bg") || "#fafa",
}
const darkMode = {
    bg: "#232c35",
}

/* Cria uma função auxiliar para transformar as chaves dos objetos
    caso houvessem letra maiúsculas (reestruturando as sintaxes JS => CSS) */
const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

/* Cria a função que fará a troca dinâmica de chaves e valores dos objetos
    recebendo colors (nome dos objetos que guardam os temas) */
const changeColors = (colors) => {

    /* Vai ver as chaves do objeto passadas pelo parâmetro 'colors' e mapear as chaves */
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
        /* Acessando as propriedades de estilo do html e definindo as propriedades */
        /* O nome da Chave (reestruturadas com transformKey), e o valor de colors ([key]) */
    )
    /* Toda vez que esta função for chamada, o valor da chave colors.bg vai ser atualizada no localStorage */
    localStorage.setItem("theme", colors.bg)
}


// Adicionar um EventListener no checkbox que verá mudanças e executará uma função
checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
    // localStorage.setItem("theme", cor)

})
html.onload = themePrefer()
















/* 
if (!localStorage.getItem('Tema')) {
    localStorage.setItem('Tema', toggle)
} else {
    localStorage.getItem('Tema')
}


function toggle() {
    document.body.classList.toggle('dark')
}

checkbox.addEventListener('change', toggle)

localStorage.setItem('Tema', toggle)
 */
/* 
    ANOTAÇÃO PARA PRÓXIMA TENTATIVA:
    "document.body.classList.toggle('dark')" Não é um dado!
    não tem como alterar ele dinamicamente através do LocalStorage com o que você sabe agora.

    Tentar:
    definir --roots para as cores da página
    usar os hexadecimais para alterar os --roots de cores da página

    hexadecimal é um dado. que pode ser armazenado em objetos e resgatado pelo localStorage. 


*/