import { Billboard } from "@/types";

interface BillboardProps {
    data: Billboard
}

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {

    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div
                className="rounded-xl relatice aspect-square bg-cover md:aspect-[1.9/1] overflow-hidden"
                style={{backgroundImage: `url(${data?.imageUrl})`}}
            >
                <div className="flex flex-col justify-center items-center h-full w-full text-neutral-200 ">
                    <div className="font-bold text-3xl sm:text-7xl lg:text-6xl sm:max-w-xl max-w-xs">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard;