import express from "express";
import { config } from 'dotenv';
import { connectToDataBase } from './db/connection.js';
import multer from 'multer';


config();
const app = express();

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        return cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
})

const upload = multer({storage})

// middlewares
app.use(express.urlencoded({extended : false}));

app.get('/', (req, res) => {
    res.send("Hello mfer");
})

app.post('/api/upload', upload.single("profileImage"), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    return res.redirect('/');
})

// connections and listen
const PORT = process.env.PORT || 5001;
connectToDataBase()
.then(() => {
    app.listen(PORT, () => console.log("Server Open and connected To DataBase"));
})
.catch((err) => console.log(err));
