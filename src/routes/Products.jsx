import React, { Fragment } from 'react';
import { connect } from 'dva'
import { Button } from 'antd'
import { queryProducts } from '../services/products'
import StandardTable from '../components/StandardTable/index'
import { Card, PageHeader  } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import styles from './Products.less'


class Products extends React.Component {

  state = {
    selectedRows: [],
    //传过来的数据格式
    data: {
      list : [{title:'asdsad'}],
      pagination: {
        totle: 4,
        currentPage: 1,
        pageSize: 10
      }
    }
  }

  columns = [
    {
      title: '标题',
      dataIndex: 'title'
    },
    {
      title: '是否发布',
      render: (text,record) => (
        <div> {record? '是' : '否'}</div>
      ),
    },
    {
      title: '次序',
      dataIndex: 'seq',
    },
    {
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.confirmAndDeleteProducts(record)}>删除 </a>
          <a onClick={() => this.updataProducts(record)}>| 编辑</a>
        </Fragment>
      ),
    },
  ];

  test = () => {
    const { dispatch } = this.props;
    console.log('asd');
    dispatch({
      type: 'products/test',
      payload: {}
    })
  }
  render() {
    const { selectedRows } = this.state;
    return (
      <PageHeader>
        <Card bordered={false}>
          <Button onClick={this.test}>测试</Button>
          <div className={styles.tableList}>
            <div className={styles.tableListOperator}>
              <Button icon={<PlusOutlined />} type="primary" onClick={() => this.handleModalVisible(true)}>
                新建
              </Button>
            </div>
            <StandardTable
              selectedRows={selectedRows}
              data={this.state.data}
              rowKey="id"
              columns={this.columns}
            // onSelectRow={this.handleSelectRows}
            // onChange={this.handleStandardTableChange}
            />
          </div>
        </Card>
      </PageHeader>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.products.data
  }
}
export default connect(mapStateToProps)(Products);