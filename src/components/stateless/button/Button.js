import React from 'react'

export default function button(props) {
    return (
        <>
            <button
                onClick = {props.clic}
                type={props.type} 
                className={`btn ${props.typebtn}`}>
                    {props.children}
            </button>   
        </>
    )
}
