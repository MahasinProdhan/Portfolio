const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-2xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-primary-gradient text-white shadow-soft hover:shadow-xl hover:-translate-y-0.5",
    outline:
      "border border-primary text-primary bg-white hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
