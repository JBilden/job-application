
export const languageTypes = [
  "de",
  "uk",
] as const;

export type languages = typeof languageTypes[number];

export function languagesLabel(rawStatus: string): string {

  if(languageTypes.includes(rawStatus as languages)) {

    switch (rawStatus) {
      case "de":
        return "Deutsch";
      case "uk":
        return "English";
      default:
        throw Error("Language Type has no label.");
    }
  }

  throw Error("Not a language Type.");
}