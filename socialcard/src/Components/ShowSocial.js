import React, {Component} from 'react';
import SocialCard from './SocialCard';

export default class ShowSocial extends Component{
    render(){
        return(
            <div id="showSocial">
                <p>
                    {companies.map(x => <SocialCard company = {x.company} worth = {x.worth} />)}
                </p>
            </div>
        );
    }
}

const companies = [
    {company: "Twitter", worth: 21},
    {company: "Facebook", worth: 32},
    {company: "Google", worth: 42}
];