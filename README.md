# AC Ton Calculator

A simple web tool to calculate the right AC capacity (in tons) for your room based on Indian climate conditions.

## Live Demo

> Add your Netlify / GitHub Pages URL here once deployed.

## Repository

[github.com/Manikantad6/ac-ton-calculator](https://github.com/Manikantad6/ac-ton-calculator)

## Features

- Enter room dimensions (length, width, height)
- Select sunlight exposure, room type, floor level, and climate zone
- Tuned for Indian conditions — accounts for higher heat load, humidity, and hot/dry zones
- Instant recommendation snapped to real AC sizes (0.75, 1.0, 1.5, 2.0, 2.5, 3.0 ton)
- Affiliate product links section for monetization

## How It Works

| Adjusted Area (sq ft) | Recommended Capacity |
|-----------------------|----------------------|
| Up to 80              | 0.75 Ton             |
| 81 – 120              | 1.0 Ton              |
| 121 – 180             | 1.5 Ton              |
| 181 – 240             | 2.0 Ton              |
| 241 – 320             | 2.5 Ton              |
| 320+                  | 3.0 Ton              |

Adjustments applied on top of base area:
- Ceiling height (relative to standard 10ft)
- Sunlight exposure multiplier
- Climate zone multiplier (Moderate / Humid / Hot & Dry)
- Extra occupants beyond 2
- Room type bonus (Kitchen +0.5 ton)
- Top floor bonus (+0.5 ton)

## Tech Stack

Plain HTML, CSS, and JavaScript — no frameworks, no build step.

## Getting Started

Just open `index.html` in a browser. No installation needed.

## Deployment

Recommended: drag and drop the folder on [Netlify](https://netlify.com) for a free instant deploy.

## License

MIT
