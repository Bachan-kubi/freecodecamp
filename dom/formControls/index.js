// console.dir(document.forms.my.elements.two);
// const elem = document.forms.my.elements.one;
// console.log(elem);
// function add(elem) {
//     console.log(elem.value);
// }

// let two = document.getElementById('t');
// function getV() {

//     console.log(two.value);
// }

// let i = document.getElementById('kubi');
// i.addEventListener('submit', function(e) {
//     e.preventDefault();
//     let fname = document.getElementById('fname').value.toLowerCase();
//     let lname = document.getElementById('lname').value.toUpperCase();
//     console.log(`First name is ${fname}`);
//     console.log(`Lirst name is ${lname}`);
// });

const form = document.forms['myForms'];

const myForm = document.getElementById('myForms');

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let v = form.lname.value;
    let x = form.fname.value;
    if(isNaN(v)){
        console.log('number please!');
        form.lname.value= "";
        form.fname.value= "";
        
        return false;
    } else{
        
        console.log(v, x);
        form.lname.value= "";
        form.fname.value= "";
        v='';
        x='';
    }
    // if(v === ""){
    //     console.log('Please enter input!');
    //     return false;
    // }else{
    //     console.log(v);
    // }
    
})

