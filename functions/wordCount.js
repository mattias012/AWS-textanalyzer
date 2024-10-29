exports.handler = async (event) => {
    const { text } = JSON.parse(event.body);
    const wordCount = text.trim().split(/\s+/).length;
  
    return {
      statusCode: 200,
      body: JSON.stringify({ wordCount }),
    };
  };  