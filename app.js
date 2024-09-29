let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

//just for checking
//console.log(buttons); //1. yaha pe btns nodelist tha

let buttonsArray = Array.from(buttons); //array.from sare button ko alg alg kr dega

//just for checking
//console.log(buttonsArray); //2. yaha pe btns array bna

//forEach loop v ek type ka loop hi hota h and isme function ko add kr ke run krte h
//yaha hm forEach loop se btn arry ko alag alag variable me change krenge,
//yani ab sare btns alag alag ho chuke h

//buttons = node --> array --> variable

let string = "";

buttonsArray.forEach((btn) => {
  //console.log(btn); //just for checking //3. yaha pe btns array alg alag variable bna
  btn.addEventListener("click", (e) => {
    //e = event
    if (e.target.innerHTML == "DEL") {
      //substring yani ek ek kr ke value delete hogi
      string = string.substring(0, string.length - 1); 
      display.value = string;
    } else if(e.target.innerHTML == "AC"){
      string = "";
      display.value = string;
    }else if(e.target.innerHTML == "="){
      //eval is js inbult function which is used to convert string to number and then calculate
      string = eval(string); 
      display.value = string;
    }
    else {
      //+= yani ab string me sb add hoga jo v likhte jao sara show hoga
      string += e.target.innerHTML; 
      display.value = string; //yani input box me show ho string
    }

    //console.log(e.target.innerHTML); //only event se btn event ka naam aayega and target v krne se btn ka naam v aayega ki kon sa h jaise btn1/btn2
  });
});
