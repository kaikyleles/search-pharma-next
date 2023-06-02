export default function Checkbox(props: any) {
  return (
    <>
      <div className={props.style}>
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-white bg-white text-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        ></input>
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {props.name}
        </label>
      </div>
    </>
  )
}
