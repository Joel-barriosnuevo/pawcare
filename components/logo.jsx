import { PawIcon } from "./ui/paw-icon"

export const Logo = ({ size = "default" }) => {
  const sizeMap = { small: 24, default: 32, large: 48 }
  const px = sizeMap[size] || sizeMap.default
  const fontSize = size === "small" ? "text-lg" : size === "large" ? "text-2xl" : "text-xl"
  return (
    <div className="flex items-center gap-2">
      <img
        src="/logo.png"
        alt="Logo PawCare"
        className={`rounded-full bg-white shadow-lg border-2 border-accent object-cover" h-[${px}px] w-[${px}px]`}
        style={{ height: px, width: px }}
      />
      <span className={`font-bold text-primary ${fontSize}`}>PawCare</span>
    </div>
  )
}
