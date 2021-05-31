const Mock = require('mockjs')

const data = Mock.mock({
  "msg":"操作成功",
  "postGroup":"董事长",
  "code":200,
  "data":{
    "searchValue":null,
    "createBy":"mock-admin",
    "createTime":"2021-05-27 13:48:23",
    "updateBy":null,
    "updateTime":null,
    "remark":"管理员",
    "params":{

    },
    "userId":1,
    "deptId":103,
    "userName":"mock-admin",
    "nickName":"mock",
    "email":"email@163.com",
    "phonenumber":"15000000000",
    "sex":"1",
    "avatar":"",
    "salt":null,
    "status":"0",
    "delFlag":"0",
    "loginIp":"127.0.0.1",
    "loginDate":"2021-05-31T10:47:16.592+0800",
    "dept":{
      "searchValue":null,
      "createBy":null,
      "createTime":null,
      "updateBy":null,
      "updateTime":null,
      "remark":null,
      "params":{

      },
      "deptId":103,
      "parentId":101,
      "ancestors":null,
      "deptName":"研发部门",
      "orderNum":"1",
      "leader":"mock",
      "phone":null,
      "email":null,
      "status":"0",
      "delFlag":null,
      "parentName":null,
      "children":[

      ]
    },
    "roles":[
      {
        "searchValue":null,
        "createBy":null,
        "createTime":null,
        "updateBy":null,
        "updateTime":null,
        "remark":null,
        "params":{

        },
        "roleId":1,
        "roleName":"超级管理员",
        "roleKey":"admin",
        "roleSort":"1",
        "dataScope":"1",
        "menuCheckStrictly":false,
        "deptCheckStrictly":false,
        "status":"0",
        "delFlag":null,
        "flag":false,
        "menuIds":null,
        "deptIds":null,
        "admin":true
      }
    ],
    "roleIds":null,
    "postIds":null,
    "admin":true
  },
  "roleGroup":"超级管理员"
})

module.exports = [
  //mock 获取用户列表数据
  {
    url: '/system/user/profile',
    type: 'get',
    response: config => {
      return data
    }
  }
]
