import React from 'react';

const logo = require('../images/violin.svg');
export class Footer extends React.Component {


    render(){

        return <section>

            <div className="container">

                <div className="col-12 footer">

                    <div className={'footer__logo'}> <img className={'footer__img'} src={logo}/></div>
                    <div> </div>

                </div>

            </div>
        </section>
    }




}