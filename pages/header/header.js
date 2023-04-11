import Image from "next/image";
import sampleImage from "./../../images/header.jpg";
import logo from "./../../images/logo.png";
export default function Header() {
  return (
    <div className="xl:h-[500px] fold:h-[1000px] w-full" dir="rtl">
      <Image
        className="absolute xl:h-[500px] fold:h-[1000px]"
        src={sampleImage}
        width=""
        // style={{ height: "500px" }}
        alt="necessary"
      />
      <div className="relative bg-black xl:h-[500px] opacity-20"></div>
      <p className="absolute top-[220px] xl:left-20 text-white xl:w-[400px] xl:text-[25px] fold:mr-[20px] fold:w-[250px] pro:w-[350px]">
        قالب مدرن AXURE برای نمونه های اولیه زیبا
      </p>
      <p className="absolute top-[290px] xl:left-20 text-white xl:w-[400px] fold:mr-[20px] fold:w-[250px] pro:w-[350px] text-[10px] mt-[10px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
      </p>
      <botton className="absolute top-[400px] xl:left-20 fold:left-[40px]  border-1 border-white text-white p-2 xl:text-[10px] w-[80px] text-center">
        دانلود
      </botton>

      <p className="absolute text-white top-[170px] left-20">
        <Image
          src={logo}
          width="150"
          style={{ height: "40px" }}
          alt="necessary"
        />
      </p>

      <div className="xl:w-[350px] fold:w-[250px] bg-[#ffffff] absolute xl:top-[135px] fold:top-[500px] xl:left-[900px] border-1 rounded-md xl:h-[388px] fold:h-[420px] fold:mr-[15px] pro:mr-[65px]">
        <div className="w-full bg-[#f5f5f5] p-3 text-center">
          <p className="flex text-center xl:mx-[65px] fold:mx-[30px]">
            امروز  <p className="mx-1 mr-1 text-[#ff9b51]"> رایگان </p>
            امتحان کنید
          </p>
        </div>
        <div className="p-2">
          <input
            type="text"
            placeholder="نام"
            className="mb-[51px] m-[10px] w-4/5"
          />
          <input
            type="text"
            placeholder="ایمیل"
            className="mb-[51px] m-[10px] w-4/5"
          />
          <input
            type="text"
            placeholder="رمز"
            className="mb-[51px] m-[10px] w-4/5"
          />
        </div>
        <button className="bg-[#ff9b51] w-full p-3 border-1 rounded-md  xl:mt-[1px] fold:mt-[32px]">
          شروع کنید
        </button>
      </div>
    </div>
  );
}
