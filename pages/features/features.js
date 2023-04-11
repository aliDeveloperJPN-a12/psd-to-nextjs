import Image from "next/image";
import features1 from "./../../images/features1.png";
export default function Features() {
  return (
    <div className="md:w-full fold:w-full md:flex">
      <div className="w-full bg-[#e9e5e5] xl:h-[450px] fold:h-[1100px] absolute">
        <div className="fold:w-[85px] h-[85px] bg-[#ff8b38] relative top-[90px] fold:left-[100px] pro:left-[150px] sm:left-[270px] lg:left-[100px] xl:left-[100px] md:left-[50px] rounded-t-sm">
          <p dir="rtl" className="text-[#fff] text-center mt-[1px] pt-[33px] ">
            تب 1
          </p>
        </div>
        <div className="w-[85px] h-[85px] bg-slate-950 relative top-[90px] fold:left-[100px] pro:left-[150px] sm:left-[270px] xl:left-[100px] lg:left-[100px] md:left-[50px]">
          <p className="text-[#fff] text-center mt-[1px] pt-[33px]">تب 2</p>
        </div>
        <div className="w-[85px] h-[85px] bg-slate-950 relative top-[90px] fold:left-[100px] pro:left-[150px] xl:left-[100px] sm:left-[270px]  rounded-b-sm lg:left-[100px] md:left-[50px]">
          <p className="text-[#fff] text-center mt-[1px] pt-[33px] ">تب 3</p>
        </div>
      </div>

      <div className="relative xl:top-[95px] lg:top-[95px] md:top-[95px] fold:top-[450px] xl:left-[270px] lg:left-[220px] md:left-[220px] ">
        <p dir="rtl" className="font-bold fold:p-2">
          زبانه ها با جلوه انتقال نرم.
        </p>
        <br />
        <p dir="rtl" className="xl:w-[400px] lg:w-[400px] md:w-[400px] fold:p-2 text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته
        </p>
        <br />
        <br />
        <botton className="xl:left-20 fold:mx-[30px] border-1 border-[#ff8b38] text-[#ff8b38] p-2 text-[10px] w-[80px] text-center">
          دانلود
        </botton>

        <p className="absolute w-full xl:left-[600px] xl:top-10 lg:top-10 lg:left-[400px]">
          <Image
          className="xl:w-[280px] fold:w-[240px] sm:w-[600px] pro:w-[350px] lg:w-[350px] fold:mx-[10px]"
            src={features1}
            width=""
            style={{ height: "250px" }}
            alt="necessary"
          />
        </p>
      </div>
    </div>
  );
}
