import React from 'react';
import {bindActionCreators} from "redux";
import {changeLang} from "../redux/actions/lang";
import {connect} from "react-redux";

const LanguageChange = (props) => {
    return (
        <div>

            <button type={"button"} onClick={()=>props.changeLang("uz")}>UZ</button>
            <button type={"button"} onClick={()=>props.changeLang("ru")}>RU</button>

        </div>
    );
};
const mstp = state => state;

const mdtp = dispatch => bindActionCreators({changeLang},dispatch)
export default connect(mstp, mdtp)(LanguageChange);