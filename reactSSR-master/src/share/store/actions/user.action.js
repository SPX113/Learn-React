import axios from "axios";

// 保存用户的action
export const SAVE_USER = 'save_user'

// 发送请求 获取用户列表数据的action
export const fetchUser = () => async dispatch => {
   // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
   let response = {
      data: [{id:1,name:"</script><script>alert(1)</script>"}]
   }
   dispatch({
      type:SAVE_USER,
      payload:response
   })
}