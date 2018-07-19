import React from 'react'
import '../../BodyComponent.css'

export const ButtonComponent = (props)=>{
    return(
        <div className="row justify-content-between container marginTop">
            <button className="btn btn-primary" id="addButton">Add</button>
            <button onClick={props.loadContent} className="btn btn-primary" id="loadButton">Load</button>
        </div>
    )
}