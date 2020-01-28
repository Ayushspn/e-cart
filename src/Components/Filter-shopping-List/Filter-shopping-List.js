import React from 'react';
import './Filter-shopping.styles.scss';
import InputRange from 'react-input-range';

const FilterShoppingList = ({rangeValueChange, minValue, maxValue, rangeValue}) => {
    return (
        <div className='filter-container'>
            
            <div style={{ 'clear': 'both' }}></div>
            <p style={{ textAlign: 'center' }}>Range :100  to  {rangeValue == 100 ? '1000' : rangeValue }</p>
            <input min="100" max="1000" step="100" 
            type="range" onChange={rangeValueChange} 
            value={rangeValue} 
            className ='input-value-change'
            />
            <div>
                <span className='pull-left'>&#x20b9;{minValue}</span>
                <span className='pull-right'>&#x20b9; {maxValue}</span>
            </div>
            <p style={{ textAlign: 'center' }}>Price</p>
        </div>
    )
}

export default FilterShoppingList;