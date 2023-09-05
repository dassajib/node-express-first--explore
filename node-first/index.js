// requring express
const express = require("express");
// requring cors
const cors = require("cors");
// calling express
const app = express();
// setting the port
const port = 3000;

// cors use
app.use(cors());

// data packeting
app.use(express.json());

// custom json
const users = [
  {
    id: 0,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 1,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 2,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 3,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 4,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 5,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 6,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 7,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 8,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 9,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

// first output
app.get("/", (req, res) => {
  res.send("Hello Node");
});

// users api
app.get("/users", (req, res) => {
  // stored search keyword to access req
  const search = req.query.search;
  if (search) {
    // filter by search name
    const searchedText = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchedText);
  } else {
    // otherwise response all users
    res.send(users);
  }
});

// dynamic api
app.get("/users/:id", (req, res) => {
  // taking search id by req and set that on user then response user
  const id = req.params.id;
  //   new data id set
  const user = users[id];
  res.send(user);
});

// post api
app.post("/users", (req, res) => {
  // get accessing client site's fetch body
  const newUser = req.body;
  //   new data id set
  newUser.id = users.length;
  users.push(newUser);
  //   packeting data
  res.json(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
