import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import Sound from 'react-sound';
require('./scss/main.scss');

//or
//require('../css/main.css')

//import {Start} from "./components/start.jsx";

const Asound = require('./sounds/A0.mp3');
const Hsound = require('./sounds/B0.mp3');
const Gsound = require('./sounds/G0.mp3');
const C1sound = require('./sounds/C1.mp3');
const Cis1sound = require('./sounds/Cis1.mp3');
const D1sound = require('./sounds/D1.mp3');
const E1sound = require('./sounds/E1.mp3');
const F11sound = require('./sounds/F1.mp3');
const Fis1sound = require('./sounds/Fis.mp3');
const G1sound = require('./sounds/G1.mp3');
const A1sound = require('./sounds/A1.mp3');
const B1sound = require('./sounds/Hes.mp3');
const H1sound = require ('./sounds/B1.mp3');
const C2sound = require ('./sounds/C2.mp3');
const Cis2sound = require('./sounds/Cis 2.mp3')
const D2sound = require ('./sounds/D2.mp3');
const E2sound = require ('./sounds/E2.mp3');
const F2sound = require ('./sounds/F2.mp3');
const Fis2sound = require('./sounds/Fis2.mp3');
const G2sound = require ('./sounds/G2.mp3');
const A2sound = require ('./sounds/A2.mp3');
const staff = require('./images/staff4.png');
const svg = require('./images/whooole.svg');
const hand = require('./images/Hand.svg');
const one = require ('./images/one.svg');
const two = require ('./images/two.svg');
const three = require ('./images/three.svg');
const sharp = require ('./images/Sharp.svg');

import {Header} from './components/header.jsx';
import {ScatterplotChart} from 'react-easy-chart';
import {Footer} from "./components/footer.jsx";

import {Canvas} from './components/canvas.jsx';

class App extends React.Component {


    constructor(props) {
        super(props);

        this.state = {

            left: '',
            sharp: '',
            svg: '',
            top: "310px",
            one: '',
            two: '',
            three: '',
            playsound: Sound.status.STOPPED,
            isActive: true,

            config: [
                {
                    type: 1,
                    color: 'transparent',
                    stroke: 'red'
                },
                {
                    type: 2,
                    color: 'rgb(168, 219, 168)',
                    stroke: 'red'
                },
                {
                    type: 3,
                    color: 'orange',
                    stroke: 'black'
                },


            ], sounds: [

                {

                    "audio": Gsound,

                    "sound": "G0",

                    "play": false


                },

                {

                    "audio": Asound,

                    "sound": "A0",

                    "play": false

                },

                {

                    "audio": Hsound,

                    "sound": "H0",

                    "play": false

                },

                {

                    "audio": C1sound,

                    "sound": "C1",

                    "play": false

                },

                {

                    "audio": Cis1sound,

                    "sound": "Cis 1",

                    "play": false

                },

                {
                    "audio": D1sound,

                    "sound": "D1",

                    "play": false

                },

                {

                    "audio": E1sound,

                    "sound": "E1",

                    "play": false

                },

                {

                    "audio": F11sound,

                    "sound": "F1",

                    "play": false

                },

                {

                    "audio": Fis1sound,

                    "sound": "Fis 1",

                    "play": false

                },

                {
                    "audio": G1sound,

                    "sound": "G1",

                    "play": false

                },

                {
                    "audio": A1sound,

                    "sound": "A1",

                    "play": false,


                },

                {
                    "audio": B1sound,

                    "sound": "B1",

                    "play": false

                },

                {
                    "audio": H1sound,

                    "sound": "H1",

                    "play": false

                },

                {
                    "audio": C2sound,

                    "sound": "C2",

                    "play": false

                },

                {
                    "audio": Cis2sound,

                    "finger": 2,

                    "sound": "Cis 2",

                    "image": "/images/Music.staff.png",

                    "play": false

                },

                {
                    "audio": D2sound,

                    "sound": "D2",

                    "play": false

                },

                {
                    "audio": E2sound,

                    "sound": "E2",

                    "play": false,


                },

                {
                    "audio": F2sound,

                    "sound": "F2",

                    "play": false

                },
                {

                    "audio": Fis2sound,

                    "sound": "Fis 2",

                    "play": false

                },

                {
                    "audio": G2sound,

                    "sound": "G2",

                    "play": false

                },

                {
                    "audio": A2sound,

                    "sound": "A2",

                    "play": false

                }

            ],

            data: [

                {
                    type: 1,
                    x: '1',
                    y: "E",
                },
                {
                    type: 1,
                    x: '2',
                    y: "E",
                },
                {
                    type: 1,
                    x: '3',
                    y: "A",
                },

                {
                    type: 1,
                    x: '4',
                    y: "A",
                },
                {
                    type: 1,
                    x: '5',
                    y: "D"
                },
                {
                    type: 1,
                    x: '6',
                    y: "G"
                }

            ],

        }

    }

