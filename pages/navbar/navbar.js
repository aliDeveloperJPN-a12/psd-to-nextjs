import Image from 'next/image'
import sampleImage from "./../../images/logo.png"
export default function Navbar() {
  return <div>
      <div className="flex w-full bg-black h-[60px] justify-between">

      <div className="mt-[18px] xl:mx-[100px]">
        <Image src={sampleImage} width="90" style={{height:"25px"}} alt="necessary" className="fold:mx-[10px]"/>
        </div>


        <ul className="flex xl:mr-[70px] fold:invisible lg:visible">
            <li className="xl:mr-[20px] xl:mt-[20px] text-white">مخاطبین</li>
            <li className="xl:mr-[20px] xl:mt-[20px] text-white">بازدید ها</li>
            <li className="xl:mr-[20px] xl:mt-[20px] text-white">قیمت ها</li>
            <li className="xl:mr-[20px] xl:mt-[20px] text-white">درباره ما</li>
            <li className="xl:mr-[20px] xl:mt-[20px] text-white">ویژگی ها</li>
        </ul>




      </div>


  </div>;
}
