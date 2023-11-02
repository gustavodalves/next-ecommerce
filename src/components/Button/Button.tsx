import { ButtonHTMLAttributes, HTMLAttributes } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...rest}: ButtonProps) => {
    return (
        <button
            {...rest}
            className="bg-violet-950 p-2 rounded text-white hover:bg-violet-900 transition m-1 linear"
        >
            { children }
        </button>
    )
}

export default Button
