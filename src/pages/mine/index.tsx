import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class Mine extends Component {
  config: Config = {
    navigationBarTitleText: '我的'
  }

  render () {
    return (
      <View className='mine'>
        <Text>我的</Text>
      </View>
    )
  }
}

export default Mine  as ComponentType
