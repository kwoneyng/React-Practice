import styled from 'styled-components'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Logo></Logo>
        <MyMenu></MyMenu>
        <Hamburger></Hamburger>
      </Navbar>
      <ContentBox></ContentBox>
    </div>
  );
}

const Navbar = styled.div`
background-color:black;
display:flex;
flex-direction:row;
align-items:center;
color:yellow;
width: 100vw;
position:fixed;
height: 70px;
`

const MyMenu = styled.div`
position:fixed;
background-color:pink;
border-radius: 50%;
width:50px;
height:50px;
right: 50px;
`

const Hamburger = styled.div`
position:fixed;
border-radius:5px;
width:60px;
height:50px;
background-color:blue;
right: 120px;
`

const Logo = styled.div`
position:fixed;
background-color:yellow;
display:flex;
width: 50px;
height: 50px;
left:20px;
`


const ContentBox = styled.div`
width:85vw;
// height:93vh;
height: 1000vh;
margin-top:7vh;
background:#eeccff;
`

export default App;
