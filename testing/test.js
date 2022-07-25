const puppeteer = require("puppeteer");
const lighthouse = require("lighthouse");
const { URL } = require("url");

const urls = [
  "https://jolly-cray-ccab8e.netlify.app/",
  "https://jolly-cray-ccab8e.netlify.app/conditions-we-treat/",
  "https://jolly-cray-ccab8e.netlify.app/sciatica/",
  "https://jolly-cray-ccab8e.netlify.app/lumbar-disc-herniation/",
  "https://jolly-cray-ccab8e.netlify.app/low-back-pain/",
  "https://jolly-cray-ccab8e.netlify.app/bulging-discs/",
  "https://jolly-cray-ccab8e.netlify.app/chronic-pain/",
  "https://jolly-cray-ccab8e.netlify.app/degenerative-disc-disease/",
  "https://jolly-cray-ccab8e.netlify.app/occupational-injuries/",
  "https://jolly-cray-ccab8e.netlify.app/ankle-sprain/",
  "https://jolly-cray-ccab8e.netlify.app/tendonitis/",
  "https://jolly-cray-ccab8e.netlify.app/arthritis-osteoarthritis/",
  "https://jolly-cray-ccab8e.netlify.app/sports-physiotherapy/",
  "https://jolly-cray-ccab8e.netlify.app/whiplash/",
  "https://jolly-cray-ccab8e.netlify.app/deep-tissue-massage/",
  "https://jolly-cray-ccab8e.netlify.app/dry-needling-trigger-point-therapy/",
  "https://jolly-cray-ccab8e.netlify.app/neck-pain/",
  "https://jolly-cray-ccab8e.netlify.app/spinal-mobilisations/",
  "https://jolly-cray-ccab8e.netlify.app/spinal-manipulation/",
  "https://jolly-cray-ccab8e.netlify.app/non-surgical-spinal-decompression/",
  "https://jolly-cray-ccab8e.netlify.app/about/",
  "https://jolly-cray-ccab8e.netlify.app/team/",
  "https://jolly-cray-ccab8e.netlify.app/pricing/",
  "https://jolly-cray-ccab8e.netlify.app/contact/",
  "https://jolly-cray-ccab8e.netlify.app/#",
  "https://jolly-cray-ccab8e.netlify.app/treated-conditions",
  "https://jolly-cray-ccab8e.netlify.app/non-surgical-spinal-decompression",
  "https://jolly-cray-ccab8e.netlify.app/about",
  "https://jolly-cray-ccab8e.netlify.app/team",
  "https://jolly-cray-ccab8e.netlify.app/pricing",
  "https://jolly-cray-ccab8e.netlify.app/contact",
];
(async () => {
  for (const url of urls) {
    // Use Puppeteer to launch headful Chrome and don't use its default 800x600 viewport.
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
    });

    // Lighthouse will open the URL.
    // Puppeteer will observe `targetchanged` and inject our stylesheet.
    const { lhr } = await lighthouse(url, {
      port: new URL(browser.wsEndpoint()).port,
      output: "json",
      logLevel: "silent",
    });

    const d = {
      url,
    };

    Object.values(lhr.categories).forEach((c) => {
      d[c.title] = c.score;
    });

    console.log(d);

    await browser.close();
  }
})();
