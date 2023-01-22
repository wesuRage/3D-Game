const express = require("express");
const path = require('path')
const fs = require('fs')

import { Request, Response } from "express";

const server = express();
const port = 3333;

const rootPath = __dirname.replace('src', '')

server.use(express.static(rootPath + '/public'))

server.get("/", (req: Request, res: Response) => {
    res.send();
})

server.listen(port, () => {console.log(`\nApp listening at http://localhost:${port}`)});

