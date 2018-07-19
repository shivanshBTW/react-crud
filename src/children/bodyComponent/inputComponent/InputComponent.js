import React from 'react';
// import { ButtonComponent } from './ButtonComponent/ButtonComponent';
import  InputArea  from './InputArea/InputArea';
// import '../BodyComponent.css'
export const InputComponent = (props)=>{
    return (
        <div className="col-lg-6 col-md-6 col-sm-6 col-6" >
            <div className="container " style={{border:'1px solid grey'}}>
                    {/* <ButtonComponent /> */}
                    <InputArea addContent={props.addContent} loadContent={props.loadContent}/>
            </div>
        </div>
    )
}