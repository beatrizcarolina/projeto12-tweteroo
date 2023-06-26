import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
let users = [];
let tweets = [];

app.post('/sign-up', (req, res) => {
  const user = req.body;
  console.log(user);

  if(user.username === "" || user.avatar === "" || typeof user.username !== "string" || typeof user.avatar !== "string"){
    res.status(400).json({message:"Todos os campos são obrigatórios!"});
  } else {
    users.push(user);
    res.status(200).json({ message: "OK" });
  }
});

app.post('/tweets', (req, res) => {
  const tweet = req.body;
  console.log(tweet);

  if(tweet.username === "" || tweet.tweet === "" || typeof tweet.username !== "string" || typeof tweet.tweet !== "string"){
    res.status(400).json({message:"Todos os campos são obrigatórios!"});
    return;
  }

  if(users.find(loggedUser => loggedUser.username === tweet.username)){
    tweets.push(tweet);
    res.status(200).json({ message: "OK" });
  } else {
    res.status(401).json({ message: "UNAUTHORIZED" });
  }
});

app.listen(PORT,  () => console.log(`Running server on port ${PORT}`));