
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { ADD_YETKILI } from "../mutations/yetkiliMutation"
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner"


export default function Signup() {


    const navigate=useNavigate();
    const [email,setEmail]=useState('')
    const [parola,setParola]=useState('')

    const [yetkiliEkle,{loading}]=useMutation(ADD_YETKILI,{
        variables:{email,parola},
        update(proxy,result){
            navigate('/')
        }
    })

    const handleSubmit= async (e)=>{
        e.preventDefault();
        
        if(email==='' || parola ===''){
            return alert('Alanlar boş geçilemez')
        }

        const yetkili=await yetkiliEkle()

        //console.log(yetkili);
        localStorage.setItem('token',yetkili.data.yetkiliEkle.token)
        
        setEmail('')
        setParola('')
    }


    if(loading) return <Spinner tip="grow" />

  return (
    
    <div className="card" >
    <div className="card-body">
    <h5 className="card-title">Üyelik Oluştur</h5>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="emailAdres" className="form-label">Email Adresiniz</label>
            <input type="email" className="form-control" id="emailAdres" value={email} onChange={(e)=>setEmail(e.target.value)}  />
            
        </div>
        <div className="mb-3">
            <label htmlFor="parola" className="form-label">Parolanız</label>
            <input type="password" className="form-control" id="parola" value={parola} onChange={(e)=>setParola(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Üye Ol</button>
    </form>
    </div>
</div>
  )
}
