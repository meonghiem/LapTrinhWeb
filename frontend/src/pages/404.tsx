import Link from 'next/link'
import AppLayout from 'src/containers/app-layout'
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center pt-[30px] md:pt-[60px] pb-[100px] md:pb-[130px]">
      <h1 className="!text-[#F19CA6] text-lg !font-bold  md:text-2xl leading-[36px] mb-10">404 Error.</h1>
      <div className="text-sm mb-[40px] md:mb-[60px]">お探しのページが見つかりませんでした。</div>
      <Link href="/">
        <a className=" hover:opacity-80 text-center w-[280px] py-[10px] bg-[#F19CA6] text-white rounded-full">TOPへ</a>
      </Link>
    </div>
  )
}

NotFoundPage.getLayout = (page: React.ReactElement) => {
  return <AppLayout hasSidebar={false}>{page}</AppLayout>
}
