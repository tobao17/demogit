class coffemachine {
    makecoffee(){
      console.log('making coffee...');
    }
  }
  class specialcoffemachine extends coffemachine{
  makecoffee(cb){
      console.log('making coffee2...');
      cb();
  }
  }
  const a=new specialcoffemachine()
  a.makecoffee(function() {
    console.log('call the boss');
  });