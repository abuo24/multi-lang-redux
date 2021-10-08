import React from 'react';
import {connect} from "react-redux";

const Home = (props) => {

    const {lang} = props&&props;
    return (
        <div>
            {lang&&lang.title}
        </div>
    );
};
const mstp = state => state.lang;
export default connect(mstp, null)(Home);