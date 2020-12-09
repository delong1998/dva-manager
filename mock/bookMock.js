module.exports = {
    "GET /mockbooks": (req, res) => {
        res.send({
            list: [
                {
                    id: 1,
                    title: '书本1',
                    num: '10',
                    price: '10',
                    author: '谭浩强',
                    inro: '内容简介1',
                    status: '在管|借出|遗失|销毁|卖出',
                    publisher: '出版社',
                    publisherDate: '出版日期',
                    ISBN: 'ISBN号码',
                    language: '语言',
                    pageNum: '页数',
                },
                {
                    id: 2,
                    title: '书本2',
                    num: '11',
                    price: '12',
                    author: '谭浩强2',
                    inro: '内容简介2',
                    status: '在管|借出|遗失|销毁|卖出',
                    publisher: '出版社',
                    publisherDate: '出版日期',
                    ISBN: 'ISBN号码',
                    language: '语言',
                    pageNum: '页数',
                },

            ],
            pagination: {
                totle: 3,
                currentPage: 1,
                pageSize: 10
            }

        })
    },


    "GET /mockusers": (req, res) => {
        res.send({
            list: [
                {
                    id: 1,   
                    username: '读者姓名',  
                    password: '密码',
                    sex: '性别', 
                    company: '所在单位',  
                    tel: '电话',
                    email: '邮箱地址',
                    createTime: '办证日期',
                    status: '借书证状态',
                    publisherDate: '出版日期',
                    borrowNum: '已借书数量',
                },
            
            ],
            pagination: {
                totle: 1,
                currentPage: 1,
                pageSize: 10
            }

        })
    }
}