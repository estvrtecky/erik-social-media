# POZNAMKY NEXT.JS

## Commands

### Build App
`npm run build`

### Run App
`npm run start`

### Developer Mode
`npm run dev`

### Reserved filenames
- `page.tsx` – stranka v priecinku
- `not-found.tsx` – pre stranky ktore nenaslo
- `layout.tsx`

## Dynamic Route
- inside `[]` brackets - `[profileId]`
```
app/
 |--post/
     |--[postId]/
         |--page.tsx
```