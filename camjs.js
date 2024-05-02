let videoStream;

    function startCamera() {
        const selectedCamera = document.getElementById('cameraSelector').value;

        const constraints = {
            video: { deviceId: selectedCamera ? { exact: selectedCamera } : undefined }
        };

        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (stream) {
                videoStream = stream;
                var videoElement = document.getElementById('videoElement');
                videoElement.srcObject = stream;
            })
            .catch(function (error) {
                console.log("Error accessing video device: ", error);
            });
    }

    function stopCamera() {
        if (videoStream) {
            var tracks = videoStream.getTracks();
            tracks.forEach(track => track.stop());
            var videoElement = document.getElementById('videoElement');
            videoElement.srcObject = null;
        }
    }

    
    navigator.mediaDevices.enumerateDevices()
        .then(function (devices) {
            const cameraSelector = document.getElementById('cameraSelector');
            devices.forEach(function (device) {
                if (device.kind === 'videoinput') {
                    const option = document.createElement('option');
                    option.value = device.deviceId;
                    option.text = device.label || `Camera ${cameraSelector.length + 1}`;
                    cameraSelector.add(option);
                }
            });
        })
        .catch(function (error) {
            console.log("Error enumerating devices: ", error);
        });