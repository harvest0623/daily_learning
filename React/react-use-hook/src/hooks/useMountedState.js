import { useRef, useEffect } from 'react'

export default function useMountedState() {
    const mounted = useRef(false);
    const get = () => mounted.current;
    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        }
    }, [])
    return get;
}