import React, {Component} from 'react'
import {Menu,Icon} from 'antd'
import menuList from './../../config/menuconfig'
import './index.css'
const {SubMenu}=Menu

export default class NavLeft extends Component {
    createMenu=(menuList)=>{
        let list=menuList.map((item)=>{
            if(item.children){
                return(
                    <SubMenu title={<span><Icon type={item.icon}></Icon>{item.title}</span>}  key={item.path}>
                        {this.createMenu(item.children)}
                    </SubMenu>
                )
            }
            return (<Menu.Item key={item.path}>
                        {item.icon?<Icon type={item.icon}></Icon>:null}
                        {item.title}
                    </Menu.Item>
                )
        })
        return list;
    }
    componentWillMount=()=>{
        this.setState({
            list:this.createMenu(menuList)
        })
    }
    render() {
        return (
            <div>
                <div className='logobox'>
                    <img src='/imgs/logo.png'/>
                </div>
                <Menu theme='dark' mode='inline' defaultOpenKeys={['/admin/student']} className='menubox'>
                    {this.state.list}
                </Menu>
            </div>
        )
    }
}
