
let count = 0;
document.getElementById("DeNumber").onclick = function(){
    count -= 1;
    document.getElementById("Number").innerHTML = count
}
document.getElementById("ReNumber").onclick = function(){
    count = 0;
    document.getElementById("Number").innerHTML = count
}
document.getElementById("InNumber").onclick = function(){
    count += 1;
    document.getElementById("Number").innerHTML = count
}