class Rectangle{

  constructor(w, h){
    if((w > 0) && (h > 0)){
      this.width = w
      this.height = h 
    }
  }
  print(){
    for(let i = 0; i < this.height; i++){
      console.log("X".repeat(this.width))
    }
  }
  rotate(){
    let temp = this.width;
    this.width = this.height;
    this.height = temp
  }
  double(){
    this.height = this.height*2
    this.width = this.width*2
  }
}

class Square extends Rectangle{
  constructor(size){
    super(size, size)
    this.size = size
  }
}


class NewSquare extends Square{
  
  charPrint(c){
    for(let i = 0; i < this.size; i++){
      if(c === undefined){
        c = "X"
      }
      console.log(c.repeat(this.size))
    }
  }
}

const s1 = new NewSquare(4);
s1.charPrint();

s1.charPrint('C');
