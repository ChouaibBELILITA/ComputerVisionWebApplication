import sys
from streaming.server import run
import random

import asyncio
from django.apps import AppConfig

global lancer
lancer = False


def lunch():
    global lancer
    print(lancer)
    lancer = True

import threading
def thr(i):
    # we need to create a new loop for the thread, and set it as the 'default'
    # loop that will be returned by calls to asyncio.get_event_loop() from this
    # thread.
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    loop.run_until_complete(run(i))
    loop.close()


def main():
    num_threads = 3
    threads = [threading.Thread(target=thr, args=(i,), daemon=True)
               for i in range(num_threads)]
    [t.start() for t in threads]
    lunch()
    print("byebye")


class DetectionsConfig(AppConfig):
    name = 'detections'
    verbose_name = "My Application"

    def ready(self):
        if 'runserver' not in sys.argv:
            return True
        # you must import your modules here
        # to avoid AppRegistryNotReady exception

        #####  from .models import MyModel

        # startup code he
        if lancer == False:
            main()
