import React, { Fragment, Component } from 'react'


class MiComponenteConClase extends Component {

    constructor(props) {
        super(props)
        this.state = {
            actual: {
                nombre: '',
                precio: 0
            },
            articulos: [
                {
                    id: 1,
                    descripcion: 'chocorramo',
                    precio: 2000
                },
                {
                    id: 2,
                    descripcion: 'bolsa de leche',
                    precio: 2500
                },
                {
                    id: 3,
                    descripcion: 'arroz caribe',
                    precio: 2000
                }
            ]
        }
        this.agregarProducto = this.agregarProducto.bind(this)
        this.cambioNombre = this.cambioNombre.bind(this)
        this.cambioPrecio = this.cambioPrecio.bind(this)
    }

    cambioNombre(event) {
        this.setState(
            {
                actual : {
                    nombre: event.target.value,
                    precio: this.state.actual.precio
                },
                articulos: [
                    ...this.state.articulos
                ]
            }
        )
    }


    cambioPrecio(event) {
        this.setState(
            {
                actual: {
                    nombre: this.state.actual.nombre,
                    precio: event.target.value,
                },
                articulos: [
                    ...this.state.articulos
                ]
            }
        )
    }


    agregarProducto(event) {
        this.setState({
            articulos: [
                ...this.state.articulos,
                {
                    id: this.state.articulos.length + 1, 
                    descripcion: this.state.actual.nombre,
                    precio: this.state.actual.precio
                }
            ]
        })
        
        event.preventDefault()

    }

    render() {
        return (
            <Fragment>
                <h2>Mis productos</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            {Object.keys(this.state.articulos[0]).map(
                                elm => <td key={elm}>{elm}</td>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.articulos.map(articulo =>
                            <tr key={articulo.id}>
                                <td>{articulo.id}</td>
                                <td>{articulo.descripcion}</td>
                                <td>{articulo.precio}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <h4>Agregar producto</h4>

                <form action="">
                    <div className="form-group col-6">
                        <label htmlFor=""> Nombre producto</label>
                        <input className="form-control" type="text" onChange={this.cambioNombre}/>
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor=""> Precio</label>
                        <input className="form-control" type="number" onChange={this.cambioPrecio} />
                    </div>

                    <button className="btn btn-primary mr-4" onClick={this.agregarProducto}>Agregar producto</button>
                    <button className="btn btn-secondary">Eliminar ultimo producto agregado</button>
                </form>

            </Fragment>
        )
    }

}

export default MiComponenteConClase