import React from 'react';
import 'antd/dist/antd.css';
import {Root} from './styled';
import container from './container';
import {Form, Input, Button, Alert} from 'antd';
import {Link} from 'react-router-dom';
import {Typography} from 'antd';

const {Title} = Typography;
const LoginForm = (props) => {
    const {
        submit,
        err,
        handleClose
    } = props

    return (
        <>
            {err && <Alert
                message="Error"
                description={err}
                type="error"
                showIcon
                closable={true}
                onClose={handleClose}
            />}
            <Root>
                <Title level={2}>Login</Title>
                <Form
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={submit}
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
                    <div style={{width: '100%', textAlign: 'right'}}><Link to='register'>Dont have an account?</Link>
                    </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Root>
        </>
    );
};

export default container(LoginForm);
