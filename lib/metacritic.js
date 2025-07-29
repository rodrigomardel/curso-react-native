export async function getLatestGames() {
  const LATEST_GAMES =
    "https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortBy=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2024&offset=0&limit=24&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u";

  try {
    console.log('Fetching games from API...');
    
    const response = await fetch(LATEST_GAMES, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      mode: 'cors'
    });
    
    console.log('Raw response status:', response.status);
    console.log('Response headers:', response.headers);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('HTTP Error Response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Verificar el tipo de contenido
    const contentType = response.headers.get('content-type');
    console.log('Content-Type:', contentType);
    
    if (!contentType || !contentType.includes('application/json')) {
      const textResponse = await response.text();
      console.error('Non-JSON response received:', textResponse.substring(0, 500));
      throw new Error('API returned non-JSON response');
    }
    
    const json = await response.json();
    console.log('Raw JSON response:', json);
    
    if (!json.data || !json.data.items) {
      console.error('Unexpected API response structure:', json);
      throw new Error('Invalid API response structure');
    }

    const {
      data: { items },
    } = json;

    console.log('Number of items received:', items.length);
    console.log('First item example:', items[0]);

    const mappedItems = items.map((item) => {
      const { description, slug, releaseDate, image, criticScoreSummary, title } =
        item;
      const { score } = criticScoreSummary;

      // crea la imagen
      const { bucketType, bucketPath } = image;
      const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

      return {
        description,
        releaseDate,
        score,
        slug,
        title,
        image: img,
      };
    });

    console.log('Mapped items:', mappedItems);
    return mappedItems;
  } catch (error) {
    console.error('Error in getLatestGames:', error);
    console.log('Falling back to sample data...');
    return getSampleGames();
  }
}

