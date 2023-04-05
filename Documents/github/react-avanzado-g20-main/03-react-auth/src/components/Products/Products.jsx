import './products.css'
import { useAuthContext } from '../../context/AuthContext'

const Products = () => {
  const context = useAuthContext()

  return (
    <section>
      {context.loading
        ? <h1>Cargando...</h1>
        : context.list.filter(product => {
          if (context.search === '') {
            return product // Si la busqueda es vacia, retorno todas las canciones
          } else if (product.name.toLowerCase().includes(context.search.toLowerCase())) {
            return product // Retorno la canción que cumple con el criterio de busqueda
          }
          return null // Ninguna canción coincide
        }).map((product) => (
          <div
            className='row-product' key={product.id} onClick={() => {
              context.setSelectedProduct(product)
            }}
          >
            <h4>{product.name}</h4>
            <p>{product.brand}</p>
          </div>
        ))}
    </section>
  )
}
export default Products
