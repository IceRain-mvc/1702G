import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Detail from "../component/Detail";
import List from "../component/List";
import {connect} from "react-redux";
import {request} from "../../api/request";

class Index extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Detail/>
                    <List/>
                </div>
            </Router>
        );
    }

    componentDidMount() {
        this.props.saveAllData(request);
    }
}

let initMapStateToProps=(state)=>{
    return{

    }
}
let initMapDispatchToProps=(dispatch)=>{
    return{
        saveAllData:(fn)=>{
            dispatch(fn)
        }
    }
}

export default connect(initMapStateToProps,initMapDispatchToProps)(Index);
