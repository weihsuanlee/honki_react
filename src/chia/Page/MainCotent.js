import React from 'react'
import Mainbook from './Mainbook'

function MainContent(props){
    return(
        <main role="main" className="flex-shrink-0">
            <div className="container-fluid">
                <Mainbook />
            </div>
        </main>
    )

}

export default MainContent