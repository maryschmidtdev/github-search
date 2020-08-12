"use strict";

function setData(data) {
  $("#results-list").empty();
  for (let i = 0; i < data.length; i++) {
    $("#results-list").append(
      `
      <li>Name: ${data[i].name}</li> 
      <li>URL: <a href = ${data[i].clone_url}>${data[i].clone_url}</a></li>
      </br>`
    );
  }

  $("#results").removeClass("hidden");
}

const searchURL = "https://api.github.com/users/";

function getUser(userName) {
  const url = searchURL + userName + "/repos";

  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => setData(responseJson));
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    const searchTerm = $("#js-search-term").val();

    getUser(searchTerm);
  });
}

$(watchForm);
