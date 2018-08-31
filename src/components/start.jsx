import React from 'react';
import sounds from '../../sounds.json'

export class Start extends React.Component{

    constructor(props){
        super(props);

        this.state = {

            isActive: false,
            sounds: [

                {

                    "audio": "/sounds/G0.mp3",

                    "gama": 0,

                    "sound": "G0",

                    "image": "/images/image.png"

                },

                {

                    "audio": "/sounds/A0.mp3",

                    "gama": 0,

                    "sound": "A0",

                    "image": "/images/image.png"

                },

                {

                    "audio": "/sounds/B0.mp3",

                    "gama": 0,

                    "sound": "B0",

                    "image": "/images/image.png"

                },


                {

                    "audio": "/sounds/C1.mp3",

                    "gama": 1,

                    "sound": "C1",

                    "image": "/images/Music.staff.png"

                },


                {

                    "audio": "/sounds/D1.mp3",

                    "gama": 1,

                    "sound": "D1",

                    "image": "/images/Music.staff.png"

                },

                {

                    "audio": "/sounds/E1.mp3",

                    "gama": 1,

                    "sound": "E1",

                    "image": "/images/Music.staff.png"

                },

                {

                    "audio": "/sounds/F1.mp3",

                    "gama": 1,

                    "sound": "Fis 1",

                    "image": "/images/Music.staff.png"

                },

                {
                    "audio": "/sounds/G1.mp3",

                    "gama": 1,

                    "sound": "G1",

                    "image": "/images/Music.staff.png"

                }

            ]
        }



    }

    handleClick = () =>  {

        console.log ('click');

        this.setState(
            {
                isActive: true
            }
        )


    }


    render() {


        const sound = this.state.sounds.map((el,i) => {

            return <div onClick={this.handleClick} className={'sounds-list'} key={i} ><p  className={'sounds-list__elements'}> {el.sound}</p></div>

        })
        return <div> <div className={'sounds-list__container'}> {sound} </div>

            {/*  <div className={'sounds'}> <img className={'ppp'} src={require('../images/Music-staff.png')}/>

                 <div> <img className={'note'} src={require('../images/notes.png')}/> </div>

             </div>
             */}




        </div>
    }








}