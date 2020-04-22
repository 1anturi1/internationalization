import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en"
import JobsList from "./components/jobsList";

var lang = function() {
	if( navigator.language.includes("es")){
		return "es";
	} 
	else{
		return "en";
	}	
  }

var messages = function(){	
	if( lang().includes("es")){
		return localeEsMessages ;
	}
	else{
		return localeEnMessages;
	}
} 

ReactDOM.render(
	<IntlProvider locale={lang()} messages= {messages()}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);