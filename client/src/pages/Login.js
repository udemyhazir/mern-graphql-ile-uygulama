

import { useState } from "react"
import { useMutation } from "@apollo/client"
import { YETKILI_GIRIS } from "../mutations/yetkiliMutation"

import Spinner from "../components/Spinner"


export default function Login() {

    const [email,setEmail]=useState('')
    const [parola,setParola]=useState('')

    const [yetkiliGiris,{error,loading}]=useMutation(YETKILI_GIRIS,{
        variables:{email,parola},
        update(proxy,result){
            window.location.assign('/')
        }
    })

    const handleSubmit=async (e)=>{
        e.preventDefault();
        
        if(email==='' ||parola===''){
            return alert('Lütfen alanları doldurunuz')
        }

        const yetkili=await yetkiliGiris();

        //console.log(yetkili);

        localStorage.setItem('token',yetkili.data.yetkiliGiris.token)
    }

    if(loading) return <Spinner tip="grow" />

    return (
        <div className="card" >
            <div className="card-body">
            <h5 className="card-title">Giriş Yap</h5>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="emailAdres" className="form-label">Email Adresiniz</label>
                    <input type="email" className="form-control" id="emailAdres" value={email} onChange={(e)=>setEmail(e.target.value)}   />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="parola" className="form-label">Parolanız</label>
                    <input type="password" className="form-control" id="parola" value={parola} onChange={(e)=>setParola(e.target.value)}   />
                </div>
                <button type="submit" className="btn btn-primary">Giriş</button>
                {error && <p className="text-danger">{error.message}</p>}
            </form>
            
            </div>
        </div>
      )
}
