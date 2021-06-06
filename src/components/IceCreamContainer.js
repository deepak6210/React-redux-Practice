import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'
import { Button } from 'antd';


 function IceCreamContainer(props) {
     if(props.numOfIceCreams > 0){
    return (
        <div>
            <h2>Number of icecreams - {props.numOfIceCreams}  </h2>
            <Button type="primary" onClick={props.buyIceCream}>Buy Icecream</Button>
        </div>
    )}else {
        return <h2>Out of stock Sorry</h2>
    }
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dipatch => {
    return {
        buyIceCream: () => dipatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);