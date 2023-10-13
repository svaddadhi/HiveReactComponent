import React, { useState } from 'react';
import { toggleItemInArray, selectAllInArray, deselectAllInArray } from '../utils/dropDownUtils';
import DropdownItem from './DropdownItem';
import './Dropdown.css';

const Dropdown = ({ items, isMulti = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState(new Set());

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        if (!isMulti) {
            setSelectedItems(new Set([item])); 
        } else {
            setSelectedItems(prevState => toggleItemInArray(prevState, item));
        }
    };

    const clearSelection = () => {
        setSelectedItems(new Set());
    }

    return (
        <div className="dropdown">
        <button onClick={toggleDropdown}>
            {selectedItems.size > 0 ? [...selectedItems].join(', ') : ''} <span className="arrow">{isOpen ? '▲' : '▼'}</span>
        </button>


            {isOpen && (
                <ul>
                    {/* "None" option */}
                    {!isMulti && <li onClick={clearSelection}>None</li>}

                    {isMulti && (
                        <>
                            <li onClick={() => setSelectedItems(selectAllInArray(items))}>Select All</li>
                            <li onClick={() => setSelectedItems(deselectAllInArray())}>Deselect All</li>
                        </>
                    )}
                    {items.map(item => (
                        <DropdownItem 
                            key={item}
                            item={item}
                            handleItemClick={handleItemClick}
                            isSelected={selectedItems.has(item)}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};


export default Dropdown;
