import React from 'react'
import "./Header.scss";
import Button from "../Buttons/Button";
import MenuIcon from '@material-ui/icons/Menu';
import CodeIcon from '@material-ui/icons/Code';
import { render } from '@testing-library/react';

const Header = (props) => {
    return (
        <>

        <div className="header">
        <h1> <CodeIcon/>  Codeforces Problems generator</h1>

            <h5>Get Unsolved Problems to generate Mashups/(Virtual contest) on Codeforces </h5> 
            <Button type={3}/>
            {/* <Button type={2} title={"ALOK"}/>
            <Button type={1} title={"VISHAL"}/> */}
            {/* <Button type={1} title={"alok"}/>
            <Button type={2} title={"vishal"}/> */}


        </div>
            
        </>
    );
}

export default Header
