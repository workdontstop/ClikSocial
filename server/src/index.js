"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const mysql = require("mysql");
const fs = require("fs");
const sharp = require("sharp");
const unlinkFile = util.promisify(fs.unlink);
const https = require("https");
const FormData = require("form-data");
const fetch = require("node-fetch");
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const text_to_speech_1 = require("@google-cloud/text-to-speech");
// Creates a client
dotenv_1.default.config();
///deleted bill
const cookieParser = require("cookie-parser");
const express = require("express");
const ss3_1 = require("./ss3");
const ss3vid_1 = require("./ss3vid");
const ss3audio_1 = require("./ss3audio");
var app = express();
var cors = require("cors");
const path = require("path");
const multer = require("multer");
const upload = multer();
const openai_1 = __importDefault(require("openai"));
const { APP_STATE_STABLE_KEY } = process.env;
const DalleKey = process.env.DALLE_KEY;
const openKey = process.env.OPEN_KEY;
const GPTKey = process.env.DALLE_KEY;
const API_URL = "https://api-inference.huggingface.co/models/";
const HUGGING_FACE_API_KEY = process.env.HUGGING_KEY;
// API key for Google Cloud Text-to-Speech
const client = new text_to_speech_1.TextToSpeechClient();
const openai = new openai_1.default({
    apiKey: GPTKey,
});
/////
/////
/////
/////
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const accessKeyId = process.env.BUCKET_ACCESS_KEY;
const secretAccessKey = process.env.BUCKET_SECRET_KEY;
const region = "us-east-1"; // Replace with your desired region
/////
// Call the function
///getVideos()
////.then((keys) => console.log("Keys:", keys))
////.catch((error) => console.error("Error:", error));
///
////
///
if (process.env.APP_STATE === "dev") {
    var corsOptions = {
        origin: [
            "http://192.168.1.236:3000",
            "http://localhost:3000",
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3-medium",
            "https://api.stability.ai/v2beta/stable-diffusion/generate", // Add your front-end origin
            "https://oaidalleapiprodscus.blob.core.windows.net", // Add your blob storage origin
            "https://oaidalleapiprodscus.blob.core.windows.net/private/",
        ],
        credentials: true, // access-control-allow-credentials:true
        optionsSuccessStatus: 200,
    };
    // Apply CORS
    app.use(cors(corsOptions));
    // Set COOP and COEP Headers, and Set-Cookie for Google Identity
    app.use((req, res, next) => {
        // Set-Cookie for Google Identity Services
        res.setHeader("Set-Cookie", "G_ENABLED_IDPS=1; SameSite=None; Secure");
        // Relax COOP and COEP for development environment
        res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
        res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
        next();
    });
}
else {
    var corsOptionsx = {
        origin: ["https://clikbate.com", "https://www.clikbate.com"],
        credentials: true, // access-control-allow-credentials:true
        optionsSuccessStatus: 200,
    };
    // Apply CORS
    app.use(cors(corsOptionsx));
    // Set COOP and COEP Headers, and Set-Cookie for production as well
    app.use((req, res, next) => {
        // Set-Cookie for Google Identity Services
        res.setHeader("Set-Cookie", "G_ENABLED_IDPS=1; SameSite=None; Secure");
        // Relax COOP and COEP for production environment
        res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
        res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
        next();
    });
}
// Define the list of allowed origins
const allowedOrigins = [
    "https://clikbate.com",
    "https://www.clikbate.com",
    "http://192.168.1.236:3000",
    "http://192.168.1.236:8000",
    "http://localhost:3000",
];
// Middleware to add CORS headers for image requests
app.use("/images", (req, res, next) => {
    const origin = req.headers.origin;
    // Check if the request's origin is in the allowed origins list
    if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin); // Set the origin dynamically
    }
    res.setHeader("Cache-Control", "public, max-age=0");
    // Add Cross-Origin headers for security
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
    next();
});
const bill1 = "6fa9d1c902de55b9d591473f03a37d61";
const bill1b = "c2d5294470b0e55faf40d321fd4ec3d2";
const bill2 = "67b5e045768c766d498d92a666c718cb";
const bill2b = "aa24089d31f5b58d213a44fd6e72ea26";
const profilepic = "b658ac536412bb3a0d62c9f3880835be";
const profilepicb = "e91b990d37995b62a2f84032c7e61c11";
// Commenting out COOP and COEP headers
// app.use((req, res, next) => {
//   res.set("Cross-Origin-Opener-Policy", "same-origin");
//   res.set("Cross-Origin-Embedder-Policy", "require-corp");
//   next();
// });
///
///
app.use(express.json({ limit: "400mb" }));
app.use(express.urlencoded({ limit: "400mb" }));
app.use(cookieParser());
const bcrypt = require("bcrypt");
const { createTokens, validateToken, createTokensUpdate } = require("./jwt");
const express_validator_1 = require("express-validator");
const jwt_decode_1 = __importDefault(require("jwt-decode"));
var u, h, p, d, t;
u = process.env.USER_DATABASE;
h = process.env.HOST_DATABASE;
p = process.env.PASSWORD_DATABASE;
d = process.env.DATABASE_NAME;
const CONNECTION_CONFIG = {
    user: process.env.USER_DATABASEx,
    host: process.env.HOST_DATABASEx,
    password: process.env.PASSWORD_DATABASEx,
    database: process.env.DATABASE_NAMEx,
    charset: "utf8mb4",
};
// Node.js program to demonstrate the
// Date.format() method
///
///
///
///
///
///
///reg
const register = `INSERT INTO members (username,password,email,billboard1,billboardthumb1,billboard2,billboardthumb2,profile_image,profile_image_thumb,color1,color2,color_type,status,notification,tutorial,date,reg) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
///
///login
const login = `SELECT


(SELECT COUNT(*)   
  FROM fan
 WHERE  userid = members.id )favoriteCount,

 (SELECT COUNT(*)   
  FROM fan
 WHERE  favid = members.id )fanCount,
 
 username,id,password,color1,color2,color_type,profile_image,profile_image_thumb,first_name,sur_name,quote,reg,billboard1,billboardthumb1,billboard2,billboardthumb2,biography FROM members WHERE username =?`;
///
const loginEmail = `
  SELECT
    (SELECT COUNT(*)   
     FROM fan
     WHERE userid = members.id) AS favoriteCount,

    (SELECT COUNT(*)   
     FROM fan
     WHERE favid = members.id) AS fanCount,

    username,
    id,
    color1,
    color2,
    color_type,
    profile_image,
    profile_image_thumb,
    first_name,
    sur_name,
    quote,
    reg,
    billboard1,
    billboardthumb1,
    billboard2,
    billboardthumb2,
    biography
  FROM members
  WHERE email = ?`;
///checkIsLogged
const loginId = `SELECT 

(SELECT COUNT(*)   
  FROM fan
 WHERE favid = members.id and userid = ?)connectCount,


(SELECT COUNT(*)   
  FROM fan
 WHERE  userid = members.id )favoriteCount,

 (SELECT COUNT(*)   
  FROM fan
 WHERE  favid = members.id )fanCount,
 
 username,id,password,color1,color2,color_type,profile_image,profile_image_thumb,first_name,sur_name,quote,reg,billboard1,billboardthumb1,billboard2,billboardthumb2,biography  FROM members WHERE id =?`;
///
///usernamecheck
const checkpassword = `SELECT id FROM members WHERE  username =?`;
const getstickers = `SELECT stickname FROM stickers  ORDER BY id DESC  LIMIT 30  `;
const CommentImage = `SELECT item2,sender,item1,thumb1,interact1a,interact1b FROM posts WHERE  posts.id=?`;
const ProfileImage = `SELECT profile_image,biography,username  FROM members WHERE  members.id=?`;
///checkIsLogged
const postTopic = `
SELECT
  (SELECT COUNT(*) FROM fan WHERE favid = posts.sender AND userid = ?) AS favCount,
  (SELECT type FROM emotions WHERE post = posts.id AND user = ?) AS EmoIn,
  (SELECT COUNT(*) FROM comments WHERE post = posts.id) AS commentCount,

  (SELECT com FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPost,
  (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPostUser,

  m.profile_image AS commentorProfileImage,
  m.username AS commentorUsername,
  m.color1 AS commentorColor,

  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 1) AS lovely,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 2) AS cool,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 3) AS care,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 4) AS funny,

  (SELECT file FROM audio WHERE post = posts.id) AS audioData,
  (SELECT name FROM audio WHERE post = posts.id) AS audioDataName,
  (SELECT backgroudaudio FROM audio WHERE post = posts.id) AS backgroudaudio,

  interacttype1, interacttype2, rad1, rad2, members.profile_image, members.username, members.color1, 
  posts.id, sender, post_count, topic, caption, item1, thumb1, itemtype1, interact1a, 
  interact1ax, interact1ay, interact1b, interact1bx, interact1by, item2, vid1backup, vid2backup, time, 
  mode, x1, xt1, x2, xt2, x3, xt3, x4, xt4, x5, xt5, x6, xt6
FROM posts
INNER JOIN members ON posts.sender = members.id
LEFT JOIN members AS m ON m.id = (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1)
WHERE posts.topic = ? 
ORDER BY posts.id DESC
LIMIT 31;
`;
const postsxExplain = `
SELECT
  (SELECT COUNT(*) FROM fan WHERE favid = posts.sender AND userid = ?) AS favCount,
  (SELECT type FROM emotions WHERE post = posts.id AND user = ?) AS EmoIn,
  (SELECT COUNT(*) FROM comments WHERE post = posts.id) AS commentCount,
  (SELECT com FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPost,
  (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPostUser,
  m.profile_image AS commentorProfileImage,
  m.username AS commentorUsername,
  m.color1 AS commentorColor,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 1) AS lovely,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 2) AS cool,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 3) AS care,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 4) AS funny,
  (SELECT file FROM audio WHERE post = posts.id) AS audioData,
  (SELECT name FROM audio WHERE post = posts.id) AS audioDataName,
  (SELECT backgroudaudio FROM audio WHERE post = posts.id) AS backgroudaudio,
  interacttype1, interacttype2, rad1, rad2, 
  members.profile_image, members.username, members.color1, 
  posts.id, sender, post_count, topic, caption, item1, thumb1, itemtype1, interact1a, 
  interact1ax, interact1ay, interact1b, interact1bx, interact1by, item2, vid1backup, vid2backup, time, 
  mode, x1, xt1, x2, xt2, x3, xt3, x4, xt4, x5, xt5, x6, xt6
FROM posts 
INNER JOIN members ON posts.sender = members.id
LEFT JOIN members AS m ON m.id = (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1)
WHERE posts.private = 0 AND posts.mode = 1
ORDER BY posts.id DESC
LIMIT 31;
`;
const postsx = `
SELECT
  (SELECT COUNT(*) FROM fan WHERE favid = posts.sender AND userid = ?) AS favCount,
  (SELECT type FROM emotions WHERE post = posts.id AND user = ?) AS EmoIn,
  (SELECT COUNT(*) FROM comments WHERE post = posts.id) AS commentCount,

  (SELECT com FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPost,
  (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPostUser,
  
  m.profile_image AS commentorProfileImage,
  m.username AS commentorUsername,
  m.color1 AS commentorColor,
  
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 1) AS lovely,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 2) AS cool,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 3) AS care,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 4) AS funny,

  (SELECT file FROM audio WHERE post = posts.id) AS audioData,
  (SELECT name FROM audio WHERE post = posts.id) AS audioDataName,
  (SELECT backgroudaudio FROM audio WHERE post = posts.id) AS backgroudaudio,

  interacttype1, interacttype2, rad1, rad2, members.profile_image, members.username, members.color1, 
  posts.id, sender, post_count, topic, caption, item1, thumb1, itemtype1, interact1a, 
  interact1ax, interact1ay, interact1b, interact1bx, interact1by, item2, vid1backup, vid2backup, time, 
  mode, x1, xt1, x2, xt2, x3, xt3, x4, xt4, x5, xt5, x6, xt6
