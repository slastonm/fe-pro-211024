import React, {useState} from 'react';

function ProductList(props) {
    // const productList = [
    //     {
    //         productionYear:2024,
    //         productionMaker:'Apple',
    //         productionModel:'Iphone16'
    //     }
    // ];
    const [productList, setProductList] = useState([]);
    const [productionYear, setProductioYear] = useState(new Date().getFullYear());
    const [productionModel, setProductioModel] = useState('');
    const [productionMaker, setProductioMaker] = useState('');

    function addProduct(){
        const newProduct = {
                productionYear:productionYear,
                productionMaker:productionMaker,
                productionModel:productionModel
        }
        setProductList(productList=>[...productList, newProduct]);
        setProductioMaker('');
        setProductioModel('');

    }
    function changeYear(e){
        setProductioYear(e.target.value)
    }
    function changeMaker(e){
        setProductioMaker(e.target.value)
    }
    function changeModel(e){
        setProductioModel(e.target.value)
    }
    function removeItem(indexEl){
        setProductList(productList=>productList.filter((item, index)=>index != indexEl))
    }
    return (
        <div className='container'>
            <div className="row mb-3">
                <div className="col-4 mx-auto">
                    <div className="mb-3">
                        <input 
                        type="text" 
                        className='w-100' 
                        value={productionYear} 
                        onChange={changeYear}
                        placeholder='Type production year' />                        
                    </div>
                    <div className="mb-3">
                        <input 
                        type="text" 
                        className='w-100' 
                        value={productionMaker} 
                        onChange={changeMaker}
                        placeholder='Type production maker' />                        
                    </div>
                    <div className="mb-3">
                        <input 
                        type="text" 
                        className='w-100' 
                        value={productionModel} 
                        onChange={changeModel}
                        placeholder='Type production model' />                        
                    </div>
                    <div>
                        <button 
                        className="btn btn-primary"
                        onClick={addProduct}>
                            Add product
                        </button>
                    </div>
                    <ul class="list-group mt-3">
                        {/* <li class="list-group-item">An item</li> */}
                        {
                            productList.map((item, index)=>{
                                return <li className='list-group-item d-flex justify-content-between' key={index}>
                                    <strong>
                                        Is {item.productionModel} / {item.productionMaker} production year {item.productionYear}                                        
                                    </strong>
                                    <button 
                                    className="btn btn-danger"
                                    onClick={()=>removeItem(index)}>
                                        Delete
                                    </button>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductList;