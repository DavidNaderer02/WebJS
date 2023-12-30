let ul = document.getElementById('file');
let path = document.getElementById('path');
let form = document.getElementById('filed');

fetch('/api/path?extenion=.')
    .then(data => data.text())
    .then(data => {
        path.innerHTML = data;
    });

fetch(`/api/data`)
    .then(data => data.text())
    .then(responseText => {
        ul.innerHTML += responseText;
    });

form.innerHTML = path.textContent;