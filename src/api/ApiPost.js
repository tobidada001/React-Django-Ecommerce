import React from 'react';

function ApiPost(url, bodyData) {
    var link = fetch(`http://127.0.0.1:8000/api/api/${url}/`, {
        'method': 'POST',
        headers : {  'Content-Type': 'application/json'  },
        body: JSON.stringify(bodyData)
    })

    return link;
}

export default ApiPost;
