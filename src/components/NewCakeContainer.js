import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';
import { Button } from 'antd';


function NewCakeContainer(props) {
    let value = true;
    const [number, setNumber] = useState(1)
    if (props.numOfCakes > 0) {
        return (
            <div>
                <h2>Number of cakes - {props.numOfCakes}</h2>
                <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
                    <Button type="primary"  onClick={() => value == true ? props.buyCake(number) : props.buyiceCream(number) } >Buy {number} Cakes</Button>
            </div>
        )
    } else {
        return <h2>out of Stock sorry</h2>
    }
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dipatch => {
    return {
        buyCake: number => dipatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);