///packages

const express = require("express");

const { getJobs } = require("./services");

const server = express();

// if(process.env.PORT !== undefined){
// PORT = process.env.PORT;

// }
const PORT = process.env.PORT ? process.env.PORT : 3000;

server.listen(PORT, () => {
  console.log(`sever listen on port: ${PORT}`);
}); /// port to listen on

server.get("/jobs", (req, res) => {
  //const tech= req.query.tech
  // localhost:3000/jobs?tech=python
  // localhost:3000/jobs?tech=java
  // localhost:3000/jobs?tech=C++
  const { tech } = req.query;

  if (tech === undefined) {
    return res.status(400).send({ error: "Tech query parameter is undefined" });
  }

  //   res.send(jobs);
  // getJobs(tech).then((jobs) => res.send(jobs[0]));

  getJobs(tech).then((jobs) => res.send(jobs[0]));
});

server.get("/", (req, res) => {
  console.log("home route");
});
