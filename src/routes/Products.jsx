import React, { Fragment } from 'react';
import { connect } from 'dva'
import { Button } from 'antd'
import { queryProducts, testMock } from '../services/products'


class Products extends React.Component {

  componentDidMount(){
    // testMock().then( res =>{
    //   console.log(res);
    // });
  }

  handTest = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/test',
      payload: {}
    })
  }

  testApi =() => {
    testMock().then( res =>{
      console.log(res);
    });
  }


  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div>我是产品页22</div>
        <Button onClick={this.handTest}>测试dva</Button>
        <Button onClick={this.testApi}>测试api</Button>
      </Fragment>
    )
  }
}

const mapStateToProps = state =>{
  console.log(state);
  return {
    data: state.products.data
  }
}
export default connect(mapStateToProps)(Products);