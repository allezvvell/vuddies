const BREAK_POINTS = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
} as const;

const mediaQuery = {
  mobile: `@media (max-width: ${BREAK_POINTS.mobile})`,
  tablet: `@media (max-width: ${BREAK_POINTS.tablet})`,
  laptop: `@media (max-width: ${BREAK_POINTS.laptop})`,
  desktop: `@media (max-width: ${BREAK_POINTS.desktop})`,
} as const;

export default mediaQuery;
