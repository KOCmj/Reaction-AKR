import MC from "../assets/images/card.jpeg";
import ML from "../assets/images/bg.png";
import LoginButton from "../components/LoginButton";

const Membership = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl mb-8">Get a Free Akashic Card Today!</h1>
      <section className="container p-5">
        <div className="relative mx-auto w-80">
          <img src={MC} alt="Card" className="h-auto w-full border-2 border-black rounded-2xl shadow-lg" />
          <img
            src={ML}
            alt="Logo"
            className="absolute top-0 right-4 w-16 rounded-md"
            style={{ filter: 'hue-rotate(270deg) brightness(70%) saturate(150%)' }}
          />
          <h2 className="name absolute left-6 top-0 font-bold text-sm">Member Name</h2>
          <h2 className="issued absolute left-6 bottom-6 font-bold text-sm">Issued</h2>
          <h2 className="company absolute right-6 top-0 text-sm font-bold text-right">Akashic Collections</h2>
        </div>
      </section>
      <section className="text-center mt-8">
        <h1 className="text-xl mb-4">Welcome! Get a free akashic card from The Akashic Collections.</h1>
        <LoginButton className="p-3 rounded bg-purple-900 hover:bg-blue-900 hover:text-blue-300 cursor-pointer">
          Apply for an Akashic Card Online
        </LoginButton>
        <p className="mt-4">
          Metaverse residents can get a digital library card through our metaverse application and gain access to an array of digital greatness. You may also request physical items with your digital account; however, you will need to check out your items with crypto.
        </p>
        <p className="mt-4">
          If you are a meatverse researcher looking to request research materials, please use our alternate form.
        </p>
      </section>
    </div>
  );
};

export default Membership;
