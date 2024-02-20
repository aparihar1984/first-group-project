var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#username');

var formSubmitHandler = function (event) {
  event.preventDefault();
 
  var username = nameInputEl.value.trim();
 
  if (username) {
    getUserRepos(username);
 
    nameInputEl.value = '';
  }
};

var getUserRepos = async function (superheroName) {
 

const url = 'https://movies-api14.p.rapidapi.com/search?query=' + superheroName;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a96dce8b6msh2e784b017f5108ap1da68ajsn1add6c64f40a',
		'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}

};

var displayCard = function(result) {
//   var superheroesList = document.getElementById('superheroes-list')
//   superheroesList.textContent = '';
//     result.hero.forEach(superhero => {
//       const superheroCard = document.createElement('div');
//       superheroCard.classList.add('superhero-card');
//       const superheroName = document.createElement('h2');
//       superheroName.textContent = superhero.data.name;
//       const superheroImage = document.createElement('img');
//       superheroImage.src = superhero.data.image.url;
//       superheroImage.alt = superhero.data.name;
//       const superheroPowerstats = document.createElement('p');
//       superheroPowerstats.textContent = `Intelligence: ${superhero.data.powerstats.intelligence}, Strength: ${superhero.data.powerstats.strength}, Speed: ${superhero.data.powerstats.speed}`;
//       superheroCard.appendChild(superheroName);
//       superheroCard.appendChild(superheroImage);
//       superheroCard.appendChild(superheroPowerstats);
//       superheroesList.appendChild(superheroCard);
//   });
  }

const goBackButton = document.getElementById('go-back-button');
  if (goBackButton) {
goBackButton.addEventListener('click', goBack);
};

userFormEl.addEventListener('submit', formSubmitHandler);

