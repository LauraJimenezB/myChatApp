import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5000")
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Information)
    .build();

export default connection;
