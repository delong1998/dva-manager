module.exports = {
    "GET /mockbooks": (req, res) => {
        res.send({
            data: {
                list : [
                    {id:1, title:'书本1',num:'10',price:'10',author:'谭浩强'},
                    {id:2, title:'书本2',num:'11',price:'11',author:'谭浩强2'},
                    {id:3, title:'书本3',num:'12',price:'13',author:'谭浩强3'}

                ],
                pagination: {
                  totle: 3,
                  currentPage: 1,
                  pageSize: 10
                }
              }
        })
    }
}