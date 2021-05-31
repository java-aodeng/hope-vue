const Mock = require('mockjs')

const data = Mock.mock({
  "total": 4,
  "rows": [
    {
      "searchValue": null,
      "createBy": "admin",
      "createTime": "2021-05-27 13:48:23",
      "updateBy": null,
      "updateTime": null,
      "remark": "管理员mock",
      "params": {},
      "userId": 1,
      "deptId": 103,
      "userName": "admin",
      "nickName": "mock",
      "email": "ry@163.com",
      "phonenumber": "15888888888",
      "sex": "1",
      "avatar": "",
      "salt": null,
      "status": "0",
      "delFlag": "0",
      "loginIp": "127.0.0.1",
      "loginDate": "2021-05-28T13:49:47.000+0800",
      "dept": {
        "searchValue": null,
        "createBy": null,
        "createTime": null,
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "params": {},
        "deptId": 103,
        "parentId": null,
        "ancestors": null,
        "deptName": "研发部门",
        "orderNum": null,
        "leader": "mock",
        "phone": null,
        "email": null,
        "status": null,
        "delFlag": null,
        "parentName": null,
        "children": []
      },
      "roles": [],
      "roleIds": null,
      "postIds": null,
      "admin": true
    },
    {
      "searchValue": null,
      "createBy": "admin",
      "createTime": "2021-05-27 13:48:23",
      "updateBy": null,
      "updateTime": null,
      "remark": "测试员",
      "params": {},
      "userId": 2,
      "deptId": 105,
      "userName": "test1",
      "nickName": "狗东",
      "email": "ry@qq.com",
      "phonenumber": "15666666666",
      "sex": "1",
      "avatar": "",
      "salt": null,
      "status": "1",
      "delFlag": "0",
      "loginIp": "127.0.0.1",
      "loginDate": "2021-05-27T13:48:23.000+0800",
      "dept": {
        "searchValue": null,
        "createBy": null,
        "createTime": null,
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "params": {},
        "deptId": 105,
        "parentId": null,
        "ancestors": null,
        "deptName": "测试部门",
        "orderNum": null,
        "leader": "mock",
        "phone": null,
        "email": null,
        "status": null,
        "delFlag": null,
        "parentName": null,
        "children": []
      },
      "roles": [],
      "roleIds": null,
      "postIds": null,
      "admin": false
    },
    {
      "searchValue": null,
      "createBy": "admin",
      "createTime": "2021-05-28 11:36:31",
      "updateBy": null,
      "updateTime": null,
      "remark": "1",
      "params": {},
      "userId": 100,
      "deptId": null,
      "userName": "test2",
      "nickName": "狗西",
      "email": "java@aodeng.cc",
      "phonenumber": "18281714981",
      "sex": "0",
      "avatar": "",
      "salt": null,
      "status": "1",
      "delFlag": "0",
      "loginIp": "",
      "loginDate": null,
      "dept": {
        "searchValue": null,
        "createBy": null,
        "createTime": null,
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "params": {},
        "deptId": 105,
        "parentId": null,
        "ancestors": null,
        "deptName": "产品部门",
        "orderNum": null,
        "leader": "mock",
        "phone": null,
        "email": null,
        "status": null,
        "delFlag": null,
        "parentName": null,
        "children": []
      },
      "roles": [],
      "roleIds": null,
      "postIds": null,
      "admin": false
    },
    {
      "searchValue": null,
      "createBy": "admin",
      "createTime": "2021-05-28 11:38:27",
      "updateBy": null,
      "updateTime": null,
      "remark": null,
      "params": {},
      "userId": 101,
      "deptId": null,
      "userName": "test3",
      "nickName": "狗南",
      "email": "test@teset.cc",
      "phonenumber": "18281714983",
      "sex": "0",
      "avatar": "",
      "salt": null,
      "status": "0",
      "delFlag": "0",
      "loginIp": "",
      "loginDate": null,
      "dept": {
        "searchValue": null,
        "createBy": null,
        "createTime": null,
        "updateBy": null,
        "updateTime": null,
        "remark": null,
        "params": {},
        "deptId": 105,
        "parentId": null,
        "ancestors": null,
        "deptName": "运维部门",
        "orderNum": null,
        "leader": "mock",
        "phone": null,
        "email": null,
        "status": null,
        "delFlag": null,
        "parentName": null,
        "children": []
      },
      "roles": [],
      "roleIds": null,
      "postIds": null,
      "admin": false
    }
  ],
  "code": 200,
  "msg": "查询成功"
})

const sys_user_sex_data = Mock.mock({
  "msg": "操作成功",
  "code": 200,
  "data": [
    {
      "searchValue": null,
      "createBy": "admin",
      "createTime": "2021-05-27 13:48:24",
      "updateBy": null,
      "updateTime": null,
      "remark": "性别男",
      "params": {},
      "dictCode": 1,
      "dictSort": 1,
      "dictLabel": "男",
      "dictValue": "0",
      "dictType": "sys_user_sex",
      "cssClass": "",
      "listClass": "",
      "isDefault": "Y",
      "status": "0",
      "default": true
    },
    {
      "searchValue": null,
      "createBy": "admin",
      "createTime": "2021-05-27 13:48:24",
      "updateBy": null,
      "updateTime": null,
      "remark": "性别女",
      "params": {},
      "dictCode": 2,
      "dictSort": 2,
      "dictLabel": "女",
      "dictValue": "1",
      "dictType": "sys_user_sex",
      "cssClass": "",
      "listClass": "",
      "isDefault": "N",
      "status": "0",
      "default": false
    }
  ]
})

