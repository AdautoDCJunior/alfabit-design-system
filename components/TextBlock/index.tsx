export type TextBlockProps = {
  title: string,
  body: string,
  className?: string
}

const TextBlock = ({ title, body, className }: TextBlockProps) => (
  <div className={`flex flex-wrap bg-dark px-2xl py-lg gap-xs ${className}`}>
    <h1 className='text-gray-primary text-2xl font-extrabold'>{title}</h1>
    <p className='text-gray-primary text-md font-normal'>{body}</p>
  </div>
)

export default TextBlock