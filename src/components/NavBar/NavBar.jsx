import daikiri from './assets/daikiri.jpg'
import Cardwidget from '../CartWidget/CartWidget'

const Navbar = ()=>{
    return(
       <>

       
       <nav style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',backgroundColor:'magenta'}}>
        <a href="#"><img src={daikiri} height={50}></img></a>
        <a href="#" className="btn btn-dark">Camisetas</a>
        <a href="#" className="btn btn-dark">Pantalones</a>
        <a href="#" className="btn btn-dark">Accesorios</a>
        <Cardwidget></Cardwidget>

        
        
       </nav>
       
       
       

       </>
    )
}

export default Navbar 