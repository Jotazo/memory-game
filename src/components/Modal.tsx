const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-zinc-950 opacity-70"></div>
      {children}
    </div>
  );
};

export default Modal;
