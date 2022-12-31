function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('Light')

//pegar tag img
const img = document.querySelector("#profile img")

//substiruit img

if(html.classList.contains('Light')){
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './source/avatar_light.png')
}else{
    //se tiver sem ligtht mode, manter img normal
    img.setAttribute('src', './source/avatar_dark.png')
}


}