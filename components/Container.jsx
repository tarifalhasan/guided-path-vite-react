const Container = ({ children }) => {
  return (
    <div className={`max-w-[1689px] md:px-5 lg:px-5 xl:px-10  px-4 mx-auto `}>
      {children}
    </div>
  );
};

export default Container;
