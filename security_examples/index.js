import React from 'react';
import  { render } from 'react-dom';
import { EscapeInput, DangerousHtml, UserHref, Eval } from './components';

render(
    <div>
        <hr />
        <EscapeInput />
        <hr />
        <DangerousHtml />
        <hr />
        <UserHref />
        <hr />
        <Eval /> 
    </div>,
    document.getElementById('root')
);