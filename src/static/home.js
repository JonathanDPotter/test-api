const routes = {
  "/": { GET: "Returns the home page as HTML." },
  "/about": { GET: "Returns the about page as HTML." },
  "/add-character": { GET: "Returns the add-character page as HTML" },
  "/healthcheck": { GET: "Returns a status of 200." },
  "/routes": { GET: "Returns this JSON object." },
  "/api": {
    "/characters": {
      GET: "Returns all characters as JSON in the format: {ID, Name, HomePlanet, Age, Gender}.",
      POST: "Adds one character to the database. The body must contain an object in the format {Name, HomePlanet, Age, Gender}",
      "/:id": {
        GET: "Returns one character with the corresponding id as JSON in the format {ID, Name, HomePlanet, Age, Gender}.",
        PUT: "Updates one character with the corresponding id. The body of the request must be in the format {Name, HomePlanet, Age, Gender}",
        DELETE: "Removes one character with the corresponding id.",
      },
    },
    "/requests": {
      GET: "Returns a log of all requests made to the server in JSON in the format: {ID, Request}",
    },
  },
};
const routesContainer = document.getElementsByClassName("routes")[0];

routesContainer.innerHTML = JSON.stringify(routes, null, 2);
