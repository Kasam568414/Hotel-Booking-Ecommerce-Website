import React from 'react'
import Banner from './Banner'
import CardReceipe from './CardReceipe'
import MiddlePart1 from './MiddlePart1'
import MoreEasy from './MoreEasy.JSX'


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <CardReceipe></CardReceipe>
        <MiddlePart1></MiddlePart1>
      <MoreEasy></MoreEasy>

    </div>
  )
}

export default Home