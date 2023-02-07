

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  fetch("http://localhost:3000/toys")
    .then((res) => res.json() )
    .then((json) => loadToys(json))
    // With response data make a div with the class of card with each toy
    // add each toy to the div toy-collection

    function loadToys(json) {
      json.forEach(makeToyCard);
    }

    function makeToyCard(toyObject) {

        const toyCardDiv = document.getElementById("toy-collection")
        let toyCard = document.createElement("div")
        toyCard.className = "card"
        

        const toyH2 = document.createElement("h2")
        toyH2.textContent = toyObject.name

        const toyImg = document.createElement("img")
        toyImg.src = toyObject.image
        toyImg.className = "toy-avatar"

        const toyP = document.createElement("p")
        toyP.textContent = toyObject.likes + " likes"

        const toyButton = document.createElement("button")
        toyButton.textContent = "like"

        toyCard.append(toyH2, toyImg, toyP, toyButton)

        toyCardDiv.appendChild(toyCard)
    
    }




});
