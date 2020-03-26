"use strict";
const fs = require('fs');
const express = require('express');
const { initialize } = require('express-openapi');

const app = express();
initialize({
    app,
    apiDoc: './apidoc.yml',
    operations: {
        getFlagWithoutRef: (req, res) => {
            res.send({ flag: req.query.flag });
        },
        getFlagWithRef: (req, res) => {
            res.send({ flag: req.query.flag });
        }
    }
});

app.listen(3000);
console.log('server listening on 3000');
