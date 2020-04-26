//remove all classes from an element
function clearClass(x){
    var classList = x.classList;
    while (classList.length > 0) {
        classList.remove(classList.item(0));
     }
}
