export interface AwesomeWebPageData {
  RESUME: Job[];
  PORTFOLIO: Project[];
}

export interface Job {
  date: string;
  place: string;
  summary: string;
  detail: string;
}

export interface Project {
  title: string;
  imageSources: string[];
  keywords: string[];
}

