import { useEffect, useState } from 'react'
import { animated, useSpringValue, useSpring, useSprings, useTrail } from '@react-spring/web'
import './index.css'

export default function Index() {
    // const width = useSpringValue(0, {
    //     config: {
    //         duration: 2000,
    //         mass: 20,
    //         tension: 200,
    //         friction: 10
    //     }
    // })

    // const styles = useSpring({
    //     from: {
    //         width: 0,
    //         height: 0
    //     },
    //     to: {
    //         width: 200,
    //         height: 200
    //     },
    //     config: {
    //         // duration: 2000,
    //         mass: 20,
    //         tension: 200,
    //         friction: 10
    //     }
    // })

    // const [styles, api] = useSpring(() => {
    //     return {    
    //         from: {
    //             width: 100,
    //             height: 100
    //         },
    //         config: {
    //             // duration: 2000,
    //             mass: 2,
    //             tension: 400,
    //             friction: 10
    //         }
    //     }
    // })

    // const clickHandler = () => {
    //     api.start({
    //         width: 200,
    //         height: 200,
    //     })
    // }

    // useEffect(() => {
    //     // width.start(300)
    // }, [])

    const [springs, api] = useTrail(3, () => ({
        from: {width: 0},
        to: {width: 300},
        config: {
            duration: 2000
        }
    }))
    console.log(springs);

    useEffect(() => {
        api.start({
            width: 300
        })
    }, [])

    return (
        <div>
            {
                springs.map((styles, index) => {
                    return (
                        <animated.div key={index} className='box' style={styles}>

                        </animated.div>
                    )   
                })
            }
            {/* <animated.div key={index} className='box' style={{ ...styles }} onClick={clickHandler}>

            </animated.div> */}
        </div>  
    )
}