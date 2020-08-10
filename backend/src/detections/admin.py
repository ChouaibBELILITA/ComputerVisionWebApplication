from django.contrib import admin
from .models import Detections, Person, Video, Camera
# Register your models here.


admin.site.register(Person)
admin.site.register(Video)
admin.site.register(Camera)
admin.site.register(Detections)
