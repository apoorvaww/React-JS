import React, {useId} from "react";
import { forwardRef } from "react";

function Select ({
    options = [], 
    label,
    className = '',
    ...props
}, ref) {

    const id = useId();

    return(
        <div className="w-full">
            {label && 
            <label htmlFor={id} className="">
                
            </label> }
            <select 
            {...props} 
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-xl bg-white text-black outline-none focus:bg-gray-100 duration-200 border border-gray-100 w-full ${className}`} >
                {options?.map( (option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default forwardRef(Select);