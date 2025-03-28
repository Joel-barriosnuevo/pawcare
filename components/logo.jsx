import { PawIcon } from "./ui/paw-icon"

export const Logo = ({ size = "default" }) => {
  const sizeClasses = {
    small: "text-lg",
    default: "text-xl",
    large: "text-2xl",
  }

  return (
    <div className="flex items-center gap-2">
      <div className="bg-accent rounded-full p-1 flex items-center justify-center">
        <PawIcon className="text-secondary" size={size === "small" ? 18 : size === "large" ? 28 : 24} />
      </div>
      <span className={`font-bold text-primary ${sizeClasses[size] || sizeClasses.default}`}>PawCare</span>
    </div>
  )
}
