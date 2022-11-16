export function AppFooter({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <>
      <footer className="footer-container">
        <div>footer </div>
        {children}
      </footer>
    </>
  )
}
