let io;

module.exports = {
    init: httpServer => {
        io = require("socket.io")(httpServer, {
            cors: {
              origin: "http://localhost:3000",
              methods: ["GET", "POST"],
              transports: ['websocket', 'polling'],
              credentials: true
          },
          allowEIO3: true
          });
        return io;
    },
    getIO: () => {
        if (!io) {
            //this error will be caught by the catch block in the place it was called
            throw new Error('Socket.io not initialized!');
    }
    return io;
  }
};



