

import {gql} from '@apollo/client'

const GET_EGITMENLER=gql `

query getEgitmenler{
    egitmenler{
        id,isim,email
    }
}

`

export {GET_EGITMENLER}