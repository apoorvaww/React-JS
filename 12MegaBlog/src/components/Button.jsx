import React from "react";

function Button({
    children,
    type = 'button',
    bgcolor = 'bg-blue-300',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-xl ${bgcolor} ${type} ${textColor} ${className}`} {...props}> 

        </button>
    )
}

export default Button