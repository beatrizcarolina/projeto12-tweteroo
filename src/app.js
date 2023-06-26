import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
let users = [];

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

app.listen(PORT,  () => console.log(`Running server on port ${PORT}`));