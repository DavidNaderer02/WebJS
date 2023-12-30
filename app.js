const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
let currentPath = 'C:/Users/david/OneDrive/Desktop/NodeJs/NodeJsHaugiWebsite';

app.use(express.static('public'));

app.get('/api/data', (req, res) => {
    fs.readdir(currentPath, function (err, files) {
        if (err) {
            return res.json(err);
        }
        else {
            let li = "";
            files.forEach(function (value, index, array) {
                if (checkIfDirectory(value)) {
                    li += `<li><button onclick=openLink('${value}')>${value}</button></li>`;
                } else {
                    li += `<li><a href=./php/download.php?path=${currentPath}&file=${value}>${value}</a></li>`;
                }
            });
            return res.json(li);
        }
    });
});

app.get('/api/path', (req, res) => {
    const extension = req.query.extenion;
    let array = currentPath.split('/');
    fs.readdir(currentPath, function (err, files) {
        if (extension == ".." & array.length != 1) {
            array.length -= 1;
        }
        else {
            let visited = false;
            for (let i = 0; i < files.length & !visited; i++) {
                if (files[i] == extension) {
                    array.push(extension);
                    visited = true;
                }
            }
        }
        currentPath = array.join("/");
    });
    return res.json(currentPath);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

function checkIfDirectory(item) {
    let fusionPath = currentPath + '/' + item;
    return fs.statSync(fusionPath).isDirectory();
}