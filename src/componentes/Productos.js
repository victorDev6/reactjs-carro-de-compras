import { Component } from "react";
import Producto from "./Producto";

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

class Productos extends Component {
    render(){
        //se obtiene de las propiedades del componente
        const { productos, agregarAlCarro } = this.props;
        
        return(
            <div style={styles.productos}>
                {productos.map(producto => 
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />
                )}
            </div>
        )
    }
}

export default Productos