FROM posts
INNER JOIN members ON posts.sender = members.id
LEFT JOIN members AS m ON m.id = (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1)
WHERE posts.mode = 0
ORDER BY posts.id DESC
LIMIT 31;
`;
const posts_moreExplain = `
SELECT
  (SELECT COUNT(*) FROM fan WHERE favid = posts.sender AND userid = ?) AS favCount,
  (SELECT type FROM emotions WHERE post = posts.id AND user = ?) AS EmoIn,
  (SELECT COUNT(*) FROM comments WHERE post = posts.id) AS commentCount,
  (SELECT com FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPost,
  (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPostUser,
  m.profile_image AS commentorProfileImage,
  m.username AS commentorUsername,
  m.color1 AS commentorColor,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 1) AS lovely,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 2) AS cool,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 3) AS care,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 4) AS funny,
  (SELECT file FROM audio WHERE post = posts.id) AS audioData,
  (SELECT name FROM audio WHERE post = posts.id) AS audioDataName,
  (SELECT backgroudaudio FROM audio WHERE post = posts.id) AS backgroudaudio,
  interacttype1, interacttype2, rad1, rad2,
  members.profile_image, members.username, members.color1,
  posts.id, sender, post_count, topic, caption, item1, thumb1, itemtype1, interact1a,
  interact1ax, interact1ay, interact1b, interact1bx, interact1by, item2, vid1backup, vid2backup, time,
  mode, x1, xt1, x2, xt2, x3, xt3, x4, xt4, x5, xt5, x6, xt6
FROM posts
INNER JOIN members ON posts.sender = members.id
LEFT JOIN members AS m ON m.id = (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1)
WHERE posts.private = 0 AND posts.mode = 1 AND posts.id < ?
ORDER BY posts.id DESC
LIMIT 31;
`;
const posts_more = `
SELECT
  (SELECT COUNT(*) FROM fan WHERE favid = posts.sender AND userid = ?) AS favCount,
  (SELECT type FROM emotions WHERE post = posts.id AND user = ?) AS EmoIn,
  (SELECT COUNT(*) FROM comments WHERE post = posts.id) AS commentCount,

  (SELECT com FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPost,
  (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPostUser,
  
  m.profile_image AS commentorProfileImage,
  m.username AS commentorUsername,
  m.color1 AS commentorColor,
  
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 1) AS lovely,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 2) AS cool,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 3) AS care,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 4) AS funny,

  (SELECT file FROM audio WHERE post = posts.id) AS audioData,
  (SELECT name FROM audio WHERE post = posts.id) AS audioDataName,
  (SELECT backgroudaudio FROM audio WHERE post = posts.id) AS backgroudaudio,

  interacttype1, interacttype2, rad1, rad2, members.profile_image, members.username, members.color1, 
  posts.id, sender, post_count, topic, caption, item1, thumb1, itemtype1, interact1a, 
  interact1ax, interact1ay, interact1b, interact1bx, interact1by, item2, vid1backup, vid2backup, time,
  mode, x1, xt1, x2, xt2, x3, xt3, x4, xt4, x5, xt5, x6, xt6

FROM posts
INNER JOIN members ON posts.sender = members.id AND posts.id < ?
LEFT JOIN members AS m ON m.id = (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1)
WHERE posts.mode = 0
ORDER BY posts.id DESC
LIMIT 31;
`;
const postsxAll = `
SELECT
  (SELECT COUNT(*) FROM fan WHERE favid = posts.sender AND userid = ?) AS favCount,
  (SELECT type FROM emotions WHERE post = posts.id AND user = ?) AS EmoIn,
  (SELECT COUNT(*) FROM comments WHERE post = posts.id) AS commentCount,

  (SELECT com FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPost,
  (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPostUser,
  
  m.profile_image AS commentorProfileImage,
  m.username AS commentorUsername,
  m.color1 AS commentorColor,
  
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 1) AS lovely,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 2) AS cool,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 3) AS care,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 4) AS funny,

  (SELECT file FROM audio WHERE post = posts.id) AS audioData,
  (SELECT name FROM audio WHERE post = posts.id) AS audioDataName,
  (SELECT backgroudaudio FROM audio WHERE post = posts.id) AS backgroudaudio,

  interacttype1, interacttype2, rad1, rad2, members.profile_image, members.username, members.color1, 
  posts.id, sender, post_count, topic, caption, item1, thumb1, itemtype1, interact1a, 
  interact1ax, interact1ay, interact1b, interact1bx, interact1by, item2, vid1backup, vid2backup, time, 
  mode, x1, xt1, x2, xt2, x3, xt3, x4, xt4, x5, xt5, x6, xt6
FROM posts
INNER JOIN members ON posts.sender = members.id
LEFT JOIN members AS m ON m.id = (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1)
ORDER BY posts.id DESC
LIMIT 31;
`;
const postsxAllmore = `
SELECT
  (SELECT COUNT(*) FROM fan WHERE favid = posts.sender AND userid = ?) AS favCount,
  (SELECT type FROM emotions WHERE post = posts.id AND user = ?) AS EmoIn,
  (SELECT COUNT(*) FROM comments WHERE post = posts.id) AS commentCount,

  (SELECT com FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPost,
  (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPostUser,
  
  m.profile_image AS commentorProfileImage,
  m.username AS commentorUsername,
  m.color1 AS commentorColor,
  
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 1) AS lovely,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 2) AS cool,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 3) AS care,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 4) AS funny,

  (SELECT file FROM audio WHERE post = posts.id) AS audioData,
  (SELECT name FROM audio WHERE post = posts.id) AS audioDataName,
  (SELECT backgroudaudio FROM audio WHERE post = posts.id) AS backgroudaudio,

  interacttype1, interacttype2, rad1, rad2, members.profile_image, members.username, members.color1, 
  posts.id, sender, post_count, topic, caption, item1, thumb1, itemtype1, interact1a, 
  interact1ax, interact1ay, interact1b, interact1bx, interact1by, item2, vid1backup, vid2backup, time,
  mode, x1, xt1, x2, xt2, x3, xt3, x4, xt4, x5, xt5, x6, xt6

FROM posts
INNER JOIN members ON posts.sender = members.id AND posts.id < ?
LEFT JOIN members AS m ON m.id = (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1)

ORDER BY posts.id DESC
LIMIT 31;
`;
const updateColor = `UPDATE members SET  color1 = ? WHERE (id = ?)`;
const updatePriv = `UPDATE posts SET  private = ? WHERE  (id = ?) `;
const updateReg = `UPDATE members SET  reg = 0 WHERE (id = ?)`;
const updateBasicpage = `UPDATE members SET username = ?, quote=?, biography=?   WHERE (id = ?)`;
const updateProfilePic = `UPDATE members SET profile_image = ?, profile_image_thumb = ?, color1 = ?, color2 = ?, color_type = ?  WHERE (id = ?)`;
const updateSticker = `INSERT INTO stickers (stickname,user) VALUES (?,?)`;
const updatebillboardPic = `UPDATE members SET billboard1 = ?, billboardthumb1 = ?  WHERE (id = ?)`;
const updatebillboardPic2 = `UPDATE members SET billboard2 = ?, billboardthumb2 = ?  WHERE (id = ?)`;
const createpost = `INSERT INTO posts (sender,post_count,topic,caption,item1,thumb1,itemtype1,interact1a,interact1ax,interact1ay,
  interact1b,interact1bx,interact1by,rad1,rad2,interacttype1,interacttype2,item2,vid1backup,vid2backup,time)
   VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
const createpostX = `INSERT INTO posts (sender,post_count,topic,caption,item1,thumb1,itemtype1,interact1a,interact1ax,interact1ay,
  interact1b,interact1bx,interact1by,rad1,rad2,interacttype1,interacttype2,item2,vid1backup,vid2backup,time, 
  mode,x1,xt1,x2,xt2,x3,xt3,x4,xt4,x5,xt5,x6,xt6,private)
   VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
const y = `INSERT INTO audio (file,name,sender,post,backgroudAudio,time)
VALUES (?,?,?,?,?,?)`;
const createComment = `INSERT INTO comments (post,com,commented_by,date) VALUES (?,?,?,?)`;
const getComments = ` SELECT 

(SELECT COUNT(*)   
  FROM fan
 WHERE favid = comments.commented_by and userid = ?)favCount,
 
 comments.id,members.id AS comUserId,members.profile_image,members.username,color1,com,comments.date  FROM comments inner join members on
 comments.commented_by = members.id WHERE comments.post = ?  ORDER BY comments.id DESC  LIMIT 90  `;
const delPost = `DELETE FROM posts WHERE id = ?`;
const delcom = `DELETE FROM comments WHERE id = ?`;
const getMoreComments = `SELECT

(SELECT COUNT(*)   
  FROM fan
 WHERE favid = comments.commented_by and userid = ?)favCount,
 
 
 comments.id,members.id AS comUserId,members.profile_image,members.username,color1,com,comments.date  FROM comments inner join members on
 comments.commented_by = members.id WHERE comments.post = ? AND comments.id < ? ORDER BY comments.id DESC  LIMIT 90  `;
const insertEmo = `INSERT INTO emotions (post,user,type,lockemo,time) VALUES (?,?,?,?,?)`;
const updateEmo = `UPDATE emotions SET  type=?   WHERE (post = ?  and user= ?)`;
const getReaction = `SELECT

(SELECT COUNT(*)   
  FROM fan
 WHERE favid = emotions.user and userid = ?)favCount,
 
 emotions.id,members.id AS reactId,members.profile_image,members.username,color1,members.quote  FROM emotions inner join members on
 emotions.user = members.id WHERE emotions.post = ? AND emotions.type= ?  ORDER BY emotions.id DESC  LIMIT 90  `;
const getMoreReaction = `SELECT 

(SELECT COUNT(*)   
  FROM fan
 WHERE favid = emotions.user and userid = ?)favCount,
 
 emotions.id,members.id AS reactId,members.profile_image,members.username,color1,members.quote  FROM emotions inner join members on
 emotions.user = members.id WHERE emotions.post = ? AND emotions.type= ? AND emotions.id < ? ORDER BY emotions.id DESC  LIMIT 90  `;
const insertFav = `INSERT INTO fan (userid,favid,fanlock,time) VALUES (?,?,?,?)`;
const removefav = `DELETE from fan where favid=? and userid=?`;
const getConnections = `SELECT


 (SELECT COUNT(*)   
  FROM fan
 WHERE favid = members.id and userid = ?)favCount,

 
fan.id,members.id AS reactId, members.profile_image,members.username,color1,members.quote  FROM fan inner join members on
 fan.favid = members.id WHERE  fan.userid = ?  ORDER BY  fan.id DESC  LIMIT 90  `;
const getMoreConnections = `SELECT 

