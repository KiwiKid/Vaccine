
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Canvas from '../components/Canvas/Canvas'

import Ball  from '../components/ball'

import React, {useEffect, useState} from 'react'

export default function Home() {


const dot = (ctx, frameCount) => {
  if(!!ctx){
    console.log('context in draw');
  }else{
    console.error('Not context in draw');
    return;
  }
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.fillStyle = '#000000'
  ctx.beginPath()
  ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
  ctx.fill()
}




const animateBalls = (ctx, frameCount) => { 
  if(ctx.clearRect != undefined){
  requestAnimationFrame(animateBalls);
  // clear the canvas - c.clearRect(x, y, width, height)
  ctx.clearRect(0, 0, innerWidth*10, innerHeight*10);
  // c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y)
  
  ballArray.forEach(ball => {
    ball.draw(ctx);
    ball.update(ctx);
  })
}else{
  console.error('No context in amimate Balls')
}
} 


  const [draw, setDraw] = useState();
  const [ballArray, setBallArray] = useState([]);

  useEffect(() => {

    let _ballArray = [];
    let ball;
    for (let i = 0; i < 1; i++) {
      let radius = 30;
      let x = Math.random() * (innerWidth - radius * 2) + radius;
      let y = Math.random() * (innerHeight/2) + radius;
      let dx = (Math.random() - 0.5) * 4; //random value between -2 and 2
      ball = new Ball(x, y, dx, 2, radius);
      if (i == 39) ball.color = 'gold';
      _ballArray.push(ball)
    }
    setBallArray(_ballArray)

  //  animateBalls();
    //setDraw((a,b) => dot(a,b));
  })
  const [drawOptions, setDrawOptions] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        [[[
  {/*    // better boilerplate in this document than the first 

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = '#EEE6ED'
let c = canvas.getContext('2d');

var mouse = {
  x: innerWidth/2,
  y: innerHeight/2
}

window.addEventListener('mousemove', e => {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // init();
})

let colorArray = ['#F6C5C0','#B1A692','#B4BABA','#F2F2F2', '#C1A29B']

function Ball(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
}

Ball.prototype.draw = function() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  // c.strokeStyle = this.color;
  // c.stroke();
  c.fillStyle = this.color;
  c.fill();
}

let gravity = 1;
let friction = 0.90;

Ball.prototype.update = function() {
  if (this.y + this.radius + this.dy > canvas.height) {
    this.dy = -this.dy * friction;
  } else {
    this.dy += gravity; // adding gravity 
    //console.log(this.dy)
  }

  if (this.x + this.radius > innerWidth || this.x - this.radius < 0) { 
    this.dx = -this.dx;
  }
  
  this.y += this.dy;

  if (this.dy.toFixed(3) == '0.000' || this.dy.toFixed(3) == "-0.000") {
    this.dx = 0;
  }
  this.x += this.dx;
}

// Implementation 
let ballArray = [];
let ball;
function init() {
  for (let i = 0; i < 40; i++) {
    let radius = 30;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight/2) + radius;
    let dx = (Math.random() - 0.5) * 4; //random value between -2 and 2
    ball = new Ball(x, y, dx, 2, radius);
    if (i == 39) ball.color = 'gold';
    ballArray.push(ball)
  }


}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  // clear the canvas - c.clearRect(x, y, width, height)
  c.clearRect(0, 0, innerWidth, innerHeight);
  // c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y)
  
  ballArray.forEach(ball => {
    ball.draw();
    ball.update();
  })
}


init()
animate();


*/}
{!!dot ? <Canvas key={"1"} draw={(ctx, opt) => animateBalls(ctx, 1)} options={drawOptions}/> : null}
]]]
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}