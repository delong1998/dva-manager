import React, { Fragment } from 'react';
import { connect } from 'dva'
import { Button } from 'antd'
import StandardTable from '../../components/StandardTable/index'
import { Card, PageHeader, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import styles from './books.less'
import BookForm from './components/bookForm'


class Books extends React.Component {

    state = {
        selectedRows: [],
        ModalVisible: false,
        current: {},
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'books/fetch',
            payload: {}
        })
    }

    confirmAndDeleteBooks = item => {
        const { dispatch } = this.props;
        Modal.confirm({
            title: '删除图书',
            content: '确定删除此图书？',
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
            },
        });
    }

    handleModalVisible = val => {
        this.setState({
            modalVisible: val,
            current: {},
        })
    }

    updataBooks = val => {
        this.setState({
            modalVisible: true,
            current: val
        })
    }

    handleModalOk = values => {
        //处理模态框表单的数据
        console.log(values);
    }

    columns = [
        {
            title: '图书名',
            dataIndex: 'title'
        },
        {
            title: '作者',
            dataIndex: 'author'
        },
        {
            title: '价格',
            dataIndex: 'price'
        },
        {
            title: '数量',
            dataIndex: 'num',
        },
        {
            title: '操作',
            render: (text, record) => (
                <Fragment>
                    <a onClick={() => this.confirmAndDeleteBooks(record)}>删除 </a>
                    <a onClick={() => this.updataBooks(record)}>| 编辑</a>
                </Fragment>
            ),
        },
    ];

    render() {
        const { selectedRows, modalVisible } = this.state;
        // console.log(this.props);
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
                {modalVisible ?
                    <BookForm
                        modalVisible={modalVisible}
                        handleCancel={() => this.setState({ modalVisible: false })}
                        handleOk={this.handleModalOk}
                        initialValue={this.state.current}
                    /> : null}
            </PageHeader>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        data: state.books.data.data
    }
}
export default connect(mapStateToProps)(Books);