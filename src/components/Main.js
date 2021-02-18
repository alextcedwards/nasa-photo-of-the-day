import React from 'react';




export default function Main(props){
    const {nasaData} = props

    return (
        <div className = 'Main'>
            <img src={nasaData.url} alt = ""/>
        </div>
    )
}


