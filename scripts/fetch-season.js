const fs = require('fs');
const path = require('path');

async function fetchSeason() {
    try {
        const response = await fetch(
            'https://hb-strapi-production.up.railway.app/api/url',
            {
                method: 'GET',
                headers: {
                    Authorization: 'bearer ' + process.env.STRAPI_API_KEY,
                },
            }
        );

        const data = await response.json();
        const isFall = data?.data?.Fall ?? true;

        // Write the season to a file that tailwind.config.js can read
        const seasonConfig = {
            isFall: isFall,
            season: isFall ? 'fall' : 'spring',
        };

        fs.writeFileSync(
            path.join(__dirname, '..', '.season.json'),
            JSON.stringify(seasonConfig, null, 2)
        );

        console.log(`✓ Season fetched: ${seasonConfig.season} (isFall: ${isFall})`);
    } catch (error) {
        console.error('Error fetching season from Strapi:', error);
        // Fallback to fall if fetch fails
        const fallbackConfig = {
            isFall: true,
            season: 'fall',
        };
        fs.writeFileSync(
            path.join(__dirname, '..', '.season.json'),
            JSON.stringify(fallbackConfig, null, 2)
        );
        console.log('✓ Using fallback season: fall');
    }
}

fetchSeason();
