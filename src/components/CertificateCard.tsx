import { useState, useRef, useCallback } from "react";
import { Download, Share2, Linkedin, Mail, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CertificateCardProps {
  name: string;
  frontImage: string;
  backImage: string;
  description: string;
  isSpread: boolean;
}

const CertificateCard = ({ name, frontImage, backImage, description, isSpread }: CertificateCardProps) => {
  const [flipState, setFlipState] = useState<0 | 1 | 2>(0); // 0=front, 1=back(right-to-left), 2=front(left-to-right)
  const [showFullView, setShowFullView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const isFlipped = flipState === 1;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isSpread) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  }, [isSpread]);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const handleClick = () => {
    if (!isSpread) return;
    // 0 -> 1 (flip to back, right-to-left), 1 -> 0 (flip back to front, left-to-right)
    setFlipState(prev => prev === 0 ? 1 : 0);
  };

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

  const actionBtnClass =
    "flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/25 hover:shadow-[0_0_12px_hsl(189_100%_50%/0.4)] hover:scale-110 transition-all duration-300";

  return (
    <>
      <div
        ref={cardRef}
        className="cert-card-container"
        style={{ perspective: "1000px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div
          style={{
            width: "260px",
            height: "360px",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease",
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${isFlipped ? 180 + tilt.y : tilt.y}deg)`,
            cursor: isSpread ? "pointer" : "default",
            filter: isFlipped
              ? "drop-shadow(0 20px 40px rgba(0,200,255,0.15))"
              : "drop-shadow(0 12px 24px rgba(0,0,0,0.35))",
          }}
        >
          {/* ===== FRONT SIDE (Title Card) ===== */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden border border-primary/20"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="relative w-full h-full">
              <img src={frontImage} alt={name} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          {/* ===== BACK SIDE (Actual Certificate) ===== */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden border border-primary/30"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-background via-background/98 to-background flex flex-col">
              {/* Full Certificate */}
              <div className="flex-1 p-3 overflow-hidden flex items-center justify-center">
                <img src={backImage} alt={name} className="w-full h-full object-contain rounded-lg" loading="lazy" />
              </div>

              {/* Action Panel */}
              <div
                className="p-3 pt-2 border-t border-primary/10"
                onClick={(e) => e.stopPropagation()}
                style={{
                  animation: isFlipped ? "slideUpFadeIn 0.35s 0.2s ease-out both" : "none",
                }}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <a
                    href={backImage}
                    download={`${name.replace(/\s+/g, "_")}_Certificate`}
                    className={actionBtnClass}
                    title="Download"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                  <button onClick={() => handleShare("twitter")} className={actionBtnClass} title="Share">
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => handleShare("linkedin")} className={actionBtnClass} title="LinkedIn">
                    <Linkedin className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => handleShare("whatsapp")} className={actionBtnClass} title="WhatsApp">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </button>
                  <button onClick={() => handleShare("email")} className={actionBtnClass} title="Email">
                    <Mail className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setShowFullView(true)}
                    className="flex items-center gap-1.5 px-3 h-9 rounded-xl border border-primary/40 text-primary text-xs font-medium hover:bg-primary/15 hover:shadow-[0_0_14px_hsl(189_100%_50%/0.3)] hover:scale-105 transition-all duration-300"
                    title="Full View"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FULL VIEW MODAL ===== */}
      <AnimatePresence>
        {showFullView && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowFullView(false)}
          >
            <motion.div
              className="absolute inset-0 bg-background/85 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] glass-strong rounded-2xl border border-primary/30 overflow-auto flex flex-col"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowFullView(false)}
                className="absolute top-4 right-4 z-10 p-2 glass-strong rounded-full border border-primary/30 text-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-6">
                <img src={backImage} alt={name} className="w-full h-auto max-h-[70vh] object-contain rounded-xl" />
              </div>
              <div className="p-6 pt-2 text-center bg-background/50">
                <h3 className="text-2xl font-bold text-foreground mb-1 glow-text">{name}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes slideUpFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default CertificateCard;
