import React, { Component } from 'react';

const foo = "<input placeholder='Mixed in input...' />";
const bar = "<script>alert('XSS')</script>";
const goo = `<a href='javascript:alert("XSS");'>Click me</a>`;

class DangerousHTML extends Component {
    componentDidMount(){
        const s = document.createElement('script');
        s.innerHTML = "console.log('XSS created with innerHTML')";
        document.getElementById('danger-inner-html').appendChild(s);
    }
    render() {
        return(
            <div>
            <div id='danger-div'>
                <h3>Dangerous HTML</h3>
                {/* 
                 never use dangerouslySetInnerHTML
                 - if you do mix in an object with __html
                 - mixing it like this tells react to skip over this content during diffing algorithm
                */}
                <div dangerouslySetInnerHTML={{__html: foo}}/>
                {/* browser doesn't re-evaluate this on first load */}
                <div dangerouslySetInnerHTML={{__html: bar}}/><div dangerouslySetInnerHTML={{__html: bar}}/>
                {/* Shows using dangerouslySetInnerHTML can still run JS */}
                <div dangerouslySetInnerHTML={{__html: goo}}/>       
            </div>
            <div id='danger-inner-html'></div>

            </div>
        )
    }
}

export default DangerousHTML;