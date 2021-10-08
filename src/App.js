import './App.css';
import LanguageChange from "./component/LanguageChange";
import Home from "./component/Home";
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeLang} from "./redux/actions/lang";

const App = (props) => {
    const [lang, setLang] = useState(localStorage.getItem("lang")?localStorage.getItem("lang"):"uz");

    useEffect(()=>{
        console.log(lang)
    },[])
    useEffect(()=>{
        props.changeLang(lang);
    },[lang])
    return (
        <div className={"body"}>
            <LanguageChange/>
            <Home/>
        </div>
    );
}
const mstp = state => state;

const mdtp = dispatch => bindActionCreators({changeLang},dispatch)
export default connect(mstp, mdtp)(App);
