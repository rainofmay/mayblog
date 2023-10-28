import { RefObject, useRef, useEffect } from 'react';


const giscusSetup = {
  id: 'giscus-comment',
  src: "https://giscus.app/client.js",
  'data-repo': "cledow/BlogComment",
  'data-repo-id': "R_kgDOKmR89Q",
  'data-category': 'Blog Comment',
  'data-category-id': 'DIC_kwDOKmR89c4Cag_H',
  'data-mapping': 'pathname',
  'data-strict': '0',
  'data-reactions-enabled': '1',
  'data-emit-metadata': '0',
  'data-input-position': 'bottom',
  'data-theme': 'light',
  'data-lang': 'ko',
  crossorigin: 'anonymous',
  async: 'true',
};

const useGiscus = <T extends HTMLElement>(giscusRef: RefObject<T>): void => {
  const initializedRef = useRef<boolean>(false);

  useEffect(() => {
    if (giscusRef.current === null || initializedRef.current) {
      return;
    }

    const giscusScript = document.createElement('script');

    for (const [key, value] of Object.entries(giscusSetup)) {
      giscusScript.setAttribute(key, value);
    }

    giscusRef.current.append(giscusScript);

    initializedRef.current = true;
  }, [giscusRef]);
};

export default useGiscus;