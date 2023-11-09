class Controls {
  constructor(btns) {
    this.left = false;
    this.right = false;
    this.forward = false;
    this.reverse = false;
    this.#addEventListener(btns);
  }
  #addEventListener(btns) {
    if (btns) {
      const [t, d, l, r] = btns;
      document.addEventListener("touchstart", (e) => {
        switch (e.target) {
          case t:
            this.forward = true;
            break;
          case d:
            this.reverse = true;
            break;
          case l:
            this.left = true;
            break;
          case r:
            this.right = true;
            break;
        }
      });
      document.addEventListener("touchend", (e) => {
        switch (e.target) {
          case t:
            this.forward = false;
            break;
          case d:
            this.reverse = false;
            break;
          case l:
            this.left = false;
            break;
          case r:
            this.right = false;
            break;
        }
      });
    }

    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
      }
    });
    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
      }
    });
  }
}
