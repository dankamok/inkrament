

let unos = document.querySelector("#unos");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");

// let broj = 0;

plus.addEventListener("click", function(){
// broj= broj + 1;
unos.value++;

});
minus.addEventListener("click", function(){

// broj = broj - 1;
unos.value = unos.value - 1;
});
reset.addEventListener("click", function(){
// broj = 0 ;
unos.value = 0;

});