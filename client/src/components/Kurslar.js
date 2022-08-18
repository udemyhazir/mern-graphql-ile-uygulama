

import Spinner from './Spinner'
import { useQuery } from '@apollo/client'
import { GET_KURSLAR } from '../queries/kursQueries'
import KursCard from './KursCard'

export default function Kurslar() {

    const {loading,error,data}=useQuery(GET_KURSLAR)

    if (loading) return <Spinner />
    if(error) return <p>Kurslar çekilirken hata oluştu</p>
    
  return <>
    {data.kurslar.length > 0 ? (
        <div className='row mt-4'>
            {data.kurslar.map (k=>(
                <KursCard key={k.id} kurs={k} />
            ))}
        </div>
    ) : (<p>Henüz kurs eklenmedi</p>)}
  </>
}
