import React from 'react';
import {Layout} from 'antd';
import LeftNav from "../../components/left-nav/left-nav";
import Header from "../../components/header/header";

const {Footer, Sider, Content} = Layout;

const Admin = () => {
    console.log(1111)
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

// class Admin extends Component {
//
//     render() {
//
//         return (
//             <Layout style={{height: "100%"}}>
//                 <Sider style={{backgroundColor: "mediumturquoise"}}>
//                     <LeftNav/>
//                 </Sider>
//                 <Layout>
//                     <Header/>
//                     <Content style={{backgroundColor: "white"}}>Content</Content>
//                     <Footer style={{textAlign: "center", color: '#cccccc'}}>推荐使用谷歌浏览器</Footer>
//                 </Layout>
//             </Layout>
//         );
//     }
// }

export default Admin;
