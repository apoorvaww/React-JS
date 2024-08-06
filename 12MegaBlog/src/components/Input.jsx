import React, {useId} from "react";
import { forwardRef } from "react";

//forwardref hook is used with a render function. React calls this render function with props and ref which our component recieves from its parent.
//forwardRef() returns a react component that you can render in JSX.

//Basically, in simpler terms forwardRef lets the parent component access some DOM nodes and lets them expose these DOM nodes by using ref, which is also passed by the parent node.
const Input = forwardRef( ({
    label,
    type = "text",
    className = "",
    ...props
    //these are props: the props which will be passed by the parent component.
}, ref //ref attribute which is also passe by the parent component
) => {
    const id = useId()
    return(
        <div className="w-full">
            {label && <label 
            className="inline-block mb-1 pl-1" 
            htmlFor={id}>
                {label}
            </label>}

            <input 
            type={type}
            className={ `px-3 py-2 rounded-xl bg-white text-black outline-none focus:bg-gray-50 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}

            />
        </div>
    )
})

export default Input