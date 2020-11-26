import React, { Fragment } from 'react';
import { connect } from 'dva'
import { setToken, getToken } from '../utils/auth'
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { clearToken } from '../utils/auth'
import cookie from 'react-cookies'

class Login extends React.Component {

    login = () => {
        setToken({
            username: '李德龙',
            password: '123465'
        })
        console.log(getToken());
        this.props.history.push('/');
        window.location.reload()

    }

    onFinish = values => {
        const { dispatch } = this.props;
        
        setToken({
            username: '李德龙',
            password: '123465'
        })
        console.log(getToken());
        this.props.history.push('/');
        window.location.reload()
        
        // console.log(this.props);
        // setToken({
        //     username: '李德龙',
        //     password: '123465'
        // })
        // this.props.history.push('/');
        // window.location.reload()
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        const layout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const tailLayout = {
            wrapperCol: { offset: 3, span: 16 },
        };

        return (
            <div style={{
                background: "url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1425103454,3826167042&fm=26&gp=0.jpg) no-repeat center center fixed",
                backgroundSize: "cover",
                paddingTop: 150,
                height: 744
            }}>
                <Card
                    style={{
                        width: 400,
                        height: 307,
                        margin: '0 auto',
                        textAlign: 'center'
                    }}
                    title='登录'
                >
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: '请输入用户名' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: '请输入密码' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                登录
                    </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        data: state.products.data
    }
}
export default connect(mapStateToProps)(Login);