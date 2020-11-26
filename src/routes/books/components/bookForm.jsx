import React from 'react';
// import { Form } from '@ant-design/compatible';
// import '@ant-design/compatible/assets/index.css';
import { Input, Modal, Radio, DatePicker, InputNumber, Select, Form, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const FormItem = Form.Item;

const BooksForm = props => {
    const { modalVisible, handleOk, handleCancel, initialValue = {} } = props;
    const [form] = Form.useForm();
    const okHandle = () => {
        // console.log(form);
        form.validateFields().then(values => {
            form.resetFields();
            form.setFieldsValue(values)
            handleOk(values);
        })
            .catch(info => {
                console.log('校验失败:', info);
            });
    };

    const formLayout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 20,
        },
    };

    return (
        <Modal
            width={500}
            destroyOnClose
            title={`${!initialValue.id ? '图书信息' : '编辑图书信息'}`}
            visible={modalVisible}
            onOk={okHandle}
            onCancel={() => handleCancel(false)}
            cancelText={'取消'}
            okText={'确认'}
        >
            <Form
                form={form}
                initialValues={initialValue}
            >
                <Form.Item
                    name="title"
                    rules={[// 声明式验证: 直接使用别人定义好的验证规则进行验证
                        { required: true, whitespace: true, message: '用户名必须输入' },
                    ]}
                    {...formLayout}
                    label="图书名"
                >
                    <Input
                        placeholder="请输入图书名"
                    />
                </Form.Item>

                <Form.Item
                    name="author"
                    rules={[// 声明式验证: 直接使用别人定义好的验证规则进行验证
                        { required: true, whitespace: true, message: '用户名必须输入' },
                    ]}
                    {...formLayout}
                    label="作者"
                >
                    <Input
                        placeholder="请输入作者"
                    />
                </Form.Item>

                <Form.Item
                    name="price"
                    rules={[// 声明式验证: 直接使用别人定义好的验证规则进行验证
                        { required: true, whitespace: true, message: '用户名必须输入' },
                    ]}
                    {...formLayout}
                    label="价格"
                >
                    <Input
                        placeholder="请输入价格"
                    />
                </Form.Item>

                <Form.Item
                    name="num"
                    rules={[// 声明式验证: 直接使用别人定义好的验证规则进行验证
                        { required: true, whitespace: true, message: '用户名必须输入' },
                    ]}
                    {...formLayout}
                    label="数量"
                >
                    <Input
                        placeholder="请输入数量"
                    />
                </Form.Item>

            </Form>
        </Modal>
    );
};

export default BooksForm;
