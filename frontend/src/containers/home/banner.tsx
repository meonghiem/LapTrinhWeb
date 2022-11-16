import Image from 'next/image'
import Banner1 from 'public/images/banner_pc.png'
import Banner1Sp from 'public/images/banner_sp.png'
import ButtonComponent from 'src/common/components/button'
const Banner = () => {
  return (
    <section className=" banner-container md:h-[520px] h-[676px] text-white relative">
      <div className="mx-5 md:ml-20 pt-[60px] flex justify-center flex-col items-center z-20 md:absolute">
        <h1 className="text-2xl md:text-[48px] md:leading-[70px] text-white md:mb-[10px] mb-5">テキストが入ります</h1>
        <h3 className="text-white md:mb-5 mb-[30px]">サブテキストが入りますサブテキストが入りますサブテキストが</h3>
        <img src={'/images/banner_2.png'} alt="banner2" className="w-[244px] h-[164px] md:w-[308px] md:h-[208px]"></img>
        <div className="flex gap-x-[30px] gap-y-[15px] mt-5 md:mt-[30px] flex-col md:flex-row">
          <ButtonComponent type="success" size="middle" rounded="middle">
            Hello Giang
          </ButtonComponent>
          <ButtonComponent type="white" size="middle" rounded="middle" className="w-[374px]">
          Pionero
          </ButtonComponent>
        </div>
      </div>

      <div className="absolute right-0 bottom-[-5px] z-10 max-md:hidden">
        <Image src={Banner1} alt="banner2" layout="fixed"></Image>
      </div>
      <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 z-10 md:hidden">
        <Image src={Banner1Sp} alt="banner2" layout="fixed"></Image>
      </div>
      <style jsx>
        {`
          @screen md {
            .banner-container {
              background: linear-gradient(75.43deg, #3fa9f5 6.3%, rgba(140, 198, 63, 0.1) 94.04%) !important;
            }
          }

          .banner-container {
            background: linear-gradient(194.63deg, #3fa9f5 33.53%, rgba(140, 198, 63, 0.3) 83.75%);
          }
        `}
      </style>
    </section>
  )
}

export default Banner
