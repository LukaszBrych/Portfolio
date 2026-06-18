export const updateSectionHeaderOffset = () => {
    const wrapper = document.querySelector('.navbar-wrapper');
    if (!wrapper) return;

    document.documentElement.style.setProperty(
        '--section-header-offset',
        `${wrapper.offsetHeight}px`
    );
};

export const scrollToSectionElement = (element, {behavior = 'smooth'} = {}) => {
    if (!element) return;

    updateSectionHeaderOffset();

    window.requestAnimationFrame(() => {
        const top = window.scrollY + element.getBoundingClientRect().top;
        window.scrollTo({top, behavior});
    });
};

export const scrollToSectionRef = (ref, options) => {
    scrollToSectionElement(ref?.current, options);
};
