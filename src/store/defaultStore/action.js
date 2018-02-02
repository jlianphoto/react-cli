import {GETDEFAULTSTORE} from './action-type';
import axios from 'config/axios'

// 初始化获取商品数据，保存至redux
export const getDefalutData = () => {
  // 返回函数，异步dispatch
  return (dispatch , getState) => {
      setTimeout(_=>{
        let datas = {aa : 1};
        dispatch({
          type: GETDEFAULTSTORE,
          defaultMerchant: datas,
        })
      },1000)
  }
}