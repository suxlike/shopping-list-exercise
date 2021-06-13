

let ulist = document.querySelector('.shopping-list');
let inputItem = document.querySelector('#item');
let addItemButton = document.querySelector('.add-button');
let divList = document.querySelector('.list-div');

addItemButton.onclick = function (){
    let newItem = inputItem.value;
    inputItem.value = " ";
    let NewLi = document.createElement ('li');
    let newSpan = document.createElement ('span');
    let Newbutton = document.createElement ('button');
    NewLi.appendChild(newSpan);
    NewLi.appendChild(Newbutton);
    newSpan.textContent= newItem;
    Newbutton.textContent = "delete";
    ulist.appendChild(NewLi);
    console.log(NewLi);
    Newbutton.onclick = function(){
        NewLi.remove();
   }
    inputItem.focus();
}
