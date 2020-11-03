const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HiwTKLIEvAeG80tPlXIOlRTlG82dDSq979k7FcF57q7MsYnimiMbL0PkXs5elxVwmjZTiF63OBQppwiw2xtoIVo0055FVM2IP"
);

//API

//App Config
const app = express();

//Middlewares
app.use(cors( {origin : true}));
app.use(express.json());

//API Routes
app.get('/',(req,res) =>
  res.status(200).send('Hello World')
)

app.post('/payments/create', async(req,res) => {
  const total = req.query.total;

  console.log('Payment request Received, for the amount ->',total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount : total,
    currency : "inr",
  })
  res.status(201).send({
    clientSecret : paymentIntent.client_secret,
  })
})

//Listen Command
exports.api = functions.https.onRequest(app)


//http://localhost:5001/clone-756de/us-central1/api
