function mouse (name){
this.name=name;
}
mouse.prototype.die=function(){
    this.dead=false;
}
mouse.prototype.eat =function(){}
modoule.exports=mouse;

// workking directory : thu muc ma ban dang lam viec
//staging area: nhung thay doi o workking directory se duoc add vao staging area
//git repository:luu nhung thay dooi cua cac commitgit