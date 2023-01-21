/* declare global variables */
let memory1 = '';
let memory2='';
let operator='';
let result='';
let displee = document.getElementById('display');

/* define functions */
function add(var1, var2) {
    let result = var1 + var2;
    return result;
};

function subtract(var1, var2) {
    let result = var1 - var2;
    return result;
};

function multiply(var1, var2) {
    let result = var1 * var2;
    return result;
};

function divide(var1, var2) {
    let result = var1 / var2;
    return result;
};

/* when = is pressed: store term2 and calculate, show result on display */
function operate(operator, memory1){
    memory2 = displee.innerHTML.slice((displee.innerHTML.indexOf(operator)+1))
    term1 = parseInt(memory1);
    term2 = parseInt(memory2);
    console.log("houdoe"+term2);
    if(operator=="+"){
        result = add(term1, term2);
    }
    else if (operator=='-'){
        result = subtract(term1, term2);
    }
    else if (operator=='*'){
        result = multiply(term1, term2);
    }
    else {
        if (term2 == '0' ){
            result='geennummber';
        }
        else {
            result = divide(term1, term2);
        }
    }

    let checkmate = result
    if(isNaN(checkmate)){
        if(checkmate=="geennummber"){
            displee.innerHTML= "Hoho, niet door nul delen";
        }
        else{
            displee.innerHTML="probeer opnieuw";
        }
    }
    else {
        result = Math.round((result + Number.EPSILON) * 100) / 100;
        showResult(result);
    }
    
}

function showResult(result){
    modifytext("="+result);
}

/* set text on display */
function modifytext(input){
    displee.innerHTML= displee.innerHTML +input;
}

/* define operator and store first term, calculate if needed*/
function setOperator(sign){
    if (memory1===''){
        operator = sign;
        memory1=displee.innerHTML.slice(0,displee.innerHTML.indexOf(sign)); 
    }

    else {
        operate(operator, memory1);
        operator=sign;
        memory1=result;
        memory2='';
    }
}

function emptytext(){
    displee.innerHTML= "";
    operator='';
    memory1='';
    memory2='';
    result='';
}

/* access buttons */
const een = document.getElementById("een");
een.addEventListener("click", function () {modifytext("1"); });
/*een.addEventListener("click", function () {storeNumbers("1"); }); */
const twee = document.getElementById("twee");
twee.addEventListener("click", function () {modifytext("2"); });
const drie = document.getElementById("drie");
drie.addEventListener("click", function () {modifytext("3"); });
const vier = document.getElementById("vier");
vier.addEventListener("click", function () {modifytext("4"); });
const vijf = document.getElementById("vijf");
vijf.addEventListener("click", function () {modifytext("5"); });
const zes = document.getElementById("zes");
zes.addEventListener("click", function () {modifytext("6"); });
const zeven = document.getElementById("zeven");
zeven.addEventListener("click", function () {modifytext("7"); });
const acht = document.getElementById("acht");
acht.addEventListener("click", function () {modifytext("8"); });
const negen = document.getElementById("negen");
negen.addEventListener("click", function () {modifytext("9"); });
const nul = document.getElementById("nul");
nul.addEventListener("click", function () {modifytext("0"); });
const eraf = document.getElementById("eraf");
eraf.addEventListener("click", function () {modifytext("-"); });
eraf.addEventListener("click", function () {setOperator("-"); });
const erbij = document.getElementById("erbij");
erbij.addEventListener("click", function () {modifytext("+"); });
erbij.addEventListener("click", function () {setOperator("+"); });
const maal = document.getElementById("maal");
maal.addEventListener("click", function () {modifytext("*"); });
maal.addEventListener("click", function () {setOperator("*"); });
const gedeeld = document.getElementById("gedeeld");
gedeeld.addEventListener("click", function () {modifytext("/"); });
gedeeld.addEventListener("click", function () {setOperator("/"); });
const ishet = document.getElementById("is");
ishet.addEventListener("click", function () {operate(operator,memory1); });
const wis = document.getElementById("clear");
wis.addEventListener("click", function () {emptytext(); });
