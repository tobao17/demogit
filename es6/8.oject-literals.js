const jerry ={
    name:'jerry',
    run:function (){
      console.log(`${this.name} is running`)
    }
  }
  jerry.run();
  const name='tom'
  const cat ={
    name,
    run(){
      console.log(`${this.name} is running`)
    }
  }