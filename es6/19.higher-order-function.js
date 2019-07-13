//higher order functions
function waitandrun (ms,func)
{
  setTimeout(func,ms)
}
function run()
{
  console.log('run');
}
waitandrun (2000,run);
//co the truyen vao ten ham