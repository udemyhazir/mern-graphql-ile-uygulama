

import {FaTrash} from 'react-icons/fa'
import {useMutation} from '@apollo/client'
import {DELETE_EGITMEN} from '../mutations/egitmenMutation'
import {GET_EGITMENLER} from '../queries/egitmenQueries'

function EgitmenRow({egitmen}) {

    const [egitmenSil]=useMutation(DELETE_EGITMEN,{
        variables:{id:egitmen.id},
        refetchQueries:[{query:GET_EGITMENLER}]
    })

  return (
    <tr>
        <td>{egitmen.isim}</td>
        <td>{egitmen.email}</td>
        <td>
            <button className='btn btn-danger btn-sm' onClick={egitmenSil}><FaTrash/></button>
        </td>
    </tr>
  )
}

export default EgitmenRow