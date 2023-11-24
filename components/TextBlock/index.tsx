export type TextBlockProps = {
  title: string;
  body: string;
  className?: string;
};

const TextBlock = ({ title, body, className }: TextBlockProps) => (
  <div className={`flex flex-wrap gap-xs bg-dark px-2xl py-lg ${className}`}>
    <h1 className="text-2xl font-extrabold text-gray-primary">{title}</h1>
    <p className="text-md font-normal text-gray-primary">{body}</p>
  </div>
);

export default TextBlock;
