// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
// const cors = require("cors");
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

let corsOptions = {
  origin: ["http://localhost:4200", "http://192.168.10.215:4200"],
};
// app.use(cors(corsOptions));

app.use(cors()); //For All Cors

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/transcribe-io/:id", (req: Request, res: Response) => {
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
          res.json(data.filename);
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

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
