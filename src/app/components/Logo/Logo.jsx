import { Bricolage_Grotesque } from "next/font/google";

const bricolage_grotesque = Bricolage_Grotesque({
  weight: ["200", "800"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const Logo = () => {
  return (
    <div className="md:text-6xl sm:text-2xl">
      <span className={`${bricolage_grotesque.className} font-extrabold`}>
        Tutor
      </span>
      <span className={`${bricolage_grotesque.className} font-extralight`}>
        OnDemand
      </span>
    </div>
  );
};

export default Logo;
