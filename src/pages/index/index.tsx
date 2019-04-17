import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Image
} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'

interface IndexProps {

}

@inject('homeStore')
@observer
class Index extends Component<{}, IndexProps> {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <Image lazyLoad src="http://img3.imgtn.bdimg.com/it/u=2579235386,3504036083&fm=26&gp=0.jpg" className='swiperItem' />
          </SwiperItem>
          <SwiperItem>
            <Image lazyLoad src="http://img2.imgtn.bdimg.com/it/u=236991697,603991298&fm=214&gp=0.jpg" className='swiperItem' />
          </SwiperItem>
          <SwiperItem>
            <Image lazyLoad src="http://img.aiimg.com/uploads/allimg/150126/1-150126223049.jpg" className='swiperItem' />
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}

export default Index  as ComponentType
