var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#username');
var repoContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

var formSubmitHandler = function (event) {
  event.preventDefault();

  var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);

    repoContainerEl.textContent = '';
    nameInputEl.value = '';
  }
};

var getUserRepos = function (user) {
  var apiUrl = 'https://akabab.github.io/superhero-api/api/all.json/' + user + '/id';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(user)
          displayRepos(data, user);
        });
      } 
    });
};

userFormEl.addEventListener('submit', formSubmitHandler);
