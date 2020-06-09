const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

const rowElements = document.querySelectorAll(".row")

function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

replaceAllButton.addEventListener('click', function () {
    let findUserInput = findInput.value
    let replaceWithInput = replaceInput.value
    
    for (let row = 0; row < rowElements.length; row += 1) {
        
        let currentCellList = getCellElements(rowElements[row]) 
        
            for (let cell = 0; cell < currentCellList.length; cell += 1) {
                while(currentCellList[cell].innerHTML.includes(findUserInput)){
                let replacedText = currentCellList[cell].innerHTML.replace(findUserInput, replaceWithInput)
                    currentCellList[cell].innerHTML = replacedText
            }           
                
        }
     
     }
})
    console.log("button clicked");
    
// function caseSensitity(findUserInput) {
//     const checkBox = document.querySelector("#check");
//     let text = document.querySelector("#text");
//     if(checkBox.checked == true) {
        
//         text.style.display = "block";
//         text.color = "red";
//     }else {
//         text.style.display = "none;"
//     }

// }
//     console.log(checkBox.checked);
    
   
    
    


    
    