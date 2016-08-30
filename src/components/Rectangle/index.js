class Rectangle {
  constructor(data){
    let canvas, context, w, h, r, cp, ratio, borderLoc = [], green, orange, circleSize, diff = {myResults: [], othersResults: []}
    

    green = 'rgb(146, 199, 0)'
    orange = 'rgb(251, 160, 62)'
    canvas = document.querySelector('canvas')
    context = this.context = canvas.getContext('2d')

    ratio = this.getRaio(context)
    w = canvas.clientWidth
    h = canvas.clientHeight
    r = w / 2 - 6
    cp = [w / 2, h / 2]

    circleSize = cp[0] * 6 / 323
    canvas.width = ratio * w
    canvas.height = ratio * h
    context.scale(ratio, ratio)
    for (let a, i = 0; i < 6; i++) {
      a = i * 60
      borderLoc.push(this.calcLocation(cp, r, a))
    }
    Object.keys(data).forEach(k => {
      data[k].forEach((item, i) => {
        let a = i * 60
        let radius = item.value * (r / 100)
        diff[k].push(this.calcLocation(cp, radius, a))
      })
    })
    this.drawLine({
      lines: borderLoc,
      style: 'rgb(195, 190, 176)',
      width: 1 * ratio,
      gradient: true
    })
    for (let i = 0, len = borderLoc.length; i < len; i++) {
      this.drawLine({
        lines: [{x: cp[0], y: cp[1]}, borderLoc[i]],
        style: 'rgb(195, 190, 176)',
        width: 0.5 * ratio
      })
    }

    this.drawLine({
      lines: diff.othersResults,
      fill: 'rgba(145, 199, 0, 0.60)',
      style: green,
      width: 1 * ratio,
      circle: {
        r: circleSize,
        style: green,
        fillStyle: green,
        width: circleSize
      }
    })

    // 绘制橙色部分
    this.drawLine({
        lines: diff.myResults,
        fill: 'rgba(251, 160, 62, 0.60)',
        style: orange,
        width: 1 * ratio,
        circle: {
          r: circleSize,
          style: orange,
          fillStyle: orange,
          width: circleSize
        }
    })
  }
  getRaio(context){
    let devicePixelRatio, backingStoreRatio

    devicePixelRatio = window.devicePixelRatio || 1
    backingStoreRatio = context.webkitBackingStorePixelRatio ||
                        context.mozBackingStorePixelRatio ||
                        context.msBackingStorePixelRatio ||
                        context.oBackingStorePixelRatio ||
                        context.backingStorePixelRatio || 1
    return devicePixelRatio / backingStoreRatio
  }
  // 绘制线条
  drawLine(line){
    let lines, len, circle, context
    lines = line.lines
    len = lines.length
    circle = line.circle
    context = this.context
    context.beginPath()
    context.moveTo(lines[0].x, lines[0].y)

    for (let i = 1; i < len; i++) {
      context.lineTo(lines[i].x, lines[i].y)
    }
    
    context.closePath()
    if (line.style) {
        context.strokeStyle = line.style
        context.lineWidth = line.width
        context.stroke()
    }

    if (line.fill) {
        context.fillStyle = line.fill
        context.fill()
    }

    if (line.gradient) {
      context.fillStyle = 'rgb(249, 248, 245)'
      context.fill()
    }
    if (circle) {
      context.beginPath()
      for (let i = 0; i < len; i++) {
        context.moveTo(lines[i].x, lines[i].y)
        context.arc(lines[i].x, lines[i].y, circle.r, 0, Math.PI * 2)
        context.closePath()
        context.strokeStyle = circle.style
        context.stroke()
        context.fillStyle = circle.fillStyle
        context.fill()
      }
    }
  }

  calcLocation(cp, r, a){
    return {
      x: cp[0] + r * Math.cos(a * (2 * Math.PI / 360)),
      y: cp[1] + r * Math.sin(a * (2 * Math.PI / 360))
    }
  }

}


export default Rectangle
