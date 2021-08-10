import React from 'react';
import {connect} from 'react-redux';
import {getOrder} from '../actions/index'

const Order = ({
    filteredRecipes, 
    getOrder,
}) =>{
    const handleFilter = (e) =>{
        getOrder(e.target.value);
    };
    const handleOrder = (e) =>{
        e.preventDefault();
        getOrder(e.target.id);
        console.log(e.target.id)
    }
    return (
        <div >
            <div className="centerx">
                
                 <button id='A-Z' className="btn btn-verde" type="button" onClick={handleOrder}>
                     A-Z
                 </button>
                 <button id='Z-A' className="btn btn-verde" type="button" onClick={handleOrder}>
                     Z-A
                 </button>
                 <button id='More Score' className="btn btn-verde" type="button" onClick={handleOrder}>
                    More Score
                 </button>
                 <button id='Less Score' className="btn btn-verde" type="button" onClick={handleOrder}>
                    Less Score
                 </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrder: (order) => dispatch(getOrder(order)),
    }
}
const mapStateToProps = (state) =>{
    return{
    filteredRecipes: state.filteredRecipes
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);
