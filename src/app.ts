const { tescoScrapeBeer } = require('./scrapers/tesco/beer');
const { tescoScrapeWine } = require('./scrapers/tesco/wine');
const { tescoScrapeSpirits } = require('./scrapers/tesco/spirits');

// const { waitroseScrapeBeer } = require('./scrapers/waitrose/beer');
// const { waitroseScrapeWine } = require('./scrapers/waitrose/wine');
// const { waitroseScrapeSpirits } = require('./scrapers/waitrose/spirits');

// const { sainsburysScrapeBeer } = require('./scrapers/sainsburys/beer');
// const { sainsburysScrapeWine } = require('./scrapers/sainsburys/wine');
// const { sainsburysScrapeSpirits } = require('./scrapers/sainsburys/spirits');

tescoScrapeBeer();
// tescoScrapeWine();
// tescoScrapeSpirits();

// waitroseScrapeBeer();
// waitroseScrapeWine();
// waitroseScrapeSpirits();

// sainsburysScrapeBeer();
// sainsburysScrapeWine();
// sainsburysScrapeSpirits();
