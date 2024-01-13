#this version is used if you want to use the version 2 of DVC

import cv2

# Open a connection to the camera

camera = cv2.VideoCapture(0)

# Get the dimensions of the frames in the video stream

frame_width = int(camera.get(3))

frame_height = int(camera.get(4))

# Start recording

while True:

    # Capture a frame from the camera

    ret, frame = camera.read()

    # Write the frame to the video file

    # Display the frame on the screen

    cv2.imshow("Camera", frame)

    # Break the loop if the 'q' key is pressed

    if cv2.waitKey(1) & 0xFF == ord('q'):

        break

# Release the camera and close the window

camera.release()

cv2.destroyAllWindows()