import { useState, useRef, useEffect } from 'react'

export default function MyLazyLoad(props) {
    const {
        className = '',
        style,
        width,
        height,
        offset = 0,
        placeholder,
        children,
        onContentVisible,
        onClose
    } = props;
    const [visible, setVisible] = useState(false);
    const styles = {width, height, ...style}
    const containerRef = useRef(null);
    const elementObserver = useRef();

    useEffect(() => {
        // 初始化交叉监听器
        const options = {
            threshold: 0,
            rootMargin: typeof offset === 'number' ? `${offset}px` : '0px'
        }
        elementObserver.current = new IntersectionObserver(lazyLoadHandler, options);
        const node = containerRef.current;
        elementObserver.current.observe(node);

        // 组件卸载时，移除交叉监听器
        return () => {
            elementObserver.current.unobserve(node);
            onClose?.();
        }
    }, []);

    function lazyLoadHandler(entries) {
        console.log(entries);
        const [entry] = entries;  // entries 是被观察后的结果\
        if (entry.isIntersecting) {
            setVisible(true);
            onContentVisible?.();
            const node = containerRef.current;
            elementObserver.current.unobserve(node);
        }
    }

    return (
        <div ref={containerRef} className={className} style={styles}>
            {visible ? children : placeholder}
        </div>
    )
}