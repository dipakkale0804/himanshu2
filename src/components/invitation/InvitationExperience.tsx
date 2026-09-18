import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Music, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import himaniPhoto from "@/assets/himani.jpg";
import musicFile from "@/assets/tapasvi.mp3";
import templeImage from "@/assets/jain-temple.jpg";
import corridorImage from "@/assets/temple-corridor.jpg";

const sceneNames = [
  "आरंभ",
  "तपस्वी",
  "आठ दीप",
  "साधना",
  "जयकार",
  "पचकावणी",
  "विवरण",
  "आशीर्वाद",
  "आमंत्रण",
  "मंगल",
];

function Bell({ className = "" }: { className?: string }) {
  return (
    <div className={`bell ${className}`} aria-hidden="true">
      <span className="bell-chain" />
      <span className="bell-body" />
      <span className="bell-clapper" />
    </div>
  );
}

export function TempleDecor({ corridor = false }: { corridor?: boolean }) {
  return (
    <div className="temple-decor" aria-hidden="true">
      <img
        src={corridor ? corridorImage : templeImage}
        alt=""
        width={1024}
        height={1536}
        loading={corridor ? "lazy" : "eager"}
      />
      <div className="temple-vignette" />
      <div className="temple-rays" />
    </div>
  );
}

export function FloatingPetals({ count = 12 }: { count?: number }) {
  return (
    <div className="petal-field" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <i key={i} className="petal" style={{ "--i": i } as CSSProperties} />
      ))}
    </div>
  );
}

export function GoldenParticles() {
  return (
    <div className="particle-field" aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => (
        <i key={i} style={{ "--i": i } as CSSProperties} />
      ))}
    </div>
  );
}

function ArchFrame({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <div className={`arch-frame ${className}`}>
      <div className="arch-inner">{children}</div>
    </div>
  );
}

