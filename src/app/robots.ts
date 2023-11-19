import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '',
        },
    }
}
//# ​‌‌‌robots.txt
//? Add or generate a robots.txt file that matches the Robots Exclusion Standard in the root of app directory to tell search engine crawlers which URLs they can access on your site.
//$ app/robots.txt  =>
//$ User-Agent: *
//$ Allow: /
//$ Disallow: /private/
//$ Sitemap: https://acme.com/sitemap.xml
//? for more information => https://en.wikipedia.org/wiki/Robots.txt#Standard


