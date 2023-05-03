'use client';

import { createContext, useContext, useState } from "react";

export const AppContex = createContext({})

export const AppContexProvider = ({children}) => {
    const [demo, setdemo] = useState('DEMO')
    const [side, setside] = useState('SIDE')

    return (
        <AppContex.Provider value={{demo, setdemo, side, setside}}>
            {children}
        </AppContex.Provider>
    )
}

export default AppContexProvider;
