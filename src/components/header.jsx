import React from 'react';
import {Canvas} from './canvas.jsx';

export class Header extends React.Component {


render(){

    return <section>

        <div className="container">

            <div className="col-12 main-header">

                <div className='main-header-title'><span>VIOLIN</span></div>
                <Canvas> </Canvas>

            </div>
        </div>
    </section>
}




}