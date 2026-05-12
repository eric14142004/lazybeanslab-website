import { SITE_CONFIG } from "../src/config/site";

function imagePath(caseId, fileName) {
  return `${SITE_CONFIG.basePath}/images/cases/${caseId}/${fileName}`;
}

function resolveImage(entry, lang) {
  if (typeof entry === "string") {
    return { src: entry, zoomable: false };
  }

  return {
    src: entry.byLang?.[lang] ?? entry.byLang?.en ?? entry.default,
    zoomable: Boolean(entry.zoomable),
  };
}

const cases = [
  {
    id: "apartment",
    image: imagePath("apartment", "main.png"),
    images: [
      imagePath("apartment", "main.png"),
    ],
  },
  {
    id: "shanghai-rental",
    image: imagePath("shanghai-rental", "main.png"),
    images: [
      imagePath("shanghai-rental", "main.png"),
      {
        default: imagePath("shanghai-rental", "1-en.png"),
        zoomable: true,
        byLang: {
          en: imagePath("shanghai-rental", "1-en.png"),
          "zh-tw": imagePath("shanghai-rental", "1-zh-tw.png"),
          "zh-cn": imagePath("shanghai-rental", "1-zh-cn.png"),
        },
      },
    ],
  },
  {
    id: "renovation",
    image: imagePath("renovation", "main.png"),
    images: [
      imagePath("renovation", "main.png"),
    ],
  },
];

export function getCases(lang = "en") {
  return cases.map((item) => ({
    ...item,
    images: item.images.map((entry) => resolveImage(entry, lang)),
  }));
}
