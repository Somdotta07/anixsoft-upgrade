#!/usr/bin/env python3
"""Rebuild the Anixsoft crescent mark as clean vector geometry.

Each crescent is an arc of constant outer radius R about centre (cx, cy),
with the inner edge cut in by a thickness that peaks at the leftmost point
and tapers to zero at both tips.  Geometry measured from the original PNG.
"""
import math

# (cx, cy, R, thickness, start_deg, end_deg, colour)
ARCS = [
    (64.5, 41.0, 34.5,  9.0,  84, 296, "#6F2B8F"),   # purple  - outermost
    (78.5, 41.5, 28.0,  7.0,  91, 289, "#7FD3F2"),   # sky blue
    (93.0, 42.0, 21.0,  5.0,  97, 283, "#D6B6E8"),   # lilac
    (107.0, 42.0, 15.0,  4.6, 101, 279, "#00BBD8"),  # cyan    - innermost
]

STEPS = 40


def taper(t):
    """0 at both ends with long thin tails and a narrow belly, peaking
    slightly above centre - matches the swept 'comet' feel of the original."""
    t = t ** 0.72                      # skew the peak a little towards the top
    return math.sin(math.pi * t) ** 2.35


def crescent(cx, cy, R, tmax, a0, a1, steps=STEPS):
    outer, inner = [], []
    for i in range(steps + 1):
        t = i / steps
        ang = math.radians(a0 + (a1 - a0) * t)
        outer.append((cx + R * math.cos(ang), cy + R * math.sin(ang)))
        ri = R - tmax * taper(t)
        inner.append((cx + ri * math.cos(ang), cy + ri * math.sin(ang)))
    return outer, inner[::-1]


def catmull_to_bezier(pts):
    """Smooth polyline -> cubic bezier path data (Catmull-Rom conversion)."""
    d = "M%.2f,%.2f" % pts[0]
    n = len(pts)
    for i in range(n - 1):
        p0 = pts[i - 1] if i > 0 else pts[i]
        p1, p2 = pts[i], pts[i + 1]
        p3 = pts[i + 2] if i + 2 < n else pts[i + 1]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d += "C%.2f,%.2f %.2f,%.2f %.2f,%.2f" % (c1[0], c1[1], c2[0], c2[1], p2[0], p2[1])
    return d


paths = []
for cx, cy, R, tmax, a0, a1, col in ARCS:
    o, i = crescent(cx, cy, R, tmax, a0, a1)
    d = catmull_to_bezier(o + i) + "Z"
    paths.append((col, d))

# tight viewBox around the drawn geometry
xs, ys = [], []
for cx, cy, R, tmax, a0, a1, col in ARCS:
    for a in range(int(a0), int(a1) + 1):
        r = math.radians(a)
        xs += [cx + R * math.cos(r)]
        ys += [cy + R * math.sin(r)]
PAD = 1.5
x0, x1 = min(xs) - PAD, max(xs) + PAD
y0, y1 = min(ys) - PAD, max(ys) + PAD
w, h = x1 - x0, y1 - y0

svg = [
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.1f} {h:.1f}" '
    f'role="img" aria-label="Anixsoft">',
    f'<g transform="translate({-x0:.2f},{-y0:.2f})">',
]
for col, d in paths:
    svg.append(f'<path fill="{col}" d="{d}"/>')
svg += ["</g>", "</svg>"]

open("/home/claude/anixsoft/public/logo-mark.svg", "w").write("".join(svg))
print(f"viewBox {w:.1f} x {h:.1f}")
import os
print("bytes", os.path.getsize("/home/claude/anixsoft/public/logo-mark.svg"))
