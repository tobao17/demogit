let a1=1;
let a2=1;
console.log(a1===a2);
let obj1={a:1}
let obj2={a:1}
console.log(obj1===obj2);
//array ,function,oject la reference types con lai la value types   
let obj3=obj2;
console.log(obj3===obj2);
obj3.a=2;
console.log(obj2);
function log(x)
{
  x.b=2;
}
log(obj1);
console.log(obj1);
//cach lam nguy hiem nen tranh