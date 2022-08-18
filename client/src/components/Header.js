
import logo from './assets/logo.png'
import {useQuery} from '@apollo/client'
import {GET_YETKILI} from '../queries/yetkiliQueries'
import { useState,useEffect } from 'react'
import {decodeToken} from 'react-jwt'

export default function Header(){

    const [giris,setGiris]=useState(false)

    const token=localStorage.getItem('token')

    const myId=decodeToken(token)

    let id;
    if(myId!==null){
        id=myId.id
    }


    useQuery(GET_YETKILI,{
        variables:{id},
        onCompleted:data=>{
            if(data.yetkili==null){
                setGiris(false)
            }

            setGiris(true)
        }
    })


    const handleCikis=()=>{
        setGiris(false)
        localStorage.removeItem('token')
    }


    useEffect(()=>{
        if(!token)setGiris(false)
        if(id===undefined) setGiris(false)
    },[])

    return( 
        <nav className='navbar bg-light mb-4 p-0'>
            <div className='container'>
                <a className='navbar-brand' href="/">
                    <div className='d-flex'>
                        <img src={logo} alt="logo" className='mr-2' />
                        <div>AOS Eğitim</div>
                    </div>
                </a>

            {!giris &&
                <div className='d-flex'>
                    <a className='navbar-brand' href="/signup">
                        <div>Üye Ol</div>
                    </a>
                    <a className='navbar-brand' href="/login">
                        <div>Giriş</div>
                    </a>
                </div>
            }

            {giris && 
                <div className='d-flex'>
                    <a href="/" className='navbar-brand' onClick={handleCikis}>
                        <div>Çıkış</div>
                    </a>
                </div>
            }
            </div>
            
        </nav>
    )

}