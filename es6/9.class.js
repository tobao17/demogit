



// function mouse (name){
//   this.name=name;
// }
// mouse.prototype.run=function (){
//   console.log(`${this.name} is running`);
// }
class mouse {
    constructor (name){
      this.name=name;
    }
    run(){
      console.log(`${this.name}is running`);
    }
  }
  const a =new mouse ('micky');
  a.run();