import { useState } from "react";
import { Download, Share2, Linkedin, Mail, Maximize2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CertificateCardProps {
  name: string;
  image: string;
  description: string;
  style?: React.CSSProperties;
  className?: string;
}

const CertificateCard = ({ name, image, description, style, className = "" }: CertificateCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFullView, setShowFullView] = useState(false);
  const { toast } = useToast();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out my ${name} certificate!`;
    const links: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
      email: `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(`${text}\n${url}`)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    };
    window.open(links[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div
        className={`cert-card-container ${className}`}
        style={{
          perspective: "1200px",
          ...style,
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className="cert-card-inner"
          style={{
            width: "280px",
            height: "380px",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            cursor: "pointer",
          }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden border border-primary/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-background via-background/95 to-background">
              {/* Certificate Preview Image */}
              <div className="w-full h-[65%] overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 h-[65%] bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Title Area */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(189_100%_50%/0.8)]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">Certified</span>
                </div>
                <h4 className="text-base font-bold text-foreground leading-tight mb-1">{name}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden border border-primary/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-background via-background/98 to-background flex flex-col">
              {/* Full Certificate Image */}
              <div className="flex-1 p-3 overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              {/* Action Buttons Row */}
              <div
                className="p-3 pt-2 border-t border-primary/10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={image}
                    download={`${name.replace(/\s+/g, "_")}_Certificate`}
                    className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => handleShare("twitter")}
                    className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    title="Share"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleShare("linkedin")}
                    className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    title="WhatsApp"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleShare("email")}
                    className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setShowFullView(true)}
                    className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 hover:scale-110 transition-all duration-300"
                    title="Full View"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full View Modal */}
      {showFullView && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md"
          onClick={() => setShowFullView(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] glass-strong rounded-2xl border border-primary/30 overflow-auto flex flex-col animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFullView(false)}
              className="absolute top-4 right-4 z-10 p-2 glass-strong rounded-full border border-primary/30 text-foreground hover:text-primary transition-all"
            >
              <span className="text-xl leading-none">✕</span>
            </button>
            <div className="p-6">
              <img src={image} alt={name} className="w-full h-auto max-h-[70vh] object-contain rounded-xl" />
            </div>
            <div className="p-6 pt-2 text-center bg-background/50">
              <h3 className="text-2xl font-bold text-foreground mb-1 glow-text">{name}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
