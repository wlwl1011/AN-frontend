import { useEffect, useState } from 'react'
import LoginScreen from './screens/LoginScreen'
import MainScreen from './screens/MainScreen'


const BuiltInMode = () => {
  
  const [houseName, setHouseName] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    ;(async () => {
      const response = await fetch('#', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
      
      const data = await response.json()
      setHouseName(data.house_name)
    })()
  })
  

  return (
    isLogin? <MainScreen houseName={houseName} />:
     <body>
      <LoginScreen /> 
    </body>
    
  )
}

export default BuiltInMode