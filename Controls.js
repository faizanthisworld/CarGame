class Controls {
  constructor() {
    this.left = false;
    this.right = false;
    this.forward = false;
    this.reverse = false;
    this.#addEventListener();
  }
  #addEventListener() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.forward = true;
          return;
        case "ArrowDown":
          this.reverse = true;
          return;
        case "ArrowLeft":
          this.left = true;
          return;
        case "ArrowRight":
          this.right = true;
          return;
      }
    });
    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.forward = false;
          return;
        case "ArrowDown":
          this.reverse = false;
          return;
        case "ArrowLeft":
          this.left = false;
          return;
        case "ArrowRight":
          this.right = false;
          return;
      }
    });
  }
}
