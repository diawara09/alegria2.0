import { redirect, useFetcher } from "react-router"
import toast,{Toaster} from 'react-hot-toast'
import { useEffect, useState } from "react"
import type { Route } from "./+types/payment"

export async function clientAction({request}: Route.ClientActionArgs){
    const formData = await request.formData()
    const req = await fetch("https://localhost:300/", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    const response = await req.json()
    if(response.payment_url){
        window.location.href = response.payment_url
    } 
    return response


}

export default function Payment(){
    const fetcher = useFetcher()
    const [amount, setAmount] = useState(1000)

    useEffect(() => {
        const toastOptions = {
            duration: 5000,
          }
        toast.dismiss()
      fetcher.data
        ? fetcher.data.payment_url
          ? toast.success("Redirecting...", toastOptions)
          : toast.error(fetcher.data.message, toastOptions)
        : ''
    })
    return(<div className="w-full flex m-5 p-5 justify-center items-center">
        <fetcher.Form method="post" className="card rounded-none lg:min-w-96 sm:max-w-sm">
          <div className="card-body">
            <h5 className="card-title mb-0">Faire une donation</h5>
            <div className="text-base-content/50 mb-6">
              Vous recevrez un email dans votre inbox.
            </div>
            <div className="">
              <label className="label-text" htmlFor="full_name">
                Nom Complet
              </label>
              <input
                type="text"
                placeholder="Mohamed Diawara"
                name="fullName"
                            className="input"
                            required
                id="full_name"
              />
             
            </div>
            <div className="">
              <label className="label-text" htmlFor="amount">
                Montant (en FCFA)
              </label>
            <input type="number" className="input" id="amount" step={500} min={1000} name="amount" />
            </div>
            <Toaster />
            <div className="card-actions">
              <button type="submit" className="btn btn-primary">
                {' '}
                {fetcher.state === 'idle' ? (
                  'Envoyer'
                ) : (
                  <span className="loading loading-ball"></span>
                )}{' '}
              </button>
            </div>
          </div>
        </fetcher.Form>
      </div>)
}