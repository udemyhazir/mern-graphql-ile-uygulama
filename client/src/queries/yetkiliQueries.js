

import {gql} from '@apollo/client'

const GET_YETKILI=gql`

    query getYetkili($id:ID!){
        yetkili(id:$id){
            id,email,
        }
    }

`

export {GET_YETKILI}