(SELECT COUNT(*)   
FROM fan
WHERE favid = members.id and userid = ?)favCount,
 
 fan.id,members.id AS reactId,members.profile_image,members.username,color1,members.quote  FROM fan inner join members on
 fan.favid = members.id WHERE  fan.userid = ?  AND fan.id < ? ORDER BY fan.id DESC  LIMIT 90  `;
const getConnectionsFan = `SELECT

(SELECT COUNT(*)   
FROM fan
WHERE favid = members.id and userid = ?)favCount,
 
fan.id,members.id AS reactId,members.profile_image,members.username,color1,members.quote  FROM fan inner join members on
 fan.userid = members.id WHERE  fan.favid = ?  ORDER BY  fan.id DESC  LIMIT 90  `;
const getMoreConnectionsFan = `SELECT 

(SELECT COUNT(*)   
FROM fan
WHERE favid = members.id and userid = ?)favCount,
 
 fan.id,members.id AS reactId,members.profile_image,members.username,color1,members.quote  FROM fan inner join members on
 fan.userid = members.id WHERE  fan.favid = ?  AND fan.id < ? ORDER BY fan.id DESC  LIMIT 90  `;
const profileExplain = `

SELECT
  (SELECT COUNT(*) FROM fan WHERE favid = posts.sender AND userid = ?) AS favCount,
  (SELECT type FROM emotions WHERE post = posts.id AND user = ?) AS EmoIn,
  (SELECT COUNT(*) FROM comments WHERE post = posts.id) AS commentCount,
  (SELECT com FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPost,
  (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPostUser,
  m.profile_image AS commentorProfileImage,
  m.username AS commentorUsername,
  m.color1 AS commentorColor,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 1) AS lovely,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 2) AS cool,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 3) AS care,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 4) AS funny,
  (SELECT file FROM audio WHERE post = posts.id) AS audioData,
  (SELECT name FROM audio WHERE post = posts.id) AS audioDataName,
  (SELECT backgroudaudio FROM audio WHERE post = posts.id) AS backgroudaudio,
  interacttype1, interacttype2, rad1, rad2,
  members.profile_image, members.username, members.color1,
  posts.id, sender, post_count, topic, caption, item1, thumb1, itemtype1, interact1a,
  interact1ax, interact1ay, interact1b, interact1bx, interact1by, item2, vid1backup, vid2backup, time,
  mode, x1, xt1, x2, xt2, x3, xt3, x4, xt4, x5, xt5, x6, xt6,private 
FROM posts
INNER JOIN members ON posts.sender = members.id
LEFT JOIN members AS m ON m.id = (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1)
WHERE posts.mode = 1 AND posts.sender = ?
ORDER BY posts.id DESC
LIMIT 31;

`;
const profile = `

SELECT
  (SELECT COUNT(*) FROM fan WHERE favid = posts.sender AND userid = ?) AS favCount,
  (SELECT type FROM emotions WHERE post = posts.id AND user = ?) AS EmoIn,
  (SELECT COUNT(*) FROM comments WHERE post = posts.id) AS commentCount,

  (SELECT com FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPost,
  (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPostUser,
  
  m.profile_image AS commentorProfileImage,
  m.username AS commentorUsername,
  m.color1 AS commentorColor,
  
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 1) AS lovely,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 2) AS cool,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 3) AS care,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 4) AS funny,

  (SELECT file FROM audio WHERE post = posts.id) AS audioData,
   (SELECT name FROM audio WHERE post = posts.id) AS audioDataName,
  (SELECT backgroudaudio FROM audio WHERE post = posts.id) AS backgroudaudio,

  interacttype1, interacttype2, rad1, rad2, members.profile_image, members.username, members.color1, 
  posts.id, sender, post_count, topic, caption, item1, thumb1, itemtype1, interact1a, 
  interact1ax, interact1ay, interact1b, interact1bx, interact1by, item2, vid1backup, vid2backup, time,
    mode, x1,xt1, x2,xt2, x3,xt3, x4,xt4, x5,xt5, x6,xt6,private 

FROM posts

INNER JOIN members ON posts.sender = members.id 

LEFT JOIN members AS m ON m.id = (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1)

WHERE posts.sender = ? 
ORDER BY posts.id DESC
LIMIT 31;


`;
const profile_moreExplain = `SELECT
  (SELECT COUNT(*) FROM fan WHERE favid = posts.sender AND userid = ?) AS favCount,
  (SELECT type FROM emotions WHERE post = posts.id AND user = ?) AS EmoIn,
  (SELECT COUNT(*) FROM comments WHERE post = posts.id) AS commentCount,
  (SELECT com FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPost,
  (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPostUser,
  m.profile_image AS commentorProfileImage,
  m.username AS commentorUsername,
  m.color1 AS commentorColor,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 1) AS lovely,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 2) AS cool,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 3) AS care,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 4) AS funny,
  (SELECT file FROM audio WHERE post = posts.id) AS audioData,
  (SELECT name FROM audio WHERE post = posts.id) AS audioDataName,
  (SELECT backgroudaudio FROM audio WHERE post = posts.id) AS backgroudaudio,
  interacttype1, interacttype2, rad1, rad2,
  members.profile_image, members.username, members.color1,
  posts.id, sender, post_count, topic, caption, item1, thumb1, itemtype1, interact1a,
  interact1ax, interact1ay, interact1b, interact1bx, interact1by, item2, vid1backup, vid2backup, time,
  mode, x1, xt1, x2, xt2, x3, xt3, x4, xt4, x5, xt5, x6, xt6,private 
FROM posts
INNER JOIN members ON posts.sender = members.id 
LEFT JOIN members AS m ON m.id = (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1)
WHERE posts.mode = 1 AND posts.sender = ? AND posts.id < ?
ORDER BY posts.id DESC
LIMIT 31;


`;
const profile_more = `SELECT
  (SELECT COUNT(*) FROM fan WHERE favid = posts.sender AND userid = ?) AS favCount,
  (SELECT type FROM emotions WHERE post = posts.id AND user = ?) AS EmoIn,
  (SELECT COUNT(*) FROM comments WHERE post = posts.id) AS commentCount,

  (SELECT com FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPost,
  (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1) AS commentPostUser,
  
  m.profile_image AS commentorProfileImage,
  m.username AS commentorUsername,
  m.color1 AS commentorColor,
  
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 1) AS lovely,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 2) AS cool,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 3) AS care,
  (SELECT COUNT(*) FROM emotions WHERE post = posts.id AND type = 4) AS funny,

  (SELECT file FROM audio WHERE post = posts.id) AS audioData,
   (SELECT name FROM audio WHERE post = posts.id) AS audioDataName,
  (SELECT backgroudaudio FROM audio WHERE post = posts.id) AS backgroudaudio,

  interacttype1, interacttype2, rad1, rad2, members.profile_image, members.username, members.color1, 
  posts.id, sender, post_count, topic, caption, item1, thumb1, itemtype1, interact1a, 
  interact1ax, interact1ay, interact1b, interact1bx, interact1by, item2, vid1backup, vid2backup, time,
    mode, x1,xt1, x2,xt2, x3,xt3, x4,xt4, x5,xt5, x6,xt6,private 
    
FROM posts

INNER JOIN members ON posts.sender = members.id 

LEFT JOIN members AS m ON m.id = (SELECT commented_by FROM comments WHERE post = posts.id ORDER BY date DESC LIMIT 1)

WHERE posts.sender = ? AND posts.id < ?  

ORDER BY posts.id DESC
LIMIT 31;



