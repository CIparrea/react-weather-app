import { useState } from 'react';
import './searchBar.css';

export default function SearchBar() {

    // useState to keep track of input value


    // Input tag should have: value and onChange (sets state)
  return (
    <div>
         <form className="searchBar">
            <input type="text" name="input" placeholder="Type here..."/>
            <button type="submit"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"/></button>  
        </form>
    </div>
  )
}
