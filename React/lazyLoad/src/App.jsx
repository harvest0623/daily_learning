import LazyLoad from 'react-lazyload';
import { lazy } from 'react'
// import Demo from './Demo'
import MyLazyLoad from './MyLazyLoad'

// 组件没有出现在可视区域时，组件代码都不会被加载，被import('./Demo')包裹的模块会单独打包
const Demo = lazy(() => import('./Demo'));

export default function App() {
    return (
        <div>
            {/* <Demo></Demo> */}
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <MyLazyLoad placeholder={<div>loading...</div>} width='100px' onContentVisible={() => console.log('onContentVisible')} onClose={() => console.log('onClose')}>
                {/* <img src="https://inews.gtimg.com/om_bt/OG4Cnt2SgXAuTj-Vv77ASGszUj1BwOhUXtBCplSlBfQmAAA/641" alt="" /> */}
                <Demo></Demo>
            </MyLazyLoad>
            <LazyLoad placeholder={<div>loading...</div>} offset={300}>
                <img src="https://inews.gtimg.com/om_bt/Os3eJ8u3SgB3Kd-zrRRhgfR5hUvdwcVPKUTNO6O7sZfUwAA/641" alt="" />
            </LazyLoad>
        </div>
    )
}