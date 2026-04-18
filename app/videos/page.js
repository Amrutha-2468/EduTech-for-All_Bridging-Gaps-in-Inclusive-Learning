
import Image from 'next/image';

const videosData = [
  {
    id: 1,
    title: 'Introduction to Sign Language',
    description: 'A beginner-friendly video introducing basic sign language.',
    videoUrl: '/assets/asl.mp4',
    thumbnail: '/assets/sign-tn.webp', 
  },
  {
    id: 2,
    title: 'Understanding Braille',
    description: 'Learn about Braille and how it works in this informative video.',
    videoUrl: '/assets/braille.mp4', 
    thumbnail: '/assets/braille.webp', 
  },
  {
    id: 3,
    title: 'Disability Awareness',
    description: 'A video on understanding different types of disabilities.',
    videoUrl: '/assets/dis-aw.mp4', 
    thumbnail: '/assets/dis-aw.webp', 
  },
];

export default function Videos() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-500">Video Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videosData.map(({ id, title, description, videoUrl, thumbnail }) => (
          <div key={id} className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src={thumbnail}
              alt={title}
              width={200}
              height={150}
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold mb-2 text-gray-500">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <video 
                    className="mx-auto mb-4 rounded-lg shadow-lg" 
                    width="320" 
                    height="240" 
                    controls
                    // autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src={videoUrl} type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
          </div>
        ))}
      </div>
    </div>
  );
}
