import LemonadePhotos from "../components/LemonadePhotos"
import DrinksPhotos from "../components/DrinksPhotos"
import BeautyPhotos from "../components/BeautyPhotos"
import FoodPhotos from "../components/FoodPhotos"

export default async function CommercialPage() {
 
  return (
    <div className="container gap-1 mx-auto px-5 ">
      <LemonadePhotos />
      <DrinksPhotos />
      <BeautyPhotos />
      <FoodPhotos />
  </div>
  )
}


