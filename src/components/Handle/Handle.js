import React from 'react';
import { connect } from 'react-redux';

const Handle = (props) => {
    return (
        <div>
            <button onClick={props.add} className="btn btn-success mr-5">+ ADD</button>
            <button onClick={props.sub} className="btn btn-danger ">- SUB</button>
            <button onClick={props.clr} className="btn btn-warning ml-5">Clear</button>
           
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        add: () => {
            dispatch({type:"ADD"})
        },

        sub: () => {
            dispatch({type:"SUB"})
        },
        clr: () => {
            dispatch({type:"CLR"})
        }
    }
}

export default connect(null,mapDispatchToProps)(Handle);