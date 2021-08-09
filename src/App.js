import {NavBar} from "./componentes/NavBar/NavBar";
import "./estilo.css"; 
import "./componentes/NavBar/NavBar.css";
import { ItemListContainer } from "./componentes/NavBar/itemListContainer/itemListContainer";
const App = () => {
  return ( 

   
      <div> 
        
        <NavBar/>
        
         
       
        <ItemListContainer greeting ="GRACIAS POR ESTAR CON NOSOTROS"/>
        
        
        
    </div>
  );
}


export default App;

