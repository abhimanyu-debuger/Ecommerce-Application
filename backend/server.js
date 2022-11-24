const express = require('express');
const {errorHandler} = require('./middlewares/errorMiddleware')
const dotenv = require('dotenv');
const connectDb = require('./config/config');
const products = require('./data/products');
const UserRoutes = require("./routes/UserRoute");
const productRoutes = require('./routes/productsRoute');
const orderRoutes = require('./routes/orderRoute');

dotenv.config();

connectDb();
const app = express();

app.use(express.json());

app.get('/',(req,res) =>{
    res.send("<h1>WELCOME TO NODE SERVER</h1>");
});

app.use("/api",productRoutes);
app.use("/api/users",UserRoutes);
app.use("/api/orders", orderRoutes);
app.get("/api/config/paypal", (req,res) => {
     res.send(process.env.PAYPAL_CLIENT_ID);
});

app.use(errorHandler);

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
 console.log(`Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`);
});