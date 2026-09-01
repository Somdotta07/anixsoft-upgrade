#!/usr/bin/env python3
"""Generate phone-screen mockups for the two Anixsoft platform products."""
import os, math

OUT = "/home/claude/imgwork/screens/"
os.makedirs(OUT, exist_ok=True)
W, H, R = 390, 844, 44

CY = "#00BBD8"; VI = "#6F2B8F"; INK = "#100C22"


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def shell(body, bg):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" '
            f'height="{H}" font-family="Inter, system-ui, sans-serif">'
            f'<defs><clipPath id="s"><rect width="{W}" height="{H}" rx="{R}"/></clipPath></defs>'
            f'<g clip-path="url(#s)"><rect width="{W}" height="{H}" fill="{bg}"/>{body}</g>'
            f'<rect x=".75" y=".75" width="{W-1.5}" height="{H-1.5}" rx="{R}" fill="none" '
            f'stroke="rgba(0,0,0,.18)" stroke-width="1.5"/></svg>')


def bar(color="#151024", t="9:41"):
    return (f'<g fill="{color}" font-size="13" font-weight="600"><text x="26" y="44">{t}</text>'
            f'<g transform="translate(316,33)">'
            f'<rect x="0" y="3" width="15" height="9" rx="2" fill="none" stroke="{color}" stroke-width="1.4" opacity=".8"/>'
            f'<rect x="1.5" y="4.5" width="10" height="6" rx="1" fill="{color}"/>'
            f'<rect x="23" y="1" width="21" height="12" rx="3" fill="none" stroke="{color}" stroke-width="1.4" opacity=".8"/>'
            f'<rect x="25" y="3" width="13" height="8" rx="1.5" fill="{color}"/></g></g>'
            f'<rect x="150" y="14" width="90" height="6" rx="3" fill="{color}" opacity=".3"/>')


def T(x, y, s, size=14, w=400, fill="#151024", a="start", ls=0):
    return (f'<text x="{x}" y="{y}" font-size="{size}" font-weight="{w}" fill="{fill}" '
            f'text-anchor="{a}" letter-spacing="{ls}">{esc(s)}</text>')


def card(x, y, w, h, fill="#FFF", stroke="rgba(21,16,36,.10)", r=16):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" stroke="{stroke}"/>'


def chip(x, y, label, bg, fg, w=None, h=22, size=10.5):
    w = w or len(label) * 6.1 + 22
    return (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{h/2}" fill="{bg}"/>'
            + T(x + w / 2, y + h / 2 + 3.6, label, size, 700, fg, "middle"))


ICON = {
 "report": '<path d="M5 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h5M9 12h5"/>',
 "track":  '<circle cx="11" cy="11" r="8"/><path d="M11 6v5l3.5 2"/>',
 "bell":   '<path d="M5 9a6 6 0 0 1 12 0c0 5 2 6 2 6H3s2-1 2-6"/><path d="M9 19a2.5 2.5 0 0 0 5 0"/>',
 "user":   '<circle cx="11" cy="7" r="4"/><path d="M3 21a8 8 0 0 1 16 0"/>',
 "grid":   '<rect x="3" y="3" width="7" height="7"/><rect x="12" y="3" width="7" height="7"/><rect x="3" y="12" width="7" height="7"/><rect x="12" y="12" width="7" height="7"/>',
 "scan":   '<path d="M3 8V3h5M19 8V3h-5M3 14v5h5M19 14v5h-5"/><path d="M6 11h10"/>',
 "truck":  '<path d="M2 6h11v10H2z"/><path d="M13 9h4l3 3v4h-7z"/><circle cx="6" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>',
 "box":    '<path d="M3 7l8-4 8 4v10l-8 4-8-4z"/><path d="M3 7l8 4 8-4M11 11v10"/>',
 "inbox":  '<path d="M3 13h5l2 3h2l2-3h5"/><path d="M4 5h14l2 8v6H2v-6z"/>',
 "chart":  '<path d="M3 19V9M9 19V4M15 19v-7M21 19v-3"/>',
}


def nav(items, active, accent, bg="#FFF"):
    n = len(items); w = W / n
    o = [f'<rect x="0" y="{H-84}" width="{W}" height="84" fill="{bg}"/>',
         f'<rect x="0" y="{H-84}" width="{W}" height="1" fill="rgba(21,16,36,.10)"/>']
    for i, (lab, key) in enumerate(items):
        cx = w * i + w / 2
        c = accent if i == active else "#9691A8"
        o.append(f'<g transform="translate({cx-11},{H-66})" fill="none" stroke="{c}" '
                 f'stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">{ICON[key]}</g>')
        o.append(T(cx, H - 30, lab, 10.5, 600, c, "middle"))
    o.append(f'<rect x="{W/2-67}" y="{H-13}" width="134" height="5" rx="2.5" fill="rgba(21,16,36,.22)"/>')
    return "".join(o)


