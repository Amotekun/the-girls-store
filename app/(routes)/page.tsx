import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'

export const revalidate = 0

const Home = async () => {

  const products = await getProducts()
  const billboard = await getBillboard("2adbe4db-3783-44b6-887e-bcdcf7bd42ec")
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard
          data={billboard}
        />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 '>
          <ProductList 
            title="Featured Products"
            items={products}
          />
        </div>
      </div>
    </Container>
  )
}

export default Home;

// 
