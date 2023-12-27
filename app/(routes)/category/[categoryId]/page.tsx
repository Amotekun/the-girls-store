import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";

export const revalidate = 0
interface CategoryPageProps {
    params: {
        categoryId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params
}) => {

    const category = await getCategory(params.categoryId)
    const products = await getProducts()
    
    return (
        <div>
            <Container>
                <Billboard 
                    data={category.billboard}
                />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="">
                        {/* Mobile Filters */}
                        <div>
                            {/* Desktop Filters */}
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        data={product}
                                    /> 
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
} 

export default CategoryPage;