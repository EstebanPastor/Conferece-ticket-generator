interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <main className="py-8 px-4 bg-[url(/assets/images/background-mobile.png)] bg-cover bg-bottom md:bg-[url(/assets/images/background-tablet.png)] lg:bg-[url(/assets/images/background-desktop.png)] relative overflow-hidden min-h-screen">
      <img
        src="/assets/images/pattern-squiggly-line-top.svg"
        alt="pattern squiggly line top"
        className="absolute top-4 right-0 h-13 md:h-25lg:h-50"
      />
      <img
        src="/assets/images/pattern-circle.svg"
        alt="pattern squiggly line top"
        className="absolute -top-4 -left-4 h-13 md:h-25lg:h-50"
      />

      <img src="/assets/images/pattern-lines.svg" alt="pattern lines" 
      className="absolute pointer-events-none top-0 min-w-5xl left-0 inset-0"
      
      />
      <header className="flex justify-center mb-10">
        <img src="/assets/images/logo-full.svg" alt="logo" className="" />
      </header>
      {children}
      <img
        src="/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
        alt="squiggly line bottom"
        className="absolute bottom-0 h-50 left-0 pointer-events-none"
      />
    </main>
  );
};

export default MainLayout;
