import bg from '../assets/images/bg.png';

const Visit = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-center text-pink-500 text-4xl font-bold z-10"
        >
          If you made it this far, thank you ❤️
        </h1>
      </div>
      <img
        src={bg}
        alt="drawing"
        style={{ filter: 'hue-rotate(270deg)' }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
    </div>
  );
};

export default Visit;

