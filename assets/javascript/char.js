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
 
  const url = 'https://superhero-api.p.rapidapi.com/search?name=' + superheroName;
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9328485959mshe167e3a934d9876p1c2777jsn0a59e3ced3d7',
    'X-RapidAPI-Host': 'superhero-api.p.rapidapi.com'
  }
};

try {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
  displayCard (result)
} catch (error) {
  console.error(error);
}



};


userFormEl.addEventListener('submit', formSubmitHandler);

