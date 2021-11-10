import { Project } from '../../data/jory';

export function getKeyWords(list: Project[]): Set<string> {
  const keywords = new Set<string>();
  if (list) {
    for (const item of list) {
      for (const word of item.keywords) {
        keywords.add(word.toLowerCase());
      }
    }
  }
  return keywords;
}
