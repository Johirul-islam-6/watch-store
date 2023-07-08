import { Button } from '@/components/ui/button';
import banner from '@/assets/images/banner.png';
import hero from '@/assets/images/hero.png';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';
// import curselWatch from '@/components/curselWatch'

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            HAYLOU <br /> SOLAR PLUSE
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Effortless communication at your fingertips
          </p>
          <div className="text-primary mt-20 ">
            <p className='text-[18px] font-serif'>Bluetooth 5.2 for easy, secure communication.Precise 143 Amoled display for clear visuals</p>
            <p className='text-[18px] font-serif'>The Haylou Solar Plus RT3 smartwatch is IP68 waterproof. You don't need to take it off when  <br/>  washing  hands, helping you cope easily with sweating during workouts or stormy rains</p>
          </div>
          <Button className="mt-5 text-[16px]">about more</Button>
        </div>

        {/* <curselWatch/> */}

        <div className="relative -right-14">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="mb-96">
        <div>
          <img className="mx-auto" src={hero} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            The future of tech is here
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/products">Brows all products</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
