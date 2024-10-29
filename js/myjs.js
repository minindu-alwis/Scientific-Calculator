function login(){

    console.log("Minidu");

    const username="minidu";
    const password="1234";

    let inputname=document.getElementById("num1").value;
    let inputpass=document.getElementById("password").value;
    console.log(inputname);
    console.log(inputpass);

    if(username==inputname && password==inputpass){

        alert("Login Sucsess");
    }else{

        alert("Invaid Input");
    }

}

let numbers=[10,20,30,50,60,40,50,60,70,90,62,100];

    for(let number of numbers){
        console.log(number);
        
    }

    numbers.forEach(number =>{
                document.write(`<h1>${number}</h1>`);
            })


let isTruee = 10 == "10";
console.log(isTruee);




// solution

let isTrue = 10 === "10";
console.log(isTrue);
// now false check with type