# ===================================================================
# CIVICLOOP 1 — citizen files a complaint
# ===================================================================
b = [bar(), f'<rect width="{W}" height="150" fill="{VI}"/>']
b += [T(26, 84, "WARD 12 · DUM DUM", 10.5, 700, "rgba(255,255,255,.66)", ls=1.5),
      T(26, 114, "Report an issue", 25, 800, "#FFF")]
b.append(T(26, 190, "CATEGORY", 10.5, 700, "#7C7590", ls=1.4))
cats = [("Water", True), ("Road", False), ("Waste", False), ("Power", False)]
x = 22
for lab, on in cats:
    w = len(lab) * 7.2 + 28
    b.append(f'<rect x="{x}" y="204" width="{w}" height="34" rx="17" fill="{VI if on else "#FFF"}" '
             f'stroke="{"none" if on else "rgba(21,16,36,.12)"}"/>')
    b.append(T(x + w / 2, 226, lab, 13, 700, "#FFF" if on else "#5C5470", "middle"))
    x += w + 8
b.append(card(20, 256, 350, 116))
b += [T(40, 284, "What is wrong?", 12, 700, "#7C7590"),
      T(40, 310, "Main pipeline leaking near the", 14.5, 400, "#2A2440"),
      T(40, 332, "school gate since Tuesday. Road", 14.5, 400, "#2A2440"),
      T(40, 354, "is flooded and slippery.", 14.5, 400, "#2A2440")]
b.append(T(26, 404, "ATTACHMENTS", 10.5, 700, "#7C7590", ls=1.4))
for i in range(3):
    x = 20 + i * 92
    b.append(f'<rect x="{x}" y="418" width="84" height="84" rx="12" fill="#DCD6E8"/>')
    b.append(f'<circle cx="{x+42}" cy="452" r="18" fill="#B9AECF"/>')
    if i == 2:
        b.append(f'<path d="M{x+36} 444 l16 8 -16 8z" fill="#FFF"/>')
        b.append(chip(x + 8, 476, "0:12", "rgba(21,16,36,.62)", "#FFF", 36, 18, 9))
b.append(f'<rect x="296" y="418" width="74" height="84" rx="12" fill="none" '
         f'stroke="{VI}" stroke-width="1.6" stroke-dasharray="5 4"/>')
b += [T(333, 455, "+", 24, 700, VI, "middle"), T(333, 476, "Add", 10.5, 700, VI, "middle")]
b.append(card(20, 520, 350, 62))
b.append(f'<g transform="translate(40,538)" fill="none" stroke="{CY}" stroke-width="1.8"><circle cx="9" cy="9" r="3"/><path d="M9 1a8 8 0 0 1 8 8c0 5-8 13-8 13S1 14 1 9a8 8 0 0 1 8-8z"/></g>')
b += [T(76, 546, "Location attached", 14, 700), T(76, 566, "22.64 N, 88.42 E · auto-detected", 11.5, 400, "#7C7590")]
b.append(f'<rect x="20" y="{H-176}" width="350" height="54" rx="14" fill="{VI}"/>')
b.append(T(195, H - 142, "Submit complaint", 15.5, 700, "#FFF", "middle"))
b.append(T(195, H - 104, "Officials are notified immediately", 11.5, 400, "#7C7590", "middle"))
b.append(nav([("Report", "report"), ("Track", "track"), ("Notices", "bell"), ("Me", "user")], 0, VI))
open(OUT + "civic-report.svg", "w").write(shell("".join(b), "#F4F2F8"))

# ===================================================================
# CIVICLOOP 2 — citizen tracks status
# ===================================================================
b = [bar("#FFF"), f'<rect width="{W}" height="176" fill="#241A38"/>']
b += [T(26, 84, "COMPLAINT CL-4821", 10.5, 700, "#B98FD6", ls=1.5),
      T(26, 116, "Pipeline leak", 25, 800, "#FFF"),
      chip(26, 132, "In progress", "rgba(0,187,216,.20)", CY, 92)]
b.append(T(364, 116, "3 days", 17, 800, "#FFF", "end"))
b.append(T(364, 134, "since raised", 10.5, 600, "#9A93B0", "end"))

steps = [("Submitted", "Tue 09:14", True), ("Acknowledged", "Tue 11:02", True),
         ("Assigned to engineer", "Wed 08:30", True),
         ("Work in progress", "Thu 14:20", "now"), ("Resolved", "Pending", False)]
b.append(T(26, 224, "PROGRESS", 10.5, 700, "#7C7590", ls=1.4))
for i, (lab, when, st) in enumerate(steps):
    y = 250 + i * 74
    if i < len(steps) - 1:
        b.append(f'<rect x="35" y="{y+18}" width="2" height="56" fill="{CY if st else "#D6D1E2"}"/>')
    if st is True:
        b.append(f'<circle cx="36" cy="{y+10}" r="11" fill="{CY}"/>')
        b.append(f'<path d="M30 {y+10} l4 4 8-8" fill="none" stroke="#FFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>')
    elif st == "now":
        b.append(f'<circle cx="36" cy="{y+10}" r="13" fill="rgba(0,187,216,.22)"/>')
        b.append(f'<circle cx="36" cy="{y+10}" r="7" fill="{CY}"/>')
    else:
        b.append(f'<circle cx="36" cy="{y+10}" r="11" fill="none" stroke="#D6D1E2" stroke-width="2"/>')
    b.append(T(62, y + 8, lab, 15, 700 if st else 500, "#2A2440" if st else "#9691A8"))
    b.append(T(62, y + 28, when, 12, 400, "#7C7590"))

b.append(card(20, 636, 350, 74))
b.append(f'<circle cx="52" cy="673" r="18" fill="{VI}"/>')
b.append(T(52, 678, "SD", 12.5, 700, "#FFF", "middle"))
b += [T(84, 668, "S. Das · Junior Engineer", 14, 700), T(84, 688, "Ward 12 water division", 11.5, 400, "#7C7590")]
b.append(f'<rect x="20" y="{H-114}" width="350" height="48" rx="13" fill="none" stroke="{VI}" stroke-width="1.6"/>')
b.append(T(195, H - 84, "Add an update", 14.5, 700, VI, "middle"))
b.append(nav([("Report", "report"), ("Track", "track"), ("Notices", "bell"), ("Me", "user")], 1, VI))
open(OUT + "civic-track.svg", "w").write(shell("".join(b), "#F4F2F8"))

# ===================================================================
# CIVICLOOP 3 — official console
# ===================================================================
b = [bar("#FFF"), f'<rect width="{W}" height="208" fill="#151024"/>']
b += [T(26, 84, "OFFICER CONSOLE", 10.5, 700, CY, ls=1.5),
      T(26, 116, "Ward 12 queue", 25, 800, "#FFF")]
for i, (v, l, c) in enumerate([("34", "Open", "#FFF"), ("8", "Overdue", "#FF6B6B"), ("4.2d", "Avg close", CY)]):
    x = 26 + i * 113
    b.append(f'<rect x="{x}" y="140" width="103" height="48" rx="12" fill="rgba(255,255,255,.07)"/>')
    b += [T(x + 51, 165, v, 18, 800, c, "middle"), T(x + 51, 180, l, 10, 600, "#9A93B0", "middle")]

b.append(T(26, 248, "PRIORITY QUEUE", 10.5, 700, "#7C7590", ls=1.4))
rows = [("Pipeline leak", "Nabapally · 3 photos", "Overdue 1d", "#C0392B", "#FDE8E8", True),
        ("Streetlight out", "Jessore Rd · 1 photo", "Due today", "#B8730C", "#FDF0DA", False),
        ("Garbage not lifted", "Block C · video", "2 days left", "#0A6E80", "#DDF4F8", True),
        ("Road pothole", "Station Rd · 2 photos", "4 days left", "#5C5470", "#EDEAF2", False)]
for i, (t, s, sla, fg, bg, media) in enumerate(rows):
    y = 264 + i * 90
    b.append(card(20, y, 350, 78))
    b.append(f'<rect x="20" y="{y}" width="4" height="78" rx="2" fill="{fg}"/>')
    b += [T(40, y + 28, t, 15, 700), T(40, y + 48, s, 11.5, 400, "#7C7590")]
    b.append(chip(40, y + 56, sla, bg, fg))
    if media:
        b.append(f'<rect x="316" y="{y+22}" width="34" height="34" rx="9" fill="#E6E1F0"/>')
        b.append(f'<circle cx="333" cy="{y+39}" r="7" fill="#B9AECF"/>')
