import React from 'react';

export class Board extends React.Component{

    constructor(props){
        super(props);

    }

    render(){


        return <div className="container">
            <div className="row">
                <div className="col-6 main-content">
                    1 of 2
                </div>
                <div className="col-6">
                    2 of 2
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    1 of 3
                </div>
                <div className="col-4">
                    2 of 3
                </div>
                <div className="col-4">
                    3 of 3
                </div>
            </div>
        </div>



    }


}