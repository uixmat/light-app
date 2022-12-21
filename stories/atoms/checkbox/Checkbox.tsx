interface Props {
  primary?: boolean
  label?: string
}

export const Checkbox = ({ label, primary = true }: Props) => {
  return (
    <div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="A3"
          name="A3Group"
          value="yes"
          className="absolute w-8 h-8 opacity-0"
        />
        <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-2 bg-white border-2 border-blue-400 rounded-md focus-within:border-blue-500">
          <svg
            className="hidden w-3 h-3 text-blue-600 pointer-events-none fill-current"
            version="1.1"
            viewBox="0 0 17 12"
            xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <g
                transform="translate(-9 -11)"
                fill="#1F73F1"
                fill-rule="nonzero">
                <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
              </g>
            </g>
          </svg>
        </div>
        {label ? (
          <label htmlFor="A3" className="ml-4 select-none">
            {label}
          </label>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
