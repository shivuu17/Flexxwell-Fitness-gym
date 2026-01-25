# Gallery Folder

Place gym photos here so they are served statically from `/gallery/...`.

## Guidelines
- Formats: JPG, PNG, or WebP
- Recommended size: ~1200x800px, keep under 500KB after compression
- Names: use descriptive slugs like `workout-area-1.jpg`, `trainer-anita.jpg`

## Wiring images into the React gallery
1. Drop files into this folder (they will be available at `/gallery/<file>` when the dev server runs).
2. Open `src/components/Gallery.jsx`.
3. Update the `images` array with your filenames and categories, for example:
   ```jsx
   { src: "/gallery/workout-area-1.jpg", category: "workout", caption: "Main Floor" }
   ```
4. Optional: adjust filter categories to match any new tags you add.

## Suggested categories
- workout (floor, cardio, racks)
- machines (close-ups of equipment)
- trainers (coaches and staff)
- members (action shots)
- events (competitions, classes)

Add at least 9-12 photos for a balanced masonry grid.
