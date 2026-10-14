import Image from "next/image";

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Image
      src="/images/nila-pure-oils-logo.png"
      alt="Nila Pure Oils"
      width={1730}
      height={839}
      className={light ? "h-24 w-auto brightness-0 invert" : "h-14 w-auto sm:h-16"}
    />
  );
}
