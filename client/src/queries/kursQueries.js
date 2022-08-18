
import {gql} from '@apollo/client'

const GET_KURSLAR=gql`

    query getKurslar{
        kurslar{ 
            id,isim,aciklama,durum
        }
    }

`


const GET_KURS=gql`

    query getKurs($id:ID!){
        kurs(id:$id){
            id,
            isim,
            aciklama,
            durum,
            egitmen{
                id,
                isim,
                email
            }
        }
    }

`

export {GET_KURSLAR,GET_KURS}