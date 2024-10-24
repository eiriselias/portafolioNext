interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

const Button = ({children, className = "", ...props}:Props) => {
  return (
    <button
        className={`bg-green-400 py-2 px-8 rounded-full text-black font-bold transition duration-300 ease-in-out
            ${props.disabled 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'cursor-pointer hover:scale-105 hover:bg-green-700 hover:text-white'}
            ${className}`}
        {...props}
    >
      {children}
    </button>
  )
}

export default Button
