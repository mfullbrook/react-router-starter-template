import Logo from "./Logo"

const LogoType = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="p-0 rounded-lg">
        <Logo width={40} height={40} />
      </div>
      <span className="font-lexend font-bold text-[26px] tracking-wide text-gray-900 mt-px h-10">CallKaira</span>
    </div>
  )
}

export default LogoType;
