import React, { FC, useState, ChangeEvent, useEffect } from "react";

interface Props {
    name: string
}

interface State {
    changeName: string
}

const Test: FC<Props> = props => {
    const [ name, setName ] = useState(props.name);

    // To run method after changing the name state
    useEffect(() => {
        console.log("Name is updated!");
    },[name]);

    // event handler for onChange event
    const onNameChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        const value = event.target.value;
        setName(value);
    }
    
    return(
        <>
            <h2>{ props.children } {" "} { name }</h2>
            <input type = "text" onChange = { onNameChange } value = { name } />
        </>
    )
}

// FC to use children property in the props
// <p={}> is the props interface type

export default Test;