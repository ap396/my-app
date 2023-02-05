import React from 'react';
function NavigationItem({ item, type = "square", level = 0 }) {
    return (
        <ul>
            <li style={{ listStyleType: type }}>
                {item.name}
                {item.children && item.children.map(child => {
                    const childLevel = level + 1;
                    return <NavigationItem item={child} key={child.id} type={childLevel > 1 ? "circle" : "disc"} level={childLevel} />
                })}
            </li>
        </ul>
    );
}

const Navigation = ({ data }) => {
    return (
        <>
            {data.map(item => (
                <NavigationItem item={item} key={item.id} />
            ))}
        </>
    );
}

export default Navigation;