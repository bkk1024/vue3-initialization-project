import request from "./index"

export const getAll = () =>
  request({
    url: "/mock-api/info",
    method: "get",
  })

export const getPosts = () =>
  request({
    url: "/nest-api/posts",
    method: "get"
  })
