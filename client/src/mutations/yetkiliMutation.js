
import {gql} from '@apollo/client'

const ADD_YETKILI=gql`

mutation yetkiliEkle($email:String!,$parola:String!){
    yetkiliEkle(email:$email,parola:$parola){
        id,
        email,
        parola,
        token
    }
}

` 
const YETKILI_GIRIS=gql` 
    mutation yetkiliGiris($email:String!,$parola:String!){
        yetkiliGiris(email:$email,parola:$parola){
            id,email,token
        }
    }
`


export {ADD_YETKILI,YETKILI_GIRIS}