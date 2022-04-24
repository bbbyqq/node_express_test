const express = require('express')
const bodyParser = require('body-parser') // post请求
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

// get请求数据
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
    }
]


// get请求
app.get('/list', function (req, res) {
    res.status(200)
    res.send({
        code:200,
        data:questions,
        msg:'操作成功'
    })
})

// post请求
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.post("/login",function(req,res){
    res.status(200)
    res.send({
        code:200,
        msg:'登录成功'
    })
});

//配置服务端口
const server = app.listen(3000, function () {
    const port = server.address().port
    console.log(`http://localhost:${port}`)
})