function Lotus({ className = "" }: { className?: string }) {
  return (
    <span className={`lotus ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

function Scene({
  id,
  index,
  className = "",
  children,
}: {
  id: string;
  index: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`invitation-scene scene-${index} ${className}`}
      data-scene={index}
      aria-label={`दृश्य ${index + 1}: ${sceneNames[index]}`}
    >
      <div className="scene-stage">{children}</div>
    </section>
  );
}

export function OpeningScene({ opened, onOpen }: { opened: boolean; onOpen: () => void }) {
  return (
    <Scene id="opening" index={0} className="opening-scene">
      <div className="opening-glow" aria-hidden="true" />
      <div className="line-temple" aria-hidden="true">
        <span className="spire s1" />
        <span className="spire s2" />
        <span className="spire s3" />
        <span className="temple-line-base" />
      </div>
      <div className="opening-bells">
        <Bell />
        <Bell className="bell-main" />
        <Bell />
      </div>
      <div className="opening-copy">
        <p className="sacred-kicker">॥ श्री जिनेन्द्राय नमः ॥</p>
        <p className="affection">स्मरणे</p>
        <h1>जय जिनेंद्र</h1>
        <div className="opening-divider" aria-hidden="true">
          <span className="diamond">◆</span>
        </div>
        <p className="sacred-line">अहिंसा परमो धर्मः</p>
      </div>
      {!opened && (
        <Button variant="invitation" size="lg" className="open-invitation" onClick={onOpen}>
          <Music aria-hidden="true" />
          आमंत्रण खोलें
        </Button>
      )}
      <div className={`temple-doors ${opened ? "doors-open" : ""}`} aria-hidden="true">
        <div className="door door-left" />
        <div className="door door-right" />
      </div>
      {opened && (
        <div className="scroll-cue">
          <span>आगे बढ़ें</span>
          <ChevronDown />
        </div>
      )}
    </Scene>
  );
}

export function HeroPhotoScene() {
  return (
    <Scene id="himani" index={1} className="hero-photo-scene">
      <TempleDecor />
      <FloatingPetals count={10} />
      <div className="hero-halo" aria-hidden="true" />
      <ArchFrame className="photo-arch">
        <div className="photo-mask">
          <img src={himaniPhoto} alt="कु. हिमानी शितल रविंद्र छाजेड" width={701} height={801} />
        </div>
      </ArchFrame>
      <div className="hero-copy scene-copy">
        <p className="eyebrow">अत्यंत हर्ष के साथ सूचित करते हैं कि,</p>
        <p className="hero-label">हमारी लाडली</p>
        <h2>कु. हिमानी शितल रविंद्र छाजेड</h2>
        <p className="event-callout">
          <span>इनकी</span>
          <strong>८ उपवास</strong>
          <span>की पचकावणी</span>
        </p>
      </div>
    </Scene>
  );
}

export function EightLights() {
  return (
    <div className="eight-lights" aria-label="आठ तप दीप">
      {Array.from({ length: 8 }, (_, i) => (
        <div className="light-node" key={i} style={{ "--i": i } as CSSProperties}>
          <span>{["१", "२", "३", "४", "५", "६", "७", "८"][i]}</span>
        </div>
      ))}
      <div className="mandala-core">
        <span>८</span>
      </div>
    </div>
  );
}

export function TapasyaScene() {
  return (
    <Scene id="eight-upvas" index={2} className="eight-scene">
      <TempleDecor />
      <div className="giant-eight" aria-hidden="true">
        ८
      </div>
      <EightLights />
      <div className="eight-copy scene-copy">
        <h2>८ उपवास</h2>
        <p>
          आत्मशुद्धि <i>•</i> संयम <i>•</i> साधना
        </p>
      </div>
    </Scene>
  );
}

export function TapasyaSlogans() {
  const lines = [
    "एक संकल्प...",
    "एक साधना...",
    "एक पावन तप...",
    "हर दिन एक संकल्प,",
    "हर क्षण एक साधना।",
    "तप की ज्योत जली,",
    "आत्मा की राह खिली।",
    "८ उपवास की साधना,",
    "अद्भुत तप की अनुमोदना।",
  ];
  return (
    <Scene id="sadhana" index={3} className="slogans-scene">
      <div className="arch-tunnel" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} />
        ))}
      </div>
      <Lotus />
      <div className="slogan-flow scene-copy">
        {lines.map((line, i) => (
          <p key={line} style={{ "--i": i } as CSSProperties}>
            {line}
          </p>
        ))}
      </div>
      <p className="slogan-finale">
        आठ दिनों की साधना पूर्ण...
        <br />
        <strong>अब मंगल पचकावणी का शुभ अवसर।</strong>
      </p>
    </Scene>
  );
}

export function JaiJaykaarScene() {
  return (
    <Scene id="jai-jaykaar" index={4} className="jaykaar-scene">
      <TempleDecor />
      <GoldenParticles />
      <FloatingPetals count={14} />
      <div className="ray-burst" aria-hidden="true" />
      <div className="jaykaar-copy scene-copy">
        <span className="jai-left">जय...</span>
        <span className="jai-right">जय...</span>
        <p className="jai-center">जय जयकार...</p>
        <h2>तप की जय जयकार!</h2>
        <p>तपस्वी को बारंबar नमन!</p>
      </div>
      <div className="celebration-bells">
        <Bell />
        <Bell />
      </div>
    </Scene>
  );
}

export function PachakavaniReveal() {
  return (
    <Scene id="pachakavani" index={5} className="corridor-scene">
      <TempleDecor corridor />
      <div className="corridor-light" aria-hidden="true" />
      <div className="corridor-door" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="corridor-copy scene-copy">
        <p>आठ दिनों की पावन साधना के पश्चात</p>
        <h2>पचकावणी</h2>
        <Lotus />
      </div>
      <Bell className="corridor-bell" />
    </Scene>
  );
}

export function EventDetails() {
  const items = [
    {
      label: "दिन",
      value: (
        <>
          शनिवार<small>दिनांक १९/०९/२०२६</small>
        </>
      ),
    },
    { label: "समय", value: <>प्रातः ९:०० बजे</> },
    {
      label: "स्थान",
      value: (
        <>
          आनंद भवन<small>कोपरगांव</small>
        </>
      ),
    },
  ];
  return (
    <Scene id="details" index={6} className="details-scene">
      <TempleDecor />
      <div className="details-heading scene-copy">
        <p>मंगल पचकावणी</p>
        <h2>शुभ अवसर</h2>
      </div>
      <div className="detail-cards">
        {items.map((item, i) => (
          <article key={item.label} style={{ "--i": i } as CSSProperties}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
      <div className="diyas" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
    </Scene>
  );
}

export function SadhvijiScene() {
  return (
    <Scene id="sadhviji" index={7} className="sadhviji-scene">
      <TempleDecor corridor />
      <div className="quiet-veil" aria-hidden="true" />
      <ArchFrame className="blessing-frame">
        <div className="scene-copy blessing-copy">
          <Lotus />
          <p>सरलमना, मितभाषी</p>
          <h2>प. पूज्य पवित्र दर्शनाजी म.सा.</h2>
          <p>आदि ठाणा ३</p>
          <span>के मुखारविंद से</span>
          <strong>पचकावणी संपन्न होने जा रही है।</strong>
        </div>
      </ArchFrame>
    </Scene>
  );
}

export function InvitationScene() {
  return (
    <Scene id="invitation" index={8} className="invitation-copy-scene">
      <div className="curtain curtain-left" aria-hidden="true" />
      <div className="curtain curtain-right" aria-hidden="true" />
      <GoldenParticles />
      <div className="invitation-card-container">
        <div className="ornament-top">
          <Lotus />
        </div>
        <div className="formal-invite scene-copy">
          <p className="invite-kicker">सदर पचकावणी के शुभ अवसर पर</p>
          <p className="invite-family">आप श्री सहपरिवार</p>
          <h2>सादर आमंत्रित</h2>
          <strong className="invite-salutation">🙏 जय जिनेंद्र 🙏</strong>
          <span className="invite-waiting">आपकी प्रतीक्षा में</span>
          <h3 className="invite-host">छाजेड परिवार, कोपरगांव</h3>
        </div>
      </div>
    </Scene>
  );
}

export function FinalScene() {
  return (
    <Scene id="finale" index={9} className="final-scene">
      <TempleDecor />
      <FloatingPetals count={16} />
      <GoldenParticles />
      <div className="final-lights" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <i key={i} style={{ "--i": i } as CSSProperties} />
        ))}
      </div>
      <div className="final-card scene-copy">
        <div className="final-image-container">
          <ArchFrame className="final-arch">
            <img
              src={himaniPhoto}
              alt="तपस्वी कु. हिमानी शितल रविंद्र छाजेड"
              width={701}
              height={801}
            />
          </ArchFrame>
        </div>
        <div className="final-copy">
          <p className="sacred-kicker">॥ श्री जिनेन्द्राय नमः ॥</p>
          <h2>८ उपवास पचकावणी</h2>
          <h3>कु. हिमानी शितल रविंद्र छाजेड</h3>
          <div className="final-details">
            <span>शनिवार • १९/०९/२०२६</span>
            <span className="detail-dot">•</span>
            <span>प्रातः ९:०० बजे</span>
            <span className="detail-dot">•</span>
            <span>आनंद भवन, कोपरगांव</span>
          </div>
          <p className="final-jai">
            जय तप <i>•</i> जय तपस्वी <i>•</i> जय जिनेंद्र
          </p>
          <div className="final-host">
            <span>आपकी प्रतीक्षा में</span>
            <strong>छाजेड परिवार, कोपरगांव</strong>
          </div>
          <blockquote className="final-slogan">
            तप की जय जयकार,
            <br />
            तपस्वी को बारंबार नमन।
          </blockquote>
        </div>
      </div>
    </Scene>
  );
}

export function SceneProgress({ active }: { active: number }) {
  return (
    <nav className="scene-progress" aria-label="आमंत्रण दृश्य">
      {sceneNames.map((name, i) => (
        <a
          key={name}
          href={`#${["opening", "himani", "eight-upvas", "sadhana", "jai-jaykaar", "pachakavani", "details", "sadhviji", "invitation", "finale"][i]}`}
          className={active === i ? "active" : ""}
          aria-label={`${i + 1}. ${name}`}
        >
          <span>{String(i + 1).padStart(2, "0")}</span>
        </a>
      ))}
    </nav>
  );
}

