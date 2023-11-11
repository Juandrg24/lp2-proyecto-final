import UsuarioForm from '../../components/UsuarioForm';
import ListasUsuarios from '../../components/ListaUsuario';
import './style.css';
import { useState } from 'react';
//npm install axios 

function Home(){
    const[isAgregando,setIsAgregando]=useState(false);
    const[usuarios,setUsuarios]=useState([]);
    return( 
        
        <div className='home'>
            <button onClick={()=>setIsAgregando(treu)}>Agregar Usuario</button>
            {isAgregando &&<UsuarioForm/>}
            <ListasUsuarios/>
            
        </div>

        
    );
}

export default Home;