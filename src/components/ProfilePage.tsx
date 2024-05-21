import { useAuth0 } from "@auth0/auth0-react";
import card from "../assets/images/card.jpeg";
import logo from '../assets/images/bg.png';
import { useEffect, useState } from "react";
import AL from '../assets/images/AL.jpeg'
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [randomNumber, setRandomNumber] = useState("");

  useEffect(() => {
    const generateRandomNumber = () => {
      const number = Math.floor(Math.random() * 1000000);
      const formattedNumber = number.toString().padStart(6, "0");
      setRandomNumber(formattedNumber);
      localStorage.setItem("randomNumber", formattedNumber);
    };

    const storedNumber = localStorage.getItem("randomNumber");
    if (storedNumber) {
      setRandomNumber(storedNumber);
    } else {
      generateRandomNumber();
    }
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && user ? (
      <div className="flex flex-col items-center text-center mt-10">
        <h1 className="mb-4 text-3xl font-bold">Club Membership</h1>
        <h2 className="mb-2 text-2xl">{user.name}</h2>
        <p className="mb-4 text-lg">{user.email}</p>
        <img className="w-32 h-32 rounded-full" src={user.picture} alt="Profile" />
        <section className="Card mt-10">
          <h1>You now have a digital Akashic Collections Card.</h1>
          <div className="library-card relative">
            <img src={card} alt="Card" className="h-auto max-w-80 border-4 border-black block rounded-sm shadow-lg mt-6" />
            <img
              src={logo}
              alt="Logo"
              className="absolute top-0 right-16 w-16 rounded-md"
              style={{ filter: 'hue-rotate(270deg) brightness(70%) saturate(150%)' }}
            />
            <h2 className="name absolute left-2 top-0">Member Name</h2>
            <h2 className="issued absolute left-3 top-44">Issued</h2>
            <h2 className="company absolute right-16 top-0">Akashic Collections</h2>
            <p className="user-name absolute left-2 top-8">{user.name}</p>
            <p className="issued absolute left-3 top-52">{new Date().toLocaleDateString()}</p>
            <p className="id absolute left-2 top-36 right-11">{randomNumber}</p>

          </div>
        </section>
        <div className="mt-10 shadow-2xl border-black border rounded w-full relative">
        <img src={AL} alt="" className="h-auto w-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <Link 
                    to="/visit" 
                    className="inline-block rounded-2xl text-blue-400 hover:text-blue-600 font-bold px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-8 lg:px-12 lg:py-10 bg-black bg-opacity-60 hover:bg-opacity-80 transition duration-300"
                >
                    Discover Our Collection Today!
                </Link>
            </div>
        </div>
      </div>
    ) : (
      <div>You need to be authenticated to view this page.</div>
    )
  );
};

export default ProfilePage;