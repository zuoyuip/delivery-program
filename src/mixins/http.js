import wepy from '@wepy/core';
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080/delivery/',
  timeout: 1000,
  withCredentials: true,
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default {



}
