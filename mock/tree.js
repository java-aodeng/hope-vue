
const Mock = require('mockjs')

const data = Mock.mock({
  "msg":"操作成功",
  "code":200,
  "data":[
    {
      "id":100,
      "label":"炸天帮科技有限公司",
      "children":[
        {
          "id":101,
          "label":"上海总公司",
          "children":[
            {
              "id":103,
              "label":"研发部门"
            },
            {
              "id":104,
              "label":"市场部门"
            },
            {
              "id":105,
              "label":"测试部门"
            },
            {
              "id":106,
              "label":"财务部门"
            },
            {
              "id":107,
              "label":"运维部门"
            }
          ]
        },
        {
          "id":102,
          "label":"杭州分公司",
          "children":[
            {
              "id":108,
              "label":"市场部门"
            },
            {
              "id":109,
              "label":"财务部门"
            }
          ]
        }
      ]
    }
  ]
})

module.exports = [
  //mock 获取树形图部门结构数据
  {
    url: '/system/dept/treeselect',
    type: 'get',
    response: config => {
      return data
    }
  }
]
