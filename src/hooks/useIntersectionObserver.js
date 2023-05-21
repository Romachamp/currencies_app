import React from "react";

const useIntersectionObserver = (ref, options) => {
    const [isIntersecting, setIsIntersecting] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.unobserve(ref.current);
        };
    }, []);

    return isIntersecting;
};

export default useIntersectionObserver;

// USAGE
// I file where you use this hook create the following lines of code
// const ref = useRef();
// const onScreen = useIntersectionObserver(ref, { threshold: 0.5 });
// Then put the at the ref attribute of your item put the ref variable. Finally change class with onScreen
// <div ref={ref} className={'item item-' + onScreen}>
//    <p>{onScreen ? 'Element is on screen.' : 'Scroll more!'}</p>
// </div>
