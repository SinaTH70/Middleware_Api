"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors = require("cors");
const https = require("https");
const fs = require("fs");
// import cors from "cors";
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
let corsOptions = {
    origin: [
        "http://localhost:4200",
        "http://192.168.10.215:4200",
        "http://crm.damavandco.com:5003",
        "http://192.168.10.101:5003",
    ],
};
app.use(cors(corsOptions));
// app.use(cors()); //For All Cors
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.get("/transcribe-io/:id", (req, res) => {
    // res.json("HI");
    // return;
    const formData = new FormData();
    formData.append("filename", req.params.id);
    // formData.append("key2", "value2");
    // fetch("https://api.restful-api.dev/objects", {
    //   body: null,
    //   method: "GET",
    // }).then((rsp) => {
    //   rsp.json().then((dt) => {
    //     console.log("object", dt);
    //     res.json(dt);
    //   });
    // });
    fetch("https://192.168.10.222:2020/api/transcribe-io/", {
        method: "POST",
        body: formData,
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        response
            .json()
            .then((data) => {
            console.log("Response data:", data);
            // res.json(data.filename);
            res.json(data.text);
        })
            .catch((err) => {
            console.log("err", err);
        });
    })
        .catch((error) => {
        res.json(error);
        console.error("Error:", error);
    });
});
//#region SSL Self Sign
// const httpsOptions = {
//   key: fs.readFileSync("./security/privateKey.key"),
//   cert: fs.readFileSync("./security/certificate.crt"),
// };
// https.createServer(httpsOptions, app).listen(port, () => {
//   console.log(`[server]: Server is running at https://localhost:${port}`);
// });
//#endregion
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
