import Image from "next/image";
import h1 from "./../../images/h1.jpg";
export default function Options() {
  return (
    <div className="flex w-full fold:mt-[800px] xl:mt-[0px]">
      <div className="w-full relative">
        <Image src={h1} width="" alt="necessary" className="fold:h-[250px]"/>
      </div>
      <div className="w-full h-[250px] bg-black absolute opacity-20"></div>
      <div className="w-full h-[250px] absolute text-center mt-[50px]">
        <p className="text-white" dir="rtl">طراحی شیک AXURE</p>
        <p className="text-white mt-[10px]" dir="rtl">از بخش هایی که نیاز دارید استفاده کنید، بخش هایی را که ندارید حذف کنید. g را ایجاد کنید</p>
        <button className="mt-[10px] p-1 border border-white text-white w-[80px] text-[12px]">دانلود</button>
      </div>
    </div>
  );
}
