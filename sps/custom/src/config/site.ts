
export type Navigation = {
  path: string;
  label: string;
};

export const site = {
  theme: 'darkness',

  navEnable: true,
  homeSiteEnable: true,

  navigations: [
    {
      path: 'projects',
      label: 'View Projects <br/> 我的作品',
    },
    {
      path: 'blog',
      label: 'Read Blog <br/> 我的博客',
    },
  ] satisfies Navigation[],

} as const;
