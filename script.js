var text = document.getElementById("text")
var avatar = document.getElementById("avatar")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")

/** ID диалога в таблице. По умаолчанию 2 */
var currentDialog = 2

/** Установить главный текст */
const setText = (str) => text.innerHTML = str
/** Установить видимость и текст кнопок */
const setBtns = () => {
    if (data[currentDialog].variant1 == "") btn1.style["display"] = "none"
    else {
        btn1.innerHTML = data[currentDialog].variant1
        btn1.style["display"] = "unset"
    }

    if (data[currentDialog].variant2 == "") btn2.style["display"] = "none"
    else {
        btn2.innerHTML = data[currentDialog].variant2
        btn2.style["display"] = "unset"
    }

    if (data[currentDialog].variant3 == "") btn3.style["display"] = "none"
    else {
        btn3.innerHTML = data[currentDialog].variant3
        btn3.style["display"] = "unset"
    }

    if (data[currentDialog].variant4 == "") btn4.style["display"] = "none"
    else {
        btn4.innerHTML = data[currentDialog].variant4
        btn4.style["display"] = "unset"
    }
}
/** Установить видимость и изображение аватара */
const setAvatar = (visible, name) => {
    console.log(`setAvatar visible ${visible}, name ${name}`)
    if (visible){
        avatar.style["display"] = "unset";
        avatar.src = `img/${name}.jpeg`
    } else avatar.style["display"] = "none";
}
/** Выбор варианта 
 * @param variant {Number} вариант/номер кнопки
 * */ 
const varSelect = (variant) => {
    console.log(`varSelect ${variant}`)
    switch (variant) {
        case 1:
            nextDialog(data[currentDialog].variant1to)
            break;
        case 2:
            nextDialog(data[currentDialog].variant2to)
            break;
        case 3:
            nextDialog(data[currentDialog].variant3to)
            break;
        case 4:
            nextDialog(data[currentDialog].variant4to)
            break;
    }
}
/** Обновляет текст, аватар, кнопки, переменные 
 * @param newDialog {Number} currentDialog = newDialog, ID диалога в таблице
*/
const nextDialog = (newDialog) => {
    console.log(`nextDialog ${newDialog}`)
    currentDialog = newDialog
    setText(data[currentDialog].text)
    if (data[currentDialog].name == "") setAvatar(false, "")
    else setAvatar(true, data[currentDialog].name)
    setBtns()
}

// Старт выполнения скриптов когда документ загрузится
document.addEventListener("DOMContentLoaded", event => {
    console.log("ready")
    nextDialog(currentDialog)
});










