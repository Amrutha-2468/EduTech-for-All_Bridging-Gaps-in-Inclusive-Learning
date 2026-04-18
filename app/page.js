// pages/index.js
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <main className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-6">Empowering Accessibility for All</h1>
              <p className="text-lg mb-6">
                Providing educational resources and assistive products for individuals with disabilities. Explore tools designed for the deaf, dumb, blind, and more.
              </p>
              <a
                href="/store"
                className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-100 transition"
              >
                Visit Our Store
              </a>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <Image
                src="/assets/banner.jpg"
                alt="Accessibility"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Image
                  src="/assets/feature1.jpeg"
                  alt="Braille Books"
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-bold mb-4">Braille Books</h3>
                <p className="text-gray-700">
                  Access a wide range of Braille books for visually impaired learners.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  {/* Replace the image with a video */}
                  <video 
                    className="mx-auto mb-4 rounded-lg shadow-lg" 
                    width="320" 
                    height="240" 
                    controls
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/assets/video1.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>

                  <h3 className="text-2xl font-bold mb-4">Educational Video Materials</h3>
                  <p className="text-gray-700">
                    Explore video tutorials designed to help individuals with disabilities learn new skills and enhance accessibility.
                  </p>
                </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Image
                  src="/assets/feature2.jpg"
                  alt="Speech to Text"
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-bold mb-4">Speech to Text</h3>
                <p className="text-gray-700">
                  Tools that help deaf individuals convert speech to text in real time.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Image
                  src="/assets/feature4.png"
                  alt="Text to Speech"
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-bold mb-4">Text to Speech</h3>
                <p className="text-gray-700">
                  Text-to-speech functionality for individuals with speech impairments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg mb-8">
              Discover resources and tools that promote inclusivity and accessibility.
            </p>
            <a
              href="/books"
              className="bg-white text-blue-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-100 transition"
            >
              Explore Our Books
            </a>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2024 Accessibility Education. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
