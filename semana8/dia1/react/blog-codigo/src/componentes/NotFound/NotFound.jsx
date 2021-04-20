import React from 'react'
import not_found from './../../assets/images/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={not_found} style={{maxWidth: "1080px"}} alt="not found image"/>
        </div>
    )
}

export default NotFound
