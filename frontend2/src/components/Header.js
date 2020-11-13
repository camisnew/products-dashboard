import React from 'react';

export default function Header(props) { 
    return (
        <div className="header">
            <h1>Título: {props.title}</h1>
        </div>
    );
}