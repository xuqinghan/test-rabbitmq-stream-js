import { Client, Message } from '../assets/stomp.umd.min.js'

console.log("hello world stream")

const client = new Client({
    brokerURL: 'ws://127.0.0.1:15674/ws',
    connectHeaders: {
        login: 'guest',
        passcode: 'guest'
    },
    debug: function (str) {
        console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
})


client.onConnect = function (frame) {

    console.log('Connected');

    let callback = function (message) {
        const msg = message.body
        console.log('callback ', msg);
        message.ack()
    }

    var subscription = client.subscribe(
        //"/amq/queue/mystream", //created via rstream demo                        error
        "/amq/queue/mystream_pika", //created via pika                           OK
        //"/amq/queue/s_test",  // created via http://127.0.0.1:15672/#/queues   OK
        callback,
        {
            'ack': 'client-individual',
            'durable': true,
            'auto-delete': false,
            'x-queue-type': 'stream',
            'prefetch-count': 10,
            'x-stream-offset': 'first'
        })
}

client.activate()
