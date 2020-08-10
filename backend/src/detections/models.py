from django.db import models

# Create your models here.


class Person(models.Model):

    firstName = models.CharField(blank=True, max_length=100)
    familyName = models.CharField(blank=True, max_length=100)
    age = models.IntegerField(null=True)
    GENDER = [
        ("M", 'Male'),
        ("F", 'Female'),
        ("U", 'UNKNOWN'),

    ]
    gender = models.CharField(
        max_length=2,
        choices=GENDER,
        default="U",
    )

    # face_Descriptor = models.TextField(default="")
    # Danger_degree = models.TextField()

    def __str__(self):
        return str(self.pk)+" :"+self.familyName+" "+self.firstName


class Camera(models.Model):

    camid = models.SmallIntegerField(blank=False, null=True)
    location = models.CharField(default="", max_length=70)
    camModel = models.CharField(default="", max_length=50)

    def __str__(self):
        return str(self.pk)+" "+self.location


class Video(models.Model):
    camera = models.ForeignKey(
        Camera, verbose_name=u'Camera', null=True, on_delete=models.SET_NULL)
    persons = models.ManyToManyField(
        Person, verbose_name=u'Detections', through='Detections')

    date = models.DateField(auto_now=False, auto_now_add=True)
    time = models.TimeField(auto_now=False, auto_now_add=True)
    contientAlert = models.BooleanField(default=False)
    '''
    chemin = models.models.FilePathField(
        path=None, match=None, recursive='recursive', max_length=100)
    '''

    def __str__(self):
        return str(self.pk)


class Detections(models.Model):
    person = models.ForeignKey(
        Person, verbose_name=u'Person', on_delete=models.CASCADE)
    video = models.ForeignKey(
        Video, null=True, verbose_name=u'Video', on_delete=models.SET_NULL)

    suspect = models.BooleanField(default=False)

    def __str__(self):
        return str(self.video.date)+"__"+str(self.video.time.hour)+":"+str(self.video.time.minute)+"  : "+self.person.familyName+" "+self.person.firstName


'''
Queries:
p=Person.objects.all()   // .count()
v=video.objects.all()
--- p.filter(detections__video__date__month=8)  
--- v.filter(detections__person__pk=1)
---- seria=PersonDetailSerializer (p.filter(detections__suspect=True)[0])


'''
