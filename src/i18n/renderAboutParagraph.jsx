import React from 'react';

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const renderAboutParagraph = (text, paragraphIndex, highlights) => {
    const paragraphHighlights = highlights
        .filter((item) => item.paragraph === paragraphIndex)
        .sort((a, b) => b.text.length - a.text.length);

    if (paragraphHighlights.length === 0) {
        return text;
    }

    let nodes = [text];

    paragraphHighlights.forEach((highlight) => {
        const nextNodes = [];

        nodes.forEach((node) => {
            if (typeof node !== 'string') {
                nextNodes.push(node);
                return;
            }

            const parts = node.split(new RegExp(`(${escapeRegExp(highlight.text)})`));
            parts.forEach((part, index) => {
                if (!part) return;

                if (index % 2 === 1) {
                    if (highlight.type === 'strong') {
                        nextNodes.push(<strong key={`${paragraphIndex}-${highlight.text}-${index}`}>{part}</strong>);
                    } else {
                        nextNodes.push(
                            <span className="about-highlight" key={`${paragraphIndex}-${highlight.text}-${index}`}>
                                {part}
                            </span>
                        );
                    }
                    return;
                }

                nextNodes.push(part);
            });
        });

        nodes = nextNodes;
    });

    return nodes;
};
