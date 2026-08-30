import Link from "next/link";

/**
 * Your existing Anixsoft logo.
 *
 * 1. Download it from the old site:
 *      https://anixsoft.net/wp-content/uploads/2017/08/logo-icon.png
 * 2. Save it as  public/logo.png  (or export an SVG as public/logo.svg
 *    and change the src below — SVG is sharper and much smaller).
 *
 * If your logo is dark-coloured and disappears against the dark header,
 * add `on-plate` to the className below. That sets it on a small white
 * rounded plate so it stays visible on any background.
 */
export default function Logo({
  footer = false,
  onPlate = false,
}: {
  footer?: boolean;
  onPlate?: boolean;
}) {
  return (
    <Link href="/" className="logo" aria-label="Anixsoft — home">
      <img
        src="/logo.png"
        alt=""
        className={"logo-img" + (onPlate ? " on-plate" : "")}
        width={100}
        height={50}
      />
      
      
    </Link>
  );
}
