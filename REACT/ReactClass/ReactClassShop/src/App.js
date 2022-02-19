import React from 'react';
import './App.css';
import hac from './images/hac.jpg'
import kat from './images/kat.jpg'
import du from './images/du.jpg'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [
                {id: 1, name: 'hac', count: 10, price: 100, img: hac},
                {id: 2, name: 'kat', count: 5, price: 300, img: kat},
                {id: 3, name: 'du', count: 50, price: 90, img: du},
            ],
            newProduct: {id: '', name: '', count: '', price: '', img: ''},
            myCart: [],
            totalPrice: 0,
            err: false
        }
    }

    ChangeProduct = (e) => {
        const newProd = this.state.newProduct;
        newProd[e.target.name] = e.target.value;
        newProd.id = Date.now()
        this.setState({newProduct: newProd});
    }

    AddProduct = () => {
        const {products, newProduct} = this.state;
        const {name, count, price, img} = newProduct
        if (name === '' || count === '' || price === '' || img === '') {
            this.setState({err: true})
            return
        }
        let newArr = [
            ...products,
            newProduct
        ]
        this.setState({products: newArr});
        this.setState({newProduct: {name: '', count: '', price: '', img: ''}})
        this.setState({err: false})
    }

    addToCart = (e, t) => {
        const myProduct = this.state.myCart;
        const products = this.state.products;
        const items = myProduct.find(({id}) => id === e.id)
        const prodItems = products.find(({id}) => id === e.id)
        const itemsIndex = myProduct.findIndex(({id}) => id === e.id)
        let newProductCart = Object.assign({}, e)
        if (items) {
            newProductCart.count = items.count + t
            newProductCart.price = prodItems.price * (items.count + t)
            if (newProductCart.count > prodItems.count) {
                return
            }
            if (newProductCart.count === 0) {

                const remove = myProduct.filter((i) => i.id !== newProductCart.id)
                this.setState({myCart: remove})
                return;
            }
            this.setState({
                myCart:
                    [...myProduct.slice(0, itemsIndex),
                        newProductCart,
                        ...myProduct.slice(itemsIndex + 1)]
            })
        } else {
            newProductCart.count = 1
            this.setState({myCart: [...myProduct, newProductCart]})
        }
        // let result = myProduct.reduce((a, b) => a + b.price, 0);
        // this.setState({totalPrice: result})
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (this.state.myCart !== prevState.myCart) {
            let result = this.state.myCart.reduce((a, b) => a + b.price, 0);
            this.setState({totalPrice: result})
        }
    }

    render() {

        return (
            <div>
                <div className='scroll'>
                    <h1 style={{textAlign: "center"}}>Product</h1>
                    <table className="table table-striped table-dark">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Count</th>
                            <th scope="col">Price</th>
                            <th scope="col">IMG</th>
                            <th scope="col">Add to cart</th>

                        </tr>
                        </thead>
                        {
                            this.state.products.map((prd, i) =>
                                <tbody key={i}>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{prd.name}</td>
                                    <td>{prd.count}</td>
                                    <td>{prd.price}</td>
                                    <td><img width={100} height={80} src={prd.img} alt="No img"/></td>
                                    <td>
                                        <button onClick={() => this.addToCart(prd, 1)} type="button"
                                                className="btn btn-primary">Add
                                        </button>
                                    </td>

                                </tr>

                                </tbody>
                            )
                        }

                    </table>
                </div>
                <hr/>

                <div className="AddProduct">
                    <h1>Add new product</h1>
                    {
                        this.state.err ?
                            <div className="alert alert-danger" role="alert">
                                Fill in all the fields
                            </div> : ''
                    }
                    <input placeholder='name' type="text" value={this.state.newProduct.name} name='name'
                           onChange={this.ChangeProduct}/><br/>
                    <input placeholder='count' type="number" value={this.state.newProduct.count} name='count'
                           onChange={this.ChangeProduct}/><br/>
                    <input placeholder='price' type="number" value={this.state.newProduct.price} name='price'
                           onChange={this.ChangeProduct}/><br/>
                    <input placeholder='img url' type="text" value={this.state.newProduct.img} name='img'
                           onChange={this.ChangeProduct}/><br/>
                    <button type="button" className="btn btn-secondary" onClick={this.AddProduct}>Add</button>
                </div>

                <hr/>
                <div className="MyCart">
                    <h1>My Cart</h1>
                    <h1>Total price : {this.state.totalPrice}$</h1>

                    <table className="table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Count</th>
                            <th>price</th>
                            <th>img</th>
                            <th className='icon'>-</th>
                            <th className='icon'>+</th>
                            <th className='icon'>Delet</th>
                        </tr>

                        </thead>

                        <tbody>
                        {
                            this.state.myCart.map((item, index) => {
                                const {name, count, price, img} = item
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>{count}</td>
                                        <td>${price}</td>
                                        <td><img width={100} height={80} src={img} alt=""/></td>
                                        <td>
                                            <button
                                                onClick={() => this.addToCart(item, -1)}
                                                className="btn btn-outline-warning btn-sm float-right">
                                                <i className="fa fa-minus-circle"/>
                                            </button>

                                        </td>
                                        <td>
                                            <button
                                                onClick={() => this.addToCart(item, 1)}
                                                className="btn btn-outline-success btn-sm float-right">
                                                <i className="fa fa-plus-circle"/>
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => this.addToCart(item, -item.count)}
                                                className="btn btn-outline-danger btn-sm float-right">
                                                <i className="fa fa-trash-o"/>
                                            </button>
                                        </td>

                                    </tr>
                                );
                            })
                        }

                        </tbody>
                    </table>
                </div>


            </div>
        )
    }
}


export default App


