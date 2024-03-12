// array destrcuturing
const veichle={
    Vname:"car",
    brand:"honda",
    year:"2023",
};
const{Vname,brand}=veichle;
console.log(Vname,brand);

//inserting a0 in middle of the array using splice operator
let a=['a1','a2','a3','a4'];
a.splice(2,0,'a0');//splice(index to insert,number of elements to delete,elements to insert)->syntax
console.log(a);

//using spread operator creating a new array and adding elements in middle of the array
let b=['b1','b2','b3'];
let x=[...a,'array(a)',...b,'array(b)'];
console.log(x);
//using spread operator adding elements in middle of the array for existing array using slice operator
x=[...x.slice(0,6),'addind into same array',...x.slice(6)];
console.log(x);