b.append(nav([("Queue", "inbox"), ("Map", "grid"), ("Reports", "chart"), ("Me", "user")], 0, CY, "#FFF"))
open(OUT + "civic-console.svg", "w").write(shell("".join(b), "#F4F2F8"))

# ===================================================================
# OPSGRID 1 — admin dashboard
# ===================================================================
b = [bar("#FFF"), f'<rect width="{W}" height="196" fill="#0E2A38"/>']
b += [T(26, 84, "KOLKATA DEPOT", 10.5, 700, "#5FD8EE", ls=1.5),
      T(26, 116, "Operations", 25, 800, "#FFF")]
b.append(f'<circle cx="346" cy="100" r="19" fill="rgba(255,255,255,.14)"/>')
b.append(T(346, 105, "AD", 12.5, 700, "#FFF", "middle"))
for i, (v, l) in enumerate([("18/22", "On shift"), ("₹42.6L", "Stock value")]):
    x = 26 + i * 172
    b.append(f'<rect x="{x}" y="138" width="162" height="44" rx="11" fill="rgba(255,255,255,.09)"/>')
    b += [T(x + 14, 162, v, 17, 800, "#FFF"), T(x + 14, 176, l, 10, 600, "#8FB6C4")]

for i, (v, l, c) in enumerate([("47", "Open orders", CY), ("6", "Vehicles out", VI), ("3", "Low stock", "#C0392B")]):
    x = 20 + i * 118
    b.append(card(x, 224, 110, 88))
    b += [T(x + 55, 264, v, 26, 800, c, "middle"), T(x + 55, 286, l, 10.5, 600, "#7C7590", "middle")]

b.append(T(26, 348, "LAST 7 DAYS · DESPATCH", 10.5, 700, "#7C7590", ls=1.4))
b.append(card(20, 362, 350, 132))
vals = [38, 52, 44, 61, 57, 72, 66]
mx = max(vals)
for i, v in enumerate(vals):
    h = v / mx * 76
    x = 44 + i * 45
    b.append(f'<rect x="{x}" y="{452-h}" width="26" height="{h}" rx="5" fill="{CY if i==6 else "#D6EEF4"}"/>')
    b.append(T(x + 13, 472, "MTWTFSS"[i], 10, 600, "#9691A8", "middle"))

b.append(T(26, 530, "NEEDS ATTENTION", 10.5, 700, "#7C7590", ls=1.4))
al = [("Grout ivory 5kg", "Below reorder point · 4 left", "#C0392B", "#FDE8E8", "Low"),
      ("WB 21 AC 4417", "Loading 71% · departs 16:40", "#B8730C", "#FDF0DA", "Loading")]
for i, (t, s, fg, bg, lab) in enumerate(al):
    y = 546 + i * 84
    b.append(card(20, y, 350, 72))
    b += [T(40, y + 30, t, 14.5, 700), T(40, y + 50, s, 11.5, 400, "#7C7590")]
    b.append(chip(286, y + 25, lab, bg, fg, 66))
b.append(nav([("Home", "grid"), ("Stock", "box"), ("Fleet", "truck"), ("Team", "user")], 0, CY))
open(OUT + "ops-dashboard.svg", "w").write(shell("".join(b), "#F3F6F8"))

# ===================================================================
# OPSGRID 2 — QR stock scan
# ===================================================================
b = [bar("#FFF"), f'<rect width="{W}" height="{H}" fill="#0B1A22"/>']
# viewfinder
b.append(f'<rect x="0" y="70" width="{W}" height="380" fill="#16303C"/>')
for i in range(9):
    b.append(f'<rect x="{20+i*44}" y="70" width="1" height="380" fill="rgba(255,255,255,.04)"/>')
b.append(f'<rect x="118" y="180" width="154" height="154" rx="14" fill="rgba(0,187,216,.07)"/>')
for dx, dy, sx, sy in [(118, 180, 1, 1), (272, 180, -1, 1), (118, 334, 1, -1), (272, 334, -1, -1)]:
    b.append(f'<path d="M{dx} {dy+sy*38} L{dx} {dy+sy*12} Q{dx} {dy} {dx+sx*12} {dy} L{dx+sx*38} {dy}" '
             f'fill="none" stroke="{CY}" stroke-width="4" stroke-linecap="round"/>')
