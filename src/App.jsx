
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [pamnt, setpamnt] = useState(0)

  const [rate, setrate] = useState(0)

  const [time, settime] = useState(0)

  const [vaildpamnt, setvaildpamnt] = useState(false)

  const [vaildrate, setvaildrate] = useState(false)

  const [vaildtime, setvaildtime] = useState(false)

  const [showrate, setshowrate] = useState(0)



  const submitted = (e) => {

    e.preventDefault()

    if (!pamnt.match(/^[1-9][0-9]*$/)) {

      setvaildpamnt(true)

    }

    if (!rate.match(/^[1-9][0-9]{0,1}$/)) {

      setvaildrate(true)

    }

    if (!time.match(/^[1-9][0-9]{0,1}$/)) {

      setvaildtime(true)

    }

    SI()

   


  }


  const SI = () => {

    console.log('hello');
    const si = (pamnt * rate * time) / 100
    setshowrate(si)

  }

  const reset =()=>{

    pamnt(0)
    rate(0)
    time(0)
    showrate(0)


  }

  return (
    <>

      <div className='bg-dark d-flex justify-content-center align-items-center w-100' style={{ height: '100vh' }}>


        <div className='w-50 shadow rounded bg-light text-white p-5'>

          <h1 className='text-center text-dark'>SIMPLE INTEREST CALCULATOR</h1>

          <div className='d-flex justify-content-center shadow rounded p-5 mt-3' style={{ backgroundColor: 'goldenrod' }}>

            <h5 className='text-white'>{showrate}₹</h5>

          </div>

          <form onSubmit={(e) => { submitted(e) }}>

            <div className='bg-light mt-3 rounded'>

              <TextField onChange={(e) => { setpamnt(e.target.value) }} style={{ width: '100%' }} label="₹ Principle Amount" color="secondary" />

              {
                vaildpamnt &&

                <div className='text-danger'>
                  Invaild Principle Amount
                </div>

              }

            </div>


            <div className='bg-light mt-3 rounded'>

              <TextField onChange={(e) => { setrate(e.target.value) }} style={{ width: '100%' }} label="% Rate" color="secondary" />

              {
                vaildrate &&

                <div className='text-danger'>
                  Invaild Rate
                </div>
              }

            </div>


            <div className='bg-light mt-3 rounded'>

              <TextField onChange={(e) => { settime(e.target.value) }} style={{ width: '100%' }} label="Time/Year" color="secondary" />

              {
                vaildtime &&
                <div className='text-danger'>
                  Invaild Year
                </div>
              }

            </div>


            <Stack direction="row" spacing={2} className='mt-3'>

              <Button type='submit' color="success" className='w-50' variant="contained">SUBMIT</Button>

              <Button type='reset' onClick={reset} className='w-50' variant="contained" color="error">
                RESET
              </Button>

            </Stack>

          </form>

        </div>





      </div>


    </>

  )
}

export default App
