import React from 'react'
import { connect } from 'react-redux'
import { Container,Row } from 'react-bootstrap'
import Header from './Header'
import Nav from './Navbar'
const Home=({count,increment,decrement})=>
{

  return (
    <div>
      <Header />
      <Nav />
      <Container className='p-5 mt-5 shadow w-75 mx-auto'>
      <h2>Home page using increment/decrement</h2>
      <p>The count values is : {count}</p>
      <p><button type='button' className='btn btn-sm btn-success' onClick={increment}>+</button>
      <button type='button' className='btn btn-sm btn-danger ms-3' onClick={decrement}>-</button>
      </p>
      </Container>
    </div>
  )
}

const mapStateToProps=state=>({
    count:state.count
})

const mapDispatchToProps=dispatch=>({
     increment:()=>dispatch({type:'INCREMENT'}),
     decrement:()=>dispatch({type:'DECREMENT'})
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);