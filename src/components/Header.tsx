import { HeaderProps } from "../Types/Types";
import Icons from "./Icons";

// Experimentation is a big part of how you find the best of the best.
export const headline =
  "mt-1 text-4xl font-light tracking-tight  text-secondary sm:text-4xl lg:text-5xl";
export default function (props: HeaderProps) {
  const { logo, title} = props;

  return (
    <>
      <div className="max-w-6xl mx-auto my-0 py-3 grid grid-cols-3 gap-4 items-center">
        <div className="flex col-span-2">
          <img src={logo} alt={title} className="w-[10rem]" />
          <h1 className={headline}>{title}</h1>
        </div>
        <div className="text-right">
          <span className="text-secondary">Made with:</span>
          <Icons />
        </div>
      </div>
    </>
  );
}
