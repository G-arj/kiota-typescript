import { GraphServiceClient } from "../mail/graphServiceClient";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { Auth } from "./auth"
import { Message } from "../mail/models/microsoft/graph/message";
import { ItemBody } from "../mail/models/microsoft/graph/itemBody";


const core = new FetchRequestAdapter(new Auth());
const client = new GraphServiceClient(core);

async function getMessage() {
    // GET /users/{id | userPrincipalName}/messages
    const userRequestBuilder = client.usersById("813956a3-4a30-4596-914f-bfd86a657a09");
    const messageRequestBuilder = userRequestBuilder.messages;
    const message = messageRequestBuilder.get();
    console.log((await (message)).value);
}

getMessage().catch((e) => console.log(e));


async function post() {
    // GET /users/{id | userPrincipalName}/messages
    const userRequestBuilder = client.usersById("813956a3-4a30-4596-914f-bfd86a657a09");
    const messagesRequestBuilder = userRequestBuilder.messages;
    const message = new Message();
    message.subject = "test subject";
    const itemBody: ItemBody = new ItemBody();
   // itemBody.content = JSON.stringify({});
    const post = await messagesRequestBuilder.post(message);


    console.log((await (post)).subject);
}