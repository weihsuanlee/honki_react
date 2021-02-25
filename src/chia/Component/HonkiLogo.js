import React,{Component} from 'react'
import Logo from '../image/logo.svg'

class HonkiLogo extends Component{
    render(){
        return(
            <>
                <div className="chia_logo">
                    <img src={Logo} className="chia_logo" alt="HONKI" />
                </div>
            </>
        )
    }
}

export default HonkiLogo