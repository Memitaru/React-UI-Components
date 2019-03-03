import React from 'react';
import './Button.css';

const buttonlist= [
    {
        text: 'clear',
        style: 'clear'
    },
    {
        text: '÷',
        style: 'red'
    },
    {
        text: '7',
        style: 'number'
    },
    {
        text: '8',
        style: 'number'
    },
    {
        text: '9',
        style: 'number'
    },
    {
        text: 'x',
        style: 'red'
    },
    {
        text: '4',
        style: 'number'
    },
    {
        text: '5',
        style: 'number'
    },
    {
        text: '6',
        style: 'number'
    },
    {
        text: '-',
        style: 'red'
    },
    {
        text: '1',
        style: 'number'
    },
    {
        text: '2',
        style: 'number'
    },
    {
        text: '3',
        style: 'number'
    },
    {
        text: '+',
        style: 'red'
    },
    {
        text: '0',
        style: 'zero'
    },
    {
        text: '=',
        style: 'red'
    },
    
]

const Button = props => (
    <button className={props.button.style}>{props.button.text}</button>
)

const Calc = (props) => {
    return (
        <div class="calc">
            {buttonlist.map((button, index) => (
                <Button button={button} key={index}/>
            ))}
        </div>

        
    )
}

export default Calc;