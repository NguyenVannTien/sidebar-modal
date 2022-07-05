import React, { useState, createContext } from 'react'

const Context = createContext()

function ContextProvider ({ children }) {
    
    const [showSidebar, setShowSidebar] = useState(false)
    const [showModal, setShowModal] = useState(false)


    const handleShowSidebar = () => setShowSidebar(!showSidebar)
    const handleShowModal = () => setShowModal(!showModal)

    const value ={
        showSidebar,
        showModal,
        handleShowSidebar,
        handleShowModal,
    }

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider> 
    )

}


export { Context,ContextProvider }