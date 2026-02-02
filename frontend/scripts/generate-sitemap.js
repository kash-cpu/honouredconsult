import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const SITE_URL = "https://www.honouredconsult.com";

const routes = ["/", "/newsletters"];

(async () => {
   const stream = new SitemapStream({ hostname: SITE_URL });

   const xml = await streamToPromise(
      Readable.from(
         routes.map((url) => ({
            url,
            changefreq: "daily",
            priority: 1.0,
         })),
      ).pipe(stream),
   ).then((data) => data.toString());

   writeFileSync("./public/sitemap.xml", xml);
})();
