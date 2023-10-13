import React from 'react';

const DropdownItem = ({ item, handleItemClick, isSelected }) => {
    return (
        <li 
            onClick={() => handleItemClick(item)}
            className={isSelected ? 'selected' : ''}
        >
            {item}
        </li>
    );
};

export default DropdownItem;
