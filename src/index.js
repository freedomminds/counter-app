import React from 'react'

import { createRoot } from 'react-dom/client'

// function CounterDisplay({ count }) {
// return <p>{count}</p>
// }
// test

// FizzBuzz Algorithm / data Structure
function CounterDisplay({ count }) {
  if (count === 0) {
    return <p>{count}</p>
  }

  if (count % 5 === 0 && count % 7 === 0) {
    return <p>FizzBuzz</p>
  }

  if (count % 5 === 0) {
    return <p>Fizz</p>
  }

  if (count % 7 === 0) {
    return <p>Buzz</p>
  }

  return <p>{count}</p>
}

// Penambahan Nilai
function IncreaseButton({ increase }) {
  return (
    <div>
      <button onClick={increase}>+ increase</button>
    </div>
  )
}

// Pengurangan Nilai
function DecreaseButton({ decrease }) {
  return (
    <div>
      <button onClick={decrease}>+ Decrease</button>
    </div>
  )
}

function ResetButton({ reset }) {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  )
}

class CounterApp extends React.Component {
  constructor(props) {
    super(props)

    // Inisisaliasis nilai count di dalam state
    this.state = {
      count: 0,
    }
    // Binding event event handler
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this)
    this.onDecreaseEventHandler = this.onDecreaseEventHandler.bind(this)
    this.onResetEventHandler = this.onResetEventHandler.bind(this)
  }

  onIncreaseEventHandler() {
    this.setState(previousState => {
      return {
        count: previousState.count + 1,
      }
    })
  }

  onDecreaseEventHandler() {
    this.setState(previousState => {
      return {
        count: previousState.count - 1,
      }
    })
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0,
      }
    })
  }

  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseEventHandler} />
        <DecreaseButton decrease={this.onDecreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    )
  }
}

const root = createRoot(document.getElementById('root'))
root.render(<CounterApp />)