b.append(f'<rect x="128" y="253" width="134" height="2.5" rx="1.25" fill="{CY}" opacity=".9"/>')
b.append(T(195, 396, "Point at the bin label", 13, 600, "rgba(255,255,255,.66)", "middle"))
b.append(chip(146, 414, "TORCH", "rgba(255,255,255,.12)", "#FFF", 98, 26, 10))

b.append(card(20, 476, 350, 200, "#FFF"))
b.append(chip(40, 496, "SCANNED", "rgba(0,187,216,.16)", "#0A6E80", 78))
b += [T(40, 546, "Ceramic tile 60×60", 20, 800),
      T(40, 570, "SKU CT-6060-IV  ·  Bay A-12", 12.5, 400, "#7C7590")]
b.append(f'<rect x="40" y="586" width="310" height="1" fill="rgba(21,16,36,.10)"/>')
b += [T(40, 616, "System count", 12, 600, "#7C7590"), T(40, 640, "24 boxes", 17, 800)]
b += [T(210, 616, "Counted", 12, 600, "#7C7590")]
b.append(f'<rect x="210" y="624" width="140" height="38" rx="10" fill="#F3F6F8" stroke="rgba(21,16,36,.10)"/>')
b += [T(228, 649, "−", 19, 700, "#7C7590"), T(280, 649, "22", 17, 800, "#151024", "middle"),
      T(330, 649, "+", 19, 700, "#7C7590")]
b.append(chip(40, 656, "Variance −2 · flagged for review", "#FDF0DA", "#B8730C", 246, 24))

b.append(f'<rect x="20" y="{H-158}" width="350" height="52" rx="14" fill="{CY}"/>')
b.append(T(195, H - 125, "Confirm count", 15.5, 700, INK, "middle"))
b.append(nav([("Home", "grid"), ("Stock", "box"), ("Fleet", "truck"), ("Team", "user")], 1, CY))
open(OUT + "ops-scan.svg", "w").write(shell("".join(b), "#0B1A22"))

# ===================================================================
# OPSGRID 3 — vehicle loading
# ===================================================================
b = [bar("#FFF"), f'<rect width="{W}" height="164" fill="#241A38"/>']
b += [T(26, 84, "LOADING BAY · LIVE", 10.5, 700, "#B98FD6", ls=1.5),
      T(26, 116, "6 vehicles out", 25, 800, "#FFF")]
b.append(chip(26, 132, "2 delayed", "rgba(255,107,107,.20)", "#FF9C9C", 82))

veh = [("WB 21 AC 4417", "Howrah route · S. Mondal", 71, "Loading", CY, "#DDF4F8", "#0A6E80"),
       ("WB 19 BQ 2210", "Salt Lake · R. Ghosh", 100, "Departed 15:10", VI, "#EDE6FB", "#5B2478"),
       ("WB 21 CD 8891", "Barasat · A. Roy", 34, "Delayed 25m", "#C0392B", "#FDE8E8", "#C0392B")]
for i, (reg, sub, pct, st, ring, cbg, cfg) in enumerate(veh):
    y = 196 + i * 148
    b.append(card(20, y, 350, 132))
    # progress ring
    cx, cy2, r = 74, y + 66, 34
    b.append(f'<circle cx="{cx}" cy="{cy2}" r="{r}" fill="none" stroke="#EAE6F2" stroke-width="8"/>')
    circ = 2 * math.pi * r
    b.append(f'<circle cx="{cx}" cy="{cy2}" r="{r}" fill="none" stroke="{ring}" stroke-width="8" '
             f'stroke-linecap="round" stroke-dasharray="{circ*pct/100:.1f} {circ:.1f}" '
             f'transform="rotate(-90 {cx} {cy2})"/>')
    b.append(T(cx, cy2 + 6, f"{pct}%", 15, 800, "#151024", "middle"))
    b += [T(128, y + 44, reg, 16, 800), T(128, y + 66, sub, 12, 400, "#7C7590")]
    b.append(chip(128, y + 80, st, cbg, cfg))
    b.append(f'<rect x="128" y="{y+112}" width="216" height="6" rx="3" fill="#EAE6F2"/>')
    b.append(f'<rect x="128" y="{y+112}" width="{216*pct/100:.0f}" height="6" rx="3" fill="{ring}"/>')

b.append(nav([("Home", "grid"), ("Stock", "box"), ("Fleet", "truck"), ("Team", "user")], 2, VI))
open(OUT + "ops-fleet.svg", "w").write(shell("".join(b), "#F4F2F8"))

print("generated:")
for f in sorted(os.listdir(OUT)):
    print("  ", f, os.path.getsize(OUT + f), "bytes")
