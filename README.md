# React `useRef` and `useState` Example

This repository demonstrates the use of React's `useRef` and `useState` hooks in a simple component.

## Features

- **useRef Hook**: Used to persist a mutable value across renders without causing a re-render.
- **useState Hook**: Handles state updates and re-renders the component when state changes.
- **React `createRef`**: Used to reference a DOM element and manipulate it directly.

## Component Code

```jsx
import { useState, createRef, useRef } from "react";

function UseRef() {
    const [data2, updateData2] = useState({ num: 0 });
    const [inputValue, updateValue] = useState("");

    const elem = createRef(); // Create a reference to the DOM element
    const data = useRef(0); // Persistent reference that doesn't trigger re-renders

    // Updates the `useRef` value and logs it to the console
    function handleRef() {
        data.current = data.current + 1;
        console.log(data);
    }

    // Updates the state value, causing a re-render
    function handleState() {
        updateData2({ num: data2.num + 1 });
    }

    // Captures the input value using the `createRef` reference
    function handleFocus() {
        updateValue(elem.current.value);
    }

    return (
        <div>
            <h1>UseRef</h1>
            <h3>Ref Value: {data.current}</h3>
            <button onClick={handleRef}>Click to Update Ref</button>
            <h3>State Value: {data2.num}</h3>
            <button onClick={handleState}>Click to Update State</button>
            <h3>{inputValue}</h3>
            <input
                onChange={handleFocus}
                placeholder="Enter a Username"
                ref={elem}
            />
        </div>
    );
}

export default UseRef;
