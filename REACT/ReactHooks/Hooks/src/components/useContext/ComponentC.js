import React from 'react'
import ComponentE from "./ComponentE";
export const UserContent = React.createContext()
export const ChanelContent = React.createContext()

export default () => {
    return(
        <div>
            <UserContent.Provider value={'World'}>
                <ChanelContent.Provider value={'Codevolution'}>
                    <ComponentE/>
                </ChanelContent.Provider>
            </UserContent.Provider>
        </div>
    )
}
