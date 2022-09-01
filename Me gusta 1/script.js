var count = 3;
var countElement= document.querySelector("#count")
function Add(){
    count++;
    countElement.innerText = count + " Like(s)";
    console.log(count);
}
