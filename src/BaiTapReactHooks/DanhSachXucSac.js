import React from 'react'
import XucSac from './XucSac'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'

export default function DanhSachXucSac(props) {

    const mangXucSac = useSelector((state)=>state.BaiTapReactHooksReducer.mangXucSac)
    const dispatch = useDispatch()

    return (
        <div className='mt-5 ml-5'>
            <div className='bg-white' style={{width:350,height:350,borderRadius:"50%",paddingLeft:30}}>
                <div className='row'>
                    <div className='col-12 text-center' style={{marginTop:0,marginLeft:100}}>
                        <XucSac xucSacItem={mangXucSac[0]}/>
                    </div>
                    <div className='col-4 text-right' style={{marginLeft:"30px"}}>
                        <XucSac xucSacItem={mangXucSac[1]}/>
                    </div>
                    <div className='col-4 text-right' style={{marginLeft:"30px"}}>
                        <XucSac xucSacItem={mangXucSac[2]}/>
                    </div>
                </div>
            </div>
            <div className='mt-5' style={{marginLeft:"28%"}}>
                <button onClick={()=>{
                    dispatch({
                        type:"PLAY_GAME"
                        
                    })
                }} className='btn btn-success p-2' style={{fontSize:"25px"}}>PLAY</button>
            </div>
        </div>
    )
}
