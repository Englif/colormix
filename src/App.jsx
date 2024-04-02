import { useState } from "react"
import "./App.css"

function App() {
  const [first, setFirst] = useState('#000000')
  const [second, setSecond] = useState('#000000')

  const [mixed, setMixed] = useState('#000000')

  const mixColor = (first, second) => {
    first = first.slice(1)
    second = second.slice(1)

    let mixed = []
    for (let i = 0; i < 6; i++) {
      mixed.push(
        (
          Math.round(
            (Number.parseInt(first[i], 16) +
              Number.parseInt(second[i], 16)) / 2
          )
        ).toString(16))
    }
    return `#${mixed.join('')}`
  }

  return (
    <>
      <label style={{
        backgroundColor: first,
        color: first
      }} className="1st-color color">
        <h2>1st</h2>
        <input type="color" onChange={(e) => {
          setFirst(e.target.value)
          setMixed(mixColor(first, second))
        }} />
      </label>

      <label style={{
        backgroundColor: second,
        color: second
      }} className="2nd-color color">
        <h2>2nd</h2>
        <input type="color" onChange={(e) => {
          setSecond(e.target.value)
          setMixed(mixColor(first, second))
        }} />
      </label>

      <div style={{
        backgroundColor: mixed,
        color: mixed
      }} className="mixed" >
        <h2>Mixed</h2>
      </div>
    </>
  )
}

export default App
