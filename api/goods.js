/**
 * @author Kelvin
 * @description 商品相关的URL
 */
import request from '@/service'
import { goods } from '@/api/url'

export const getCarouselItems = _ => {
  return request({
    url: goods.carouselItems,
    method: 'get'
  })
}


export function getgoodsItems (type,pagenum,pagesize,orderby,keyword)  {  
       return request({
         url: `/goods/${type}/list/${pagenum}/${pagesize}/${orderby}/${keyword}/ `,
         method: 'get'
       })  
}




/**
 * 获取商城首页商品列表
 * @param {string} keyword 
 */
export const getGoodsList = keyword => {
  return request({
    url: goods.list + keyword,
    method: 'get'
  })
}

