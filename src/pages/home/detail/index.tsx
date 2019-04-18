import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class HomeDetail extends Component {
  config: Config = {
    navigationBarTitleText: '详情'
  }

  render () {
    return (
      <View className='homeDetail'>
        <Text onClick={() => {
          wx.chooseImage({
            success(res) {
              const tempFilePaths = res.tempFilePaths
              wx.uploadFile({
                url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
                filePath: tempFilePaths[0],
                name: 'file',
                formData: {
                  user: 'test'
                },
                success(res) {
                  const data = res.data
                  // do something
                }
              })
            }
          })
        }}>详情</Text>
      </View>
    )
  }
}

export default HomeDetail  as ComponentType
