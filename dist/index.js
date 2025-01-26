"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// const cors = require("cors");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
let corsOptions = {
    origin: ["http://localhost:4200", "http://192.168.10.215:4200"],
};
// app.use(cors(corsOptions));
app.use((0, cors_1.default)()); //For All Cors
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.post("/transcribe-io/:id", (req, res) => {
    // res.json("HI");
    // return;
    const formData = new FormData();
    formData.append("filename", req.params.id);
    // formData.append("key2", "value2");
    fetch("https://www.google.com/", {
        headers: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-US,en;q=0.9",
            priority: "u=0, i",
            "sec-ch-prefers-color-scheme": "dark",
            "sec-ch-ua": '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            "sec-ch-ua-arch": '"x86"',
            "sec-ch-ua-bitness": '"64"',
            "sec-ch-ua-form-factors": '"Desktop"',
            "sec-ch-ua-full-version": '"131.0.6778.265"',
            "sec-ch-ua-full-version-list": '"Google Chrome";v="131.0.6778.265", "Chromium";v="131.0.6778.265", "Not_A Brand";v="24.0.0.0"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-model": '""',
            "sec-ch-ua-platform": '"Windows"',
            "sec-ch-ua-platform-version": '"15.0.0"',
            "sec-ch-ua-wow64": "?0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "x-browser-channel": "stable",
            "x-browser-copyright": "Copyright 2025 Google LLC. All rights reserved.",
            "x-browser-validation": "Nbt54E7jcg8lQ4EExJrU2ugNG6o=",
            "x-browser-year": "2025",
            "x-client-data": "CJW2yQEIo7bJAQipncoBCJnwygEIk6HLAQiJo8sBCPWYzQEIhaDNAQisyc4BCPHVzgEI3NfOAQjB2M4BCKbczgEY69rOAQ==",
            cookie: "AEC=AZ6Zc-XKl2uQE6M_AqNgbroVfWRlW0pnIfn96bPdUy6VUzJ3po4Pm4HAEQ; __Secure-ENID=25.SE=VHPQxCHcKCu9T5Q7BFfAzhuYBajQ4LSQZp353xGtlx2o9K-Loh8RgKS2b6786cReBkTBtT3jvkj0HY3i7WKCA2XJIIPGfVauZtdUnonQhJAGhIeVHJWMrR9PFyQjeImrAniRfn3DujyBc-ea8eQ840tWH_5Eb9FKaxV6HDvmyaZ7gS_4SveZmxcNK1DOLTp94ZFn8WHEaG26my9P55axX_8uW7-q9Ss_7n1R0XyiDSdHHb2i6IiDnwARoLKgIknsls14Gr-LQXV0JRe0; NID=521=JCKLucZcASOx5jWUCZYw4mRviQCml_DiERdC6N05UpWyBfuKD2Ub29if_oqNEigI983-xR_I2Q8CG3N626wazJ5YQgQfyDSNhehKEpQzTV80hOxFRyykKq9MS1l8zTUjvjVFbf2L9pvYFlfuxs0esx6OgaJl1CfIGEI7x7ZCmJsFFHiVYy4Ta7kjzDHU542oGgTJpFY_TKY01gQ9iaZ6V-CrnFMJyLHrg_fUCTc-9NynxPxdaZYIIfGB91kEf9h0qH8XTOc; DV=wwHm5MUFdNIlMLoqspk1c5FH2kIsSll9A1MKmBpcIH2FAAA",
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
    }).then((rsp) => {
        debugger;
        console.log("object", rsp);
        res.send(JSON.stringify(rsp));
    });
    // fetch("https://192.168.10.222:2020/api/transcribe-io/", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     res.json(response);
    //   })
    //   .then((data) => {
    //     console.log("Response data:", data);
    //     res.json(data);
    //   })
    //   .catch((error) => {
    //     res.json(error);
    //     console.error("Error:", error);
    //   });
    // fetch("https://google.com", {
    //   method: "GET",
    //   // body: formData,
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     // res.json(response);
    //   })
    //   .then((data) => {
    //     console.log("Response data:", data);
    //     res.json(data);
    //   })
    //   .catch((error) => {
    //     res.json(error);
    //     console.error("Error:", error);
    //   });
    // res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
