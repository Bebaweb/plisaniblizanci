# Plišani blizanci — sajt

Statički sajt, spreman za GitHub Pages.

## Objavljivanje
1. Napravite novi repozitorijum na GitHub-u i otpremite sadržaj ovog foldera u koren (index.html mora biti u korenu).
2. Settings → Pages → Source: **Deploy from a branch**, Branch: **main**, folder: **/ (root)** → Save.
3. Sajt će za minut biti dostupan na https://<korisnicko-ime>.github.io/<repo>/

## Struktura
- index.html — početna (hero, O nama, materijali i održavanje, iz radionice)
- igracke.html — galerija igračaka
- styles.css — svi stilovi (mobilni meni ispod 640px)
- menu.js — otvaranje/zatvaranje hamburger menija
- assets/ — logo i fotografije

## Izmene
Tekst menjate direktno u index.html i igracke.html. Nova igračka = jedan `<article>` blok u igracke.html + fotografija u assets/.
