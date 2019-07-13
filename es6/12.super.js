class hero{
    constructor (name,hp,damage){
      this.nam=name;
      this.hp=hp;
      this.damage=damage;
    }
  }
  class rangedhero extends hero
  {
    constructor (name,hp,damage,range)
    {
      super (name,hp,damage);
      //goi contructor cua herro
      this.range=range
    }
    //khi co method thi can dung super.
  }