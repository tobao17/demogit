class animal {
    constructor (name)
    {
      this.name=name;
    }
    eat(){
      console.log('Eating...');
    }
  }
  class bird extends animal
  {
    fly(){
      console.log('flying...');
    }
  }
  class parrot extends bird {
    speak(){
      console.log('speaking...')
    }
  }
  const Bird =new bird ('Thong');
  Bird.fly();
  Bird.eat();