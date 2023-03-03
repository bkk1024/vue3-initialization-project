// mock 数据，这里的接口都挂载在本项目的同源站点上，因此不会跨域

import Mock from "mockjs"

const data = Mock.mock("/mock-api/info", "get", {
  status: 200,
  message: "请求成功",
  "list|10-20": [
    {
      "id|+1": 1,
      name: "@cname",
      age: "@age",
      gender: "@boolean",
      price: "@integer",
    },
  ],
})

export default data
