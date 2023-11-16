export type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`
      bg-primary
      rounded-md
      px-[32px]
      py-2xs
      text-white
      ${className}
    `}>{children}</button>
  )
}

export default Button