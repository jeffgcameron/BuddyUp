const express = require ("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require ("body-parser")
const cookieParser = require ("cookie-parser")
const session = require ("express-session")


const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    credentials: true
})
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}))

app.use(session({
    key: "userID",
    secret: "super secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }
}))

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "buddyup_db",
});

app.post("/signup", (req, res)=> {

const email = req.body.email
const password = req.body.password
const name = req.body.name
const bio = req.body.bio
const activities = req.body.activities
const certifications = req.body.certifications

    db.query("INSERT INTO users (email, password, name, bio, activities, certifications) VALUES (?,?,?,?,?,?)",
    [email, password, name, bio, activities, certifications],
    (err, result) => {
        console.log(err);
    }
    );
});

app.get("/login", (req, res)=> {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({ loggedIn: false})
    }
})

app.post("/login", (req, res)=> {

    const email = req.body.email
    const password = req.body.password
    
        db.query("SELECT * FROM users WHERE email =  ? AND password = ?",
        [email, password],
        (err, result) => {
            if(err) {
                res.send({err: err})
            }
            
            if(result.length > 0) {
                req.session.user = result
                console.log(req.session.user);
                res.send(result)
            } else {
                res.send({message: "wrong combo"})
            }
        }
        );
    });

app.listen(3000, () => {
    console.log("running server")
})