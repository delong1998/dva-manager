import React, { Fragment } from 'react';
import { connect } from 'dva'
import { Button } from 'antd'
import StandardTable from '../../components/StandardTable/index'
import { Card, PageHeader  } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import styles from './user.less'


class Products extends React.Component {

  state = {
    selectedRows: [],
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'users/fetch',
      payload: {}
    })
  }

  columns = [
    {
      title: '姓名',
      dataIndex: 'username'
    },
    {
      title: '电话号码',
      dataIndex: 'tel'
    },
    {
      title: '邮箱地址',
      dataIndex: 'email'
    },
    {
      title: '已借图书数量',
      dataIndex: 'borrowNum'
    },
    {
      title: '借书证状态',
      dataIndex: 'status'
    },
    // {
    //   title: '是否发布',
    //   render: (text,record) => (
    //     <div> {record? '是' : '否'}</div>
    //   ),
    // },
  
    {
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.confirmAndDeleteProducts(record)}>删除 </a>
          {/* <a onClick={() => this.updataProducts(record)}>| 编辑</a> */}
        </Fragment>
      ),
    },
  ];

  render() {
    const { selectedRows } = this.state;
    return (
      <PageHeader>
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListOperator}>
              <Button icon={<PlusOutlined />} type="primary" onClick={() => this.handleModalVisible(true)}>
                新建
              </Button>
            </div>
            <StandardTable
              selectedRows={selectedRows}
              data={this.props.data}
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
    data: state.users.data
  }
}
export default connect(mapStateToProps)(Products);