    handleClick = (e) => {

        /*console.log(e.target.innerText);*/

        let state = _.map(this.state.data, (e) => {
            return {...e, type: 1}
        });

        let dot = {};

        switch(e.target.innerText) {
            case 'G0':
                this.setState({
                    top: '530px',
                    svg: svg
                });

                $($(".scatterplot-chart-75331f024de1f2314f66e201de96677c3e49d8c6 .tick line")[9]).attr('style', 'stroke: #48ce80     !important;');

                setTimeout(() => {
                    $($(".scatterplot-chart-75331f024de1f2314f66e201de96677c3e49d8c6 .tick line")[9]).attr('style', 'stroke: #a0a08a  !important;');
                }, 1000);

                clearTimeout();
                dot = {type: 1, y:'G', x: 2} ;
                break;

            case 'A0':
                dot = { type: 2, y: 'G', x: '2'};
                this.setState({
                    one: one,
                    top: '500px',
                    svg: svg
                });
                setTimeout(() => {

                    this.setState({
                        one: ''
                    })

                },1000);
                break;

            case 'H0':
                dot = { type: 2, y: 'G', x: '4'};
               this.setState({
                    two: two,
                   top: '474px',
                   svg: svg,
                   sharp: ''
               });
                setTimeout(() => {

                    this.setState({
                        two : ''
                    })

                },1200);
                break;

            case 'C1':
                dot = { type: 2, y: 'G', x: '5'};
                this.setState({
                    three: three,
                    top: '440px',
                    svg: svg,
                    sharp: ''

                });
                setTimeout(() => {

                    this.setState({
                        three: ''
                    })

                },1200);
                break;

            case 'Cis 1':
                dot = { type: 3, y: 'G', x: '6'};
                this.setState({
                    three: three,
                    top: '440px',
                    svg: svg,
                    sharp: sharp,
                    left: '220px'

                });
                setTimeout(() => {

                    this.setState({
                        three: ''
                    })

                },1200);
                break;

            case 'D1':
                this.setState({
                    top: '420px',
                    svg: svg,
                    sharp: ''
                })
                $($(".scatterplot-chart-75331f024de1f2314f66e201de96677c3e49d8c6 .tick line")[8]).attr('style', 'stroke: #48ce80      !important');
                setTimeout(() => {
                    $($(".scatterplot-chart-75331f024de1f2314f66e201de96677c3e49d8c6 .tick line")[8]).attr('style', 'stroke: #a0a08a  !important;');
                }, 1200);
                dot = {type: 1, y:'D', x: 2} ;
                break;

            case 'E1':
                dot = { type: 2, y: 'D', x: '2'};
                this.setState({
                    one: one,
                    svg: svg,
                    top: '395px',
                    sharp: ''
                })
                setTimeout(() => {

                    this.setState({
                        one: '',

                    })

                },1200);
                break;

            case 'F1':
                dot = { type: 2, y: 'D', x: '3'};
                this.setState({
                    two: two,
                    svg: svg,
                    top: '363px',
                    sharp: ''

                })
                setTimeout(() => {

                    this.setState({
                        two : ''
                    })

                },1200);
                break;

            case 'Fis 1':
                dot = { type: 3, y: 'D', x: '4'};
                this.setState({
                    two: two,
                    svg: svg,
                    top: '363px',
                    sharp: sharp,
                    left: '220px'
                })
                setTimeout(() => {

                    this.setState({
                        two : ''
                    })

                },1200);
                break;

            case 'G1':
                dot = { type: 2, y: 'D', x: '5'};
                this.setState({
                    three: three,
                    svg: svg,
                    top: '330px',
                    sharp: '',

                })

                setTimeout(() => {

                    this.setState({
                        three: ''
                    })

                },1200);
                break;

            case 'A1':
                this.setState({

                    svg: svg,
                    top: '303px',
                    sharp: '',
                });

                $($(".scatterplot-chart-75331f024de1f2314f66e201de96677c3e49d8c6 .tick line")[7]).attr('style', 'stroke: #48ce80      !important;');
                setTimeout(() => {
                    $($(".scatterplot-chart-75331f024de1f2314f66e201de96677c3e49d8c6 .tick line")[7]).attr('style', 'stroke: #a0a08a  !important;');
                }, 1200);
                dot = {type: 1, y:'A', x: 2} ;
                break;

            case 'B1':
                dot = { type: 3, y: 'A', x: '1'};
                this.setState({
                    one: one,
                    svg: svg,
                    top: '303px',
                    sharp: sharp,
                    left: '220px'

                });
                setTimeout(() => {

                    this.setState({
                        one: ''
                    })

                },1200);
                break;

            case 'H1':
                dot = { type: 2, y: 'A', x: '2'};
                this.setState({
                    one: one,
                    svg: svg,
                    top: '270px',
                    sharp: '',

                });
                setTimeout(() => {

                    this.setState({
                        one: ''
                    })

                },1200);
                break;

            case 'C2':
                dot = { type: 2, y: 'A', x: '3'};
                this.setState({
                    two: two,
                    svg: svg,
                    top: '243px',
                    sharp: '',
                })
                setTimeout(() => {

                    this.setState({
                        two : ''
                    })

                },1200);

                break;

            case 'Cis 2':
                dot = { type: 3, y: 'A', x: '4'};
                this.setState({
                    two: two,
                    svg: svg,
                    top: '243px',
                    sharp: sharp,
                    left: '220px'
                });

                setTimeout(() => {

                    this.setState({
                        two : ''
                    })

                },1200);
                break;

            case 'D2':
                dot = { type: 2, y: 'A', x: '5'};
                this.setState({
                    three: three,
                    svg: svg,
                    top: '216px',
                    sharp: '',
                });

                setTimeout(() => {

                    this.setState({
                        three: '',
                    });
                },1200);
                break;

            case 'E2':
                this.setState({
                    svg: svg,
                    top: '183px',
                    sharp: '',
                });
                $($(".scatterplot-chart-75331f024de1f2314f66e201de96677c3e49d8c6 .tick line")[6]).attr('style', 'stroke:#48ce80 !important;');
                setTimeout(() => {
                    $($(".scatterplot-chart-75331f024de1f2314f66e201de96677c3e49d8c6 .tick line")[6]).attr('style', 'stroke: #a0a08a !important;');
                }, 1000);

                dot = {type: 1, y:'E', x: 2} ;
                break;

            case 'F2':
                dot = { type: 2, y: 'E', x: '1'};

                this.setState({
                    one: one,
                    svg: svg,
                    top: '145px',
                    sharp: '',
                });
                setTimeout(() => {

                    this.setState({
                        one: ''
                    })

                },1000);
                break;

            case 'Fis 2':
                dot = { type: 3, y: 'E', x: '2'};
                this.setState({
                    one: one,
                    svg: svg,
                    top: '145px',
                    sharp: sharp,
                    left: '220px'
                });

                setTimeout(() => {

                    this.setState({
                        one: ''
                    })

                },1000);
                break;

            case 'G2':
                dot = { type: 2, y: 'E', x: '3'};
                this.setState({
                    two: two,
                    svg: svg,
                    top: '125px',
                    sharp: '',
                });

                setTimeout(() => {

                    this.setState({
                        two : ''
                    })

                },1000);
                break;

            case 'A2':
                dot = { type: 2, y: 'E', x: '5'};
                this.setState({
                    three: three,
                    svg: svg,
                    top: '98px',
                    sharp: '',
                });
                setTimeout(() => {

                    this.setState({
                        three: ''
                    })

                },1000);
                break;

        }



        state = [...state, dot];

        let newSounds = this.state.sounds.map((el,i) => {

            if(i == e.currentTarget.dataset.id) {
                return {...el, play: true}
            }

            return {...el, play: false};

        });
        console.log(newSounds);

        this.setState({
            data: state,
            sounds: newSounds,
        })


    }

