import Image from "next/image";
import features1 from "./../../images/features3.png";
import logo2 from "./../../images/logo3.jpg";
export default function Features2() {
  return (
    <div className="w-full bg-[#E9E5E5] xl:h-[500px] fold:mt-[1000px] xl:mt-[0px]">




      <div className="w-full bg-[#E9E5E5] xl:h-full absolute"></div>




<div className="xl:flex relative xl:top-[50px] xl:mx-[150px]">
<p dir="rtl" className="xl:w-[800px] fold:p-2 fold:mr-[40px] xr:mr-[50px] xs:mr-[70px] xl:mr-[0px]">
          <p dir="rtl" className="font-bold">
            بخش فهرست فرعی
          </p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته


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


        </p>


          <Image
            className="xl:w-[480px] xl:h-[400px] fold:w-[250px] pro:w-[310px] xs:w-[400px] sm:w-[500px] fold:h-[400px] fold:mx-[20px] pro:mx-[40px]"
            src={features1}
            width=""
            alt="necessary"
          />


</div>















    </div>
  );
}
