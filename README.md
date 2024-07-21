<h1 align="center">
    📝 Acne Note. - Take a Note.
</h1>

<p align="center">
  Crafted with ❤️ by Kushagra Gupta
</p>

<p align="center">
    <img src="https://api.netlify.com/api/v1/badges/c374fb78-20e2-4302-bdfd-6df65903ab18/deploy-status" />
</p>

<h2 align="center">Built using: </h2>
<p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/Astro-A613F0?style=for-the-badge&logo=astro&logoColor=white" />
</p>

<h2 align="center">Visit the site! </h2>
<p align="center">Click https://acmenoteapp.netlify.app/ to view the deployed site</p>

## 📺 Demo
https://github.com/user-attachments/assets/e9a335d9-c030-4ad5-939b-41980e00c9e1

## 🪄 Features

:white_check_mark: Snappy website with near 100 Lighthouse score.\
:white_check_mark: No dead clicks, pages integrated with the landing page like blog, team, pricing etc.\
:white_check_mark: Achieving good LHS even with a video playing in the hero section of website.\
:white_check_mark: Responsive, supports mobile, tablet and desktop viewports.


## ⚙️ NPM Modules Used

- `"react": "^18.3.1",` - Javscript library of choice to create frontend components
- `"react-icons": "^5.2.1",` - To have an icon library instead of manually importing icon SVGs 
- `"tailwindcss": "^3.4.6",` - CSS library of choice
- `"astro": "^4.12.2",` - Javascript framework to make fast, static, SEO friendly websites
- `"react-router-dom": "^18.3.1",` - To interact with React DOM internally
- `"typescript": "^5.5.3",` - Javascript wrapper to enable typesetting

## ⏱️ Page Performance Reports

The tool used to gather Lighthouse score data is [PageSpeed Insights](https://pagespeed.web.dev/)

PageSpeed Insights is a tool by Google that provided lab benchmarked results in opposed to Lighthouse plugin used locally on browsers that could give varied results depending on system hardware, network connection speed, etc.

### 🖥️ Desktop Performance: [Report Link](https://pagespeed.web.dev/analysis/https-acmenoteapp-netlify-app/my27bccu31?form_factor=desktop)
<img width="1371" alt="Screenshot 2024-07-21 at 10 49 11 PM" src="https://github.com/user-attachments/assets/d6afa15e-1983-44ac-903a-8943b59e83ac">

### 📱 Mobile Performance: [Report Link](https://pagespeed.web.dev/analysis/https-acmenoteapp-netlify-app/my27bccu31?form_factor=mobile)
<img width="1368" alt="Screenshot 2024-07-21 at 10 49 24 PM" src="https://github.com/user-attachments/assets/8dfa37bd-ff79-4840-8671-268daa3157a0">


## ⚡️ Measures to Improve Performance, SEO and UX

- **Consistent color pallette** - Only used the colors mentioned in `tailwind.config.js` to maintain consistent UI.
- **Preconnect to Google Fonts** - Preconnecting to google fonts hosts makes loading of fonts slightly faster, improving page performance.
- **Compress hero banner video** - Used `.webm` format of video and compressed it to maximize page performance. Refernce from [Volvo Trucks US Website](https://www.volvotrucks.us/)
- **WAVE Accessibility tool** - Achieved 100 score for accessibility using Lighthouse and WAVE Accessibility tool.
- **Appropriate metatags** - Better SEO with metatags generated from [metatags.io](https://metatags.io/)
- **Semantic HTML** - Proper use of `h1` `h2` `h3` `p` `section` etc. tags, every `a` tag is linked to a page, **No dead clicks!**
- **Dynamic meta title and description** - For every page, a unique title and description is added as a parameter through Astro layout.
- **Using next gen image formats** - Use of `.webp` images, along with `loading="lazy` and `fetchPriority="low"` (for images which are not present in first fold of website).
- **Use of `client:load` and `client:visible` directive** - Harnessing the power of Astro to load navbar immediately, and load other components only when they are visible.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 📚 References
A huge shoutout to below mentioned resources to help make this project possible
- [Ben Acker - How to create Astro + Tailwind + React project](https://youtu.be/d6CsWTVa42o?si=9zeOTWI080YB6Kl8)
- [FreeCodeCamp Astro Tutorial](https://youtu.be/e-hTm5VmofI?si=ZdOf-wlWGtwBjsvN)
- [Web Dev - How to lazy load video](https://web.dev/articles/lazy-loading-video)
- [Simon Hearne - Fast Responsive Videos](https://simonhearne.com/2021/fast-responsive-videos/)
- [Github thread - How to load videos quickly](https://github.com/whatwg/html/issues/6636)

## 🧑‍💻 Built by 

<table>
    <tr align="center">
        <td>
            Kushagra Gupta
            <p align="center">
                <img src="https://github.com/KG-1510.png?size=128" height="120" alt="Kushagra Gupta">
            </p>
            <p align="center">
                <a href="https://github.com/KG-1510"><img alt="github-icon"
                        src="http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg"
                        width="36" height="36" /></a>
                <a href="https://www.linkedin.com/in/kg1510/">
                    <img src="http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg"
                        alt="linkedin-icon" width="36" height="36" />
                </a>
            </p>
        </td>
    </tr>
</table>
