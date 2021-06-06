import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../redux'
import { Button } from 'antd';

function ItemContainer(props) {
    if(props.item > 0){
    return (
        <div>
            <h2>Items - {props.item} </h2>
            <Button type="primary" onClick={props.buyItem}>Buy Items</Button>
        </div>
    )} else{
        return <h2>Out of stock</h2>
    }
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCakes
   : state.iceCream.numOfIceCreams
   return{
       item: itemState
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake 
    ? () => dispatch(buyCake()) 
    : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
