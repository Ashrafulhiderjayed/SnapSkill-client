import { motion } from 'framer-motion';

const Animation = () => {
  const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1520549233664-03f65c1d1327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNoaWxkcmVuJTIwY2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', alt: 'Photo 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1478145971721-10511ecaf005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=392&q=80', alt: 'Photo 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1593644311729-d0b478c97d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', alt: 'Photo 3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1568586609245-50d3183d4aad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGNoaWxkcmVuJTIwY2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', alt: 'Photo 4' },
  ];

  return (
    <div>
      <h2 className='uppercase lg:text-5xl sm:text-3xl text-center font-CreteRound text-primary my-8'>Camp Gallery</h2>
      <div className="w-full py-10 mb-10 gap-5 columns-3 space-y-5">
        {photos.map((photo) => (
          <motion.img
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Animation;
