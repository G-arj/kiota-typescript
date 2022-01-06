"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphServiceClient_1 = require("../mail/graphServiceClient");
const kiota_http_fetchlibrary_1 = require("@microsoft/kiota-http-fetchlibrary");
const auth_1 = require("./auth");
const message_1 = require("../mail/models/microsoft/graph/message");
const itemBody_1 = require("../mail/models/microsoft/graph/itemBody");
const core = new kiota_http_fetchlibrary_1.FetchRequestAdapter(new auth_1.Auth());
const client = new graphServiceClient_1.GraphServiceClient(core);
function getMessage() {
    return __awaiter(this, void 0, void 0, function* () {
        // GET /users/{id | userPrincipalName}/messages
        const userRequestBuilder = client.usersById("813956a3-4a30-4596-914f-bfd86a657a09");
        const messageRequestBuilder = userRequestBuilder.messages;
        const message = messageRequestBuilder.get();
        console.log((yield (message)).value);
    });
}
getMessage().catch((e) => console.log(e));
function post() {
    return __awaiter(this, void 0, void 0, function* () {
        // GET /users/{id | userPrincipalName}/messages
        const userRequestBuilder = client.usersById("813956a3-4a30-4596-914f-bfd86a657a09");
        const messagesRequestBuilder = userRequestBuilder.messages;
        const message = new message_1.Message();
        message.subject = "test subject";
        const itemBody = new itemBody_1.ItemBody();
        // itemBody.content = JSON.stringify({});
        const post = yield messagesRequestBuilder.post(message);
        console.log((yield (post)).subject);
    });
}
//# sourceMappingURL=main.js.map