class DrawF {
    #width;
    #height;
    #backgroundColor;

    constructor(width, height, backgroundColor) {
      this.#width = width;
      this.#height = height;
      this.#backgroundColor = backgroundColor;
    }

    show() {
      const Container = document.getElementById('container');
      const div = document.createElement('div');
      Container.insertAdjacentElement("beforeend", div)
      div.innerHTML = `
        <div style="
          width: ${this.#width}px;
          height: ${this.#height}px;
          background-color: ${this.#backgroundColor};
          margin:10px;
        "></div>
      `;
    }
  }

  const drawButton = document.getElementById('draw-button');

  drawButton.addEventListener('click', () => {
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const backgroundColor = document.getElementById('background-color').value;

    const draw = new DrawF(width, height, backgroundColor);
    draw.show(); 
});