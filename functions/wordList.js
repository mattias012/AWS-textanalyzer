exports.handler = async (event) => {
    const { text } = JSON.parse(event.body);
    const wordList = text.trim().split(/\s+/);
  
    return {
      statusCode: 200,
      body: JSON.stringify({ wordList }),
    };
  };
  