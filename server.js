import app from "./src/app.js";
import "dotenv/config";

const PORT = process.env.PORT;

// ! INITIALIZE SERVER
app.listen(PORT, () => {
  console.log(`[server]: Listening on port: ${PORT}`);
});
