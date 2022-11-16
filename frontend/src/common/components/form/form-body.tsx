export const FormBody = ({
  children,
  className,
  bg = 'bg-white',
}: React.PropsWithChildren<{ className?: string; bg?: string }>) => {
  return (
    <>
      <div className={`mx-auto mb-10 max-w-[640px] pt-[60px] ${className} ${bg}`}>{children}</div>
    </>
  )
}
