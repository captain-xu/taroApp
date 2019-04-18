import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/home'
import store from './store'

import './app.scss'
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config: Config = {
    pages: [
      'pages/home/index',
      'pages/home/detail/index',
      'pages/discovery/index',
      'pages/mine/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/home/index",
        text: "",
        iconPath: "./assets/images/tab-bar/home.png",
        selectedIconPath: "./assets/images/tab-bar/home_focus.png"
      }, {
        pagePath: "pages/discovery/index",
        text: "",
        iconPath: "./assets/images/tab-bar/discovery.png",
        selectedIconPath: "./assets/images/tab-bar/discovery_focus.png"
      }, {
        pagePath: "pages/mine/index",
        text: "",
        iconPath: "./assets/images/tab-bar/my.png",
        selectedIconPath: "./assets/images/tab-bar/my_focus.png"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
