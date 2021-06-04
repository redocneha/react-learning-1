import React, { Component } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {buyCake} from '../redux/index'
import {connect} from 'react-redux'

function CakeContainer () {
     const cakes = useSelector( state => state.cakes );
     const dispatch = useDispatch();
        return (
            <>
            <h2>No of Cakes:{cakes}</h2>
            <button onClick={()=>{dispatch(buyCake())}}>Buy Cake</button>
            </>
          );
    
}
export default CakeContainer;
// const mapStateToProps = (state) =>{
//    return {
//        cakes: state.cakes
//    }
// }

// const mapDispatchToProps = (dispatch) =>{
//    return {
//        buyCake : dispatch(buyCake())
//    }
// }
// export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer);