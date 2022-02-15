const path = require('path');
const pinFileToIPFS = require('./pinFileToIPFS');

// const filePath = path.join(__dirname, '../assets/sprites.png');
const filePath = path.join(__dirname, '../data/metaData.json');

pinFileToIPFS(filePath);