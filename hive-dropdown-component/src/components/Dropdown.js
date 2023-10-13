import React, { useState, useCallback, memo } from 'react';
import { toggleItemInArray, selectAllInArray, deselectAllInArray } from '../utils/dropDownUtils';
import DropdownItem from './DropdownItem';
import './Dropdown.css';

const Dropdown = ({ items, isMulti = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState(new Set());

    const toggleDropdown = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const handleItemClick = useCallback((item) => {
        if (!isMulti) {
            setSelectedItems(new Set([item]));
        } else {
            setSelectedItems(prevState => toggleItemInArray(prevState, item));
        }
    }, [isMulti]);

    const clearSelection = useCallback(() => {
        setSelectedItems(new Set());
    }, []);

    const selectedDisplay = [...selectedItems].join(', ');

    return (
        <div className="dropdown">
        <button onClick={toggleDropdown}>
            {selectedDisplay} <span className="arrow">{isOpen ? '▲' : '▼'}</span>
        </button>

            {isOpen && (
                <ul>
                    {!isMulti ? <li onClick={clearSelection}>None</li> : (
                        <>
                            <li onClick={() => setSelectedItems(selectAllInArray(items))}>Select All</li>
                            <li onClick={() => setSelectedItems(deselectAllInArray())}>Deselect All</li>
                        </>
                    )}
                    {items.map(item => (
                        <MemoizedDropdownItem 
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

const MemoizedDropdownItem = memo(DropdownItem);

export default Dropdown;
