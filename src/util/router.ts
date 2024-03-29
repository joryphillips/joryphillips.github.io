import { installRouter } from 'pwa-helpers/router';

interface RouterArg {
  setNavFocus: (hash: string)=> void;
  setProject: (hash: string)=> void;
}

interface HandleNavArg extends RouterArg {
  location: Location;
}

/**
 * Custom behavior for navigation. Primarily, determine from hashes and query
 * params if a project is selected and what navigation element to focus.
 */
async function handleNavigation({location, setNavFocus, setProject}: HandleNavArg) {
  const params = new URLSearchParams(location.search);

  if (params.has('project')) {
    const name = params.get('project');
    if (!name) return;
    setProject(decodeURIComponent(name));
    setNavFocus('#visuals');
    return;
  } else {
    setProject('');
  }

  setNavFocus(location.hash);
}

export function router({setNavFocus, setProject}: RouterArg): void {
  installRouter((location) => handleNavigation({
    location, setNavFocus, setProject,
  }));
}
