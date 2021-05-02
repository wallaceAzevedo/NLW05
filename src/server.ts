import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3333, () => console.log("server is running on port 3333"));

//ok aula 5 28mn