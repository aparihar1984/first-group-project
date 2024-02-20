// Defining our variables and linking them to the char.html
var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#charName');
var superheroesList = document.getElementById('superheroes-list')

// getting the value from an input box
var formSubmitHandler = function (event) {
  event.preventDefault();
 
  var username = nameInputEl.value.trim();
 
  if (username) {
    getCharacterStats(username);

// clears the previous input/search
    superheroesList.textContent = '';

    nameInputEl.value = '';
  }
};

// requesting API for our character data
var getCharacterStats = async function (superheroName) {

  // deinfing our constant = base URL + variable
  const url = 'https://superhero-api.p.rapidapi.com/search?name=' + superheroName;
  const options = {
//  GET call to pull information for our character search
    method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9328485959mshe167e3a934d9876p1c2777jsn0a59e3ced3d7',
    'X-RapidAPI-Host': 'superhero-api.p.rapidapi.com'
  }
};
// if fetch request is successful, next block of code will be executed
// if fetch request is unsuccessful, error will reflect in console log
try {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
  displayCard (result)
} catch (error) {
  console.error(error);
}
};

// creating our visual card for the comic book character profiles
var displayCard = function(result) {
    result.hero.forEach(superhero => {
      // creating div to display card to user
      const superheroCard = document.createElement('div');
      superheroCard.classList.add('superhero-card');
      // creating header on the card for comic book character name
      const superheroName = document.createElement('h2');
      superheroName.textContent = superhero.data.name;
      // creating image on the card comic book character
      const superheroImage = document.createElement('img');
      superheroImage.src = superhero.data.image.url;
      // alt entered if image cannot be displayed
      superheroImage.alt = superhero.data.name;
      // creating power stats for the comic book character that was searched
      const superheroPowerstats = document.createElement('p');
      superheroPowerstats.textContent = `Intelligence: ${superhero.data.powerstats.intelligence}, Strength: ${superhero.data.powerstats.strength}, Speed: ${superhero.data.powerstats.speed}`;
      // append to show character info requested above
      superheroCard.appendChild(superheroName);
      superheroCard.appendChild(superheroImage);
      superheroCard.appendChild(superheroPowerstats);
      superheroesList.appendChild(superheroCard);
  });
  }

  // potentially will add a "go back" button
// const goBackButton = document.getElementById('go-back-button');
//   if (goBackButton) {
// goBackButton.addEventListener('click', goBack);
// };

// allows us to click button
userFormEl.addEventListener('submit', formSubmitHandler);

