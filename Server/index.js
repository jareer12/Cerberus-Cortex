const request = require("request");
const Express = require("express");
const Server = Express();

const UID = require("randomstring");
const Body = require("body-parser");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./data/master.json");
const db = low(adapter);

const Filter = require("./module/badwords");
const Friendly = require("cors");

Server.use(Friendly());
Server.use(Body.urlencoded({ extended: false }));
Server.use(Body.json());
if (!db.has(`users`).value()) {
  db.set(`users`, []).write();
}

Server.get("/test-data", function (req, res) {
  res.json(require("./test/data"));
});

Server.get("/get/:id", function (req, res) {
  res.json({ Messages: db.get(req.params.id).value() });
});

Server.get("/avatar/:username", function (req, res) {
  let Image = db.get(`users`).find({ username: req.params.username }).value();
  const URL =
    (Image || {}).avatar || "https://dummyimage.com/512x512/252538/252538";
  request(
    {
      url: URL,
      encoding: null,
    },
    (err, resp, buffer) => {
      if (!err && resp.statusCode === 200) {
        res.set("Content-Type", "image/jpeg");
        res.send(resp.body);
      }
    }
  );
});

Server.post("/send/:id", function (req, res) {
  if (!req.body.message) {
    return res.json({
      Success: false,
    });
  }
  req.body.message = Filter(req.body.message);
  db.get(req.params.id)
    .push({ message: req.body.message, owner: req.body.owner })
    .write();
  res.json({
    Success: true,
  });
});

Server.post("/create", function (req, res) {
  let Id = UID.generate(20);
  let Data = db.set(Id, []).write();
  res.json({
    Success: true,
    Data: {
      Id: Id,
      Space: Data,
    },
  });
});

Server.post("/register", function (req, res) {
  const User = db.get(`users`).find({ username: req.body.username }).value();
  if (!User) {
    const Data = {
      userId: UID.generate(11),
      token: UID.generate(125),
      username: req.body.username,
      password: req.body.password,
      avatar: null,
    };
    db.get(`users`).push(Data).write();
    res.json({
      Success: true,
      Data: {
        Id: Data.userId,
        token: Data.token,
      },
    });
  } else {
    res.json({
      Success: false,
      Message: "An account this this username already exists",
    });
  }
});

Server.post("/login", function (req, res) {
  const User = db.get(`users`).find({ username: req.body.username }).value();
  if (User) {
    if (req.body.password == User.password) {
      res.json({
        Success: true,
        Message: "Succesfuly logged in",
        Data: {
          token: User.token,
          userId: User.userId,
        },
      });
    } else {
      res.json({
        Success: false,
        Message: "Wrong password, please try again",
      });
    }
  } else {
    res.json({
      Success: false,
      Message: "No such account exists",
    });
  }
});

Server.post("/me", function (req, res) {
  const User = db.get(`users`).find({ token: req.body.token }).value();
  if (User) {
    res.json({
      Success: true,
      Message: "Fetched Data",
      Data: {
        avatar: User.avatar,
        username: User.username,
        token: User.token,
        userId: User.userId,
      },
    });
  } else {
    res.json({
      Success: false,
      Message: "No such account exists",
    });
  }
});

Server.post("/update-pfp", function (req, res) {
  console.log(req.body.avatar);
  console.log(req.body.token);
  const User = db.get(`users`).find({ token: req.body.token }).value();
  if (User) {
    const Update = db
      .get(`users`)
      .find({ token: req.body.token })
      .assign({ avatar: req.body.avatar })
      .write();
    console.log(Update);
    if (Update) {
      res.json({
        Success: true,
        Message: "Fetched Data",
        Data: {
          avatar: User.avatar,
          username: User.username,
          token: User.token,
          userId: User.userId,
        },
      });
    } else {
      res.json({
        Success: false,
        Message: "Unable to update profile picture",
      });
    }
  } else {
    res.json({
      Success: false,
      Message: "Unauthorized",
    });
  }
});

Server.listen(5555, function () {
  console.log(`Server Started`);
});

Server.get("*", function (req, res) {
  res.json({ Success: false, Message: "Not found" });
});
