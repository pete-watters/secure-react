import React from 'react';
import  { render } from 'react-dom';
import { EscapeInput, DangerousHtml } from './components';

render(
    <div>
        <hr />
        <EscapeInput />
        <hr />
        <DangerousHtml />
    </div>,
    document.getElementById('root')
);