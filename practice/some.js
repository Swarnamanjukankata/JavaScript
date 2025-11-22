let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinner = document.getElementById("spinner");

function responsefunction(jsonData) {
    // Show the spinner before logging inputs
    spinner.style.display = "none";
    jokeText.textContent = jsonData.value;
}

jokeBtn.onclick = function() {
    // Show the spinner before logging inputs
    spinner.style.display = "flex";
    let options = {
        Method: "GET"
    };
    let url = "https://apis.ccbp.in/jokes/random";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            responsefunction(jsonData);

        });
};