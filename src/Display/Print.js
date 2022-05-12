import React from 'react';
import "./Display.scss";
import Button from "../Buttons/Button";

const Print = (props) => {
    // console.log("props ",props.final);
    const listItems = props.final.map((elem) =>
        <div className="list" key={elem.name}>
        <div className="rate">{elem.rate}</div>
        <div className="name">{elem.name}</div> 
        <Button className="link" type={1} to={elem.link} title={elem.id}/> 
        </div>
    );
  return (
    <>
    <div className="print">
        {listItems}
    </div>
    
    </>

  )
}

export default Print