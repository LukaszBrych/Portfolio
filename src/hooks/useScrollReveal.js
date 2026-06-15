import {useEffect} from 'react';

const useScrollReveal = (selector = '.MainSite > section', threshold = 0.12) => {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            {threshold}
        );

        elements.forEach((element, index) => {
            if (index === 0) {
                element.classList.add('is-visible');
            }
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, [selector, threshold]);
};

export default useScrollReveal;
