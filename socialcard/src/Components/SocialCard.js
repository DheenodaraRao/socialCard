import React , {Component} from 'react';

export default class SocialCard extends Component{
    render(){
        return(
            <div id="socialcard">
                Name: {this.props.company} <br/>
                Value: ${this.props.worth}b
            </div>
        );
    }
}