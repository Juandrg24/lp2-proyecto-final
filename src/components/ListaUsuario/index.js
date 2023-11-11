import Usuario from '../Usuario';
import './style.css'

function ListasUsuarios(){
    return(
    <div className='lista-usuario'>
        
        <Usuario usuario={
        {
            name:"Sebas",
            lastName:"Alarcon",
            type:"ADMIN",
            photoUrl:"https://img.freepik.com/vector-premium/ilustracion-avatar-hombre-negocios-retrato-usuario-dibujos-animados-icono-perfil-usuario_118339-5507.jpg"//"../../../public/logo192.png"
        
        }
    }/>   
    </div>

);
}
export default ListasUsuarios;
