function renderOneAnimal(animal) {
    // Build Animal
    let card = document.createElement('li');
    card.className = 'card';
    card.innerHTML = `
      <img src="${animal.imageUrl}">
      <div class="content">
        <h4>${animal.name}</h4>
        <p>
        <p>${animal.donations}></p>$animal.donations,/span> Donated
         </div>
      <div>
        <button.Donate
        </div>
                <button>Donate $10 </bitton>
                </div>

            
        //add animal xard to DOM
        document.querySelector('#animal-list').append(child(card))
      }
   //Intial Render
   //Get Data and Render our ANimals to the DOM
  function intialize() {
    animalData.forEach(animal => renderOneAnimal(animal));
  }
  intialize()