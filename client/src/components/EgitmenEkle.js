

import {FaUser} from 'react-icons/fa'
import {useState} from 'react'
import {useMutation} from '@apollo/client'
import {ADD_EGITMEN} from '../mutations/egitmenMutation'
import {GET_EGITMENLER} from '../queries/egitmenQueries'


export default function EgitmenEkle() {

    const [isim,setIsim]=useState('')
    const [email,setEmail]=useState('')

    const [egitmenEkle]=useMutation(ADD_EGITMEN,{
        variables:{isim,email},
        refetchQueries:[{query:GET_EGITMENLER}]
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(isim==='' || email ===''){
            return alert('Lütfen alanları doldurunuz')
        }

        //console.log(isim,email);

        egitmenEkle(isim,email)
        setIsim('')
        setEmail('')
    }


  return (
    <div className='text-center'>
        <button type='button' className='btn btn-secondary' data-bs-toggle="modal" data-bs-target="#egitmenEkleModal">
            <div className='d-flex align-items-center'>
                <FaUser className='icon' />
                <div>Eğitmen Ekle</div>
            </div>
        </button>

        <div className='modal fade' id="egitmenEkleModal" aria-labelledby='egitmenEkleModalLabel'
            aria-hidden='true'>

            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='egitmenEkleModalLabel'>
                            Eğitmen Ekle
                        </h5>
                        <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                        ></button>
                    </div>
                    <div className='modal-body'>
                    <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                      <label className='form-label'>İsim</label>
                      <input
                        type='text'
                        className='form-control'
                        id='isim'
                        value={isim}
                        onChange={(e)=>setIsim(e.target.value)}
                        
                      />
                    </div>
                    <div className='mb-3'>
                      <label className='form-label'>Email</label>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
    
                    <button
                      type='submit'
                      data-bs-dismiss='modal'
                      className='btn btn-secondary'
                    >
                      EKLE
                    </button>
                  </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
