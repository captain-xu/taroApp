import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class Discovery extends Component {
  config: Config = {
    navigationBarTitleText: '发现'
  }

  render () {
    return (
      <View className='discovery'>
        <Text>发现</Text>
      </View>
    )
  }
}

export default Discovery  as ComponentType
