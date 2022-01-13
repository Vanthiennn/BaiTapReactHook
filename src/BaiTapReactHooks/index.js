import React from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucSac from './DanhSachXucSac'
import DiemCuoc from './DiemCuoc'
import "./XucXacItem.css"

export default function BaiTapReactHook(props) {
    return (
        <div id="BaiTapGameBauCua" className='container-fluid'>
           
            <DiemCuoc/>
            <div className='row'>
                <div className='col-8'>
                    <DanhSachCuoc/>
                </div>
                <div className='col-4'>
                    <DanhSachXucSac/>
                </div>
            </div>
        </div>
    )
}
