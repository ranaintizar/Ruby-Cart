import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillStar } from "react-icons/ai";
import { getProduct } from "../../components/products";

function Product() {
  const router = useRouter()
  const slug = router.asPath.replace('/product/', '')
  const product = getProduct(slug)

  return (
    <div className='container mx-auto my-8'>
      <div className="flex items-center mb-5">
        <Link href={`/${product.category}`} className='mr-2 text-base font-medium text-gray-900 capitalize'>{product.category}<span className='h-5 w-4 text-gray-300'>\</span> </Link>
        <span className='medium  sm:font-normal text-gray-500 hover:text-gray-600'>{product.title}</span>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <img src={product.imgUrl} alt="" className="lg:h-[600px] lg:w-[800px] h-auto w-auto object-contain object-center rounded overflow-hidden" />
        </div>
        <div className="w-full md:w-1/3 pt-4 md:pt-0">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}
          </h1>
          <p className="text-3xl md:text-2xl sm:text-xl font-medium sm:font-normal tracking-tight text-gray-900 pt-4">${product.price}</p>
          <h3 className="sr-only">Reviews</h3>
          <p className="flex pt-5"> <AiFillStar className="text-gray-900 h-5 w-5 flex-shrink-0" /> <AiFillStar className="text-gray-900 h-5 w-5 flex-shrink-0" /> <AiFillStar className="text-gray-900 h-5 w-5 flex-shrink-0" /> <AiFillStar className="text-gray-900 h-5 w-5 flex-shrink-0" /> <AiFillStar className="text-gray-200 h-5 w-5 flex-shrink-0" /> </p>
          <h2 className="mt-6 text-base font-medium text-gray-900">Color</h2>
          <div className="flex space-x-1 pt-3 items-center">
            <button className="border-2 border-gray-300  bg-blue-700 rounded-full w-9 h-9 focus:outline-none"></button>
            <button className="border-2 border-gray-300  bg-white-800 rounded-full w-[34px] h-[34px] focus:outline-none"></button>
            <button className="border-2 border-gray-300  bg-neutral-900 rounded-full w-9 h-9 focus:outline-none"></button>
          </div>
          <h2 className="mt-6 text-base font-medium text-gray-900">Size</h2>
          <div className="flex flex-wrap pt-2">
            <div className="space-x-4">
              <button className="lg:p-3 md:p-3 sm:p-2 border rounded-md  justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:py-3 bg-white shadow-sm text-gray-900">s</button>
              <button className="lg:p-3 md:p-3 sm:p-2 border rounded-md  justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:py-3 bg-white shadow-sm text-gray-900">m</button>
              <button className="lg:p-3 md:p-3 sm:p-2 border rounded-md  justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:py-3 bg-white shadow-sm text-gray-900">l</button>
            </div>
          </div>
          <div className="lg:flex md:flex lg:space-x-1 md:space-x-1 pt-6">
            <button className="lg:w-2/4 md:w-2/4 w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 lg:p-3 md:p-2 sm:px-1 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 mb-2">Buy Now</button>
            <button className="lg:w-2/4 md:w-2/4 w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 lg:p-3 md:p-2 sm:px-1 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 mb-2">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="flex mt-10">

        <div className="space-y-6 pl-1">
          <p className="text-lg text-gray-900 pt-5">{product.desc}</p>
          <h3 className="text-md font-medium text-gray-700">Highlights</h3>
          <div className="mt-4">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li className="text-gray-400"><span className="text-gray-600">High Quality</span></li>

              <li className="text-gray-400"><span className="text-gray-600">Classic and versatile design
              </span></li>

              <li className="text-gray-400"><span className="text-gray-600">Comfortable material</span></li>

              <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
            </ul>
          </div>
        </div>
      </div>



    </div>

  )
}

export default Product