import {useEffect} from 'react';

const SCROLL_LOCK_CLASS = 'scroll-locked';

const getScrollableAncestor = (target) => {
    let node = target;

    while (node && node !== document.body) {
        if (!(node instanceof HTMLElement)) {
            node = node.parentElement;
            continue;
        }

        const style = window.getComputedStyle(node);
        const overflowY = style.overflowY;
        const canScrollY =
            (overflowY === 'auto' || overflowY === 'scroll') &&
            node.scrollHeight > node.clientHeight + 1;

        if (canScrollY) {
            return node;
        }

        node = node.parentElement;
    }

    return null;
};

const useScrollLock = (isLocked) => {
    useEffect(() => {
        if (!isLocked) {
            return undefined;
        }

        const {body, documentElement: html} = document;
        const scrollbarWidth = window.innerWidth - html.clientWidth;

        const previousBodyStyles = {
            overflow: body.style.overflow,
            paddingRight: body.style.paddingRight,
            touchAction: body.style.touchAction,
        };
        const previousHtmlStyles = {
            overflow: html.style.overflow,
            paddingRight: html.style.paddingRight,
        };

        body.classList.add(SCROLL_LOCK_CLASS);
        html.classList.add(SCROLL_LOCK_CLASS);

        body.style.overflow = 'hidden';
        html.style.overflow = 'hidden';
        body.style.touchAction = 'none';

        if (scrollbarWidth > 0) {
            body.style.paddingRight = `${scrollbarWidth}px`;
            html.style.paddingRight = `${scrollbarWidth}px`;
        }

        const preventBackgroundScroll = (event) => {
            if (getScrollableAncestor(event.target)) {
                return;
            }

            event.preventDefault();
        };

        document.addEventListener('touchmove', preventBackgroundScroll, {passive: false});
        document.addEventListener('wheel', preventBackgroundScroll, {passive: false});

        return () => {
            document.removeEventListener('touchmove', preventBackgroundScroll);
            document.removeEventListener('wheel', preventBackgroundScroll);

            body.classList.remove(SCROLL_LOCK_CLASS);
            html.classList.remove(SCROLL_LOCK_CLASS);

            body.style.overflow = previousBodyStyles.overflow;
            body.style.paddingRight = previousBodyStyles.paddingRight;
            body.style.touchAction = previousBodyStyles.touchAction;
            html.style.overflow = previousHtmlStyles.overflow;
            html.style.paddingRight = previousHtmlStyles.paddingRight;
        };
    }, [isLocked]);
};

export default useScrollLock;
