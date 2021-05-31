const Mock = require('mockjs')

const captchaImage_success_data = Mock.mock({
  "msg": "操作成功",
  "img": "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",
  "code": 200,
  "uuid": "ea901d4ac2474401b667095f54979094"
})

const login_success_data = Mock.mock({
  "msg": "操作成功",
  "code": 200,
  "token": "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImU0YThkNGRlLTcyZjUtNDcxNy1hZmU4LWJmZGM1M2I1MzhjZSJ9.0-hYLwiRSZaZtp_pIFPYAuaw7-muJDOYBLTzGWEQJwgHqQ7XiZcJXtianvfJetdmM7HQzkHoYPJg1KoWQByjKA"
})

const getInfo_success_data = Mock.mock({
  "msg": "操作成功",
  "code": 200,
  "permissions": [
    "*:*:*"
  ],
  "roles": [
    "admin"
  ],
  "user": {
    "searchValue": null,
    "createBy": "admin",
    "createTime": "2021-05-27 13:48:23",
    "updateBy": null,
    "updateTime": null,
    "remark": "管理员",
    "params": {},
    "userId": 1,
    "deptId": 103,
    "userName": "admin",
    "nickName": "admin",
    "email": "ry@163.com",
    "phonenumber": "15888888888",
    "sex": "1",
    "avatar": "",
    "salt": null,
    "status": "0",
    "delFlag": "0",
    "loginIp": "127.0.0.1",
    "loginDate": "2021-05-28T16:06:53.099+0800",
    "dept": {
      "searchValue": null,
      "createBy": null,
      "createTime": null,
      "updateBy": null,
      "updateTime": null,
      "remark": null,
      "params": {},
      "deptId": 103,
      "parentId": 101,
      "ancestors": null,
      "deptName": "研发部门",
      "orderNum": "1",
      "leader": "admin",
      "phone": null,
      "email": null,
      "status": "0",
      "delFlag": null,
      "parentName": null,
      "children": []
    },
    "roles": [
      {
        "searchValue": null,
        "createBy": null,
        "createTime": null,
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "params": {},
        "roleId": 1,
        "roleName": "超级管理员",
        "roleKey": "admin",
        "roleSort": "1",
        "dataScope": "1",
        "menuCheckStrictly": false,
        "deptCheckStrictly": false,
        "status": "0",
        "delFlag": null,
        "flag": false,
        "menuIds": null,
        "deptIds": null,
        "admin": true
      }
    ],
    "roleIds": null,
    "postIds": null,
    "admin": true
  }
})

const sys_user_initPassword_config_key_data = Mock.mock({
  "msg":"123456",
  "code":200
})

const logout_data = Mock.mock({"msg":"退出成功","code":200})

//登录模块mock API
module.exports = [
  //mock 获取验证码
  {
    url: '/captchaImage',
    type: 'get',
    response: config => {
      return captchaImage_success_data
    }
  },
  //mock 登录方法
  {
    url: '/login',
    type: 'post',
    response: config => {
      return login_success_data
    }
  },
  //mock 获取用户详细信息
  {
    url: '/getInfo',
    type: 'get',
    response: config => {
      return getInfo_success_data
    }
  },
  //mock 认证
  {
    url: '/system/config/configKey/sys.user.initPassword',
    type: 'get',
    response: config => {
      return sys_user_initPassword_config_key_data
    }
  },
  {
    url: 'logout',
    type: 'post',
    response: config => {
      return logout_data
    }
  }
]





