"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* ---------- deterministic pseudo-random from the typed input ---------- */
function seedFrom(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function makeRng(seed: number) {
  let s = seed || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5;  s >>>= 0;
    return s / 4294967296;
  };
}

const PALETTES = [
  { bg: "#FFFFFF", ink: "#131A24", accent: "#E4572E" },
  { bg: "#0E1116", ink: "#F2F4F7", accent: "#6BE3B0" },
  { bg: "#FBF7F0", ink: "#2A2118", accent: "#B4632B" },
  { bg: "#F2F5FA", ink: "#12233F", accent: "#2D6BE4" },
  { bg: "#1A1224", ink: "#F5EEFB", accent: "#C77DFF" },
  { bg: "#FFFDF5", ink: "#1E2410", accent: "#5E8C1E" },
  { bg: "#101820", ink: "#EAF0F4", accent: "#F0A03C" },
  { bg: "#FDF2F5", ink: "#2B1620", accent: "#C93F6C" },
];

/* Six layout archetypes so no two thumbnails read the same */
export function Preview({ name, seed }: { name: string; seed: number }) {
  const { p, arch } = useMemo(() => {
    const rand = makeRng(seed);
    return {
      p: PALETTES[Math.floor(rand() * PALETTES.length)],
      arch: Math.floor(rand() * 6),
    };
  }, [seed]);

  const label = (name || "Your brand").slice(0, 16);

  const root: React.CSSProperties = {
    background: p.bg,
    height: "100%",
    padding: 6,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  };
  const word = (w: number | string, h: number, o = 1): React.CSSProperties => ({
    width: w, height: h, background: p.ink, opacity: o, borderRadius: 1,
  });
  const acc = (w: number, h: number): React.CSSProperties => ({
    width: w, height: h, background: p.accent, borderRadius: 1,
  });
  const title: React.CSSProperties = {
    color: p.ink, fontSize: 6.5, fontWeight: 800, lineHeight: 1.05,
    fontFamily: "'Bricolage Grotesque',sans-serif", letterSpacing: "-.03em",
    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
  };

  const bar = (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={acc(9, 3)} />
      <div style={{ display: "flex", gap: 2.5 }}>
        {[0, 1, 2].map((i) => <div key={i} style={word(6, 2, 0.42)} />)}
      </div>
    </div>
  );

  if (arch === 0)
    return (
      <div style={root}>
        {bar}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, textAlign: "center" }}>
          <div style={{ ...title, fontSize: 7.5 }}>{label}</div>
          <div style={word(34, 2, 0.35)} />
          <div style={{ ...acc(20, 6), borderRadius: 2, marginTop: 2 }} />
        </div>
        <div style={{ display: "flex", gap: 3 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ flex: 1, height: 12, background: p.ink, opacity: 0.09, borderRadius: 1 }} />
          ))}
        </div>
      </div>
    );

  if (arch === 1)
    return (
      <div style={root}>
        {bar}
        <div style={{ flex: 1, display: "flex", gap: 5 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 3 }}>
            <div style={title}>{label}</div>
            <div style={word("90%", 1.8, 0.3)} />
            <div style={word("70%", 1.8, 0.3)} />
            <div style={{ ...acc(16, 5), marginTop: 3, borderRadius: 2 }} />
          </div>
          <div style={{ flex: 1, background: p.accent, opacity: 0.82, borderRadius: 2 }} />
        </div>
      </div>
    );

  if (arch === 2)
    return (
      <div style={root}>
        {bar}
        <div style={{ ...title, marginTop: 2 }}>{label}</div>
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ background: i % 3 === 0 ? p.accent : p.ink, opacity: i % 3 === 0 ? 0.8 : 0.13, borderRadius: 1.5 }} />
          ))}
        </div>
      </div>
    );

  if (arch === 3)
    return (
      <div style={{ ...root, flexDirection: "row", padding: 0 }}>
        <div style={{ width: "26%", background: p.ink, opacity: 0.93, padding: 5, display: "flex", flexDirection: "column", gap: 3.5 }}>
          <div style={acc(8, 3)} />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ width: "80%", height: 2, background: p.bg, opacity: 0.5, borderRadius: 1 }} />
          ))}
        </div>
        <div style={{ flex: 1, padding: 6, display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={title}>{label}</div>
          <div style={{ display: "flex", gap: 3 }}>
            {[0, 1].map((i) => (
              <div key={i} style={{ flex: 1, height: 13, background: p.ink, opacity: 0.08, borderRadius: 1.5 }} />
            ))}
          </div>
          <div style={{ flex: 1, background: p.accent, opacity: 0.16, borderRadius: 1.5 }} />
        </div>
      </div>
    );

  if (arch === 4)
    return (
      <div style={root}>
        <div style={{ ...title, fontSize: 9, borderBottom: `1px solid ${p.ink}22`, paddingBottom: 3 }}>{label}</div>
        <div style={{ flex: 1, display: "flex", gap: 4 }}>
          <div style={{ flex: 1.4, display: "flex", flexDirection: "column", gap: 2 }}>
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} style={word(i === 6 ? "60%" : "100%", 1.6, 0.26)} />
            ))}
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
            <div style={{ flex: 1, background: p.accent, opacity: 0.75, borderRadius: 1.5 }} />
            <div style={word("100%", 1.6, 0.26)} />
          </div>
        </div>
      </div>
    );

  return (
    <div style={{ ...root, background: p.ink, padding: 0 }}>
      <div style={{ flex: 1, padding: 7, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={acc(10, 3)} />
        <div>
          <div style={{ ...title, color: p.bg, fontSize: 8.5 }}>{label}</div>
          <div style={{ width: "55%", height: 1.8, background: p.bg, opacity: 0.38, borderRadius: 1, marginTop: 3 }} />
        </div>
      </div>
      <div style={{ height: 14, background: p.accent }} />
    </div>
  );
}

const STAGES = [
  "Parsing brief",
  "Synthesising copy",
  "Selecting layouts",
  "Generating assets",
  "Compiling builds",
  "Ready",
];

export default function Swarm({ count = 12 }: { count?: number }) {
  const [biz, setBiz] = useState("");
  const [what, setWhat] = useState("");
  const [phase, setPhase] = useState<"idle" | "running" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const [batch, setBatch] = useState<{ name: string; seeds: number[] } | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const run = () => {
    const name = biz.trim() || "Nina's Arts";
    const desc = what.trim() || "handmade ceramics studio";
    setPhase("running");
    setProgress(0);
    setBatch(null);
    timers.current.forEach(clearTimeout);
    timers.current = [];

    STAGES.forEach((_, i) => {
      timers.current.push(
        setTimeout(() => {
          setStage(i);
          setProgress(Math.round(((i + 1) / STAGES.length) * 100));
        }, i * 420)
      );
    });

    timers.current.push(
      setTimeout(() => {
        const base = seedFrom(name + "|" + desc);
        setBatch({
          name,
          seeds: Array.from({ length: count }, (_, i) => base + i * 2654435761),
        });
        setPhase("done");
      }, STAGES.length * 420)
    );
  };

  const shown =
    batch ?? {
      name: "Nina's Arts",
      seeds: Array.from(
        { length: count },
        (_, i) => seedFrom("Nina's Arts|ceramics") + i * 2654435761
      ),
    };

  return (
    <>
      <div className="console">
        <div className="console-bar">
          <span className={"dot" + (phase === "running" ? " live" : "")} />
          <span className="dot" />
          <span className="dot" />
          <span className="mono" style={{ marginLeft: 8 }}>
            anix-forge · batch runner
          </span>
        </div>

        <div className="console-body">
          <div className="field">
            <label className="mono" htmlFor="biz">Business name</label>
            <input
              id="biz" value={biz}
              onChange={(e) => setBiz(e.target.value)}
              placeholder="Nina's Arts"
              onKeyDown={(e) => e.key === "Enter" && run()}
            />
          </div>
          <div className="field">
            <label className="mono" htmlFor="what">What you do</label>
            <input
              id="what" value={what}
              onChange={(e) => setWhat(e.target.value)}
              placeholder="handmade ceramics studio in Lisbon"
              onKeyDown={(e) => e.key === "Enter" && run()}
            />
          </div>
          <button className="gen-btn" onClick={run} disabled={phase === "running"}>
            {phase === "running" ? "Generating…" : `Generate ${count} sites`}
          </button>
        </div>

        {phase !== "idle" && (
          <div className="status" aria-live="polite">
            <span className="mono">{STAGES[stage]}</span>
            <span className="bar"><i style={{ width: progress + "%" }} /></span>
            <span className="mono">{progress}%</span>
          </div>
        )}
      </div>

      <div className="swarm">
        {shown.seeds.map((s, i) => (
          <div key={`${s}-${i}`} className="tile" style={{ animationDelay: `${i * 55}ms` }}>
            <div className="tile-chrome"><i /><i /><i /></div>
            <div style={{ height: "calc(100% - 11px)" }}>
              <Preview name={shown.name} seed={s} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
