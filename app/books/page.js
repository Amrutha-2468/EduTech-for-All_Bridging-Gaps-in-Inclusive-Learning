
import Image from 'next/image';

const booksData = [
  {
    id: 1,
    title: 'Learning Braille',
    author: 'Jane Doe',
    description: 'An essential guide for beginners to learn Braille.',
    image: '/assets/braille.jpg', 
  },
  {
    id: 2,
    title: 'Sign Language Basics',
    author: 'John Smith',
    description: 'A comprehensive resource for learning sign language.',
    image: '/assets/sign-language.jpg',
  },
  {
    id: 3,
    title: 'Understanding Disability',
    author: 'Emily Johnson',
    description: 'An insightful exploration of different disabilities.',
    image: '/assets/understanding-disability.jpg',
  },
  
];

export default function Books() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-500">Books Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {booksData.map((book) => (
          <div key={book.id} className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src={book.image}
              alt={book.title}
              width={200}
              height={250}
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold mb-2 text-gray-400">{book.title}</h3>
            <h4 className="text-lg text-gray-600 mb-2">by {book.author}</h4>
            <p className="text-gray-700 mb-4">{book.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
