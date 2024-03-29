import React, { cloneElement, useMemo } from "react";

const Tag = "span";

const TruncatedElement = ({ children, lines, getRef, isExpanded }) => {
    const getStyles = useMemo(() => {
        if(isExpanded) {
            return {
                display: "block"
            }
        }
        else {
            return {
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: parseInt(lines),
                textOverflow: 'ellipsis'
            }
        };
    }, [lines, isExpanded]);

    const getChildrenElement = () => {
        if (children.type) return children;

        return <Tag>{children}</Tag>;
    };

    const getClonedChildren = () => {
        const childrenElement = getChildrenElement();

        const clonedElement = cloneElement(childrenElement, {
            style: { ...childrenElement.props.style, ...getStyles },
            ref: getRef,
        });

        return clonedElement;
    };

    return getClonedChildren();
};

export default TruncatedElement;
