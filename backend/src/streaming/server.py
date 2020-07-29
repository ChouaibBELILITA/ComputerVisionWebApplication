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


class VideoCamera(object):
    def __init__(self):
        path = os.path.join(dir_path, ('video2.mp4'))
        self.video = cv2.VideoCapture(path)

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


def run(i):
    start_server = websockets.serve(time, "127.0.0.1", 5678+i)
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()
