import Image from "next/image";
import features1 from "./../../images/features2.png";
import logo2 from "./../../images/logo2.png";
export default function Features1() {
  return (
    <div className="w-full bg-[#fff] xl:h-[600px] fold:h-[1000px] xl:mb-[100px]">
      <div className="relative xl:flex w-4/5 xl:left-[160px] fold:left-[30px] xl:top-[260px] fold:top-[800px] sm:top-[850px]">
        <Image
          src={features1}
          width="480"
          style={{ height: "400px" }}
          alt="necessary"
        />
        <div>
          <p className="font-bold mt-[30px]" dir="rtl">
            بخش فهرست فرعی
          </p>
          <p dir="rtl" className="">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته
          </p>
          <div className="mx-[20px] mt-[10px]" dir="rtl">
            <div className="flex">
              <Image
                src={logo2}
                width="50"
                style={{ height: "50px" }}
                alt="necessary"
              />
              <p className="font-bold mt-[13px]">عنوان</p>
            </div>
            <p className="xl:w-[450px] fold:w-[150px] mx-[57px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div className="flex">
              <Image
                src={logo2}
                width="50"
                style={{ height: "50px" }}
                alt="necessary"
              />
              <p className="font-bold mt-[13px]">عنوان</p>
            </div>
            <p className="xl:w-[450px] fold:w-[150px] mx-[57px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
