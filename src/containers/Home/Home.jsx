import React from 'react'
import { Feed, Rightbar, Navbar, Sidebar } from '../../components'
import { Container } from '../../globalStyles'


const Home = () => {
  return (
    <>
      
    <Navbar />
      <Container>
       <Sidebar />
        <Feed />
          <Rightbar/>
      </Container>
    </>
  )
}

export default Home