import { createContext, useState } from "react"

const LogContext = createContext({})

const LogContextProvider = props => {

    const [isLogged, setIsLogged] = useState(false)

    const value = {
        isLogged : isLogged,
        setIsLogged : setIsLogged
    }

    return (
        <LogContext.Provider value={value}>
            {props.children}
        </LogContext.Provider>
    )
}

export {
    LogContextProvider,
    LogContext
}
