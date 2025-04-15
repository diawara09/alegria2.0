import express from 'express'
import 'dotenv/config'
import cors from 'cors'


const corsOptions = {
    origin: ['http://localhost:5173', 'https://alegria2-0.vercel.app'],
    //credentials: true,
    optionsSuccessStatus: 200,
    credentials: true,
  }
const app = express()

const port = process.env.PORT || 5500


app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, homepage here!')
})

app.post("/", async(req,res) => {
    const {fullName,amount} = req.body
    const apiKey = process.env.CINET_API
    const siteId = process.env.SITE_ID
    const transactionId = Math.floor(Math.random() * 100000000).toString()
    const currency = "XOF"
    const description = `${fullName} has donated ${amount} FCFA!`
    const notifyUrl = `https://localhost:${port}/notify`
    const returnUrl = `https://localhost:${port}/return`
    const channels = "MOBILE_MONEY"

    var data = JSON.stringify({
        "apikey": apiKey,
        "site_id": siteId,
        "transaction_id":  transactionId, //
        "amount": parseInt(amount),
        "currency": currency,
        "customer_name": fullName.split(" ")[0],
        "customer_surname": fullName.split(" ")[1],
        "customer_email": "diawaraholding223@gmail.com",
        "customer_phone_number": "+22370213798",
        "customer_address": "Bamako",
        "customer_city": "Bamako",
        "customer_country": "CI",
        "customer_state": "CI",
        "customer_zip_code": "065100",
        "alternative_currency": "",
        "description": description,
        "notify_url": notifyUrl,
        "return_url": returnUrl,
        "channels": "CREDIT_CARD",
        "metadata": "user1",
        "lang": "FR",
        "invoice_data": {
          "Donnee1": "",
          "Donnee2": "",
          "Donnee3": ""
        }
      });
  
      const config = {
        method: 'post',
        headers: { 
          'Content-Type': 'application/json'
        },
        body : data
      };

      const cinetReq = await fetch('https://api-checkout.cinetpay.com/v2/payment',config)
      const response = await cinetReq.json()

      console.log(response);
     
      return response.data ?  res.send(response.data):res.send(response.message)


})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
