
import React from 'react'
import useCanvas from './useCanvas'


const _postDraw = () => {
  index++
  ctx.restore()
 }

const _preDraw = (context, canvas) => {
  context.save()
  resizeCanvas(canvas, context)
  const { width, height } = context.canvas
  context.clearRect(0, 0, width, height)
}


function resizeCanvas(canvas, context) {
  debugger;
  const { width, height } = canvas.getBoundingClientRect()
  
  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio:ratio=1 } = window
    const context = canvas.getContext('2d')
    canvas.width = width*ratio
    canvas.height = height*ratio
    context.scale(ratio, ratio)
    return true
  }

  return false
}
 


const Canvas = props => {  
//
  const { draw, options, ...rest } = props//, preDraw=_preDraw, postDraw=_postDraw,
  //const { context, ...moreConfig } = options
  const canvasRef = useCanvas(draw)//, {context}

  return <canvas width={1600} height={800} ref={canvasRef} options={options} {...rest}/>
}

export default Canvas