export function MusicController({
  audioRef,
  playing,
  onToggle,
}: {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  playing: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <audio ref={audioRef} src={musicFile} loop preload="auto" playsInline />
      <Button
        variant="floating"
        size="icon"
        className={`music-control ${playing ? "music-playing" : ""}`}
        onClick={onToggle}
        aria-label={playing ? "संगीत बंद करें" : "संगीत चलाएं"}
      >
        {playing ? <Volume2 /> : <VolumeX />}
      </Button>
    </>
  );
}

export default function InvitationExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const wasPlayingBeforeHideRef = useRef(false);
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [activeScene, setActiveScene] = useState(0);

  const playMusic = (fadeDuration = 1.5) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.volume = 0;
      void audio
        .play()
        .then(() => {
          gsap.to(audio, { volume: 0.7, duration: fadeDuration });
          setPlaying(true);
        })
        .catch(() => {
          setPlaying(false);
        });
    }
  };

  const pauseMusic = (fadeDuration = 0.5) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      gsap.to(audio, {
        volume: 0,
        duration: fadeDuration,
        onComplete: () => {
          audio.pause();
          setPlaying(false);
        },
      });
    }
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      playMusic(1.5);
    } else {
      pauseMusic(0.6);
    }
  };

  const openInvitation = () => {
    setOpened(true);
    playMusic(2.0);
  };

  // Start music on first click anywhere (links, buttons, inside or outside)
  useEffect(() => {
    const handleFirstInteraction = () => {
      const audio = audioRef.current;
      if (audio && audio.paused && !document.hidden) {
        playMusic(1.8);
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  // Stop music when tab is minimized, switched, cut, or closed
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        // Tab minimized or hidden -> stop immediately
        if (!audio.paused) {
          wasPlayingBeforeHideRef.current = true;
          audio.pause();
          setPlaying(false);
        }
      } else {
        // Tab restored to foreground -> resume if it was playing
        if (wasPlayingBeforeHideRef.current) {
          wasPlayingBeforeHideRef.current = false;
          void audio
            .play()
            .then(() => {
              audio.volume = 0.7;
              setPlaying(true);
            })
            .catch(() => {});
        }
      }
    };

    const handleStop = () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        setPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handleStop);
    window.addEventListener("beforeunload", handleStop);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handleStop);
      window.removeEventListener("beforeunload", handleStop);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(".opening-glow", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4 })
        .fromTo(
          ".line-temple",
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 1.5 },
          "-=.8",
        )
        .fromTo(
          ".opening-bells .bell",
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.16, duration: 0.8 },
          "-=.7",
        )
        .fromTo(
          ".opening-copy > *",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.16, duration: 0.7 },
          "-=.4",
        )
        .fromTo(".open-invitation", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 });

      const directions = [
        "up",
        "left",
        "zoom",
        "light",
        "right",
        "door",
        "cards",
        "curtain",
        "out",
      ];
      gsap.utils.toArray<HTMLElement>(".invitation-scene").forEach((scene, i) => {
        if (i === 0) return;
        const stage = scene.querySelector(".scene-stage");
        const from =
          directions[i - 1] === "left"
            ? { xPercent: 18 }
            : directions[i - 1] === "right"
              ? { xPercent: -18 }
              : directions[i - 1] === "zoom"
                ? { scale: 1.13 }
                : { yPercent: 10 };
        gsap.fromTo(
          stage,
          { ...from, opacity: 0.35 },
          {
            xPercent: 0,
            yPercent: 0,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: scene, start: "top 80%", end: "top 15%", scrub: 0.65 },
          },
        );
      });
      gsap.fromTo(
        ".photo-arch",
        { y: 35, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".hero-photo-scene",
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".photo-mask img",
        { scale: 1.15 },
        {
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero-photo-scene",
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.to(".photo-arch", {
        yPercent: -4,
        scrollTrigger: {
          trigger: ".hero-photo-scene",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(".hero-photo-scene .temple-decor img", {
        yPercent: 8,
        scale: 1.08,
        scrollTrigger: {
          trigger: ".hero-photo-scene",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.fromTo(
        ".light-node",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.13,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".eight-scene",
            start: "top 55%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".detail-cards article",
        {
          xPercent: (i) => (i === 1 ? 0 : i === 0 ? -80 : 80),
          yPercent: (i) => (i === 1 ? 50 : 0),
          opacity: 0,
        },
        {
          xPercent: 0,
          yPercent: 0,
          opacity: 1,
          stagger: 0.18,
          scrollTrigger: {
            trigger: ".details-scene",
            start: "top 55%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".formal-invite > *",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.18,
          scrollTrigger: {
            trigger: ".invitation-copy-scene",
            start: "top 55%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".final-arch",
        { scale: 0.88, opacity: 0, y: 25 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".final-scene",
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".final-arch img",
        { scale: 1.18 },
        {
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".final-scene",
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".final-copy > *",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".final-scene",
            start: "top 55%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, root);
    return () => context.revert();
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".invitation-scene"));
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.55)
            setActiveScene(Number((entry.target as HTMLElement).dataset["scene"] ?? 0));
        }),
      { threshold: [0.55] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`invitation-experience ${opened ? "is-open" : "is-closed"}`} ref={rootRef}>
      <SceneProgress active={activeScene} />
      <MusicController audioRef={audioRef} playing={playing} onToggle={toggleMusic} />
      <OpeningScene opened={opened} onOpen={openInvitation} />
      <HeroPhotoScene />
      <TapasyaScene />
      <TapasyaSlogans />
      <JaiJaykaarScene />
      <PachakavaniReveal />
      <EventDetails />
      <SadhvijiScene />
      <InvitationScene />
      <FinalScene />
    </div>
  );
}
