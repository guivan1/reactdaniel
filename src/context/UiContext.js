import React, { createContext, useState } from 'react'
import { children } from 'react'

export const UiContext = createContext()



export const UiContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false)
    // const [darkMode, setDarkMode] = useState(false)

    return (
        <UiContext.Provider value={{loading, setLoading}}>
            {children}
        </UiContext.Provider>
    )
}