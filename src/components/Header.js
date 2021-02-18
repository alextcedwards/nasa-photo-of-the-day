import React from 'react';


export default function Header(props){
    const {nasaData} = props;

    return (
        <>
        <h1>NASA PHOTO OF THE DAY</h1>
        <div className = 'header'>
            <h2>{nasaData.explanation}</h2>
        </div>
        </>
    )
}