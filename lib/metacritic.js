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
      image: "https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Zelda+BOTW"
    },
    {
      title: "Red Dead Redemption 2",
      score: 96,
      releaseDate: "2018-10-26",
      description: "An epic tale of life in America's unforgiving heartland at the dawn of the modern age.",
      slug: "red-dead-redemption-2",
      image: "https://via.placeholder.com/300x200/FF5722/FFFFFF?text=RDR2"
    },
    {
      title: "God of War",
      score: 94,
      releaseDate: "2018-04-20",
      description: "A new beginning for Kratos as he ventures into the brutal Norse pantheon.",
      slug: "god-of-war-2018",
      image: "https://via.placeholder.com/300x200/2196F3/FFFFFF?text=God+of+War"
    },
    {
      title: "Super Mario Odyssey",
      score: 97,
      releaseDate: "2017-10-27",
      description: "Join Mario on a massive, globe-trotting 3D adventure.",
      slug: "super-mario-odyssey",
      image: "https://via.placeholder.com/300x200/FFC107/000000?text=Mario+Odyssey"
    },
    {
      title: "The Witcher 3: Wild Hunt",
      score: 93,
      releaseDate: "2015-05-19",
      description: "An epic role-playing game with a gripping story and vast open world.",
      slug: "witcher-3-wild-hunt",
      image: "https://via.placeholder.com/300x200/9C27B0/FFFFFF?text=Witcher+3"
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
