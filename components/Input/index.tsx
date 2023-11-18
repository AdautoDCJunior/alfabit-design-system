export type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
    React.InputHTMLAttributes<HTMLInputElement> |
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
  )

const InputOrTextArea = (props: InputProps) => {
  if (props.multiline) {
    return (
      <textarea
        {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
      />
    )
  }

  return (
    <input
      {...props as React.InputHTMLAttributes<HTMLInputElement>}
    />
  )
}

const Input = ({ label, className, ...rest }: InputProps) => {
  return (
    <div className='relative'>
      {label && <label
        className='absolute pt-4xs pl-xs text-xs'
      >
        {label}
      </label>}
      <InputOrTextArea
        className={`
          bg-dark
          text-gray-primary
          rounded-md
          p-xs
          disabled:bg-disabled
          disabled:border-2
          disabled:border-disabled
          ${label && 'pt-md'}
          ${className}
        `}
        {...rest}
      />
    </div>
  )
}

export default Input