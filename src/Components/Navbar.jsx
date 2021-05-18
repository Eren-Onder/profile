import React, { Component } from 'react'
import './css/Main.css'


class Navbar extends Component {
    render() {
        return (
            <div>
            <h1>Constraints</h1>
            <ul type ="disc">
                <li>1 &le; <i>N</i> &le; 10 </li>
                <li>Each char is an uppercase letter,i.e.,<i><b>char</b></i>&isin;['<i><b>A</b></i>','<i><b>Z</b></i>'].</li>
                <li>Each digit lies between 0 and 9,i.e.,<i><b>digit</b></i>&isin;[<b>0,9</b>]</li>
                <li>The length of the PAN number is always 10,i.e.,<i><b>lenght(PAN)=10</b></i></li>
                <li>Every character in PAN is either char or digit satisfying the above constraints.</li>
            </ul>
            </div>
        )
    }
}

export default Navbar