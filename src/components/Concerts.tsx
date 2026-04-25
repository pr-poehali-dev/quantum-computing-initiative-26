interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Key Releases",
    albumHeading: "Getto Garden",
    albumYear: "2022",
    albumLabel: "Album",
    tracklist: "Tracklist",
    learnMore: "Listen",
  },
  de: {
    heading: "Wichtige Releases",
    albumHeading: "Getto Garden",
    albumYear: "2022",
    albumLabel: "Album",
    tracklist: "Tracklist",
    learnMore: "Anhören",
  },
  ru: {
    heading: "Знаковые релизы",
    albumHeading: "Getto Garden",
    albumYear: "2022",
    albumLabel: "Альбом",
    tracklist: "Трек-лист",
    learnMore: "Слушать",
  },
}

const releases = {
  en: [
    { year: "2020", title: "Сердце горит", type: "Single" },
    { year: "2021", title: "Эдем", type: "Album" },
    { year: "2022", title: "Getto Garden", type: "Album" },
    { year: "2023", title: "Пыль", type: "Single" },
    { year: "2023", title: "Золотое дно", type: "Single" },
  ],
  de: [
    { year: "2020", title: "Сердце горит", type: "Single" },
    { year: "2021", title: "Эдем", type: "Album" },
    { year: "2022", title: "Getto Garden", type: "Album" },
    { year: "2023", title: "Пыль", type: "Single" },
    { year: "2023", title: "Золотое дно", type: "Single" },
  ],
  ru: [
    { year: "2020", title: "Сердце горит", type: "Сингл" },
    { year: "2021", title: "Эдем", type: "Альбом" },
    { year: "2022", title: "Getto Garden", type: "Альбом" },
    { year: "2023", title: "Пыль", type: "Сингл" },
    { year: "2023", title: "Золотое дно", type: "Сингл" },
  ],
}

const gettoGardenTracks = [
  "1. Intro",
  "2. Getto Garden",
  "3. Розы",
  "4. Мне не нужно",
  "5. Цветы",
  "6. Малиновый закат",
  "7. Пепел",
  "8. Мутные воды",
  "9. Небо",
  "10. Золото",
  "11. Сны",
  "12. Outro",
]

const albumCoverUrl = "https://cdn.poehali.dev/projects/e9707ece-5d5f-4949-ad48-f33630ca0c36/files/6f5dab0d-39fc-497c-b4aa-fa9a15a3480f.jpg"

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const releaseList = releases[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Releases list */}
          <div className="space-y-8">
            {releaseList.map((release, idx) => (
              <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div>
                    <h3 className="text-charcoal mb-1">{release.year}</h3>
                    <small className="text-taupe">{release.type}</small>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-charcoal">{release.title}</h3>
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="https://music.yandex.ru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold/80 transition-colors text-sm font-medium"
                    >
                      {t.learnMore} &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Getto Garden album block */}
          <div>
            <div className="flex gap-6 mb-8">
              <img
                src={albumCoverUrl}
                alt="Getto Garden"
                className="w-32 h-32 object-cover flex-shrink-0"
              />
              <div>
                <small className="text-taupe uppercase tracking-widest">{t.albumLabel} · {t.albumYear}</small>
                <h3 className="text-charcoal mt-1 mb-2">{t.albumHeading}</h3>
                <p className="text-charcoal/70 text-sm">MAYOT</p>
              </div>
            </div>

            <div>
              <p className="text-taupe text-xs uppercase tracking-widest mb-4">{t.tracklist}</p>
              <div className="space-y-2">
                {gettoGardenTracks.map((track, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-charcoal/80 py-2 border-b border-taupe/20 last:border-b-0 hover:text-gold transition-colors"
                  >
                    {track}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
