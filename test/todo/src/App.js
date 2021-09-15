import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


export default class App extends React.Component{

    // 生命周期函数
    // static getDerivedStateFromProps(props,state){
    //     console.log(props,state);
    //     return null;
    // }
    //
    // componentDidMount() {
    // }
    //
    // componentWillUnmount() {
    // }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log("shouldComponentUpdate",nextProps, nextState, nextContext)
    //     return true
    // }
    //
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     return "shot"
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("componentDidUpdate",prevProps, prevState, snapshot)
    // }


    constructor(props) {
        super(props);
        this.state = {
            todos:[
                {id:'001',name:'吃饭',done:true},
                {id:'002',name:'睡觉',done:true},
                {id:'003',name:'打代码',done:false},
                {id:'004',name:'逛街',done:false}
            ]
        }
    }

    addTodo = (newTodo) => {
        this.setState({
            todos: [newTodo, ...this.state.todos]
        });
    }

    selectTodo = (id) => {
        const newTodos = this.state.todos.map(item => {
            if(item.id === id){
                item.done = !item.done;
            }
            return item;
        });
        this.setState({
            todos: newTodos
        });
    }

    selectAll = (done) => {
        const newTodos = this.state.todos.map(item =>{
            item.done = done;
            return item;
        });
        this.setState({
            todos: newTodos
        });
    }

    clearFinishTask = done =>{
        const newTodos = this.state.todos.filter(item => {
           return item.done === false;
        });
        this.setState({
            todos: newTodos
        });
    }

    delTodo = (id) => {
        const newTodos = this.state.todos.filter((item) => {
            return  item.id !== id;
        })
        this.setState({
            todos: newTodos
        })
    }


    render(){
        return(
            <div className="App">
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo} />
                        <Main list={this.state.todos} selectTodo={this.selectTodo} delTodo={this.delTodo}/>
                        <Footer list={this.state.todos} selectAll={this.selectAll} clearFinishTask={this.clearFinishTask}/>
                    </div>
                </div>
            </div>
        )
    }
}
