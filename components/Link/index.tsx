export type LinkProps = {
  children: React.ReactNode;
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, href, disabled, className, ...rest }: LinkProps) => (
  <a
    href={disabled ? undefined : href}
    className={`${disabled ? 'text-disabled' : 'text-primary'} ${className}`}
    aria-disabled={disabled}
    {...rest}
  >
    {children}
  </a>
)

export default Link
