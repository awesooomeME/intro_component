import Image from "next/image"
import error_icon from "@/public/images/icon-error.svg"
import { useState } from "react"

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    focused?: string;
  }
};

type FormInputProps = {
  placeholder: string,
  errorMessage: string,
  fieldType: string,
  pattern: string,
}

export const FormInput = ({placeholder, errorMessage, fieldType, pattern}: FormInputProps) => {
  const [isFocused, setFocused] = useState(false)
  
  const handleFocus = (e: any) => {
    setFocused(true)
  }

  return (
    <div className="relative grid">
        <input placeholder={placeholder} type={fieldType} required={true}
          pattern={pattern}
          className="peer border-2 border-grayish_blue px-5 py-3 \
            focus:outline-grayish_blue"
            onBlur={handleFocus}
            focused={isFocused.toString()}>
        </input>
        <Image src={error_icon} alt="error icon"
          className="absolute right-3 top-1 translate-y-1/2 hidden"/>
        <p className="text-xs text-right text-red px-2 py-1 italic hidden">
          {errorMessage}
        </p>
    </div>
  )
}
