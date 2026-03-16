let http = require("http");
const { json } = require("stream/consumers");

console.log("welcome");

let server = http.createServer((req, res) => {
  if (req.url === "/about") {
    let obj = {
      status: 1,
      obj: [
        {
          name: "kartik",
          age: 26,
        },

        { name: "kartiky", age: 25 },
      ],
    };
    res.end(JSON.stringify(obj));
  }

  if(req.url=== "/"){
  res.end("welcoming server");

  }
});

server.listen("7000");
