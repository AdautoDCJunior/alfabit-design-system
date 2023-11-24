export type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputOrTextArea = (props: InputProps) => {
  if (props.multiline) {
    return (
      <textarea
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return <input {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />;
};

const Input = ({ label, className, ...rest }: InputProps) => {
  return (
    <div className="relative">
      {label && (
        <label className="absolute pl-xs pt-4xs text-xs">{label}</label>
      )}
      <InputOrTextArea
        className={`
          rounded-md
          bg-dark
          p-xs
          text-gray-primary
          disabled:border-2
          disabled:border-disabled
          disabled:bg-disabled
          ${label && 'pt-md'}
          ${className}
        `}
        {...rest}
      />
    </div>
  );
};

export default Input;
