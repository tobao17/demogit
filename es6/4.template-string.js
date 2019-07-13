function greeting (name)
{
  return 'hi,'+name+'!';
}
console.log(greeting('minh'));
function greeting2(name)
{
  return `hi
  ,${name}!`;
}
var resut =greeting2('bao');
console.log(resut);