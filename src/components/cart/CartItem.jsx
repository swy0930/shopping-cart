import React from 'react';
import {currencyFormatter} from '../../utils/formatter';
import {Button} from 'react-bootstrap';

export default ({item,index,handleRemove})=>{
    return <tr key={index}>
        <td>{item.name}</td>
        <td align="right">{currencyFormatter(item.price)}</td>
        <td>{item.quantity}</td>
        <td align="right">{currencyFormatter(item.total)}</td>
        <td><Button variant="secondary" onClick={(e)=>handleRemove(e,item.name)}>Remove</Button></td>
    </tr>
};
