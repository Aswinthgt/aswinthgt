export default async function handler(req, res) {
  try {
    const serverModule = await import('../dist/aswinthgt/server/server.mjs');
    
    // Angular's new builder exports the server differently
    const server = serverModule.default || serverModule.app || serverModule;
    
    if (typeof server === 'function') {
      return server(req, res);
    } else if (server && typeof server.reqHandler === 'function') {
      return server.reqHandler(req, res);
    } else {
      throw new Error('Server module does not export a valid handler');
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Internal Server Error: ' + error.message);
  }
}