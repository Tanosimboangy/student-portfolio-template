import React from 'react'
import ReactDOM from 'react-dom'
// Children === props that takes anything inside of the children
// IIFE method
const Button = ({ onKeyboardTap, children }) => {
    return <button onKeyDown={(event) => {
        if (event.key === "Enter") {
            onKeyboardTap()
        }
    }}>{children}</button>
} 

const domElement = document.getElementById("root");

ReactDOM.render(
    <div>
        <Button onKeyboardTap={() => {
            console.log("I was clicked");
        }}>
            + Add
        </Button> 
        <Button>- Substract</Button>
        <Button children="MULTIPLY *******" />
    </div>, domElement)

// // NB:
// // <Button children={element} />
// // React.createElement(Button, {children: element})