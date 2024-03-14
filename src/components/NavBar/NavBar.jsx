import daikiri from './assets/daikiri.jpg'
import Cardwidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = ()=>{
    return(
       <>

       
       <nav style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',backgroundColor:'magenta'}}>
        <a href="#"><img src={daikiri} height={50}></img></a>
        <Link to={'category/jugadores'} className="btn btn-dark">Camisetas Jugadores</Link>
        <Link to={'category/arqueros'} className="btn btn-dark">Camisetas Arqueros</Link>
        <Link href="#" className="btn btn-dark">Pantalones</Link>
        <Cardwidget></Cardwidget>

        
        
       </nav>
       
       
       

       </>
    )
}

export default Navbar 