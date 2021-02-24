import React, {useState, useEffect}from 'react'
import '../Style/chia_switch.scss'
import $ from 'jquery'


function Switch(props){
    // const[ismonth, setIsMonth] = useState(false)

    // useEffect(()=>{
    //     console.log('componentDidMoint')
    //    console.log(ismonth)
    // },[])

    // useEffect(()=>{
    //    console.log(ismonth)
    // },[ismonth])
    return(
        <>
            <div className="chia_toptenswitch  ml-auto py-2 d-flex flex-column　row">
                <div className="chia_switchlabel">
                    <p className="chia_week">週</p>
                    <p className="chia_month">月</p>
                </div>
                <label className="chia_switch mx-auto">
                    <input type="checkbox" Name="chia_checked" className="chia_checkedbox" onClick={(e)=>{if(!props.ismonth){
                        props.setIsMonth(true)
                        // console.log(props.ismonth)
                        props.addYellow()
                    }else{
                        props.setIsMonth(false)
                        // console.log(props.ismonth)
                        props.addGrey()
                    }
                  
                        }}/>
                    <span className="chia_slider round" data-on="month" data-off="week"></span>
                </label>
            </div>
        </>
    )
}

export default Switch