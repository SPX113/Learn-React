import { SAVE_USER } from "../actions/user.action";
// 发送请求 获取用户列表数据
export default (state = [],action) => {
   switch(action.type){
      case SAVE_USER:
         return action.payload.data;
      default:
         return state;
   }
}