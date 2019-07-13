const  obj1={
    a:1,
    b:2,
    c:3,
    d:{e:10}
  };
  let obj2={...obj1,z:1000};
  //shallow-cloning:coppy 1 tang
  // for (let key in obj1)
  // {
  //   obj2[key]=obj1[key];
  //   //cung tham chieu den mot obj e 
  // }
  obj2.d.e=11;
  //de khac phuc dung deep-cloning:coppy hoan toan
  
  console.log({obj1,obj2});