import { LocalizationProvider } from '@mui/x-date-pickers'
import { AppRoutes } from './shared/routes'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AppRoutes />
      </LocalizationProvider>
    </>
  )
}

export default App
