import React from 'react'

export default function Api(url, setData) {
    var link = fetch(`http://127.0.0.1:8000/api/api/${url}/`, {
        'method': 'GET',
        headers : {  'Content-Type': 'application/json'   } 
    }).then(resp => resp.json())
    .then(resp => {setData(resp)} )

    return link
}

export function DetailApi(id, setData){
    var link = fetch(`http://127.0.0.1:8000/api/api/detail/${id}`, {
        'method': 'GET',
        headers : {  'Content-Type': 'application/json'   } 
    }).then(resp => resp.json())
    .then(resp => {setData(resp)} ).catch( error =>{console.log(error)})

    return link
}
