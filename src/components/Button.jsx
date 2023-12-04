import classNames from "classnames";

const Button = ({
  children,
  className,
  icon,
  primary,
  secondary,
  danger,
  ...rest
}) => {
  const styles = classNames(
    `duration-200 ease-in-out py-2 px-3 font-medium rounded-[5px] flex items-center text-sm justify-center ${className}`,
    {
      "text-white bg-accent hover:bg-accent_hover": primary,
      "text-white bg-slate-500 hover:bg-slate-700": secondary,
      "text-white bg-red-500 hover:bg-red-700": danger,
    }
  );
  return (
    <button className={styles} {...rest}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
