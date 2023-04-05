import { useNavigate } from 'react-router-dom'
import useForm from '@/hooks/useForm'
import { registerUserService } from '@/services/userServices'
import '@/styles/form.css'

const Signup = () => {
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 201) {
        console.log('User created successfully')
        navigate('/login')
      }
    } catch (error) {
      console.log('Ocurrio un error en Signup:', error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    Product_name: '',
    description: '',
    category: '',
    price: '',
    brand: '',
    sku: '',
    image: ''
  })

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src='https://ticnegocios.camaradesevilla.com/wp-content/uploads/2019/04/ecommerce-news-logo.png' alt='' width='225' height='200' />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='product_name'
            name='product_name'
            value={input.Product_name}
            onChange={handleInputChange}
            placeholder='John'
          />
          <label htmlFor='product_name'>Product Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='description'
            name='description'
            value={input.description}
            onChange={handleInputChange}
            placeholder='Doe'
          />
          <label htmlFor='description'>Description</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='category'
            name='category'
            value={input.category}
            onChange={handleInputChange}
          >
            <option value=''>Choose...</option>
            <option value='Books'>Books</option>
            <option value='Movies'>Movies</option>
            <option value='Music'>Music</option>
            <option value='Games'>Games</option>
            <option value='Electronics'>Electronics</option>
            <option value='Computers'>Computers</option>
            <option value='Home'>Home</option>
            <option value='Garden'>Garden</option>
            <option value='Tools'>Tools</option>
            <option value='Grocery'>Grocery</option>
            <option value='Health'>Health</option>
            <option value='Beauty'>Beauty</option>
            <option value='Toys'>Toys</option>
            <option value='Kids'>Kids</option>
            <option value='Baby'>Baby</option>
            <option value='Clothing'>Clothing</option>
            <option value='Shoes'>Shoes</option>
            <option value='Jewelery'>Jewelery</option>
            <option value='Sports'>Sports</option>
            <option value='Outdoors'>Outdoors</option>
            <option value='Automotive'>Automotive</option>
            <option value='Industrial'>Industrial</option>
          </select>
          <label htmlFor='category'>Category</label>
        </div>

        <div className='form-floating'>
          <input
            type='price'
            className='form-control'
            id='price'
            name='price'
            value={input.price}
            onChange={handleInputChange}
            placeholder='$'
          />
          <label htmlFor='price'>Price</label>
        </div>

        <div className='form-floating'>
          <input
            type='brand'
            className='form-control'
            id='brand'
            name='brand'
            value={input.brand}
            onChange={handleInputChange}
            placeholder='brand'
          />
          <label htmlFor='brand'>Brand</label>
        </div>

        <div className='form-floating'>
          <input
            type='sku'
            className='form-control'
            id='sku'
            name='sku'
            value={input.sku}
            onChange={handleInputChange}
            placeholder='sku'
          />
          <label htmlFor='sku'>Sku</label>
        </div>

        <button className='w-100 btn btn-success' type='submit'>Sign up</button>
        <p className='mt-5 mb-3 text-muted'>© 2023-2024</p>
      </form>
    </main>
  )
}
export default Signup
