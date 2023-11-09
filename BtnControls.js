class BtnControls {
    constructor(left,right,top,bottom) {
 
        this.left = false
        this.right = false
        this.top = false
        this.bottom = false
        this.#addEventListener(left,right,top,bottom)
    }
    #addEventListener(left,right){
         document.addEventListener("ontouchstart", (e) => {
            switch(e.target) {
                case left:
                    this.left= true;
                    break
                case right:
                    this.right = true;
                    break;
                case top:
                    this.top = true
                    break
                case bottom :
                    this.bottom = true
                    break
            }
            console.table(this)
            alert(e.target)
         })
         document.addEventListener("ontouchend", (e) => {
            switch(e.target) {
                case left:
                    this.left= false;
                    break
                case right:
                    this.right = false;
                    break;
                case top:
                    this.top = false
                    break
                case bottom :
                    this.bottom = false
                    break
            }
            console.table(this)
            alert(e.target)
         })
    }
}
 
  
 
