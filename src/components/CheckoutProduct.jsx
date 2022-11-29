import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';
import images from '../constants/images';

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    // Sending the product as an action to the redux store
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    // Remove item from redux
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-4 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="GBP" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <Image
              loading="lazy"
              className="w-12"
              src={images.prime}
              alt="image"
            />
            <p className="text-xs text-gray-500">FREE next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right Buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add To Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove From Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
