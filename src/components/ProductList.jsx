import React from 'react';
import { withRouter } from 'dva/router';
import { Button } from 'antd'

class ProductList extends React.Component{

  test = () => {
    console.log(this.props);
  }

  render(){
    return(
      <div>
        <div>子组件</div>
        <Button onClick={this.test}>asdasd</Button>
      </div>
      
    )
  }
}



export default withRouter(ProductList);