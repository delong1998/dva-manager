module.exports = {
    "GET /products": (req, res) => {
        res.send({
            data: {
                list : [{title:'asdsad'}],
                pagination: {
                  totle: 1,
                  currentPage: 1,
                  pageSize: 10
                }
              }
        })
    }
}