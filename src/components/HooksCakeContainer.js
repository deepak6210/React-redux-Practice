import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
import { Button } from 'antd';


function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    if(numOfCakes > 0) {
    return (
        <div>
            <h2>Num of Cake - {numOfCakes}</h2>
            <Button type="primary" onClick={() => dispatch(buyCake())}>Buy Cakes</Button>
        </div>
    )}else{
        return(
            <h2>Out of stock sorry</h2>
        )
    }
}

export default HooksCakeContainer;
