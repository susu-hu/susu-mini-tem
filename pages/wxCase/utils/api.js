var Mock = require('./wxmock.js')
//基于ajax请求地址的模拟数据
//格式： Mock.mock('请求地址',数据模板)
var users = Mock.mock('https://susu/test/dataList', {
  "codeText": "成功返回",
  "code": 200,
  "data|1-20": [
    {
      "name": function () {
        return Mock.Random.cname()
      },
      "lastLogin": function () {
        return Mock.Random.datetime()
      }
    }
  ]
})
var del = Mock.mock('https://xxx.com/user/delete', {
  "code": 200,
  "message": "s删除成功"
})

//请求文章列表
var article = Mock.mock('http://www.baidu.com/getArticle', {

  "code": 666,
  "successText": "成功返回",
  "content": [
    { "id": 1001, "name": "文章标题", "content": "文章内容" },
    { "id": 1002, "name": "文章标题222", "content": "文章内容222" }
  ]

})

export default {
  users,
  del,
  article
}