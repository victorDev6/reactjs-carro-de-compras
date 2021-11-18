import { Component } from 'react';
import Productos from './componentes/Productos';
import Layout from './componentes/Layout';
import Title from './componentes/Title';
import Navbar from './componentes/Navbar';


class App extends Component {
  // definir variables que se cargaran al inicio de la pagina 
  state = {
    productos: [
      {name: 'Tomate', precio: 1500, img: '/productos/tomate.jpg'},
      {name: 'Arbejas', precio: 2500, img: '/productos/arbejas.jpg'},
      {name: 'Lechuga', precio: 500, img: '/productos/lechuga.jpg'},
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const {carro} = this.state;
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name 
        ? ({
          ...x,
          cantidad: x.cantidad + 1
          })
        : x
      );
      // con el setstate se asigna un nuevo valor
      return this.setState({ carro: newCarro });
    }

    return this.setState({
      // concat agrega elemento al arreglo
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    });
  }

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }
    this.setState({
      esCarroVisible: !this.state.esCarroVisible
    });
  }

  render(){
    const { esCarroVisible } = this.state;
    return(
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro} 
        />
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
