import React from 'react'

interface Props {
    houseName: string
}

const MainScreen = ({ houseName }: Props) => {
    return houseName ? (
        <h1>Welcome {houseName}!</h1>
        
      ) : (
        <h1>이 화면은 메인 페이지 입니다.</h1>
      )
}
export default MainScreen;