    render() {

        const sound = this.state.sounds.map((el, i) => {

            return <div onClick={this.handleClick} className={'button-container'} data-id={i} key={i}><p
                className={'button'}> {el.sound}</p>

                <Sound
                    url={el.audio}
                    playStatus={el.play == false ? Sound.status.STOPPED : Sound.status.PLAYING}/>

            </div>

        });

        return <div>

                <Header/>

                <div className={'sounds-list-flex'}>
                <div className={'sounds-list__container'}> {sound}
                </div>
                    <div id="triangle"> </div>
                    <span className={'info'}>  Press the button to hear a sound.  </span>
                </div>
            <div className={'style'}>

                <div className={'halftone-div'}>   <span className={'halftone'}> Here you can see how to play the sound you will hear. The numbers on the <strong>x axis</strong> correspond to the length of one halftone. The length of two fingers, placed one next to the other on a string is a halftone. The letters on the <strong> y axis </strong> are sounds you can hear when playing an empty string, without the use of fingers. </span>

                </div>

                <div className={'text-div'}> <span className={'span-2'}> Here you can see which finger of your left hand to use to play a certain sound. Use your little finger to play a sound which correspond to the sound played on the next string, it's the so called 'repeat of the sound'. </span> </div>

                <div className={'text-div-2'}> <span className={'span-3'}> Here you can see how a given sound appears on the staff. Lines above and below the staff are <strong>'added lines'. </strong> </span> </div>
                <div className={'chart'}>

                    <ScatterplotChart
                    data={this.state.data}
                    margin={{top: 50, right: 1, bottom: 30, left: 100}}
                    config={this.state.config}
                    axes
                    axisLabels={{x: '', y: ''}}
                    dotRadius={80}
                    width={1500}
                    height={700}
                    grid
                    xType="text"
                    yType="text"/>
                    <div>

                        <div className={'image'}><img src={staff}/>
                            <img className={'svg'} src={this.state.svg} style={{top: this.state.top}}/>
                        <img className={'sharp'} src={this.state.sharp} style={{top: this.state.top, left: this.state.left}}/>
                        </div>
                        <div className={'hand'}> <img src={hand}/>
                            <div  className={'one'}><img src={this.state.one}/> </div>
                            <div  className={'two'}><img src={this.state.two}/> </div>
                            <div  className={'three'}><img src={this.state.three}/> </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    }
}
document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(
      <App />,
    document.querySelector('#app')
  )
});
