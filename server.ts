import { expressive } from './deps.ts';
import { createUser, getUsers } from "./models/Users.ts"

(async () => {
  const port = 3000
  const app = new expressive.App();
  
  app.use(expressive.simpleLog());
  app.use(expressive.static_("./static"));
  app.use(expressive.bodyParser.json());
  
  app.get("/api/users", async (req, res) => {
    let users = await getUsers();
    await res.json(users);
  });

  app.post("/api/users", async (req, res) => {
    if (req.data) {
      let data = await createUser(req.data)
      await res.json(data)
    } else {
      await res.empty(500);
    }
  });
  
  const server = await app.listen(port);
  console.log("app listening on port " + server.port);

})()
