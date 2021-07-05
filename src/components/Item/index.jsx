import React, { Component } from 'react'
import "./index.css"

export default class Item extends Component {
<<<<<<< HEAD

    state = {mouse:false}

    handleMouse = (flag)=>{
       return ()=>{
            this.setState({mouse:flag})
       } 
    }
    render() {
        const {name,done}=this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? "#ddd" : "white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
=======
    state = {mouse:false} //表示鼠标移入移出
    //鼠标移入、移出的回调
    handleMouse=(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    //勾选、取消勾选某一个too的回调
    handleCheck=(id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)

        }
    }
    //删除某一个todo的回调
    handleDelete=(id)=>{
        if (window.confirm('确定删除吗？')){
            this.props.deleteTodo(id)
        }
        
    }
         

    render() {
        const {id,name,done}=this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
>>>>>>> test
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
<<<<<<< HEAD
                <button className="btn btn-danger" style={{display: mouse ? "block": 'none'}}>删除</button>
=======
                <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display: mouse ? 'block' :'none'}}>删除</button>
>>>>>>> test
            </li>
        )
    }
}
