import Mock from 'mockjs'
import data from '../api/data_1'
Mock.mock('/user', 'get', data.userData)