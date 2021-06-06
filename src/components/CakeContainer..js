import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
import { Button } from 'antd';


function CakeContainer(props) {
    if (props.numOfCakes > 0) {
        return (
            <div>
                <h2>Number of cakes - {props.numOfCakes}  </h2>
                <Button type="primary" onClick={props.buyCake}>Buy Cakes</Button>
            </div>
        )
    } else {
        return (
            <h2>Out Of stock Sorry</h2>
        )
    }
}
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dipatch => {
    return {
        buyCake: () => dipatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);