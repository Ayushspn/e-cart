import React, { useEffect, useState } from 'react';

import ShoppingList from '../../Components/Shopping-List/Shopping-List.component';
import FilterShoppingList from '../../Components/Filter-shopping-List/Filter-shopping-List';
import Spinner from '../../Components/HOC/spinner/spinner.component'
import Modal from '../../Components/modal/modal.component';
import PriceSort from '../../Components/Sort/Price-Sort/Price-Sort.component';

import { connect } from 'react-redux';
import './Hompage.modules.scss';
import { fetchShopList, ApplyFilter } from '../../redux/ShopList/ShopActionCreators';
import { SetSpinnerFlag } from '../../redux/ShopList/ShopActionCreators'

const HomePage = ({ getShoppingList, filterShoppingList, setSpinnerFlag, spinnerStatus }) => {
    const [minValue, setMinValue] = useState(100);
    const [maxValue, setMaxValue] = useState(1000);

    const [filteValue, rangeValue] = useState(100);

    const [modal, setopenModal] = useState(false);
    const [renderCmp, setrenderCmp] = useState('');

    useEffect(() => {
        getShoppingList();
    }, [])
    const rangeValueChange = (event) => {
        rangeValue(event.target.value)
    }


    const applyRangeFilter = () => {
        let maxValue = filteValue;
        if(filteValue==='100' ||  filteValue===100){
            maxValue = 1000
        }
        filterShoppingList({
            min: 100,
            max: maxValue
        })
    }

    const openModal = (renderComponent) => {
        setrenderCmp(renderComponent);
        setopenModal(true);
    }

    const closModal = () => {
        setopenModal(false);
    }

    return (
        <>
            <Spinner isLoading={spinnerStatus}></Spinner>
            <Modal modal={modal}
                modalType={renderCmp}
            >
                {renderCmp === 'FILTER' ? <div>
                <FilterShoppingList
                                minValue={minValue}
                                maxValue={maxValue}
                                rangeValueChange={(event) => rangeValueChange(event)}
                                rangeValue={filteValue}
                            ></FilterShoppingList>
                    <div>
                        <button onClick={() => applyRangeFilter()} className='apply-rng-btn__modal'> Apply Range</button>
                        <button onClick={() => closModal()} className='apply-rng-btn__modal'>Close</button>
                    </div>
                </div>

                    :
                    <div>
                        <PriceSort renderSortingForMobile={true} />
                        <button onClick={() => closModal()} className='apply-rng-btn__modal'>Close</button>
                    </div>

                }
            </Modal>
            <div className='main-container'>
                <div className=''>
                    <div className='filter-sort-mobile desctop-display__none'>
                        <div className='filter-sort-icon'>
                            <i className="fa fa-sort" onClick={() => openModal('SORT')}>Sort</i>
                        </div>
                        <div className='filter-sort-icon'>
                            <i className="fa fa-filter" onClick={() => openModal('FILTER')}>Filter</i>
                        </div>
                    </div>
                    <div>
                        <div className='filter-text'><b>Filter</b></div>
                        <div className ='shop-list-filter'>
                        <div className='filter-apply-btn'>

                            <FilterShoppingList
                                minValue={minValue}
                                maxValue={maxValue}
                                rangeValueChange={(event) => rangeValueChange(event)}
                                rangeValue={filteValue}
                            ></FilterShoppingList>
                            <div className='apply-btn-container'>
                                <button onClick={() => applyRangeFilter()} className='apply-rng-btn mobile-display__none'> Apply Range</button>
                            </div>
                        </div>
                        <ShoppingList></ShoppingList>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

const mapsStateToProps = ({ shop: { spinnerFlag } }) => {
    return {
        spinnerStatus: spinnerFlag
    }
}


const mapDispatchToProps = dispatch => {
    return {

        getShoppingList: () => dispatch(fetchShopList()),
        filterShoppingList: (rangeObj) => dispatch(ApplyFilter(rangeObj)),
        setSpinnerFlag: (flag) => dispatch(SetSpinnerFlag(flag))
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(HomePage);