exports.handler = async (event) => {
    const { text } = JSON.parse(event.body);
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    const wordList = words;
  
    return {
      statusCode: 200,
      body: JSON.stringify({ wordCount, wordList }),
    };
  };
  