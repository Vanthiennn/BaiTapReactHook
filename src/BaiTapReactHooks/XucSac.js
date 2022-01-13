import React from 'react'
import { animated, useSpring } from 'react-spring'

export default function XucSac(props) {
    
    let {xucSacItem} = props
    
    const [propsDice,set] = useSpring(()=>({        
            to:{
                xyz:[360,360,360],
            },
            from:{
                xyz:[0,0,0]
            },
            config:{
                duration:1000
            },
              
    }))
    set({
        reset:true,
        xyz:[360,360,360]})
    return (
        <>
            <div  className='scene ml-2'>
                <animated.div style={{transform:propsDice.xyz.to((x,y,z)=>`translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)}} className='cube'>
                    
                    <div className='cube__face front'>
                        <img  style={{width:"100%"}} src={xucSacItem.hinhAnh}></img>
                    </div>
                    <div className='cube__face back'>
                        <img style={{width:"100%"}} src="./img/cua.png"></img>
                    </div>
                    <div className='cube__face right'>
                        <img  style={{width:"100%"}} src="./img/nai.png"></img>
                    </div>
                    <div className='cube__face left'>
                        <img  style={{width:"100%"}} src="./img/bau.png"></img>
                    </div>
                    <div className='cube__face top'>
                        <img  style={{width:"100%"}} src="./img/tom.png"></img>
                    </div>
                    <div className='cube__face bottom'>
                        <img  style={{width:"100%"}} src="./img/ca.png"></img>    
                    </div>                
                </animated.div>
            </div>
        </>
    )
}
