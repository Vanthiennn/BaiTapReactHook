import React from 'react'
import { useDispatch } from 'react-redux'
import { useSpring,animated} from "react-spring"

export default function QuanCuoc(props) {
    const {quanCuoc} = props ; 

    const dispatch = useDispatch()

    const [propsUseSpringIncrease,setInCrease] = useSpring(()=>{
        return{
            to:{scale:1.25},
            from:{scale:1},
        }
    })
   
    const [propsUseSpringDecrease,setDeCrease] = useSpring(()=>{
        return{
            to:{scale:1.25},
            from:{scale:1},
        }
    })

    return (
        <div className='mt-3'>
            <img src={quanCuoc.hinhAnh} style={{width:200}}/>
            <div className='bg-success mt-2 pb-2 text-center' style={{borderRadius:"10px",width:200}}>
                <animated.button style={{transform: propsUseSpringIncrease.scale.to(scale => `scale(${scale})`)}}  onClick={()=>{
                    setInCrease({
                        scale:1.25,
                        reset:true
                    })

                    dispatch({
                        type:"DAT_CUOC_BAU_CUA",
                        quanCuoc,
                        tangGiam:true,
                    })
                }} className='btn btn-danger mr-3'>+</animated.button>
                <span style={{color:"yellow",fontSize:"25px"}}>{quanCuoc.diemCuoc}</span>
                <animated.button style={{transform: propsUseSpringDecrease.scale.to(scale => `scale(${scale})`)}}  onClick={()=>{

                    setDeCrease({
                        scale:1.25,
                        reset:true
                    })

                     dispatch({
                        type:"DAT_CUOC_BAU_CUA",
                        quanCuoc,
                        tangGiam:false,
                    })
                }} className='btn btn-danger ml-3'>-</animated.button>
            </div>
            
        </div>
    )
}
