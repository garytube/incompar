# Incompar.es

Since 1999 Incompar has been designing shade on the Balearic Islands, the Spanish Mainland, and the Canary Islands. Whether you have a precise idea about your sail, where you need shade or are absolutely not sure how to shade your chosen location, we are your experts. We advise you on-site and create a fixed price offer including a 3D visualization and shadow progression-free of charge.

## Tech Stack
- SvelteKit
- Tailwind CSS
- Vercel


## Specials

- 🌏 i18n Multi-Language (de,en, es soon-ish) powered by  [sveltekit-i18n](https://www.npmjs.com/package/sveltekit-i18n)
- 🖼️ Automatic Gallery generation & image optimization (viteImagemin)
- 🎨 Handcrafted Design


#### Gallery

```ts
// import all images from a given path
const importedImages = import.meta.globEager('$assets/sunsquare/tri/gallery/*.jpg');
// transform imports to a useable array of slides - each entry can be used as img.src
const slides = Object.entries(importedImages).map((i) => i[1].default);
```

#### Translator
I wanted to give the Editor an easy-ish interface for editing translations without me fiddling with text files.

- https://incompar.es/debug/lang?lang=en

It is automatically generated from `src/lib/translations/translations.ts`
Not perfect but it got the job done :)


