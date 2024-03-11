import LemonadePhotos from "../components/LemonadePhotos"
import DrinksPhotos from "../components/DrinksPhotos"
import BeautyPhotos from "../components/BeautyPhotos"
import FoodPhotos from "../components/FoodPhotos"
import FitnessPhotos from "../components/FitnessPhotos"
import ProductPhotos from "../components/ProductPhotos"

export default async function CommercialPage() {
 
  return (
    <div className="container gap-1 flex flex-wrap md:justify-between justify-center items-start mx-auto px-5 overflow-hidden">
      <LemonadePhotos />
      <DrinksPhotos />
      <BeautyPhotos />
      <FoodPhotos />
      <FitnessPhotos />
      <ProductPhotos />
  </div>
  )
}


