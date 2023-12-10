// console.log("Hello World !");

// document == it is object of javascript to manupulate the tree(like console)
// object == collection of properties and function

// console.log(document);


//select the element

//by Tag Name 
// let ps = document.getElementsByTagName("p");

// console.log(ps[0]);

//by  class Name 
// let ps = document.getElementsByClassName("one");

// console.log(ps[0]);

//by id 

// let ps = document.getElementById("para");

// console.log(ps);


// let d = document.getElementsByClassName("one");

// console.log(d[0].innerText = "LetsUpgrade");

//====================CSS ARTRIBUTES MANUPLATION================//

// let n = "Ranjeet"

// let p =``;
// console.log("The name is :"+n)


// function ChangeSomething(){
//     let d = document.getElementById("one");
//     d.innerHTML="<h3>Next</h3>"
//     d.style.backgroundColor = "red";
    
// }

// function ChangeBack(){
//     let d= document.getElementById("one");
//     d.innerHTML="<h3>Previous</h3>"
//     d.style.backgroundColor = "aqua";
// }


// function addElement(){
//     let d = document.getElementById("one");
//     d.innerHTML = d.innerHTML + "<h3>Hello</h3>";
// }


// function ShowPassword(){
//     let inp = document.getElementsByClassName("inp");
//    inp[0].type="text";
// }

// function hidePassword(){
//     let inp = document.getElementsByClassName("inp");
//     inp[0].type="password";
// }


// document.getElementsByTagName("h3")[0].addEventListener("click",function(){
//  console.log ("Hello World!");
//  this.style.cursor = "pointer";
// })

// Efficient Way of adding the element 

function addElement()
{
    let h= document.createElement("p");
    let text = document.createTextNode("Hello");
    h.appendChild(text);
    h.addEventListener("click",function(){
        console.log("Event works!");
    })

    document.getElementById("one").appendChild(h);
}