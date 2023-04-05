import { useState, useEffect } from 'react'
import { getAllItems } from '@/services/itemServices'
import { Link } from 'react-router-dom'

const Home = () => {
  // Estado para guardar los items que traiga de la API
  const [itemsData, setItemsData] = useState([])

  useEffect(() => {
    // Traigo mis items de la API y los almaceno en el estado itemsData
    const fetchItemsData = async () => {
      try {
        const result = await getAllItems()
        if (result.status === 200) {
          setItemsData(result.data)
        }
      } catch (error) {
        console.log('Ocurrio un error al procesar los Items: ', error.message)
      }
    }
    fetchItemsData()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {/* Si itemsData no esta vacio, recorro el arreglo con Map y creo un Card de Bootstrap para cada elemento */}
        {itemsData && itemsData.map((product) => (
          <div className='card' style={{ width: '18rem' }} key={product.id}>
            <img className='card-img-top' src={product.image} alt={product.title} />
            <div className='card-body text-success'>
              <h5 className='card-title card-header bg-transparent border-success'>{product.product_name}</h5>
              <p className='card-text'>{product.description}</p>
              {/* Aqui no se implementa el botón, pero basta con sustituir "a" por Link de react-router-dom y la ruta del enlace indicar el componente que mostrará la información de un solo producto, seguido del id del producto */}
              <Link to={`product/${product.id}`} className='btn btn-outline-success'>Details</Link>
              <div className='btn btn-success d-grid gap-2'>Buy Now</div>
              <div class='card-footer'>
                <small class='text-body-secondary'>Gracias por su compra</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Home
