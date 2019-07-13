//  const obj={
//    0:'thanh',
//    1:'trang',
//    2:'thuy',
//    length:3
//  };
//  for (let i=0;i<obj.length;i++)
//  {
//    console.log(obj[i]);
//  }
function sum (){
    let result=0;
   for (let i=0;i<arguments.length;i++)
   {
     result=result+arguments[i];
   }
   return result;
  }
  sum(1,2,3,4,5);