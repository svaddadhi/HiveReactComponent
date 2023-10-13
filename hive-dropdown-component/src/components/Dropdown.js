import React, { useState } from 'react';
import { toggleItemInArray, selectAllItems, deselectAllItems } from '../utils/dropDownUtils';
import DropdownItem from './DropdownItem';
import './Dropdown.css';

const Dropdown = ({ items, isMulti = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        if (isMulti) {
            setSelectedItems(prevState => toggleItemInArray(prevState, item));
        } else {
            setSelectedItems([item]);
            setIsOpen(false);
        }
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown}>
                {selectedItems.join(', ')} <span className="arrow">{isOpen ? '▲' : '▼'}</span>
            </button>


            {isOpen && (
                <ul>
                    {isMulti && (
                        <>
                            <li onClick={() => setSelectedItems(selectAllItems(items))}>Select All</li>
                            <li onClick={() => setSelectedItems(deselectAllItems())}>Deselect All</li>
                        </>
                    )}
                    {items.map(item => (
                        <DropdownItem 
                            key={item}
                            item={item}
                            handleItemClick={handleItemClick}
                            isSelected={selectedItems.includes(item)}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
