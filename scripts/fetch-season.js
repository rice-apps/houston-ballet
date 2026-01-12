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

        // Copy season-specific images to root public folder
        copySeasonImages(seasonConfig.season);
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
        copySeasonImages(fallbackConfig.season);
    }
}

function copySeasonImages(season) {
    const publicDir = path.join(__dirname, '..', 'public');
    const seasonDir = path.join(publicDir, season);

    const images = [
        'background.png',
        'categoryBackground.png',
        'vendorBackground.png',
        'welcomeImage.png',
        'MapCover.png'
    ];

    images.forEach(image => {
        const src = path.join(seasonDir, image);
        const dest = path.join(publicDir, image);

        try {
            fs.copyFileSync(src, dest);
        } catch (error) {
            console.warn(`Warning: Could not copy ${image} from ${season} directory`);
        }
    });

    // Also copy MapCover.png to assets folder for compatibility
    const assetsSrc = path.join(seasonDir, 'MapCover.png');
    const assetsDir = path.join(publicDir, 'assets');
    const assetsDest = path.join(assetsDir, 'MapCover.png');

    try {
        if (!fs.existsSync(assetsDir)) {
            fs.mkdirSync(assetsDir, { recursive: true });
        }
        fs.copyFileSync(assetsSrc, assetsDest);
    } catch (error) {
        console.warn(`Warning: Could not copy MapCover.png to assets directory`);
    }

    console.log(`✓ Copied ${season} images to public folder`);
}

fetchSeason();
