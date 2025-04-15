import express from 'express'
import 'dotenv/config'

const app = express()

const port = process.env.PORT || 5500

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
        "amount": amount,
        "currency": currency,
        "alternative_currency": "",
        "description": description,
        "notify_url": notifyUrl,
        "return_url": returnUrl,
        "channels": "ALL",
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
     
      return response.data ?  res.send(response.data):res.send(response.message)


})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
