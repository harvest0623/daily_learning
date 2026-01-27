import { useEffect } from 'react'

export default function useLifecycles(onMount, onUnmount) {
    useEffect(() => {
        if (onMount) {
            onMount();
        }
       return () => {
            if (onUnmount) {
                onUnmount();
            }
        }
    }, []);
}