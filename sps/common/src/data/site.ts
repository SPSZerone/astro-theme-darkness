
export type SiteLink = {
  theme: string,
  href: string;
  title: string;
  subtitle: string;
};

export const site = {
  homeSiteLinks: [
    {
      theme: 'darkness',
      href: 'https://darkness.me.seapianosnow.com',
      // title: 'Homepage style: Deep Space | 主页风格：深邃宇宙 (Modern Animations, Dark Aesthetics, Motion-Rich\nDark Tech / Sci-Fi, Futuristic, Cyber Neon, Deep Space / Starry, Immersive)',
      // subtitle: '现代动画，深色美学，动作丰富 | 暗黑科技，未来主义，赛博霓虹，深邃宇宙，沉浸式',
      title: 'Homepage style: Deep Space <br/> 主页风格：深邃宇宙',
      subtitle: '',
    },
    {
      theme: 'anglefeint',
      href: 'https://anglefeint.me.seapianosnow.com',
      // title: 'Homepage style: Geek, Cyberpunk | 主页风格：赛博极客 (Language | Geek, Cyberpunk, Sci-Fi, Retro Terminal)',
      // subtitle: '语言 | 极客，赛博朋克，未来科幻，复古终端',
      title: 'Homepage style: Geek, Cyberpunk <br/> 主页风格：赛博极客',
      subtitle: '',
    },
    {
      theme: 'twilight',
      href: 'https://twilight.me.seapianosnow.com',
      // title: 'Homepage style: Fresh & Aesthetic | 主页风格：清新唯美 (Language, Theme Color, Light/Dark Mode | Glassmorphism, Modern & Minimalist, Card-based Layout, Fresh & Aesthetic)',
      // subtitle: '语言，主题色，浅色/深色 | 毛玻璃拟态，现代简约，卡片式布局，清新唯美',
      title: 'Homepage style: Fresh & Aesthetic <br/> 主页风格：清新唯美',
      subtitle: '',
    },
    {
      theme: 'astrogon',
      href: 'https://astrogon.me.seapianosnow.com',
      // title: 'Homepage style: Soothing, Natural | 主页风格：治愈自然 (Light/Dark Mode | Glassmorphism, Soothing, Natural, Minimalist, Crisp, Modern, Functional)',
      // subtitle: '浅色/深色 | 毛玻璃特效，治愈，自然，极简，清爽，现代，实用',
      title: 'Homepage style: Soothing, Natural <br/> 主页风格：治愈自然',
      subtitle: '',
    },
  ] satisfies SiteLink[],
}
