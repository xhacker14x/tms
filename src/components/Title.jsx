const Title = ({ children, className, inverted, ...rest }) => {
  return (
    <h1
      className={`font-bold uppercase ${
        inverted ? "text-white" : "text-slate-800"
      } ${className}`}
      {...rest}
    >
      {children}
    </h1>
  );
};

export default Title;
