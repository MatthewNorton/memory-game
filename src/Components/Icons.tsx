import { IconProps} from "@/Types/Types";
import reactIcon from "@/assets/reactIcon.svg";
import typescriptIcon from "@/assets/typescriptIcon.svg";
import tailwindIcon from "@/assets/tailwindIcon.svg";


export default function Icons() {
  const iconData: IconProps = {
    react: reactIcon,
    typescript: typescriptIcon,
    tailwind: tailwindIcon
  };
  return (
    <>
    {Object.entries(iconData).map(([alt, value]) => (
      <img key={alt + 1} className='w-[2rem] inline-block	ml-3' alt={alt} src={value} />
    ))}
    </>
  )

}