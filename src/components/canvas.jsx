import React from 'react';


class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const c = this.refs.canvas.getContext('2d');
        const w = this.refs.canvas.width = window.innerWidth;
        const h = this.refs.canvas.height = window.innerHeight;

        c.strokeStyle = 'black';
        c.lineWidth = 1;
        c.lineCap = 'round';

        let init =[];

        let maxParts = 1000;

        for(let a = 0; a < maxParts; a++) {
            init.push({
                x: Math.random() * w,
                y: Math.random() * h,
                l: Math.random() * 1,
                xs: -4 + Math.random() * 4 + 2,
                ys: Math.random() * 10 + 10
            })
        }

        let particles = [];
        for(let b = 0; b < maxParts; b++) {
            particles[b] = init[b];
        }

        function draw() {
            c.clearRect(0, 0, w, h);
            for(let i = 0; i < particles.length; i++) {
                let p = particles[i];
                c.beginPath();
                c.moveTo(p.x, p.y);
                c.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                c.stroke();
            }
            move();
        }

        function move() {
            for(let b = 0; b < particles.length; b++) {
                let p = particles[b];
                p.x += p.xs;
                p.y += p.ys;
                if(p.x > w || p.y > h) {
                    p.x = Math.random() * w;
                    p.y = -20;
                }
            }
        }
        move();

        setInterval(draw, 30);

    }

    render() {
        return <canvas  ref="canvas">
        </canvas>
    }
}

export {Canvas}

