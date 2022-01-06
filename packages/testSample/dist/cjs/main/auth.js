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
exports.Auth = void 0;
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
class Auth extends kiota_abstractions_1.BaseBearerTokenAuthenticationProvider {
    constructor() {
        super(...arguments);
        this.getAuthorizationToken = () => __awaiter(this, void 0, void 0, function* () {
            // copy token from GE
            const token = "eyJ0eXAiOiJKV1QiLCJub25jZSI6IjJyN3RKVlh3WmhvdmNXc3BVamVYRXQ4dHl1MWdLVENGR2NCMUVkX2RPU0EiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNGNjN2E0Mi0zYzQ0LTQ0ZjMtYWFmMy02NjYzMDJhZWFiMDgvIiwiaWF0IjoxNjQxNDQyNzA1LCJuYmYiOjE2NDE0NDI3MDUsImV4cCI6MTY0MTQ0NjcxOCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkUyWmdZT0RLbUwrQ0srb216NFJRMDdrTlIzOWRqSmFzY2JINDlmYVMyckhnQ2Z6Lzgwc0EiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkNoZXR0aWFyIiwiZ2l2ZW5fbmFtZSI6ImUyMzkxYiIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjczLjE2OS4xNDguNzIiLCJuYW1lIjoiTmlraXRoYSBVZGF5a3VtYXIgQ2hldHRpYXIiLCJvaWQiOiI4MTM5NTZhMy00YTMwLTQ1OTYtOTE0Zi1iZmQ4NmE2NTdhMDkiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDBEMjg0RkFDQSIsInJoIjoiMC5BVmtBUW5yTTFFUTg4MFNxODJaakFxNnJDTFhJaTk3NTJiRklxSzIzU05weVVHUlpBQlUuIiwic2NwIjoiQ2FsZW5kYXJzLlJlYWQgQ2FsZW5kYXJzLlJlYWRXcml0ZSBDb250YWN0cy5SZWFkIENvbnRhY3RzLlJlYWRXcml0ZSBEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBEaXJlY3RvcnkuUmVhZC5BbGwgRGlyZWN0b3J5LlJlYWRXcml0ZS5BbGwgRW50aXRsZW1lbnRNYW5hZ2VtZW50LlJlYWRXcml0ZS5BbGwgRmlsZXMuUmVhZCBGaWxlcy5SZWFkLkFsbCBGaWxlcy5SZWFkV3JpdGUgRmlsZXMuUmVhZFdyaXRlLkFsbCBHcm91cC5SZWFkLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIE1haWwuUmVhZCBNYWlsLlJlYWQuU2hhcmVkIE1haWwuUmVhZEJhc2ljIE1haWwuUmVhZFdyaXRlIE1haWwuUmVhZFdyaXRlLlNoYXJlZCBNYWlsLlNlbmQgTWFpbGJveFNldHRpbmdzLlJlYWRXcml0ZSBOb3Rlcy5DcmVhdGUgTm90ZXMuUmVhZCBOb3Rlcy5SZWFkLkFsbCBOb3Rlcy5SZWFkV3JpdGUgTm90ZXMuUmVhZFdyaXRlLkFsbCBvcGVuaWQgT3JnQ29udGFjdC5SZWFkLkFsbCBQZW9wbGUuUmVhZCBQZW9wbGUuUmVhZC5BbGwgUHJpbnRlci5GdWxsQ29udHJvbC5BbGwgUHJpbnRlci5SZWFkLkFsbCBQcmludGVyLlJlYWRXcml0ZS5BbGwgUHJpbnRlclNoYXJlLlJlYWQuQWxsIFByaW50ZXJTaGFyZS5SZWFkV3JpdGUuQWxsIHByb2ZpbGUgUmVwb3J0cy5SZWFkLkFsbCBTaXRlcy5GdWxsQ29udHJvbC5BbGwgU2l0ZXMuTWFuYWdlLkFsbCBTaXRlcy5SZWFkLkFsbCBTaXRlcy5SZWFkV3JpdGUuQWxsIFRhc2tzLlJlYWQgVGFza3MuUmVhZC5TaGFyZWQgVGFza3MuUmVhZFdyaXRlIFRhc2tzLlJlYWRXcml0ZS5TaGFyZWQgVXNlci5SZWFkIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoidG9waDEyYUVZMlpXOHdvczNZNjFpWlcyajlpNTVPa2tMWWRBT09idFpIcyIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6ImQ0Y2M3YTQyLTNjNDQtNDRmMy1hYWYzLTY2NjMwMmFlYWIwOCIsInVuaXF1ZV9uYW1lIjoibmNoZXR0aWFAZ3JhcGhqc2RlbW8ub25taWNyb3NvZnQuY29tIiwidXBuIjoibmNoZXR0aWFAZ3JhcGhqc2RlbW8ub25taWNyb3NvZnQuY29tIiwidXRpIjoiNUxpRE5tRFVkRW1xVkpzUzFqaFZBdyIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJNWkJUSUFQQWNLUTRPSkxuREdzRW5EZHoxNkFzNmZFLTJ0NWVfLTZDdVRJIn0sInhtc190Y2R0IjoxNTk1NTM0ODMxfQ.fGVXsSm1YxfU837gD22EFwyLdoj-hAA_KUcAyQP42RfD7UjGSbTuq1WAyeGBpn35dcZFiGlilWWPNrEqLpoiNhltLDRwfv2nh1fNFSkpDcpGj2jryfVM6Kxye9Qwua3jyQ5LiuqQ5KMeMRy0tmZ81NVThoR1ex0HArpZArfQDGqDBgJtwdWLHpApkjzq_fj7PPz6wgfZcJ2Pr75MMySg4g4IymM6Frlysp2aMSyEb4aslszh8qsJ5u_fYZoo4yntjDi36LscFXQx7-UgZ-Lmtve4kE6F7V0bTxbISmidHO8JSyZKBASCGM1k3B8ASmegXsdbnJoqZyQW2BnRHVsV7g";
            return Promise.resolve(token);
        });
    }
}
exports.Auth = Auth;
//# sourceMappingURL=auth.js.map