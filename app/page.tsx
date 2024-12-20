import Image from "next/image";
import logo from '../public/googlelogo.png';
import SearchBar from './components/searchbar';


export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-center mt-36">
          <Image
            src={logo}
            width={250}
            height={250}
            alt="Google Logo"
          />
        </div>
        <SearchBar/>
      </div>
  );
}
