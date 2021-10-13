import React from 'react';
import './login.css'
import logo from '../../assets/images/logo.png'
import {Form, Input, Button, Checkbox} from 'antd';
// import history from "../../history";
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory()
    const onFinish = (values : {username: string; password: string}) => {
        // if (values.username === 'admin' && values.password === 'admin')
            history.push('/admin');
    }

    return (
        <div className="login">
            <div className='login-header'>
                <img src={logo} alt='logo'/>
                <h1 className='title'>后台管理系统</h1>
            </div>
            <section className='login-content'>
                <h2>用户登录</h2>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    // onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{required: true, message: 'Please input your username!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            login
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    );
}

export default withRouter(Login);
