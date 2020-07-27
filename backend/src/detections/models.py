from django.db import models

# Create your models here.


class Detection(models.Model):

    name = models.CharField(max_length=50)
    age = models.IntegerField(null=True)
    address = models.TextField(default="")
    description = models.TextField()

    def __str__(self):
        return self.name
