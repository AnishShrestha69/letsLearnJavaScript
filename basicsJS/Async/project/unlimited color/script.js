const randomColor = function(){
    const hex = '123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let IDI;
const startChangingColor = function () {
    if(!IDI){
        IDI = setInterval(changeBgColor, 100);
    }
            function changeBgColor() {
             document.body.style.backgroundColor = randomColor();
                }
}
const stopChangingColor = function () {
    clearInterval(IDI)
    IDI = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)

