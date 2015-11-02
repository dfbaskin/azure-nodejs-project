
import app from "./server/routes";

let portNum = process.env.PORT || 9009;
let server = app.listen(portNum, () => {
    console.log("Listening on port %d", portNum);
});