// Función con datos de ejemplo para cuando la API no funcione
function getSampleGames() {
  return [
    {
      title: "The Legend of Zelda: Breath of the Wild",
      score: 97,
      releaseDate: "2017-03-03",
      description: "An action-adventure game that lets you explore a vast open world with unprecedented freedom.",
      slug: "zelda-breath-wild",
      image: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
    },
    {
      title: "Red Dead Redemption 2",
      score: 96,
      releaseDate: "2018-10-26",
      description: "An epic tale of life in America's unforgiving heartland at the dawn of the modern age.",
      slug: "red-dead-redemption-2",
      image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
    },
    {
      title: "God of War",
      score: 94,
      releaseDate: "2018-04-20",
      description: "A new beginning for Kratos as he ventures into the brutal Norse pantheon.",
      slug: "god-of-war-2018",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"
    },
    {
      title: "Super Mario Odyssey",
      score: 97,
      releaseDate: "2017-10-27",
      description: "Join Mario on a massive, globe-trotting 3D adventure.",
      slug: "super-mario-odyssey",
      image: "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg"
    },
    {
      title: "The Witcher 3: Wild Hunt",
      score: 93,
      releaseDate: "2015-05-19",
      description: "An epic role-playing game with a gripping story and vast open world.",
      slug: "witcher-3-wild-hunt",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg"
    },
    {
      title: "Elden Ring",
      score: 96,
      releaseDate: "2022-02-25",
      description: "An action RPG set in a vast fantasy world created by Hidetaka Miyazaki and George R.R. Martin.",
      slug: "elden-ring",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg"
    },
    {
      title: "Cyberpunk 2077",
      score: 86,
      releaseDate: "2020-12-10",
      description: "An open-world action-adventure story set in Night City, a megalopolis obsessed with power and body modification.",
      slug: "cyberpunk-2077",
      image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
    },
    {
      title: "Spider-Man: Miles Morales",
      score: 85,
      releaseDate: "2020-11-12",
      description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers.",
      slug: "spider-man-miles-morales",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4e/Spider-Man_Miles_Morales_cover_art.jpg"
    },
    {
      title: "Animal Crossing: New Horizons",
      score: 90,
      releaseDate: "2020-03-20",
      description: "Escape to a deserted island and create your own paradise as you explore, create, and customize.",
      slug: "animal-crossing-new-horizons",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg"
    },
    {
      title: "Ghost of Tsushima",
      score: 83,
      releaseDate: "2020-07-17",
      description: "An action-adventure game set in feudal Japan during the Mongol invasion.",
      slug: "ghost-of-tsushima",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg"
    },
    {
      title: "Hades",
      score: 93,
      releaseDate: "2020-09-17",
      description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler.",
      slug: "hades",
      image: "https://upload.wikimedia.org/wikipedia/en/8/87/Hades_cover_art.jpg"
    },
    {
      title: "The Last of Us Part II",
      score: 93,
      releaseDate: "2020-06-19",
      description: "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel settle down in Jackson.",
      slug: "last-of-us-part-2",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4f/The_Last_of_Us_Part_II.jpg"
    },
    {
      title: "Final Fantasy VII Remake",
      score: 87,
      releaseDate: "2020-04-10",
      description: "A spectacular reimagining of one of the most visionary games ever, created with today's cutting-edge technology.",
      slug: "final-fantasy-vii-remake",
      image: "https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png"
    },
    {
      title: "Doom Eternal",
      score: 88,
      releaseDate: "2020-03-20",
      description: "Hell's armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions.",
      slug: "doom-eternal",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Doom_Eternal_cover_art.jpg"
    },
    {
      title: "Resident Evil 3",
      score: 79,
      releaseDate: "2020-04-03",
      description: "Jill Valentine is one of the last remaining people in Raccoon City to witness the atrocities Umbrella performed.",
      slug: "resident-evil-3",
      image: "https://upload.wikimedia.org/wikipedia/en/8/87/Resident_Evil_3_Remake.jpg"
    },
    {
      title: "Persona 5 Royal",
      score: 95,
      releaseDate: "2020-03-31",
      description: "Don the mask and join the Phantom Thieves of Hearts as they stage grand heists, infiltrate the minds of the corrupt.",
      slug: "persona-5-royal",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b0/Persona_5_Royal_New_Cover.jpg"
    },
    {
      title: "Half-Life: Alyx",
      score: 93,
      releaseDate: "2020-03-23",
      description: "Set between the events of Half-Life and Half-Life 2, Alyx Vance and her father Eli mount an early resistance to the Combine's occupation of Earth.",
      slug: "half-life-alyx",
      image: "https://upload.wikimedia.org/wikipedia/en/9/98/Half-Life_Alyx.jpg"
    },
    {
      title: "Ori and the Will of the Wisps",
      score: 88,
      releaseDate: "2020-03-11",
      description: "Embark on a new journey in a vast, exotic world where you'll encounter towering enemies and challenging puzzles.",
      slug: "ori-will-wisps",
      image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Ori_and_the_Will_of_the_Wisps.jpg"
    },
    {
      title: "Streets of Rage 4",
      score: 82,
      releaseDate: "2020-04-30",
      description: "The most iconic beat 'em up series is back with a masterful tribute to and revitalization of the classic action fans adore.",
      slug: "streets-rage-4",
      image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Streets_of_Rage_4.jpg"
    },
    {
      title: "Fall Guys: Ultimate Knockout",
      score: 81,
      releaseDate: "2020-08-04",
      description: "Fall Guys is a massively multiplayer party game with up to 60 players online in a free-for-all struggle through round after round.",
      slug: "fall-guys",
      image: "https://upload.wikimedia.org/wikipedia/en/5/59/Fall_Guys_Ultimate_Knockout.jpg"
    },
    {
      title: "Among Us",
      score: 85,
      releaseDate: "2018-06-15",
      description: "A game of teamwork and betrayal...in space! Work with your crew to complete tasks and identify the impostor.",
      slug: "among-us",
      image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg"
    },
    {
      title: "Genshin Impact",
      score: 84,
      releaseDate: "2020-09-28",
      description: "An open-world action RPG that takes place in the fantasy world of Teyvat, where seven elements flow and converge.",
      slug: "genshin-impact",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a0/Genshin_Impact_logo.png"
    },
    {
      title: "Demon's Souls",
      score: 92,
      releaseDate: "2020-11-12",
      description: "A remake of the classic action RPG, rebuilt from the ground up and masterfully enhanced for PlayStation 5.",
      slug: "demons-souls-remake",
      image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Demon%27s_Souls_remake_cover_art.jpg"
    },
    {
      title: "Astro's Playroom",
      score: 83,
      releaseDate: "2020-11-12",
      description: "A fun platformer that comes pre-loaded on PlayStation 5, showcasing the new DualSense controller's features.",
      slug: "astros-playroom",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Astro%27s_Playroom_cover_art.jpg"
    }
  ];
}

export async function getGameDetails(slug) {
  const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const { components } = json;
  const { title, description, criticScoreSummary, images } = components[0];
  const { score } = criticScoreSummary;

  // get the card image
  const cardImage = images.find((image) => image.typeName === "cardImage");
  const { bucketType, bucketPath } = cardImage;
  const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  const rawReviews = components[3].data.items;

  // get the reviews
  const reviews = rawReviews.map((review) => {
    const { quote, score, date, publicationName, author } = review;
    return { quote, score, date, publicationName, author };
  });

  return {
    img,
    title,
    slug,
    description,
    score,
    reviews,
  };
}
