let client = AgoraRTC.createClient({ mode: 'rtc', codec: 'h264' });
let localStream;

document.getElementById('start-button').addEventListener('click', function() {
    client.init('db78689cec54407891da613394ab6edf', function() {
        client.join('007eJxTYDhjt/7xiiWM1V9sdm7ksVeK8X99q/cJ17VqM4Fl8g0bqzoUGFKSzC3MLCyTU5NNTUwMzC0sDVMSzQyNjS1NEpPMUlPS3h8+ntIQyMigwyXOwAiFID4rQ0lqcUkJAwMAkdYgBQ==', 'testt', null, function(uid) {
            localStream = AgoraRTC.createStream({ video: true, audio: true });
            localStream.init(function() {
                localStream.play('local-video');
                client.publish(localStream);
            });
        });
    });
});
