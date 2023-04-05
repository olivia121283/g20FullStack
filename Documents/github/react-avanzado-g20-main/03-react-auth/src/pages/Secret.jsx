import { useAuthContext } from '@/context/AuthContext'

const Secret = () => {
  const { userPayload } = useAuthContext()

  return (
    <>
      <h1>Secret</h1>
      {userPayload?.role === 'ADMIN' &&
        <h2>Hello Admin</h2>}

      {userPayload?.role === 'CUSTOMER' &&
        <h2>Hello Customer</h2>}

    </>

  )
}
export default Secret
