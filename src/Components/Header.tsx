import { HeaderProps } from "@/Types/Types";
import Icons from "@/Components/Icons";
export default function (props: HeaderProps) {
  const { logo, title} = props;
  return (
    <header className="bg-primary ">
      <div className="max-w-6xl mx-auto my-0 py-3 md:grid md:grid-cols-3 gap-4 items-center">
        <div className="flex col-span-2">
          <img src={logo} alt={title} className="w-[10rem] row-span-2" />
          <h1 className="mt-1 text-4xl font-light text-secondary sm:text-4xl lg:text-5xl justify-end">{title}</h1>
        </div>
        <div className="text-center md:text-right">
          <span className="text-secondary">Made with:</span>
          <Icons />
        </div>
      </div>
    </header>
  );
}
