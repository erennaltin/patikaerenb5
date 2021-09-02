import React from 'react'

import { Button } from 'patikaerenb5'
import 'patikaerenb5/dist/index.css'

const App = () => {
  return (
    <div>
      <Button onClick={() => {window.alert("Selam!")}} > Selam </Button>
      <Button type='primary'> Selam </Button>
      <Button type='dashed'> Selam </Button>
      <Button type='text'> Selam </Button>
      <Button type='link'> Selam </Button>
    </div>
  )
}

export default App
