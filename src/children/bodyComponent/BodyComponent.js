import React from 'react'
import { InputComponent } from './inputComponent/InputComponent';
import { OutputComponent } from './outputComponent/OutputComponent';
import "./BodyComponent.css"

export const BodyComponent = (props)=>{
    return (
        <div className="row container-fluid marginTop">
            <InputComponent addContent={props.addContent} loadContent={props.loadContent}/>
            <OutputComponent displayData={props.displayData}/>
        </div>
    )
}