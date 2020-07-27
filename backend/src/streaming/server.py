#!/usr/bin/env python
import random
import websockets
import asyncio
import os
import numpy as np
import cv2
import json

import base64


dir_path = os.path.dirname(os.path.realpath(__file__))
path = os.path.join(dir_path, 'video.mp4')
output_path = os.path.join(dir_path, os.path.join('media', 'dash.mpd'))

'''
video = ffmpeg_streaming.input(path)

dash = video.dash(Formats.h264())

dash.auto_generate_representations([1080, 720, 480])
dash.generate_hls_playlist()

dash.output(output_path)



_144p = Representation(Size(256, 144), Bitrate(95 * 1024, 64 * 1024))
_240p = Representation(Size(426, 240), Bitrate(150 * 1024, 94 * 1024))


dash = video.dash(Formats.h264())
dash.representations(_144p, _240p)

dash.output(output_path)


# WS server example


async def hello(websocket, path):
    name = await websocket.recv()
    print(f"< {name}")

    greeting = f"Hello {name}!"

    await websocket.send(greeting)
    print(f"> {greeting}")

start_server = websockets.serve(hello, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()'''

#!/usr/bin/env python

# WS server that sends messages at random intervals


class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture('video2.mp4')

    def __del__(self):
        self.video.release()

    def get_frame(self):
        while True:
            ret, image = self.video.read()
            ret, jpeg = cv2.imencode('.jpg', image)
            base6 = base64.b64encode(jpeg.tobytes())
            yield base6.decode('utf-8')


def gen(camera):
    dat = [{'id': 1, 'name': 'mahmoud'}, {'id': 2, 'name': 'chouaib'}]

    res_bytes = json.dumps(dat).encode('utf-8')

    while True:
        image = next(camera.get_frame())

        yield(image)


async def time(websocket, path):
    camera = VideoCamera()
    i = 0
    while True:
        i = i+1
        data = next(gen(camera))
        js = {'id': i, 'data': data}
        res_bytes = json.dumps(js).encode('utf-8')
        base6 = base64.b64encode(res_bytes)
        message = base6.decode('utf-8')

        await websocket.send(message)


start_server = websockets.serve(time, "127.0.0.1", 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
