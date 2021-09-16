import Home from "./pages/Home";
import List from "./pages/List";

export default [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/List',
        component:List.component,
        loadData:List.loadData
    }
]