const sys_normal_disable_data = Mock.mock({
  "msg":"操作成功",
  "code":200,
  "data":[
    {
      "searchValue":null,
      "createBy":"admin",
      "createTime":"2021-05-27 13:48:24",
      "updateBy":null,
      "updateTime":null,
      "remark":"正常状态",
      "params":{

      },
      "dictCode":6,
      "dictSort":1,
      "dictLabel":"正常",
      "dictValue":"0",
      "dictType":"sys_normal_disable",
      "cssClass":"",
      "listClass":"primary",
      "isDefault":"Y",
      "status":"0",
      "default":true
    },
    {
      "searchValue":null,
      "createBy":"admin",
      "createTime":"2021-05-27 13:48:24",
      "updateBy":null,
      "updateTime":null,
      "remark":"注销状态",
      "params":{

      },
      "dictCode":7,
      "dictSort":2,
      "dictLabel":"注销",
      "dictValue":"1",
      "dictType":"sys_normal_disable",
      "cssClass":"",
      "listClass":"danger",
      "isDefault":"N",
      "status":"0",
      "default":false
    }
  ]
})

const system_user_changeStatus_data = Mock.mock({"msg":"用户状态修改成功","code":200})

const system_user_1_data = Mock.mock({
  "msg":"操作成功",
  "code":200,
  "roleIds":[
    1
  ],
  "data":{
    "searchValue":null,
    "createBy":"admin",
    "createTime":"2021-05-27 13:48:23",
    "updateBy":null,
    "updateTime":null,
    "remark":"管理员",
    "params":{

    },
    "userId":1,
    "deptId":103,
    "userName":"mock-admin",
    "nickName":"mock-admin",
    "email":"email@163.com",
    "phonenumber":"15000000000",
    "sex":"1",
    "avatar":"",
    "salt":null,
    "status":"0",
    "delFlag":"0",
    "loginIp":"127.0.0.1",
    "loginDate":"2021-05-31T10:47:17.000+0800",
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
      "leader":"若依",
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
  "postIds":[
    1
  ],
  "roles":[
    {
      "searchValue":null,
      "createBy":null,
      "createTime":"2021-05-27 13:48:24",
      "updateBy":null,
      "updateTime":null,
      "remark":"超级管理员",
      "params":{

      },
      "roleId":1,
      "roleName":"超级管理员",
      "roleKey":"admin",
      "roleSort":"1",
      "dataScope":"1",
      "menuCheckStrictly":true,
      "deptCheckStrictly":true,
      "status":"0",
      "delFlag":"0",
      "flag":false,
      "menuIds":null,
      "deptIds":null,
      "admin":true
    },
    {
      "searchValue":null,
      "createBy":null,
      "createTime":"2021-05-27 13:48:24",
      "updateBy":null,
      "updateTime":null,
      "remark":"普通角色",
      "params":{

      },
      "roleId":2,
      "roleName":"普通角色",
      "roleKey":"common",
      "roleSort":"2",
      "dataScope":"2",
      "menuCheckStrictly":true,
      "deptCheckStrictly":true,
      "status":"0",
      "delFlag":"0",
      "flag":false,
      "menuIds":null,
      "deptIds":null,
      "admin":false
    }
  ],
  "posts":[
    {
      "searchValue":null,
      "createBy":"admin",
      "createTime":"2021-05-27 13:48:24",
      "updateBy":null,
      "updateTime":null,
      "remark":"",
      "params":{

      },
      "postId":1,
      "postCode":"ceo",
      "postName":"董事长",
      "postSort":"1",
      "status":"0",
      "flag":false
    },
    {
      "searchValue":null,
      "createBy":"admin",
      "createTime":"2021-05-27 13:48:24",
      "updateBy":null,
      "updateTime":null,
      "remark":"",
      "params":{

      },
      "postId":2,
      "postCode":"se",
      "postName":"项目经理",
      "postSort":"2",
      "status":"0",
      "flag":false
    },
    {
      "searchValue":null,
      "createBy":"admin",
      "createTime":"2021-05-27 13:48:24",
      "updateBy":null,
      "updateTime":null,
      "remark":"",
      "params":{

      },
      "postId":3,
      "postCode":"hr",
      "postName":"人力资源",
      "postSort":"3",
      "status":"0",
      "flag":false
    },
    {
      "searchValue":null,
      "createBy":"admin",
      "createTime":"2021-05-27 13:48:24",
      "updateBy":null,
      "updateTime":null,
      "remark":"",
      "params":{

      },
      "postId":4,
      "postCode":"user",
      "postName":"普通员工",
      "postSort":"4",
      "status":"0",
      "flag":false
    }
  ]
})

const system_user_resetPwd_data = Mock.mock({"msg":"密码重置成功","code":200})

module.exports = [
  //mock 获取用户列表数据
  {
    url: '/system/user/list',
    type: 'get',
    response: config => {
      return data
    }
  },
  //mock 获取字典数据
  {
    url: '/system/dict/data/type/sys_user_sex',
    type: 'get',
    response: config => {
      return sys_user_sex_data
    }
  },
  //mock 获取字典数据
  {
    url: '/system/dict/data/type/sys_normal_disable',
    type: 'get',
    response: config => {
      return sys_normal_disable_data
    }
  },
  //mock 用户状态修改
  {
    url: '/system/user/changeStatus',
    type: 'put',
    response: config => {
      return system_user_changeStatus_data
    }
  },
  //mock 用户修改
  {
    url: '/system/user/1',
    type: 'get',
    response: config => {
      return system_user_1_data
    }
  },
  //mock 用户添加
  {
    url: '/system/user/',
    type: 'get',
    response: config => {
      return system_user_1_data
    }
  },
  //mock 用户状态修改
  {
    url: '/system/user/resetPwd',
    type: 'put',
    response: config => {
      return system_user_resetPwd_data
    }
  }
]
