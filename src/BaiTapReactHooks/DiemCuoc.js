import React from 'react'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'

export default function DiemCuoc(props) {


    const tongDiem = useSelector((state)=>state.BaiTapReactHooksReducer.tongDiem)
    const dispatch = useDispatch()
    return (
        <div>
            <h3 className='text-center display-4 p-3'>GAME BẦU CUA CYBERLEARN</h3>
            <div className='text-center mt-5'>
                <span style={{fontSize:"30px",borderRadius:"5%"}} className='p-3 text-white bg-danger'>Tiền thưởng : <span style={{color:"green"}}>{tongDiem.toLocaleString()}$ </span></span>
            </div>
            <div className='text-center mt-5'>
                <button onClick={()=>{
                    dispatch({
                        type:"CHOI_LAI"
                    })
                }} style={{fontSize:"20px",borderRadius:"5%",border:"none"}} className='p-3 text-white bg-success'>Chơi lại</button>
            </div>
        </div>
    )
}
