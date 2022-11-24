const ws = "ws://34.172.137.39:5000"

class WsClient {
    connection!: WebSocket;
    constructor(token: string, v: any) {
        this.connect(token, v)
    }

    connect(token: string, v: any) {
        this.connection = new WebSocket(ws);
        let w = this
        this.connection.onopen = async function () {
            await w.authenticate(token)
            console.log("WebSocket Connection Opened");
            await w.subscribe("sitting_posture");
        }
        this.connection.onmessage = function (event: any) {
            w.msgHanlder(event, v)
        }
        this.connection.onclose = function () {
            console.log("WebSocket Connection Closed");
        }
        this.connection.onerror = function (err: any) {
            console.log("WebSocket Connection Error", err.message, "Closing socket")
            w.connection.close()
            setTimeout(function () {
                w.connect(token, v)
            }, 1000)
        }
    }

    close() {
        this.connection.close()
    }

    async authenticate(token: string) {
        this.connection.send(JSON.stringify({ "type": "authenticate", "token": token }))
    }

    async subscribe(channel: string) {
        this.connection.send(JSON.stringify({ "type": "subscribe", "channel": channel }))
    }

    msgHanlder(event: any, v: any) {
        try {
            let dic = JSON.parse(event.data)
            if (dic.channel) {
                switch (dic.channel) {
                    case "sitting_posture":
                        delete dic.channel
                        v.Posture = dic.posture
                        break
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default WsClient