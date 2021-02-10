class MathHandle {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  add(x, y) {
    return x + y
  }
}

const m = new MathHandle(1, 2)

console.log(m.add(1, 2))