`;
const optionsval = `(SELECT thumb1 FROM posts WHERE sender = ? ORDER BY id DESC LIMIT 1)
UNION ALL
(SELECT thumb1 FROM posts ORDER BY id DESC LIMIT 1);
`;
const pool = mysql.createPool(CONNECTION_CONFIG);
const execPoolQuery = util.promisify(pool.query.bind(pool));
/////////
////////
////////
////////
///////////
//////
var keyGG = process.env.GOOGLE_LOG_KEY;
var keyCC = process.env.GOOGLE_CLIENT_ID;
app.post("/google", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.body;
    try {
        // Step 1: Exchange the authorization code for tokens
        const tokenResponse = yield fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                code,
                client_id: keyCC,
                client_secret: keyGG,
                redirect_uri: "http://localhost:3000", // Ensure this matches the redirect URI you set in Google Cloud
                grant_type: "authorization_code",
            }),
        });
        const tokenData = yield tokenResponse.json();
        // If there's an error in exchanging tokens, return the error
        if (tokenData.error) {
            return res.status(400).json({ error: tokenData.error });
        }
        const { access_token, id_token } = tokenData;
        // Step 2: Use the access token to get the user's profile information
        const userInfoResponse = yield fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const userInfo = yield userInfoResponse.json();
        if (userInfo.error) {
            return res.status(400).json({ error: userInfo.error });
        }
        // Step 3: Send the user's profile information and tokens back to the frontend
        res.json({
            userInfo, // User profile data
            access_token,
            id_token,
        });
    }
    catch (error) {
        console.error("Error during Google OAuth:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
app.post("/connect_image", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const chronologicaldata = yield execPoolQuery(ProfileImage, [
            values.commentId,
        ]);
        ///console.log(chronologicaldata[7].favCount);
        return res.send({
            ///gettingcookie: userSessionData,
            message: "fetched",
            payload: chronologicaldata,
        });
    }
    catch (e) {
        console.log(e);
        return res.send({ message: "error in fetching feeds" });
    }
}));
app.post("/comments_image", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const chronologicaldata = yield execPoolQuery(CommentImage, [
            values.commentId,
        ]);
        ///console.log(chronologicaldata[7].favCount);
        return res.send({
            ///gettingcookie: userSessionData,
            message: "fetched",
            payload: chronologicaldata,
        });
    }
    catch (e) {
        console.log(e);
        return res.send({ message: "error in fetching feeds" });
    }
}));
app.post("/profileExplain", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    if (values.postPageLimit == 0) {
        try {
            const chronologicaldata = yield execPoolQuery(profileExplain, [
                values.id,
                values.id2,
                values.id3,
            ]);
            ///console.log(chronologicaldata[7].favCount);
            return res.send({
                ///gettingcookie: userSessionData,
                message: "feeds fetched",
                payload: chronologicaldata,
                postPageLimit: values.postPageLimit,
            });
        }
        catch (e) {
            console.log(e);
            return res.send({ message: "error in fetching feeds" });
        }
    }
    else {
        try {
            const chronologicaldata = yield execPoolQuery(profile_moreExplain, [
                values.id,
                values.id2,
                values.id3,
                values.postPageLimit,
            ]);
            ///console.log(chronologicaldata[7].favCount);
            return res.send({
                ///gettingcookie: userSessionData,
                message: "feeds fetched",
                payload: chronologicaldata,
                postPageLimit: values.postPageLimit,
            });
        }
        catch (e) {
            console.log(e);
            return res.send({ message: "error in fetching feeds" });
        }
    }
}));
app.post("/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    if (values.postPageLimit == 0) {
        try {
            const chronologicaldata = yield execPoolQuery(profile, [
                values.id,
                values.id2,
                values.id3,
            ]);
            ///console.log(chronologicaldata[7].favCount);
            return res.send({
                ///gettingcookie: userSessionData,
                message: "feeds fetched",
                payload: chronologicaldata,
                postPageLimit: values.postPageLimit,
            });
        }
        catch (e) {
            console.log(e);
            return res.send({ message: "error in fetching feeds" });
        }
    }
    else {
        try {
            const chronologicaldata = yield execPoolQuery(profile_more, [
                values.id,
                values.id2,
                values.id3,
                values.postPageLimit,
            ]);
            ///console.log(chronologicaldata[7].favCount);
            return res.send({
                ///gettingcookie: userSessionData,
                message: "feeds fetched",
                payload: chronologicaldata,
                postPageLimit: values.postPageLimit,
            });
        }
        catch (e) {
            console.log(e);
            return res.send({ message: "error in fetching feeds" });
        }
    }
}));
app.post("/checkIsLoggedxx", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const logindata = yield execPoolQuery(loginId, [values.id2, values.id]);
        //console.log(logindata);
        const payloadValue = {
            id: logindata[0].id,
            username: logindata[0].username,
            userimage: logindata[0].profile_image,
            userimagethumb: logindata[0].profile_image_thumb,
            usercolor1: logindata[0].color1,
            usercolor2: logindata[0].color2,
            usercolortype: logindata[0].color_type,
            userfirstname: logindata[0].first_name,
            usersurname: logindata[0].sur_name,
            userquote: logindata[0].quote,
            userreg: logindata[0].reg,
            userbillboard1: logindata[0].billboard1,
            userbillboardthumb1: logindata[0].billboardthumb1,
            userbillboard2: logindata[0].billboard2,
            userbillboardthumb2: logindata[0].billboardthumb2,
            biography: logindata[0].biography,
            fans: logindata[0].fanCount,
            favorites: logindata[0].favoriteCount,
            connectCount: logindata[0].connectCount,
        };
        return res.send({
            ///gettingcookie: userSessionData,
            message: "logged in",
            payload: payloadValue,
        });
    }
    catch (e) {
        //console.log(e);
        return res.send({ message: "Wrong id" });
    }
}));
app.post("/fan_chronological", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const chronologicaldata = yield execPoolQuery(getConnectionsFan, [
            values.id,
            values.id,
        ]);
        return res.send({
            ///gettingcookie: userSessionData,
            message: "feeds fetched",
            payload: chronologicaldata,
        });
    }
    catch (e) {
        console.log(e);
        return res.send({ message: "error in fetching connections" });
    }
}));
app.post("/fan_chronological_more", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const chronologicaldata = yield execPoolQuery(getMoreConnectionsFan, [
            values.id,
            values.id,
            values.limit,
        ]);
        return res.send({
            ///gettingcookie: userSessionData,
            message: "feeds fetched",
            payload: chronologicaldata,
        });
    }
    catch (e) {
        return res.send({ message: "error in fetching connections" });
    }
}));
app.post("/fav_chronological", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const chronologicaldata = yield execPoolQuery(getConnections, [
            values.id,
            values.id,
        ]);
        return res.send({
            ///gettingcookie: userSessionData,
            message: "feeds fetched",
            payload: chronologicaldata,
        });
    }
    catch (e) {
        console.log(e);
        return res.send({ message: "error in fetching connections" });
    }
}));
app.post("/fav_chronological_more", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const chronologicaldata = yield execPoolQuery(getMoreConnections, [
            values.id,
            values.id,
            values.limit,
        ]);
        return res.send({
            ///gettingcookie: userSessionData,
            message: "feeds fetched",
            payload: chronologicaldata,
        });
    }
    catch (e) {
        return res.send({ message: "error in fetching connections" });
    }
}));
app.post("/remove_fav", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        yield execPoolQuery(removefav, [values.friendId, values.myId]);
        return res.send({ message: "removed" });
    }
    catch (e) {
        ///console.log(e);
        return res.send({ message: "removed failed" });
    }
}));
app.post("/add_fav", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    var currentTime = new Date();
    var lock = `${values.myId}${values.friendId}`;
    let lockNum = parseInt(lock);
    try {
        yield execPoolQuery(insertFav, [
            values.myId,
            values.friendId,
            lockNum,
            currentTime,
        ]);
        return res.send({ message: "added" });
    }
    catch (e) {
        ///console.log(e);
        return res.send({ message: "add failed" });
    }
}));
app.post("/reaction_chronological", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const chronologicaldata = yield execPoolQuery(getReaction, [
            values.id,
            values.post,
            values.type,
        ]);
        console.log("lkk");
        return res.send({
            ///gettingcookie: userSessionData,
            message: "feeds fetched",
            payload: chronologicaldata,
        });
    }
    catch (e) {
        console.log(e);
        return res.send({ message: "error in fetching feeds" });
    }
}));
app.post("/reaction_chronological_more", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const chronologicaldata = yield execPoolQuery(getMoreReaction, [
            values.id,
            values.post,
            values.type,
            values.limit,
        ]);
        return res.send({
            ///gettingcookie: userSessionData,
            message: "feeds fetched",
            payload: chronologicaldata,
        });
    }
    catch (e) {
        return res.send({ message: "error in fetching feeds" });
    }
}));
app.put("/updateEmo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        yield execPoolQuery(updateEmo, [values.type, values.post, values.user]);
        return res.send({ message: "emo updated" });
    }
    catch (_a) {
        return res.send({ message: "emoFailed" });
    }
}));
app.post("/insertEmo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    var currentTime = new Date();
    var lock = `${values.post}${values.user}`;
    let lockNum = parseInt(lock);
    try {
        yield execPoolQuery(insertEmo, [
            values.post,
            values.user,
            values.type,
            lockNum,
            currentTime,
        ]);
        return res.send({ message: "emo updated" });
    }
    catch (e) {
        return res.send({ message: "emoFailed" });
    }
}));
app.post("/comments_chronological_more", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const chronologicaldata = yield execPoolQuery(getMoreComments, [
            values.id,
            values.commentId,
            values.limit,
        ]);
        return res.send({
            ///gettingcookie: userSessionData,
            message: "feeds fetched",
            payload: chronologicaldata,
        });
    }
    catch (_a) {
        return res.send({ message: "error in fetching feeds" });
    }
}));
app.post("/delPost", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const chronologicaldata = yield execPoolQuery(delPost, [values.id]);
        if (chronologicaldata) {
            var imag = values.post.item1;
            // Split the URL string by '/'
            var parts = imag.split("/");
            // Get the last part of the URL, which should be the ID
            var image = parts[parts.length - 1];
            deleteMediaFromS3(image);
            var thumb = values.post.thumb1;
            deleteMediaFromS3(thumb);
            var interact1 = values.post.interact1a;
            if (interact1) {
                deleteMediaFromS3(interact1);
            }
            var interact2 = values.post.interact1b;
            if (interact2) {
                deleteMediaFromS3(interact2);
            }
        }
        return res.send({
            ///gettingcookie: userSessionData,
            message: "deleted post",
        });
    }
    catch (error) {
        console.error("Error deleting comment:", error);
        return res.status(500).send({ message: "Error deleting comment" });
    }
}));
app.post("/delcomments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const chronologicaldata = yield execPoolQuery(delcom, [values.id]);
        return res.send({
            ///gettingcookie: userSessionData,
            message: "deleted",
        });
    }
    catch (error) {
        console.error("Error deleting comment:", error);
        return res.status(500).send({ message: "Error deleting comment" });
    }
}));
app.post("/comments_chronological", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const chronologicaldata = yield execPoolQuery(getComments, [
            values.id,
            values.commentId,
        ]);
        return res.send({
            ///gettingcookie: userSessionData,
            message: "feeds fetched",
            payload: chronologicaldata,
        });
    }
    catch (_a) {
        return res.send({ message: "error in fetching feeds" });
    }
}));
app.post("/Create_comment", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    var currentTime = new Date();
    try {
        yield execPoolQuery(createComment, [
            values.postid,
            values.inputedCom,
            values.id,
            currentTime,
        ]);
        return res.send({ message: "Comment Added" });
    }
    catch (_a) {
        return res.send({ message: "Comment Failed" });
    }
}));
app.post("/get_signed_url_4upload_Explain", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    // console.log(values.count);
    if (!values || !values.count) {
        return res.status(400).json({ error: "Invalid request payload" });
    }
    try {
        // Use Promise.all to generate URLs concurrently
        const holder = yield Promise.all(Array.from({ length: values.count }).map(() => __awaiter(void 0, void 0, void 0, function* () {
            const [urlHD] = yield Promise.all([(0, ss3_1.generateUploadURL)()]);
            /// console.log("good");
            return {
                urlHD,
            };
        })));
        res.json({ holder });
    }
    catch (error) {
        console.error("Error generating URLs:", error);
        res.status(500).json({ error: "Failed to generate URLs" });
    }
}));
app.post("/get_signed_url_4upload_post", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    var holder = [];
    for (let i = 0; i < values.count; i++) {
        const urlHD = yield (0, ss3_1.generateUploadURL)();
        const urlThumb = yield (0, ss3_1.generateUploadURL)();
        const urlinteraction1 = yield (0, ss3_1.generateUploadURL)();
        const urlinteraction2 = yield (0, ss3_1.generateUploadURL)();
        const urlHD2 = yield (0, ss3_1.generateUploadURL)();
        var cc = {
            urlHD: urlHD,
            urlThumb: urlThumb,
            urlinteraction1: urlinteraction1,
            urlinteraction2: urlinteraction2,
            urlHD2: urlHD2,
        };
        holder[i] = cc;
        if (values.count - 1 === i) {
            res.send({ holder });
        }
    }
}));
app.post("/get_signed_url_4upload_post_audio", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    var holder = [];
    const urlA = yield (0, ss3audio_1.generateUploadURLaudio)();
    var cc = {
        urlA: urlA,
    };
    holder[0] = cc;
    res.send({ holder });
}));
app.post("/get_signed_url_4upload_post_vid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    var holder = [];
    for (let i = 0; i < values.count; i++) {
        const urlVID = yield (0, ss3vid_1.generateUploadURLvid)();
        const urlVID2 = yield (0, ss3vid_1.generateUploadURLvid)();
        const urlVIDimage1 = yield (0, ss3_1.generateUploadURL)();
        const urlVIDimage2 = yield (0, ss3_1.generateUploadURL)();
        var cc = {
            urlVid: urlVID,
            urlVid2: urlVID2,
            urlVIDimage1: urlVIDimage1,
            urlVIDimage2: urlVIDimage2,
        };
        holder[i] = cc;
        if (values.count - 1 === i) {
            res.send({ holder });
        }
    }
}));
app.post("/get_signed_url_Sticker", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = yield (0, ss3_1.generateUploadURL)();
    res.send({ url });
}));
app.post("/sticker_upload_data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        yield execPoolQuery(updateSticker, [values.imagedata, values.id]);
        return res.send({ message: "sticker image data updated" });
    }
    catch (_a) {
        return res.send({ message: "Failed" });
    }
}));
app.post("/get_signed_url_4upload", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const urlHD = yield (0, ss3_1.generateUploadURL)();
    const urlThumb = yield (0, ss3_1.generateUploadURL)();
    const url = { urlHD: urlHD, urlThumb: urlThumb };
    res.send({ url });
}));
const deleteMediaFromS3 = (media) => __awaiter(void 0, void 0, void 0, function* () {
    if (media === bill1 ||
        media === bill1b ||
        media === bill2 ||
        media === bill2b ||
        media === profilepic ||
        media === profilepicb) {
    }
    else {
        // Delete the original video from the root folder after transcoding
        const s3 = new aws_sdk_1.default.S3({
            accessKeyId,
            secretAccessKey,
            region,
        });
        yield s3
            .deleteObject({
            Key: media,
            Bucket: "clikbatebucket",
        })
            .promise();
        console.log("deleted bill");
    }
});
app.put("/profile_upload_data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        yield execPoolQuery(updateProfilePic, [
            values.imagedata,
            values.imagedataThumb,
            values.color,
            values.color2,
            0,
            values.id,
        ]);
        if (execPoolQuery) {
            ///console.log();
            deleteMediaFromS3(values.pic);
            deleteMediaFromS3(values.picthumb);
        }
        return res.send({ message: "profile image data updated" });
    }
    catch (_a) {
        return res.send({ message: "Failed" });
    }
}));
app.put("/billboard_upload_data", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        if (values.type === 0) {
            yield execPoolQuery(updatebillboardPic2, [
                values.imagedata,
                values.imagedataThumb,
                values.id,
            ]);
            if (execPoolQuery) {
                ///console.log();
                deleteMediaFromS3(values.imagedataOld2);
                deleteMediaFromS3(values.imagedataThumbOld2);
            }
        }
        else {
            yield execPoolQuery(updatebillboardPic, [
                values.imagedata,
                values.imagedataThumb,
                values.id,
            ]);
            if (execPoolQuery) {
                deleteMediaFromS3(values.imagedataOld);
                deleteMediaFromS3(values.imagedataThumbOld);
            }
        }
        return res.send({
            message: "billboard image uploaded",
        });
    }
    catch (_a) {
        return res.send({ message: "images upload failed" });
    }
}));
app.post("/post_upload_audio_data", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    var currentTime = new Date();
    try {
        const result = yield execPoolQuery(y, [
            values.file,
            values.name,
            values.sender,
            values.post,
            values.backgroudAudio,
            currentTime,
        ]);
        ///const insertedId = result.insertId;
        return res.send({ message: "audio uploaded" });
    }
    catch (e) {
        console.log(e);
        return res.send({ message: "audio  upload failed" });
    }
}));
app.post("/transAudio", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    ///console.log(values.vidxx);
    // Function to convert time in seconds to format "hh:mm:ss.SSS"
    function formatTime(seconds) {
        const date = new Date(seconds * 1000);
        return date.toISOString().substring(11, 23);
    }
    // Convert start time to desired format
    const startTime = formatTime(values.currentTimestamp);
    const transcodeVideos = (video) => __awaiter(void 0, void 0, void 0, function* () {
        const transcoder = new aws_sdk_1.default.ElasticTranscoder({
            accessKeyId,
            secretAccessKey,
            region,
        });
        // Define the clip settings
        const clipSettings = {
            TimeSpan: {
                StartTime: startTime, // Start time for clipping (0:00)
                Duration: Math.ceil(values.Durationx).toString(), // Duration of the clip (5 seconds)
            },
        };
        // Create the transcoding job with clip settings
        const job = yield transcoder
            .createJob({
            PipelineId: "1706976033901-h5v774",
            Input: {
                Key: video,
                Container: "mp3",
                TimeSpan: clipSettings.TimeSpan, // Include the clip settings here
            },
            Output: {
                Key: `audio/${video}`,
                PresetId: "1351620000001-100130",
            },
        })
            .promise();
        // Wait for the transcoding job to complete
        yield waitForTranscodingCompletion(job.Job.Id, transcoder);
        // Delete the original video from the root folder after transcoding
        const s3 = new aws_sdk_1.default.S3({
            accessKeyId,
            secretAccessKey,
            region,
        });
        yield s3
            .deleteObject({
            Key: video,
            Bucket: "clikbatebucket",
        })
            .promise();
    });
    const waitForTranscodingCompletion = (jobId, transcoder) => __awaiter(void 0, void 0, void 0, function* () {
        while (true) {
            const { Job } = yield transcoder
                .readJob({
                Id: jobId,
            })
                .promise();
            const { Status } = Job;
            if (Status === "Complete" || Status === "Error") {
                break;
            }
            // Wait for a short duration before checking the job status again
            yield new Promise((resolve) => setTimeout(resolve, 5000));
        }
    });
    const videos = values.audio;
    transcodeVideos(videos);
}));
app.post("/trans", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    ///console.log(values.vidxx);
    // Function to convert time in seconds to format "hh:mm:ss.SSS"
    function formatTime(seconds) {
        const date = new Date(seconds * 1000);
        return date.toISOString().substring(11, 23);
    }
    // Convert start time to desired format
    const startTime = formatTime(values.currentTimestamp);
    const transcodeVideos = (video) => __awaiter(void 0, void 0, void 0, function* () {
        const transcoder = new aws_sdk_1.default.ElasticTranscoder({
            accessKeyId,
            secretAccessKey,
            region,
        });
        // Define the clip settings
        const clipSettings = {
            TimeSpan: {
                StartTime: startTime, // Start time for clipping (0:00)
                Duration: Math.ceil(values.Durationx).toString(), // Duration of the clip (5 seconds)
            },
        };
        // Create the transcoding job with clip settings
        const job = yield transcoder
            .createJob({
            PipelineId: "1706976033901-h5v774",
            Input: {
                Key: video,
                Container: "mp4",
                TimeSpan: clipSettings.TimeSpan, // Include the clip settings here
            },
            Output: {
                Key: `videos/${video}`,
                PresetId: "1351620000001-000010",
            },
        })
            .promise();
        // Wait for the transcoding job to complete
        yield waitForTranscodingCompletion(job.Job.Id, transcoder);
        // Delete the original video from the root folder after transcoding
        const s3 = new aws_sdk_1.default.S3({
            accessKeyId,
            secretAccessKey,
            region,
        });
        yield s3
            .deleteObject({
            Key: video,
            Bucket: "clikbatebucket",
        })
            .promise();
    });
    const waitForTranscodingCompletion = (jobId, transcoder) => __awaiter(void 0, void 0, void 0, function* () {
        while (true) {
            const { Job } = yield transcoder
                .readJob({
                Id: jobId,
            })
                .promise();
            const { Status } = Job;
            if (Status === "Complete" || Status === "Error") {
                break;
            }
            // Wait for a short duration before checking the job status again
            yield new Promise((resolve) => setTimeout(resolve, 5000));
        }
    });
    const videos = values.vidxx;
    transcodeVideos(videos);
}));
app.post("/post_upload_data", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    var currentTime = new Date();
    var intx1 = null;
    var intx2 = null;
    if (values.interacttype1 === 1) {
        intx1 = values.vid1;
        ////
    }
    else {
        intx1 = values.all[0].interact1;
    }
    if (values.interacttype2 === 1) {
        intx2 = values.vid2;
        ////
    }
    else {
        intx2 = values.all[0].interact2;
    }
    ///console.log(values.rad1);
    try {
        const result = yield execPoolQuery(createpost, [
            values.id,
            values.all.length,
            values.topic,
            values.caption,
            values.all[0] ? values.all[0].imagedata : null,
            values.all[0] ? values.all[0].imagedataThumb : null,
            values.all[0] ? 1 : null,
            values.all[0] ? intx1 : null,
            values.I1x ? values.I1x : null,
            values.I1y ? values.I1y : null,
            values.all[0] ? intx2 : null,
            values.I1bx ? values.I1bx : null,
            values.I1by ? values.I1by : null,
            values.rad1,
            values.rad2,
            values.interacttype1,
            values.interacttype2,
            values.all[0] ? values.all[0].imagedata2 : null,
            values.vid1backup ? values.vid1backup : null,
            values.vid2backup ? values.vid2backup : null,
            currentTime,
        ]);
        const insertedId = result.insertId;
        return res.send({ go: insertedId, message: "images uploaded" });
    }
    catch (e) {
        console.log(e);
        return res.send({ message: "images upload failed" });
    }
}));
app.post("/post_upload_dataX", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    var currentTime = new Date();
    var intx1 = null;
    var intx2 = null;
    ///console.log(values.rad1);
    try {
        const result = yield execPoolQuery(createpostX, [
            values.id,
            1,
            values.topic,
            values.caption,
            values.x1,
            values.im2,
            1,
            values.all[0] ? intx1 : null,
            values.I1x ? values.I1x : null,
            values.I1y ? values.I1y : null,
            values.all[0] ? intx2 : null,
            values.I1bx ? values.I1bx : null,
            values.I1by ? values.I1by : null,
            values.rad1,
            values.rad2,
            values.interacttype1,
            values.interacttype2,
            values.im2,
            values.vid1backup ? values.vid1backup : null,
            values.vid2backup ? values.vid2backup : null,
            currentTime,
            values.mode,
            values.x1,
            values.xt1,
            values.x2,
            values.xt2,
            values.x3,
            values.xt3,
            values.x4,
            values.xt4,
            values.x5,
            values.xt5,
            values.x6,
            values.xt6,
            1,
        ]);
        const insertedId = result.insertId;
        return res.send({ go: insertedId, message: "images uploaded" });
    }
    catch (e) {
        console.log(e);
        return res.send({ message: "images upload failed" });
    }
}));
app.put("/update_basic", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        yield execPoolQuery(updateBasicpage, [
            values.inputedUsername,
            values.inputedQuote,
            values.inputedDescription,
            values.id,
        ]);
        return res.send({ message: "username updated" });
    }
    catch (_a) {
        return res.send({ message: "usernameFailed" });
    }
}));
app.put("/update_Reg", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        yield execPoolQuery(updateReg, [values.id]);
        return res.send({ message: "updated" });
    }
    catch (_a) {
        return res.send({ message: "reg update Failed" });
    }
}));
app.put("/update_color", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        yield execPoolQuery(updateColor, [values.color1, values.id]);
        return res.send({ message: "color updated" });
    }
    catch (_a) {
        return res.send({ message: "colorFailed" });
    }
}));
app.put("/update_private", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        yield execPoolQuery(updatePriv, [values.key, values.postid]);
        return res.send({ message: "updated" });
    }
    catch (_a) {
        return res.send({ message: "private Failed" });
    }
}));
app.post("/feeds_stickers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chronologicaldata = yield execPoolQuery(getstickers);
        return res.send({
            ///gettingcookie: userSessionData,
            message: "feeds fetched",
            payload: chronologicaldata,
        });
    }
    catch (_a) {
        return res.send({ message: "error in fetching feeds" });
    }
}));
app.post("/OptionsPic", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    try {
        const chronologicaldata = yield execPoolQuery(optionsval, [values]);
        ///console.log(chronologicaldata[7].favCount);
        return res.send({
            ///gettingcookie: userSessionData,
            message: "feeds fetched",
            payload: chronologicaldata,
        });
    }
    catch (e) {
        //console.log(e)
        return res.send({ message: "error in fetching feeds" });
    }
}));
app.post("/feeds_chronologicalExplain", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    if (values.postPageLimit == 0) {
        try {
            const chronologicaldata = yield execPoolQuery(postsxExplain, [
                values.id,
                values.id2,
            ]);
            ///console.log(chronologicaldata[7].favCount);
            return res.send({
                ///gettingcookie: userSessionData,
                message: "feeds fetched",
                payload: chronologicaldata,
                postPageLimit: values.postPageLimit,
            });
        }
        catch (e) {
            //console.log(e)
            return res.send({ message: "error in fetching feeds" });
        }
    }
    else {
        try {
            const chronologicaldata = yield execPoolQuery(posts_moreExplain, [
                values.id,
                values.id2,
                values.postPageLimit,
            ]);
            ///console.log(chronologicaldata[7].favCount);
            return res.send({
                ///gettingcookie: userSessionData,
                message: "feeds fetched",
                payload: chronologicaldata,
                postPageLimit: values.postPageLimit,
            });
        }
        catch (e) {
            //console.log(e)
            return res.send({ message: "error in fetching feeds" });
        }
    }
}));
app.post("/feeds_Topic", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    if (values.postPageLimit == 0) {
        try {
            const chronologicaldata = yield execPoolQuery(postTopic, [
                values.id,
                values.id,
                values.topic,
            ]);
            ///console.log(chronologicaldata[7].favCount);
            return res.send({
                ///gettingcookie: userSessionData,
                message: "feeds fetched",
                payload: chronologicaldata,
                postPageLimit: values.postPageLimit,
            });
        }
        catch (e) {
            //console.log(e)
            return res.send({ message: "error in fetching feeds" });
        }
    }
    else {
        try {
            const chronologicaldata = yield execPoolQuery(posts_more, [
                values.id,
                values.id,
                values.postPageLimit,
            ]);
            ///console.log(chronologicaldata[7].favCount);
            return res.send({
                ///gettingcookie: userSessionData,
                message: "feeds fetched",
                payload: chronologicaldata,
                postPageLimit: values.postPageLimit,
            });
        }
        catch (e) {
            //console.log(e)
            return res.send({ message: "error in fetching feeds" });
        }
    }
}));
app.post("/feeds_chronologicalAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    if (values.postPageLimit == 0) {
        try {
            const chronologicaldata = yield execPoolQuery(postsxAll, [
                values.id,
                values.id2,
            ]);
            ///console.log(chronologicaldata[7].favCount);
            return res.send({
                ///gettingcookie: userSessionData,
                message: "feeds fetched",
                payload: chronologicaldata,
                postPageLimit: values.postPageLimit,
            });
        }
        catch (e) {
            //console.log(e)
            return res.send({ message: "error in fetching feeds" });
        }
    }
    else {
        try {
            const chronologicaldata = yield execPoolQuery(postsxAllmore, [
                values.id,
                values.id2,
                values.postPageLimit,
            ]);
            ///console.log(chronologicaldata[7].favCount);
            return res.send({
                ///gettingcookie: userSessionData,
                message: "feeds fetched",
                payload: chronologicaldata,
                postPageLimit: values.postPageLimit,
            });
        }
        catch (e) {
            //console.log(e)
            return res.send({ message: "error in fetching feeds" });
        }
    }
}));
app.post("/feeds_chronological", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    if (values.postPageLimit == 0) {
        try {
            const chronologicaldata = yield execPoolQuery(postsx, [
                values.id,
                values.id2,
            ]);
            ///console.log(chronologicaldata[7].favCount);
            return res.send({
                ///gettingcookie: userSessionData,
                message: "feeds fetched",
                payload: chronologicaldata,
                postPageLimit: values.postPageLimit,
            });
        }
        catch (e) {
            //console.log(e)
            return res.send({ message: "error in fetching feeds" });
        }
    }
    else {
        try {
            const chronologicaldata = yield execPoolQuery(posts_more, [
                values.id,
                values.id2,
                values.postPageLimit,
            ]);
            ///console.log(chronologicaldata[7].favCount);
            return res.send({
                ///gettingcookie: userSessionData,
                message: "feeds fetched",
                payload: chronologicaldata,
                postPageLimit: values.postPageLimit,
            });
        }
        catch (e) {
            //console.log(e)
            return res.send({ message: "error in fetching feeds" });
        }
    }
}));
///////////////////////////DALLE////////////////////////////////////
function generateImageDalle3(promptxx) {
    return __awaiter(this, void 0, void 0, function* () {
        const API_KEY = DalleKey;
        const url = openKey;
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
        };
        const data = {
            model: "dall-e-3",
            prompt: promptxx,
            num_images: 1,
            size: "1024x1024", // Adjust the size according to your preference
            quality: "standard", // Or use "hd" for enhanced detail
            response_format: "url",
        };
        const response = yield fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    });
}
app.get("/ProxyDalle", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dalle } = req.query; // Extracting 'dalle' from query parameters
    console.log(dalle);
    try {
        if (!dalle) {
            // If 'dalle' parameter is missing
            return res.status(400).send("Missing 'dalle' parameter");
        }
        const imageUrl = dalle.toString(); // Convert 'dalle' to string
        const response = yield fetch(imageUrl);
        // Check if the response is successful (status code in the range 200-299)
        if (!response.ok) {
            return res
                .status(response.status)
                .send(`Error fetching image: ${response.statusText}`);
        }
        const imageBuffer = yield response.buffer();
        res.contentType("image/png").send(imageBuffer);
    }
    catch (error) {
        console.error("Error fetching image:", error);
        res.status(500).send("Internal Server Error");
    }
}));
app.post("/DalleApi", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    const promptx = values.prompt;
    const nx = values.n;
    const sizex = values.size;
    console.log(promptx);
    try {
        const response = yield generateImageDalle3(promptx);
        console.log(response);
        console.log("good");
        return res.send({
            message: "Done",
            payload: response,
        });
    }
    catch (e) {
        console.error("Error:", e.message);
        return res.status(500).send({ message: "Error in accessing Dalle Api" });
    }
}));
// Function to call GPT-4o for creating or improving prompts
function generateGPT4oPrompt(messages) {
    return __awaiter(this, void 0, void 0, function* () {
        const completion = yield openai.chat.completions.create({
            messages,
            model: "gpt-4o", // Change to GPT-4o
            max_tokens: 3000,
            n: 1,
        });
        if (!completion ||
            !completion.choices ||
            !completion.choices[0] ||
            !completion.choices[0].message ||
            !completion.choices[0].message.content) {
            throw new Error("Incomplete response from OpenAI");
        }
        return completion.choices[0].message.content
            .split("\n")
            .filter((line) => line.trim() !== "");
    });
}
app.post("/ChatGPTApi4", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prompt } = req.body;
    try {
        // Step 1: Generate initial key points
        const initialMessages = [
            {
                role: "system",
                content: "You are an expert communicator. Your task is to give a response to any given topic in a clear, concise, and engaging manner and Respond STRICTLY in 6 points",
            },
            {
                role: "user",
                content: `Explain ${prompt} in 6 key points  format 1,2,3,4,5,6, `,
            },
        ];
        const initialResponseData = yield generateGPT4oPrompt(initialMessages);
        console.log(initialResponseData.length);
        console.log("Initial Response Array:", initialResponseData);
        const initialResponseFormatted = initialResponseData.join(",");
        return res.send({
            message: "Done",
            initialSteps: initialResponseFormatted,
        });
    }
    catch (e) {
        console.error("Error:", e.message);
        return res.status(500).send({ message: "Error in accessing ChatGPT API" });
    }
}));
app.post("/ChatGPTApiDesign4", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pp, prompt } = req.body;
    console.log(prompt);
    try {
        // Step 1: Generate initial key points
        const initialMessages = [
            {
                role: "system",
                content: "You are a Visual Descriptor. Your role is to turn any given question into a clear, detailed prompt for AI image generation. Focus on essential visual elements like colors, textures, objects, and lighting.",
            },
            {
                role: "user",
                content: `The question is: "${prompt}". The answer is: "${pp}". Create a short prompt that includes key visual details to explain the concept step-by-step.`,
            },
        ];
        const initialResponseData = yield generateGPT4oPrompt(initialMessages);
        console.log(initialResponseData.length);
        console.log("Initial Response Array:", initialResponseData);
        const initialResponseFormatted = initialResponseData.join(",");
        return res.send({
            message: "Done",
            initialSteps: initialResponseFormatted,
        });
    }
    catch (e) {
        console.error("Error:", e.message);
        return res.status(500).send({ message: "Error in accessing ChatGPT API" });
    }
}));
// Function to call GPT-4o for creating or improving prompts
function generateGPT35Prompt(messages) {
    return __awaiter(this, void 0, void 0, function* () {
        const completion = yield openai.chat.completions.create({
            messages,
            model: "gpt-4o-mini-2024-07-18", // Change to GPT-3.5 Turbo 0125
            max_tokens: 3000,
            n: 1,
        });
        if (!completion ||
            !completion.choices ||
            !completion.choices[0] ||
            !completion.choices[0].message ||
            !completion.choices[0].message.content) {
            throw new Error("Incomplete response from OpenAI");
        }
        return completion.choices[0].message.content
            .split("\n")
            .filter((line) => line.trim() !== "");
    });
}
app.post("/ChatGPTApi3", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prompt } = req.body;
    try {
        // Step 1: Generate initial key points
        const initialMessages = [
            {
                role: "system",
                content: "You are an expert communicator. Your task is to give a response to any given topic in a clear, concise, and engaging manner and Respond STRICTLY in 6 points",
            },
            {
                role: "user",
                content: `Explain ${prompt} in 6 key points  format 1,2,3,4,5,6, `,
            },
        ];
        const initialResponseData = yield generateGPT35Prompt(initialMessages);
        console.log(initialResponseData.length);
        console.log("Initial Response Array:", initialResponseData);
        const initialResponseFormatted = initialResponseData.join(",");
        return res.send({
            message: "Done",
            initialSteps: initialResponseFormatted,
        });
    }
    catch (e) {
        console.error("Error:", e.message);
        return res.status(500).send({ message: "Error in accessing ChatGPT API" });
    }
}));
app.post("/ChatGPTApiDesign3", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pp, prompt } = req.body;
    console.log(prompt);
    try {
        const initialMessages = [
            {
                role: "system",
                content: "You are a Visual Descriptor. Your role is to turn any given question into a clear, detailed prompt for AI image generation. Focus on essential visual elements like colors, textures, objects, and lighting.",
            },
            {
                role: "user",
                content: `The question is: "${prompt}". The answer is: "${pp}". Create a short prompt that includes key visual details to explain the concept step-by-step.`,
            },
        ];
        const initialResponseData = yield generateGPT35Prompt(initialMessages);
        console.log(initialResponseData.length);
        console.log("Initial Response Array:", initialResponseData);
        const initialResponseFormatted = initialResponseData.join(",");
        return res.send({
            message: "Done",
            initialSteps: initialResponseFormatted,
        });
    }
    catch (e) {
        console.error("Error:", e.message);
        return res.status(500).send({ message: "Error in accessing ChatGPT API" });
    }
}));
///////////////////////////DALLE////////////////////////////////////
///////////////////////////STABLE////////////////////////////////////
function generateImagexImage(prompt, image, strength) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiHost = "https://api.stability.ai";
        const apiKey = APP_STATE_STABLE_KEY;
        const form = new FormData();
        form.append("prompt", prompt);
        form.append("model", "sd3-large"); // Use the SD3 Large model
        form.append("output_format", "jpeg");
        form.append("mode", "image-to-image"); // Set mode to 'image-to-image'
        form.append("strength", strength); // Add the strength parameter
        form.append("image", image.buffer, image.originalname);
        const response = yield fetch(`${apiHost}/v2beta/stable-image/generate/sd3`, {
            method: "POST",
            headers: Object.assign(Object.assign({ Authorization: `Bearer ${apiKey}` }, form.getHeaders()), { Accept: "image/*" }),
            body: form,
        });
        if (!response.ok) {
            throw new Error(`Non-200 response: ${yield response.text()}`);
        }
        const imageBuffer = yield response.buffer();
        return imageBuffer; // Return the image buffer
    });
}
function generateVideoFromImage(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiHost = "https://api.stability.ai";
        const apiKey = APP_STATE_STABLE_KEY;
        const { image: base64Image, height, width, steps, guidance_scale } = params;
        // Convert base64 image to a buffer
        const imageBuffer = Buffer.from(base64Image, "base64");
        const form = new FormData();
        form.append("image", imageBuffer, { filename: "input_image.jpeg" });
        form.append("height", height || "1024");
        form.append("width", width || "1024");
        form.append("steps", steps || "50");
        form.append("guidance_scale", guidance_scale || "3.5");
        // Make a request to the Stable Diffusion video generation endpoint
        const response = yield fetch(`${apiHost}/v2beta/image-to-video`, {
            method: "POST",
            headers: Object.assign(Object.assign({ Authorization: `Bearer ${apiKey}` }, form.getHeaders()), { Accept: "video/*" }),
            body: form,
        });
        if (!response.ok) {
            throw new Error(`Non-200 response: ${yield response.text()}`);
        }
        // Polling for video completion
        const { id } = yield response.json();
        let videoReady = false;
        let videoResponse;
        while (!videoReady) {
            yield new Promise((resolve) => setTimeout(resolve, 10000)); // Wait 10 seconds between polls
            videoResponse = yield fetch(`${apiHost}/v2beta/image-to-video/result/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    Accept: "video/*",
                },
            });
            if (videoResponse.status === 200) {
                videoReady = true;
            }
            else if (videoResponse.status === 202) {
                console.log("Video generation in progress, polling again in 10 seconds...");
            }
        }
        // Return the video data
        const videoBuffer = yield videoResponse.buffer();
        return videoBuffer;
    });
}
app.post("/generatevideo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Directly access req.body since your frontend sends params directly
    const params = req.body;
    if (!params || !params.image) {
        return res
            .status(400)
            .send({ message: "Invalid request. Missing params or image data." });
    }
    try {
        const videoBuffer = yield generateVideoFromImage(params);
        // Log the event when the video is successfully generated
        console.log("Video has been successfully generated.");
        // Convert the video buffer to base64
        const base64Video = videoBuffer.toString("base64");
        // Send the base64-encoded video back to the frontend
        res.send({ video: base64Video });
        console.log("Base64 video successfully sent to the client.");
    }
    catch (e) {
        console.error("Error:", e.message);
        res.status(500).send({ message: "Error in generating video" });
    }
}));
app.post("/StableDiffusionApiImage", upload.single("image"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prompt, strength } = req.body;
    const image = req.file;
    if (!image) {
        return res.status(400).send({ message: "Image file is required" });
    }
    try {
        const imageBuffer = yield generateImagexImage(prompt, image, strength);
        // Save the generated image to a file
        const imagePath = path.join(__dirname, "output.jpeg");
        fs.writeFileSync(imagePath, imageBuffer);
        // Send the generated image back to the client
        res.sendFile(imagePath, {}, (err) => {
            if (err) {
                console.error("Failed to send image:", err);
                res.status(500).send({ message: "Error sending the image" });
            }
            else {
                // Optionally delete the image file after sending
                fs.unlink(imagePath, (unlinkErr) => {
                    if (unlinkErr) {
                        console.error("Failed to delete image:", unlinkErr);
                    }
                });
            }
        });
    }
    catch (e) {
        console.error("Error:", e.message);
        res.status(500).send({ message: "Error in generating image" });
    }
}));
function generateImageStable3turbo(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiHost = "https://api.stability.ai";
        const apiKey = APP_STATE_STABLE_KEY;
        const form = new FormData();
        form.append("prompt", prompt);
        form.append("model", "sd3-large-turbo"); // Use the SD3 Large Turbo model
        form.append("output_format", "jpeg");
        const response = yield fetch(`${apiHost}/v2beta/stable-image/generate/sd3`, {
            method: "POST",
            headers: Object.assign(Object.assign({ Authorization: `Bearer ${apiKey}` }, form.getHeaders()), { Accept: "image/*" }),
            body: form,
        });
        if (!response.ok) {
            throw new Error(`Non-200 response: ${yield response.text()}`);
        }
        const imageBuffer = yield response.buffer();
        return imageBuffer; // Return the image buffer
    });
}
app.post("/StableDiffusionApi", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prompt } = req.body.values;
    try {
        const imageBuffer = yield generateImageStable3turbo(prompt);
        // Save the generated image to a file
        const imagePath = path.join(__dirname, "output.jpeg");
        fs.writeFileSync(imagePath, imageBuffer);
        // Send the generated image back to the client
        res.sendFile(imagePath, {}, (err) => {
            if (err) {
                console.error("Failed to send image:", err);
                res.status(500).send({ message: "Error sending the image" });
            }
            else {
                // Optionally delete the image file after sending
                fs.unlink(imagePath, (unlinkErr) => {
                    if (unlinkErr) {
                        console.error("Failed to delete image:", unlinkErr);
                    }
                });
            }
        });
    }
    catch (e) {
        console.error("Error:", e.message);
        res.status(500).send({ message: "Error in generating image" });
    }
}));
function generateImageStableSDXL(prompt, model, height, width) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiHost = "https://api.stability.ai";
        const apiKey = APP_STATE_STABLE_KEY;
        const payload = {
            text_prompts: [
                {
                    text: prompt,
                    weight: 0.5,
                },
            ],
            height,
            width,
            cfg_scale: 7,
            sampler: "K_DPM_2_ANCESTRAL",
            samples: 1,
            steps: 30,
        };
        const response = yield fetch(`${apiHost}/v1/generation/${model}/text-to-image`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                Accept: "image/png", // Corrected Accept header
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error(`Non-200 response: ${yield response.text()}`);
        }
        const imageBuffer = yield response.arrayBuffer();
        return Buffer.from(imageBuffer);
    });
}
app.post("/StableDiffusionApisd", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prompt, model, height, width } = req.body.values;
    try {
        const imageBuffer = yield generateImageStableSDXL(prompt, model, height, width);
        // Save the generated image to a file
        const imagePath = path.join(__dirname, "output.png"); // Changed to .png
        fs.writeFileSync(imagePath, imageBuffer);
        // Send the generated image back to the client
        res.sendFile(imagePath, {}, (err) => {
            if (err) {
                console.error("Failed to send image:", err);
                res.status(500).send({ message: "Error sending the image" });
            }
            else {
                // Optionally delete the image file after sending
                fs.unlink(imagePath, (unlinkErr) => {
                    if (unlinkErr) {
                        console.error("Failed to delete image:", unlinkErr);
                    }
                });
            }
        });
    }
    catch (e) {
        console.error("Error:", e.message);
        res.status(500).send({ message: "Error in generating image" });
    }
}));
// Function to generate images using Hugging Face
function generateImageHuggingFace(prompt, height, width) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        const apiHost = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3-medium";
        const headers = {
            Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
            "Content-Type": "application/json",
            Accept: "application/json", // Expecting JSON for error handling
        };
        const payload = {
            inputs: prompt,
            parameters: {
                width: width,
                height: height,
                num_inference_steps: 30,
                guidance_scale: 7.0,
            },
            options: {
                wait_for_model: true, // Wait for the model to be ready
            },
        };
        try {
            const response = yield axios_1.default.post(apiHost, payload, { headers });
            if (response.status !== 200) {
                throw new Error(`Non-200 response: ${response.statusText}`);
            }
            const imageBuffer = response.data;
            return Buffer.from(imageBuffer);
        }
        catch (error) {
            console.error("Error details:", error);
            // Extract more information from the error response
            const errorDetails = ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || "No additional error details provided";
            const statusCode = ((_b = error.response) === null || _b === void 0 ? void 0 : _b.status) || "Unknown status code";
            const statusText = ((_c = error.response) === null || _c === void 0 ? void 0 : _c.statusText) || "Unknown status text";
            // Construct a detailed error message
            const errorMessage = `Error generating image: ${error.message}\nStatus Code: ${statusCode}\nStatus Text: ${statusText}\nDetails: ${JSON.stringify(errorDetails, null, 2)}`;
            throw new Error(errorMessage);
        }
    });
}
// Express route handler
app.post("/StableDiffusionApiHF", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prompt, height, width } = req.body.values;
    try {
        console.log("jjjjj");
        const imageBuffer = yield generateImageHuggingFace(prompt, 512, 512);
        // Save the generated image to a file
        const imagePath = path.join(__dirname, "output.png");
        fs.writeFileSync(imagePath, imageBuffer);
        // Send the generated image back to the client
        res.sendFile(imagePath, {}, (err) => {
            if (err) {
                console.error("Failed to send image:", err);
                res.status(500).send({ message: "Error sending the image" });
            }
            else {
                // Optionally delete the image file after sending
                fs.unlink(imagePath, (unlinkErr) => {
                    if (unlinkErr) {
                        console.error("Failed to delete image:", unlinkErr);
                    }
                });
            }
        });
    }
    catch (e) {
        console.error("Error:", e.message);
        res.status(500).send({ message: "Error in generating image" });
    }
}));
///////////////////////////STABLE////////////////////////////////////
///////////////////////////TEXT-TO-SPEECH////////////////////////////////////
///////////////////////////TEXT-TO-SPEECH////////////////////////////////////
////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////
app.post("/keepmeloggedin", validateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.cookies.accesst) {
        const { values } = req.body;
        const userSessionData = (0, jwt_decode_1.default)(req.cookies.accesst);
        const accessToken = createTokensUpdate(userSessionData);
        if (values === "session") {
            return res
                .cookie("accesst", accessToken, {
                sameSite: "strict",
                httpOnly: true,
                //secure: true,
            })
                .send({ message: "session_Cookie_Activated" });
        }
        else if (values === "forever") {
            const days30inseconds = 60 * 60 * 24 * 30 * 1000;
            const CurrentTimePlusSecs = new Date(new Date().getTime() + 60 * 60 * 24 * 30 * 1000);
            const userSessionData = (0, jwt_decode_1.default)(req.cookies.accesst);
            const accessToken = createTokensUpdate(userSessionData);
            return res
                .cookie("accesst", accessToken, {
                sameSite: "strict",
                expires: CurrentTimePlusSecs,
                maxAge: days30inseconds,
                httpOnly: true,
                //secure: true,
            })
                .send({ message: "forever_Cookie_Activated" });
        }
        else {
            const days30inseconds = 2;
            const CurrentTimePlusSecs = new Date(new Date().getTime() + 2);
            const userSessionData = (0, jwt_decode_1.default)(req.cookies.accesst);
            const accessToken = createTokensUpdate(userSessionData);
            return res
                .cookie("accesst", accessToken, {
                sameSite: "strict",
                expires: CurrentTimePlusSecs,
                maxAge: days30inseconds,
                httpOnly: true,
                //secure: true,
            })
                .send({ message: "cookie" });
        }
    }
    else {
        return res.send({ message: "cookie null" });
    }
}));
app.post("/checkIsLogged", validateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.cookies.accesst) {
        const userSessionData = (0, jwt_decode_1.default)(req.cookies.accesst);
        try {
            const logindata = yield execPoolQuery(loginId, [
                userSessionData.id,
                userSessionData.id,
            ]);
            const payloadValue = {
                id: logindata[0].id,
                username: logindata[0].username,
                userimage: logindata[0].profile_image,
                userimagethumb: logindata[0].profile_image_thumb,
                usercolor1: logindata[0].color1,
                usercolor2: logindata[0].color2,
                usercolortype: logindata[0].color_type,
                userfirstname: logindata[0].first_name,
                usersurname: logindata[0].sur_name,
                userquote: logindata[0].quote,
                userreg: logindata[0].reg,
                userbillboard1: logindata[0].billboard1,
                userbillboardthumb1: logindata[0].billboardthumb1,
                userbillboard2: logindata[0].billboard2,
                userbillboardthumb2: logindata[0].billboardthumb2,
                biography: logindata[0].biography,
                fans: logindata[0].fanCount,
                favorites: logindata[0].favoriteCount,
            };
            return res.send({
                ///gettingcookie: userSessionData,
                message: "logged in",
                payload: payloadValue,
            });
        }
        catch (_a) {
            return res.send({ message: "Wrong id" });
        }
    }
    else {
        return res.send({
            message: "logged out",
        });
    }
}));
app.post("/logout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.cookies.accesst) {
        return res.clearCookie("accesst").send({ message: "cookie deleted" });
    }
    else {
        return res.send({ message: "cookie null" });
    }
}));
app.post("/usernamecheck", (0, express_validator_1.body)("value")
    .isLength({ max: 26 })
    .matches(/^([A-z0-9áéíóúñü\ \_.]+)$/, "gim"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validateErrors = (0, express_validator_1.validationResult)(req);
    if (!validateErrors.isEmpty()) {
        return res.status(400).json({
            method: req.method,
            status: res.statusCode,
            error: validateErrors,
        });
    }
    else {
        const username = req.body.value;
        try {
            const checkresult = yield execPoolQuery(checkpassword, [username]);
            const IdIsAvailable = checkresult[0].id;
            if (IdIsAvailable) {
                return res.send({ message: "username is not unique" });
            }
        }
        catch (_a) {
            return res.send({ message: "username is available" });
        }
    }
}));
app.post("/loge", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Request Body:", req.body); // Log the request body
    const { values } = req.body;
    if (!values || !values.email || !values.name) {
        return res.status(400).json({ message: "Missing email or name" });
    }
    try {
        const logindata = yield execPoolQuery(loginEmail, [values.email]);
        if (logindata.length === 0) {
            // Send a 404 error for no email found
            return res.status(404).json({ message: "no email" });
        }
        const payloadValue = {
            id: logindata[0].id,
            name: values.name,
            username: logindata[0].username,
            userimage: logindata[0].profile_image,
            userimagethumb: logindata[0].profile_image_thumb,
            usercolor1: logindata[0].color1,
            usercolor2: logindata[0].color2,
            usercolortype: logindata[0].color_type,
            userfirstname: logindata[0].first_name,
            usersurname: logindata[0].sur_name,
            userquote: logindata[0].quote,
            userreg: logindata[0].reg,
            userbillboard1: logindata[0].billboard1,
            userbillboardthumb1: logindata[0].billboardthumb1,
            userbillboard2: logindata[0].billboard2,
            userbillboardthumb2: logindata[0].billboardthumb2,
            biography: logindata[0].biography,
            fans: logindata[0].fanCount,
            favorites: logindata[0].favoriteCount,
        };
        const days30inseconds = 60 * 60 * 24 * 30 * 1000;
        const CurrentTimePlusSecs = new Date(new Date().getTime() + days30inseconds);
        const accessToken = createTokens(logindata);
        return res
            .cookie("accesst", accessToken, {
            sameSite: "strict",
            expires: CurrentTimePlusSecs,
            maxAge: days30inseconds,
            httpOnly: true,
        })
            .send({ payload: payloadValue });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Error during login" });
    }
}));
app.post("/loging", (0, express_validator_1.body)("values.inputedUsername")
    .isLength({ max: 26 })
    .matches(/^([A-z0-9áéíóúñü\ \_.]+)$/, "gim"), (0, express_validator_1.body)("values.inputedPassword")
    .isLength({ min: 8 })
    .exists({ checkFalsy: true }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validateErrors = (0, express_validator_1.validationResult)(req);
    if (!validateErrors.isEmpty()) {
        return res.status(400).json({
            method: req.method,
            status: res.statusCode,
            error: validateErrors,
        });
    }
    else {
        const { values } = req.body;
        try {
            const logindata = yield execPoolQuery(login, [values.inputedUsername]);
            const DatabasePassword = logindata[0].password;
            const PasswordMatchResult = yield bcrypt.compare(values.inputedPassword, DatabasePassword);
            if (!PasswordMatchResult) {
                return res.send({ message: "Wrong Password" });
            }
            else {
                const payloadValue = {
                    id: logindata[0].id,
                    username: logindata[0].username,
                    userimage: logindata[0].profile_image,
                    userimagethumb: logindata[0].profile_image_thumb,
                    usercolor1: logindata[0].color1,
                    usercolor2: logindata[0].color2,
                    usercolortype: logindata[0].color_type,
                    userfirstname: logindata[0].first_name,
                    usersurname: logindata[0].sur_name,
                    userquote: logindata[0].quote,
                    userreg: logindata[0].reg,
                    userbillboard1: logindata[0].billboard1,
                    userbillboardthumb1: logindata[0].billboardthumb1,
                    userbillboard2: logindata[0].billboard2,
                    userbillboardthumb2: logindata[0].billboardthumb2,
                    biography: logindata[0].biography,
                    fans: logindata[0].fanCount,
                    favorites: logindata[0].favoriteCount,
                };
                const days30inseconds = 60 * 60 * 24 * 30 * 1000;
                const CurrentTimePlusSecs = new Date(new Date().getTime() + 60 * 60 * 24 * 30 * 1000);
                const accessToken = createTokens(logindata);
                //res.clearCookie("accesst");
                //const tokenxx = req.cookies.accesst;
                //const user = jwt_decode(tokenxx);
                ///setting the cookie
                return res
                    .cookie("accesst", accessToken, {
                    sameSite: "strict",
                    expires: CurrentTimePlusSecs,
                    maxAge: days30inseconds,
                    httpOnly: true,
                    //secure: true,
                })
                    .send({ payload: payloadValue });
            }
        }
        catch (e) {
            console.log(e);
            return res.send({ message: "Wrong username" });
        }
    }
}));
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var colorHolder = ["#32a852", "#32a0a8", "#6f32a8", "#a83265", "#a4a832"];
///
////
////
app.post("/registrationGoogle", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { values } = req.body;
    // Extract the part of the email before '@'
    const emailPrefix = values.email.split("@")[0];
    // Create a short date string to make the username unique
    const currentDate = new Date();
    const dateString = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}${currentDate.getDate().toString().padStart(2, "0")}`;
    // Combine email prefix and date string for unique username
    const uniqueUsername = `${emailPrefix}_${dateString}`;
    const colorans = getRandomInt(0, 4);
    const color = colorHolder[colorans];
    const currentTime = new Date();
    // You can skip password hashing since no password is involved.
    try {
        const signupData = yield execPoolQuery(register, [
            uniqueUsername, // Use the generated username
            null, // No password, set it to NULL in the DB
            values.email, // Email from Google
            bill1,
            bill1b,
            bill2,
            bill2b,
            profilepic,
            profilepicb,
            color,
            color,
            0, // color_type default value
            1, // status
            0, // notification default value
            1, // tutorial default value
            currentTime, // date
            1, // reg
        ]);
        const payloadValue = {
            id: signupData.insertId,
            username: uniqueUsername,
            userimage: profilepic,
            userimagethumb: profilepicb,
            usercolor1: color,
            usercolor2: color,
            usercolortype: 0,
            userfirstname: "",
            usersurname: "",
            userquote: " ",
            userbillboard1: bill1,
            userbillboardthumb1: bill1b,
            userbillboard2: bill2,
            userbillboardthumb2: bill2b,
            biography: "",
        };
        const days30inseconds = 60 * 60 * 24 * 30 * 1000;
        const CurrentTimePlusSecs = new Date(new Date().getTime() + days30inseconds);
        const accessToken = createTokensUpdate(payloadValue);
        return res
            .cookie("accesst", accessToken, {
            sameSite: "strict",
            expires: CurrentTimePlusSecs,
            maxAge: days30inseconds,
            httpOnly: true,
        })
            .send({ payload: payloadValue });
    }
    catch (err) {
        console.error(err.code);
        if (err.code === "ER_DUP_ENTRY" || err.errno === 1062) {
            return res.send({ message: "username not unique" });
        }
        else {
            return res.send({ message: "error" });
        }
    }
}));
app.post("/registration", (0, express_validator_1.body)("values.inputedEmail")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: false }), (0, express_validator_1.body)("values.inputedUsername")
    .isLength({ max: 26 })
    .matches(/^([A-z0-9áéíóúñü\ \_.]+)$/, "gim"), (0, express_validator_1.body)("values.inputedPassword")
    .isLength({ min: 8 })
    .exists({ checkFalsy: true }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validateErrors = (0, express_validator_1.validationResult)(req);
    if (!validateErrors.isEmpty()) {
        return res.status(400).json({
            method: req.method,
            status: res.statusCode,
            error: validateErrors,
        });
    }
    else {
        const { values } = req.body;
        var colorans = getRandomInt(0, 4);
        var color = colorHolder[colorans];
        var currentTime = new Date();
        bcrypt.hash(values.inputedPassword, 10).then((hash) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const signupData = yield execPoolQuery(register, [
                    values.inputedUsername,
                    hash,
                    values.inputedEmail,
                    bill1,
                    bill1b,
                    bill2,
                    bill2b,
                    profilepic,
                    profilepicb,
                    color,
                    color,
                    0,
                    1,
                    0,
                    1,
                    currentTime,
                    1,
                ]);
                //console.log("success");
                const payloadValue = {
                    id: signupData.insertId,
                    username: values.inputedUsername,
                    userimage: profilepic,
                    userimagethumb: profilepicb,
                    usercolor1: color,
                    usercolor2: color,
                    usercolortype: 0,
                    userfirstname: "",
                    usersurname: "",
                    userquote: " ",
                    userbillboard1: bill1,
                    userbillboardthumb1: bill1b,
                    userbillboard2: bill2,
                    userbillboardthumb2: bill2b,
                    biography: "",
                };
                const days30inseconds = 60 * 60 * 24 * 30 * 1000;
                const CurrentTimePlusSecs = new Date(new Date().getTime() + 60 * 60 * 24 * 30 * 1000);
                const accessToken = createTokensUpdate(payloadValue);
                //res.clearCookie("accesst");
                //const tokenxx = req.cookies.accesst;
                //const user = jwt_decode(tokenxx);
                ///setting the cookie
                return res
                    .cookie("accesst", accessToken, {
                    sameSite: "strict",
                    expires: CurrentTimePlusSecs,
                    maxAge: days30inseconds,
                    httpOnly: true,
                    //secure: true,
                })
                    .send({ payload: payloadValue });
            }
            catch (err) {
                console.error(err.code);
                if (err.code === "ER_DUP_ENTRY" || err.errno === 1062) {
                    return res.send({ message: "username not unique" });
                }
                else {
                    return res.send({ message: "error" });
                }
            }
        }));
    }
}));
if (process.env.APP_STATE === "prod") {
    var staticServe = express.static(path.join(__dirname, "../../", "build"));
    app.use("/", staticServe);
    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../../", "build", "index.html")));
}
app.listen(process.env.LISTEN, () => {
    console.log("runnning");
});
