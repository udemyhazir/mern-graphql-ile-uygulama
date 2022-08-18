

import EgitmenRow from './EgitmenRow'
import {useQuery} from '@apollo/client'
import {GET_EGITMENLER} from '../queries/egitmenQueries'

import Spinner from './Spinner'



export default function Egitmen(){

    const {loading,error,data}=useQuery(GET_EGITMENLER)

    if(loading) return <Spinner />
    if(error) return <p>Eğitmenler çekilirken hata oluştu</p>

    

    return <> {!loading && !error &&(
        <table className='table table-hover mt-3'>
            <thead>
                <tr>
                    <th>İsim</th>
                    <th>Email</th>
                    <th>İşlem</th>
                </tr>
            </thead>
            <tbody>
                {data.egitmenler.map(e=>(
                    <EgitmenRow egitmen={e} key={e.id} />
                ))}
            </tbody>
        </table>
    )}
    
    </>
}