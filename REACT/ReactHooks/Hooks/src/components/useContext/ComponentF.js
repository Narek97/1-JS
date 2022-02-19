import React from 'react'
import {UserContent, ChanelContent} from "../../components/useContext/ComponentC";
//Tvyalneri stachum aranch useContext ognutyamb


export default () => {
    return (
        <div>
            <UserContent.Consumer>
                {
                    user => {
                        return (
                            <ChanelContent.Consumer>
                                {
                                    chanel => {
                                        return (
                                            <div>
                                                user context {user}, chanel context {chanel}
                                            </div>
                                        )
                                    }
                                }

                            </ChanelContent.Consumer>
                        )
                    }
                }
            </UserContent.Consumer>
        </div>
    )
}
