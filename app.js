const express = require('express')
const app = express()


//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
})


const questions = [
    {
        name: '小明',
        sex: '男',
        age: 18
    },
    {
        name: '小红',
        sex: '女',
        age: 20
    }]


//写个接口123
app.get('/123', function (req, res) {
    res.status(200)
    res.json(questions)
});

//配置服务端口
const server = app.listen(3000, function () {
    // const host = server.address().address
    const port = server.address().port
    console.log('Example app listening at http://%s:%s/%s', 'localhost', port, '123')
})

