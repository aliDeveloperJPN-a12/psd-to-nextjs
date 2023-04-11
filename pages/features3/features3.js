import Image from "next/image";
import logo4 from "./../../images/logo4.png";
import logo5 from "./../../images/logo5.png";
import logo6 from "./../../images/logo6.png";

export default function Features3() {
  return (
    <div>
      <div className="relative bg-[#fff] w-full h-[500px]">
        <div className="w-full text-center fold:mt-[150px] xl:mt-[0px]">
          <p className="font-bold text-[30px]">چرا این عالی است</p>
          <div className="flex justify-center mb-[5px]">
            <hr className="w-[400px]" />
          </div>
          <p dir="rtl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        <div className="xl:flex w-full mt-[25px]">
          <div className="xl:w-2/6 fold:mt-[100px] xl:mt-[0px] h-[250px]">
            <div className="flex w-full h-[100px] justify-center">
              <Image
                src={logo4}
                width="70"
                style={{ height: "70px" }}
                alt="necessary"
              />
            </div>
            <div className="flex justify-center">
              <hr className="mb-1 w-[120px]" />
            </div>
            <div className="w-full h-[100px] text-center">
              {" "}
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته
              </p>
            </div>
          </div>

          
          <div className="xl:w-2/6 fold:mt-[50px] xl:mt-[0px] h-[250px]">
            <div className="flex w-full h-[100px] justify-center">
              <Image
                src={logo5}
                width="70"
                style={{ height: "70px" }}
                alt="necessary"
              />
            </div>
            <div className="flex justify-center">
              <hr className="mb-1 w-[120px]" />
            </div>
            <div className="w-full h-[100px] text-center p-4">
              {" "}
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته
              </p>
            </div>
          </div>
          <div className="xl:w-2/6 fold:mt-[100px] xl:mt-[0px] h-[250px]">
            <div className="flex w-full h-[100px] justify-center">
              <Image
                src={logo6}
                width="70"
                style={{ height: "70px" }}
                alt="necessary"
              />
            </div>
            <div className="flex justify-center">
              <hr className="mb-1 w-[120px]" />
            </div>
            <div className="w-full h-[100px] text-center">
              {" "}
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
