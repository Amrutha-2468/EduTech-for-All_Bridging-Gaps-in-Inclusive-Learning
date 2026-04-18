
import Image from 'next/image';

const productsData = [
  {
    id: 1,
    name: 'Braille Learning Kit',
    description: 'A comprehensive kit to learn Braille.',
    price: 29.99,
    image: '/assets/braille-kit.jpg', 
  },
  {
    id: 2,
    name: 'Hearing Aid',
    description: 'High-quality hearing aid for enhanced listening.',
    price: 199.99,
    image: '/assets/hearing-kit.jpg',
  },
  {
    id: 3,
    name: 'Wheelchair',
    description: 'Comfortable and lightweight wheelchair for easy mobility.',
    price: 499.99,
    image: '/assets/wheel-chair.jpg', 
  },
 
];

export default function Store() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl text-gray-500 font-bold mb-8 text-center">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productsData.map(({ id, name, description, price, image }) => (
          <div key={id} className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src={image}
              alt={name}
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-2xl text-gray-500 font-bold mb-2">{name}</h3>
            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-lg font-semibold mb-4 text-gray-400">₹{price.toFixed(2)}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg  hover:bg-blue-600 transition">
              purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
