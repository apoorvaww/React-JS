import React, { useState } from "react";
import userContext from "./userContext";

//returning the children as it is by passing the children by wrapping those children first.

const UserContextProvider = ( {children} ) => {
    const[user, setUser] = useState(null);
    return (
        <userContext.Provider value={{user, setUser}}>
        {children}
        </userContext.Provider>
    )
}


export default UserContextProvider;