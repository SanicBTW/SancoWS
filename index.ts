import { WebSocketServer, WebSocket } from 'ws';
import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, "files");
const wss = new WebSocketServer(({port: 6543}));

wss.on('connection', (ws:WebSocket) =>
{
    console.log('Connection!');
    let args:Array<string> = (ws.protocol != undefined ? ws.protocol : "noProtocol").split("_");

    switch (args[0].toLowerCase())
    {
        default:
            console.log(args[0] + " not recognized");
            break;
        case "getf":
            var file = path.join(filePath, args[1]);
            fs.readFile(file, (errshit, data) => ws.send(data));
            break;
    }

    ws.on('close', (errC) => 
    {
        console.log(`Connection closed.\nError code ${errC}`);
    });

});

console.log("Listening on port 6543");
