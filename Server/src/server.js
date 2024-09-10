const express = require("express");
const dotenv = require("dotenv");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJSDocs = YAML.load("./src/config/swagger/api.yaml");
const dbConnect = require("./config/database/dbConnect");
const routes = require('./routers/index');

// const authRouter = require("./routers/authRouter");
// const postsRouter = require("./routers/postsRouter");
// const userRouter = require("./routers/userRouter");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const cloudinary = require("cloudinary").v2;

dotenv.config("./.env");

const app = express();

//middlewares
app.use(express.json({ limit: "10mb" }));
app.use(morgan("common"));
app.use(cookieParser());
let origin = process.env.CLIENT_URL
console.log('here env', process.env.NODE_ENV);


if(process.env.NODE_ENV === 'production') {
    origin = process.env.CLIENT_ORIGIN;
}

app.use(
    cors({
        credentials: true,
        origin
    })
);

// app.use("/auth", authRouter);
// app.use("/posts", postsRouter);
// app.use("/user", userRouter);

// Use the centralized routes
app.use(routes);

app.get("/", (req, res) => {
    res.status(200).send("OK from Server");
});

const PORT = process.env.PORT || 4001;

// const swagger = require('./config/swagger')
// swagger(app)
app.use("/api/documentation", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs))

dbConnect();
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT} and Swagger documentation: http://localhost:${PORT}/api/documentation`);
});
