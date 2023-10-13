import React, { useState } from 'react';
import './Dropdown.css'

const Dropdown = ({ items, isMulti = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        if (isMulti) {
            setSelectedItems(prevState => {
                if (prevState.includes(item)) {
                    return prevState.filter(i => i !== item);
                } else {
                    return [...prevState, item];
                }
            });
        } else {
            setSelectedItems([item]);
            setIsOpen(false);
        }
    };

    const selectAll = () => {
        setSelectedItems(items);
    };

    const deselectAll = () => {
        setSelectedItems([]);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown}>
                {selectedItems.join(', ')}
            </button>

            {isOpen && (
                <ul>
                    {isMulti && (
                        <>
                            <li onClick={selectAll}>Select All</li>
                            <li onClick={deselectAll}>Deselect All</li>
                        </>
                    )}
                    {items.map(item => (
                        <li 
                            key={item} 
                            onClick={() => handleItemClick(item)}
                            className={selectedItems.includes(item) ? 'selected' : ''}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
