// Đặt các biến 
var colorChoosing = Array.from(document.querySelectorAll('.btn__chooseColor'));
var mainBoard = Array.from(document.querySelectorAll('.btn__mainBoard'));
let resetButton = document.querySelector('.resetButton');
let returnButton = document.querySelector('.returnButton');
let clearButton = document.querySelector('.clearButton');
let openSettingTable = document.querySelectorAll('.modal');
let settingMenu = document.querySelectorAll('.buttonSettingBoard');


var currentColorIndex;
var userHistory = [];
var isButtonClearActive = false;;


// Tạo các hàm để xử lí hành động
function userActionColorPicked(colorUsing, index) {
    currentColorIndex = index;
    isButtonClearActive = false;
}
function userAction(block) {
    removeColor(block);
    block.classList.add(`color-${currentColorIndex}`);
    saveUserAction(block);
}
function removeColor(block) {
    for (var i = 0 ; i < 12 ; i++) {
        if (block.classList.contains(`color-${i}`)) {
            block.classList.remove(`color-${i}`);
        }
    }
}
function saveUserAction(block) {
    userHistory.push(block);
}
function headerOpen() {
    openSettingTable[0].style.display ='';
    settingMenu[0].style.opacity = '0.3';
}
function closeTable() {
    openSettingTable[0].style.display = 'none';
    settingMenu[0].style.opacity = '';

}
  
// nút reset và nút return
    returnButton.addEventListener('click', () => {
        mainBoard.forEach((block) => {
            removeColor(block)
        });
    })
    resetButton.addEventListener('click', () => {
        var lastAction = userHistory[userHistory.length - 1];
        for (var i = 0 ; i < 12 ; i++) {
            if (lastAction.classList.contains(`color-${i}`)) {
                lastAction.classList.remove(`color-${i}`);
            }
        }
        userHistory.pop();
    })
///


    clearButton.addEventListener('click', () => {
        isButtonClearActive = true;
    })
// Sự kiện khi nhấn vào các block
colorChoosing.forEach( (colorUsing,index) => {
    colorUsing.addEventListener('click', () => {userActionColorPicked(colorUsing,index)});
})
mainBoard.forEach( (block,index) => {
    block.addEventListener('click', () => {
        if (isButtonClearActive) {
            removeColor(block);
        } else {
            (userAction(block))
        }
    });
});
///
    
        















