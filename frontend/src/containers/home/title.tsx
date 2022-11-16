type Props = {
  title: string
  subTitle: string
}
const Title = ({ title, subTitle }: Props) => {
  return (
    <div className="relative">
      <h1 className="font-black text-[100px] leading-[100%] tracking-widest text-[#3FA9F51A] absolute top-0 bottom-0">
        {title}
      </h1>
      <h2 className="font-black text-[32px] leading-[170%] tracking-wider text-[#3FA9F5] absolute bottom-0">
        {subTitle}
      </h2>
    </div>
  )
}

export default Title
