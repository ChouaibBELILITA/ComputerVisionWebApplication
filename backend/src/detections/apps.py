import threading
import sys
from streaming.server import run
import random

import asyncio
from django.apps import AppConfig


def lunch():
    global lancer

    lancer = True


def thr(i):
    # we need to create a new loop for the thread, and set it as the 'default'
    # loop that will be returned by calls to asyncio.get_event_loop() from this
    # thread.
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    loop.run_until_complete(run(i))
    loop.close()


def main():

    t = threading.Thread(target=thr, args=(0,), daemon=True)
              
    t.start() 
    lunch()


class DetectionsConfig(AppConfig):
    name = 'detections'
    verbose_name = "My Application"

    def ready(self):

        if 'runserver' not in sys.argv:
            return True
        # you must import your modules here
        # to avoid AppRegistryNotReady exception
        
       

        #####  from .models import MyModel

        # startup code here

        main()
