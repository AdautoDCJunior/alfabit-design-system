export type ButtonProps = {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const getVariant = (
  variant: ButtonProps['variant'],
  disabled: ButtonProps['disabled'],
) => {
  switch (variant) {
    case 'primary':
      return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';
    case 'secondary':
      return disabled
        ? 'bg-disabled text-disabled'
        : 'bg-quaternary text-primary';
    case 'tertiary':
      return disabled ? 'text-disabled' : 'text-primary';
  }
};

const Button = ({
  children,
  variant = 'primary',
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`
        rounded-md
        px-lg
        py-2xs
        ${getVariant(variant, disabled)}
        ${className}
      `}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
