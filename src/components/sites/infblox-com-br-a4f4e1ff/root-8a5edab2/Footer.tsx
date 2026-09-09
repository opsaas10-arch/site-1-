import { footerInfo } from "../shared/data";
import { PlaceholderTile } from "../shared/PlaceholderTile";

/** Two `py-6 border-t` bands, structure copied from the live DOM. */
export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-md z-10 relative overflow-hidden">
      <div className="py-6 border-t border-border">
        <div className="container flex justify-between items-center flex-wrap gap-4">
          <div>
            <a href="/" className="w-fit flex items-center gap-2">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <PlaceholderTile emoji="🔥" seed="logo" />
              </div>
              <h1 className="text-lg font-bold text-white">{footerInfo.storeName}</h1>
            </a>
            <div className="mb-6">
              <p className="text-muted-foreground text-sm mt-2">
                Email para contato:{" "}
                <a href={`mailto:${footerInfo.email}`} className="text-foreground font-semibold">
                  {footerInfo.email}
                </a>
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              Desenvolvido por{" "}
              <a href="#" className="text-foreground font-semibold hover:underline">
                {footerInfo.credit}
              </a>
            </p>
          </div>
          <div className="flex gap-3" />
        </div>
      </div>
      <div className="py-6 border-t border-border">
        <div className="container flex justify-between items-center flex-wrap gap-4 text-sm text-muted-foreground">
          <p>{footerInfo.copyright}</p>
          <a href="/terms" className="hover:text-white transition">
            {footerInfo.termsLink}
          </a>
        </div>
      </div>
    </footer>
  );
}
