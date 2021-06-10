const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
require("./server/config/mongoose.config");

// routes connection
// immediately invoked function execution

require("./server/routes/crew.routes")(app);

app.listen(port, () => console.log(`listening on port ${port}`))
