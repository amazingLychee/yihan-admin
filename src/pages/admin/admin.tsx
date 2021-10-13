import React, {Component} from 'react';
import {Layout} from 'antd';
import LeftNav from "../../components/left-nav/left-nav";
import Header from "../../components/header/header";

const {Footer, Sider, Content} = Layout;

class Admin extends Component {

    render() {

        return (
            <Layout style={{height: "100%"}}>
                <Sider style={{backgroundColor: "mediumturquoise"}}>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{backgroundColor: "white"}}>Content</Content>
                    <Footer style={{textAlign: "center", color: '#cccccc'}}>推荐使用谷歌浏览器</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;
