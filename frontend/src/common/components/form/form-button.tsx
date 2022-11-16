import clsx from 'clsx'

export const FormButton = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <>
      <div className={clsx(`mt-[60px] text-center flex flex-col items-center gap-y-[30px]`, className)}>{children}</div>
    </>
  )
}
