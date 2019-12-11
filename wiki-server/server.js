const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const util = require('util');
const fs = require('fs').promises;


const app = express();
app.use(cors());
app.use(bodyParser.json());

// some helper functions you can use
async function readFile(filePath) {
  return await fs.readFile(filePath, 'utf-8');
}
async function writeFile(filePath) {
  return await fs.writeFile(filePath, 'utf-8');
}
async function readDir(dirPath) {
  return await fs.readdirFile(dirPath);
}

// some more helper functions
const DATA_DIR = 'data';
const TAG_RE = /#\w+/g;
function slugToPath(slug) {
  const filename = `${slug}.md`;
  return path.join(DATA_DIR, filename);
}
function jsonOK(res, data) {
  res.json({ status: 'ok', ...data });
}
function jsonError(res, message) {
  res.json({ status: 'error', message });
}


app.get('/', (req, res) => { res.json({ wow: 'it works!' }) });


// write me!


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Wiki app is serving at http://localhost:${port}`));
