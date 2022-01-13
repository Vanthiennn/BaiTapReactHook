const initialState = {
    danhSachCuoc:[
        {ma:"bau",hinhAnh:"./img/bau.png",diemCuoc:0},
        {ma:"ca",hinhAnh:"./img/ca.png",diemCuoc:0},
        {ma:"cua",hinhAnh:"./img/cua.png",diemCuoc:0},
        {ma:"ga",hinhAnh:"./img/ga.png",diemCuoc:0},
        {ma:"nai",hinhAnh:"./img/nai.png",diemCuoc:0},
        {ma:"tom",hinhAnh:"./img/tom.png",diemCuoc:0},
    ],
    tongDiem:1000,
    mangXucSac:[
        {ma:"ga",hinhAnh:"./img/ga.png"},
        {ma:"nai",hinhAnh:"./img/nai.png"},
        {ma:"tom",hinhAnh:"./img/tom.png"},
    ]
}

 const BaiTapReactHooksReducer = (state = initialState,action) => {
    switch (action.type) {

        case "DAT_CUOC_BAU_CUA": {
            
            const danhSachCuocUpdate = [...state.danhSachCuoc]
            const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma)
            if(index !== -1) {
                if(action.tangGiam && state.tongDiem > 0)
                {
                    danhSachCuocUpdate[index].diemCuoc += 100;
                    state.tongDiem -= 100 ;
                } else if(!action.tangGiam && danhSachCuocUpdate[index].diemCuoc > 0) {       
                        danhSachCuocUpdate[index].diemCuoc -= 100;
                        state.tongDiem +=   100 
                }
                
            }
            state.danhSachCuoc = danhSachCuocUpdate
            return {...state}
        }

        case "PLAY_GAME" : {
            
            const mangXucSacNgauNhien = [];
            for(let i=0 ;i<3 ; i++){
                let soNgauNhien = Math.floor(Math.random() * 6);
                const xucSacNgauNhien = state.danhSachCuoc[soNgauNhien]
                mangXucSacNgauNhien.push(xucSacNgauNhien)
            }

            state.mangXucSac = mangXucSacNgauNhien

            mangXucSacNgauNhien.forEach((xucSacNN,index)=>{
                const indexDSCuoc = state.danhSachCuoc.findIndex(qc => qc.ma === xucSacNN.ma)
                if(index !== -1){
                    state.tongDiem += state.danhSachCuoc[indexDSCuoc].diemCuoc
                }
            })
            // xử lý hoàn tiền
            state.danhSachCuoc.forEach((qc,index)=>{
                const indexXucSac = mangXucSacNgauNhien.findIndex(xxnn => xxnn.ma === qc.ma)
                if(indexXucSac !== -1) {
                    state.tongDiem += qc.diemCuoc
                }
            })

            //xử lí làm mới game
            state.danhSachCuoc = state.danhSachCuoc.map((qc)=>{
                return {...qc,diemCuoc:0}
            })


            return{...state}
        }

        case "CHOI_LAI": {
            state.tongDiem = 1000;
            state.danhSachCuoc = state.danhSachCuoc.map((qc)=>{
                return {...qc,diemCuoc:0}
            })
            return {...state}
        }
        default:
            return { ...state}
    }
}

export default BaiTapReactHooksReducer
