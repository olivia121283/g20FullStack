import { useAuthContext } from '../../context/AuthContext'

const ProductsDetails = () => {
  const context = useAuthContext()
  return (
    <div>
      {
        context.selectedProduct.name
          ? <div>
            <h2>{context.selectedProduct.name}</h2>
            <p>{context.selectedProduct.brand}</p>
            </div>
          : <h1>Selecciona un Producto</h1>
      }
    </div>
  )
}
export default ProductsDetails
