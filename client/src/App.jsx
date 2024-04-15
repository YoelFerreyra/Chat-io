import io from 'socket.io-client'

const socket = io('http://localhost:5000')

function App() {
  return(
    <div>Hello word</div>
  )
}

export default App