import Link from "next/link";
import Container from "@/components/ui/container";
import NavRoutes from "@/components/nav-routes";
import getCategories from "@/actions/get-categories";
import NavCart from "./nav-cart";

const Navbar = async () => {

    const categories = await getCategories()

    return (
        <div className="border-b">
            <Container>
                <div className="flex relative px-4 sm:px-6 lg:px-8 h-16 items-center gap-2">
                    <Link
                        className="flex ml-4 lg:ml-0 gap-x-2" 
                        href={"/"}
                    >
                            <p className="font-bold text-xl">
                                Store
                            </p>
                    </Link>
                    <NavRoutes 
                        data={categories} 
                    />
                    <NavCart />
                </div>
            </Container>
        </div>
    )
}

export default Navbar;