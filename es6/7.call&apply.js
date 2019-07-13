// function greeting(name) {
//   console.log(`hi!${name}`);
// }
// greeting.call(null,'tom');
// function greeting(name) {
//   console.log(`hi!${this.name}`);
// }
// const cat={
//   name:'tom'
// }
// greeting.apply(cat);
function sum()
{
  const numbers=Array.from(arguments)
  return numbers.reduce((sum,num)=>sum+num,0);
}
function average()
{
  const x=sum.apply(null,arguments)
  return x/arguments.length
}
average(1,2,3,4);
// aplly goi 1 ham ma khong biet co bao nhieu dau vao 