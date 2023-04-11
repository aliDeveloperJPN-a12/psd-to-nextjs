export default function Contactus() {
  return <div className="xl:w-full">
      <div className="w-full text-center mt-[0px] bg-stone-200 pt-[10px] h-[800px]">
        <p className="mb-[10px] font-bold text-[30px] text-[#ff9b51]">ارتباط با ما</p>
        <p dir="rtl">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
        <div className="xl:flex xl:w-full h-[300px] justify-center pt-[80px]">
            <div className="">
                <div dir="rtl"><input type="text" placeholder="نام" className="border-1 border-b-black xl:w-[400px] fold:w-[200px] xl:mx-[50px] h-[50px] pt-[20px] bg-stone-200"/></div>
                <div dir="rtl"><input type="text" placeholder="فامیلی" className="border-1 border-b-black xl:w-[400px] fold:w-[200px] xl:mx-[50px] h-[50px] pt-[20px] bg-stone-200"/></div>
                <div dir="rtl"><input type="text" placeholder="ایمیل" className="border-1 border-b-black xl:w-[400px] fold:w-[200px] xl:mx-[50px] h-[50px] pt-[20px] bg-stone-200"/></div>
            </div>
            <div className="" dir="rtl">
                <input  type="text" placeholder="پیام" className="border-1  border-b-black h-[150px] xl:w-[400px] fold:w-[200px] pb-[120px] bg-stone-200"/>
            </div>

        </div>
        <div className="w-full fold:h-[50px] fold:pt-[100px]">
                <button className="border-1 bg-[#ff9b51] text-white p-2 rounded-md ">ارسال پیام</button>
            </div>
      </div>
  </div>;
}
