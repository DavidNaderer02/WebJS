function openLink(pathChange) {
    let path = document.getElementById('path');
    fetch(`/api/path?extenion=${pathChange}`)
        .then(data => data.text())
        .then(data => {
            path.innerHTML = data;
        });
    location.reload();
}