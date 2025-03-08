import { MouseEventHandler } from "react"

export default function BaseButton({
  children,
  onClick
}: {
  children: React.ReactNode,
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
}) {
  return (
    <button
      className="px-3 py-1 rounded-lg bg-white border border-gray-200 shadow-sm cursor-pointer hover:shadow-inner"
      onClick={onClick}
    >
      {children}
    </button>
  )
}