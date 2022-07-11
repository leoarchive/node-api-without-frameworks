export const getBody = (req) => new Promise((resolve, reject) => {
    try {
        let body = "";
        req.on("data", (chunk) => {
            body = JSON.parse(chunk.toString());
        });
        req.on("end", () => {
            resolve(body);
        });
    } catch (error) {
        reject(error);
    }
  });

