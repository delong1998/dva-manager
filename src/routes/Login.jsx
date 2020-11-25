import React, { Fragment } from 'react';
import { connect } from 'dva'
import { Button } from 'antd'
import { setToken, getToken } from '../utils/auth'

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

    render() {
        return (
            <Fragment>
                <div>登录页面</div>
                <Button onClick={this.login}>点我登录</Button>
            </Fragment>
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