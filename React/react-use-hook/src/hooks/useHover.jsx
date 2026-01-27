import { useState, cloneElement } from 'react'

export default function useHover(element) {
    const [state, setState] = useState(false);
    const onMouseEnter = (originalOnMouseEnter) => {
        return (event) => {
            originalOnMouseEnter?.(event);
            setState(true);
        }
    };
    const onMouseLeave = (originalOnMouseLeave) => {
        return (event) => {
            originalOnMouseLeave?.(event);
            setState(false);
        }
    };
    if (typeof element === 'function') {
        element = element(state);
    }
    const el = cloneElement(element, {
        onMouseEnter: onMouseEnter(element.props.onMouseEnter),
        onMouseLeave: onMouseLeave(element.props.onMouseLeave),
    })
    return [el, state];
}