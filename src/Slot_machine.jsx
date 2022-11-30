import React from "react";

const Slot=(props)=>{
    let a=props.a;
    let b=props.b;
    let c=props.c;

    if((a===b)&&(b===c)){
        return(
            <>
            <h1>{a}{b}{c}</h1>
            <br/><br/>
            <h1>This is matching!😀😄</h1> 
            <br/><br/>
            <hr/>
            <br/><br/>
            </>
        );
    }
    else{
        return(
            <>
            <h1>{a}{b}{c}</h1>
            <br/><br/>
            <h1>This is NOT matching!😡😢</h1> 
            <br/><br/>
            <hr/>
            <br/><br/>
            </>
        );
    }
}

export default Slot;