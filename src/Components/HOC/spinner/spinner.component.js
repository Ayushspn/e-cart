import React from 'react';
import './spinner.styles.scss';

const Spinner =  ({isLoading}) => {
    return isLoading? (
        <div className ='SpinnerOverlay'>
            <div className='SpinnerContainer'>

            </div>
        </div>
    ): null
}
export default Spinner;