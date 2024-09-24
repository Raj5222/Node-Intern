import http from "http";
import mongoose from "mongoose";
import { Pool } from "pg";
import { ServerResponse } from "http";

// MongoDB Connection
mongoose.connect(
    "mongodb+srv://Raj0206:02062001@cluster0.eepco.mongodb.net"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Error:", err));

  //PostGres Connection
// const postgres = new Pool({
//   user: "node_testing_user",
//   host: "dpg-crmkmvi3esus73fv1520-a.singapore-postgres.render.com",
//   database: "node_testing",
//   password: "JY0lqAMh1z2CYOpCYe74m9i9ALtnHhc8",
//   port: 5432,
//   ssl: true
// });

const postgres = new Pool({
  user: "Raj0206",
  host: "localhost",
  database: "node_intern",
  password: "0206",
  port: 6784,
  // ssl: true,
});

postgresql: postgres
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
  })
  .catch((err) => {
    console.error("PostgreSQL Error:", err);
  });

// HTTP server
const server = http.createServer(
  async (req, res: ServerResponse) => {
    res.end("Hello Raj");
  }
);

// Start the server
server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
