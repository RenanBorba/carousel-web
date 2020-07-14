/** App **/

// Selecionar o elemento do HTmL
document.querySelector("#items")
  // "ouvidor de eventos" ("roda" do mouse)
  // .addEventListener("wheel", function() {}) // dispara a função

  .addEventListener("wheel", event => {
    if(event.deltaY > 0) {
      // rolar para (x, y)
      event.target.scrollBy(300, 0)
    } else {
      event.target.scrollBy(-300, 0)
    }
  })