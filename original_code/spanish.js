function start(){
    var dateSubmit = document.getElementById("dateSubmit");
    if(dateSubmit){
        dateSubmit.addEventListener("click", function(event){
            event.preventDefault();
            randomWord();
        });
    }
}
start();
function randomWord(){
    const url = 'https://palabras-aleatorias-public-api.herokuapp.com/random';
    fetch(url)
    .then(response => response.json())
    .then(data => displayWord(data));
}

function displayWord(json){
    console.log(json.body);
    let results = "";
    let definition = "";
    results += `<h2>Word of the Day:</h2>`;
    results += '<p><img src=' + json.body.urls.image + ' alt ="' + json.body.Word + 'style="height:50%, width:50%"></p>';
    definition += `<h2>Definition:</h2>`;
    definition += `<p>` + decodeURIComponent(json.body.Definition) + `</p>`;
    document.getElementById("wordResults").innerHTML = results;
    document.getElementById("wordDefinition").innerHTML = definition;
}