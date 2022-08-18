import EgitmenBilgi from "../components/EgitmenBilgi"

import { useParams,Link } from "react-router-dom"
import Spinner from '../components/Spinner'
import { useQuery } from "@apollo/client"
import { GET_KURS } from "../queries/kursQueries"

import KursSilButon from "../components/KursSilButon"
import KursDuzenle from "../components/KursDuzenle"

export default function Kurs() {

    const {id}=useParams()
    const {loading,error,data}=useQuery(GET_KURS,{
        variables:{id}
    })

    if(loading) return <Spinner />
    if(error) return <p>Bir hata oluştu</p>


  return <>
    {!loading && !error &&(
        <div className="mx-auto w-75 card p-5">
            <Link to="/" className="btn btn-secondary btn-sm w-25 d-inline ms-auto">Geri</Link>
            <h1>{data.kurs.isim}</h1>
            <p>{data.kurs.aciklama}</p>
            <h5 className="mt-3">Kurs Durum:</h5>
            <p className="lead">{data.kurs.durum}</p>
            <EgitmenBilgi egitmen={data.kurs.egitmen} />
            <KursDuzenle kurs={data.kurs} />
            <KursSilButon kursId={data.kurs.id} />
        </div>
    )}
  </>

}
