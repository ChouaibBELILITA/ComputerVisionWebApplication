from rest_framework.views import APIView
from rest_framework import viewsets


from rest_framework.response import Response
from rest_framework.request import Request
from django.contrib.auth.models import User
from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView, CreateAPIView, DestroyAPIView
from detections.models import Person, Detections, Video
from .serializers import PersonSerializer, PersonPerDayDetailSerializer, PersonPerMonthDetailSerializer, PersonPerYearSerializer, PersonPerMonthSerializer, PersonPerDaySerializer, PersonPerYearAgeSerializer, PersonPerMonthAgeSerializer, PersonPerDayAgeSerializer, CountSerializer, personDetectionPerMonthDetailSerializer, personDetectionPerDayDetailSerializer, personDetectionPerYearDetailSerializer, TimeLineSerializer, PersonDetectonCountSerializer, VideosPerPersonMonthDetailSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.shortcuts import get_object_or_404
from django.db.models import Count, Q
from django.utils import timezone
# person details


class personListView(ListAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class personViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class VideosPerPersonMonthDetailView(ListAPIView):
    def get_queryset(self):
        return Video.objects.annotate(Count('detections')).filter(Q(detections__person__id=self.kwargs['id']) & Q(date__year=self.kwargs['year']))
    serializer_class = VideosPerPersonMonthDetailSerializer


class VideosPerMonthDetailView(ListAPIView):
    def get_queryset(self):
        return Video.objects.annotate(Count('detections')).filter(Q(date__year=self.kwargs['year']))
    serializer_class = VideosPerPersonMonthDetailSerializer


class persontimelineListView(ListAPIView):
    def get_queryset(self):
        return Detections.objects.filter(Q(person__id=self.kwargs['id']) & Q(video__date__year=self.kwargs['year'])).values('id', 'video__date__year', 'video__date__month', 'video__date__day', 'video__time__hour', 'suspect', 'video__camera__camid')
    serializer_class = TimeLineSerializer


class personTotalListView(ListAPIView):
    def get_queryset(self):
        return Detections.objects.filter(Q(person__id=self.kwargs['id']) & Q(video__date__year=self.kwargs['year'])).values('video__date__month', 'suspect').annotate(Count('id'))
    serializer_class = PersonDetectonCountSerializer


class personDetailPerMonthListView(ListAPIView):
    def get_queryset(self):
        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month']))
    serializer_class = PersonPerMonthDetailSerializer


class personDetailPerDayListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month']) & Q(detections__video__date__day=self.kwargs['day']))

    serializer_class = PersonPerMonthDetailSerializer


class personDetectionPerMonthDetailListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month']) & Q(id=self.kwargs['id'])).values("detections__video__date__day").annotate(Count("detections__video__id"))

    serializer_class = personDetectionPerMonthDetailSerializer


class personDetectionPerDayDetailListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month']) & Q(detections__video__date__day=self.kwargs['day']) & Q(id=self.kwargs['id'])).values("detections__video__time__hour").annotate(Count("detections__video__id"))

    serializer_class = personDetectionPerDayDetailSerializer


class personDetectionPerYearDetailListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(id=self.kwargs['id'])).values("detections__video__date__month").annotate(Count("detections__video__id"))

    serializer_class = personDetectionPerYearDetailSerializer

# class personDetailPerHourListView(ListAPIView):
#     def get_queryset(self):

#         return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month']) & Q(detections__video__date__day=self.kwargs['day']) & Q(detections__video__time__hour=self.kwargs['hour']))

#     serializer_class = PersonDetailSerializer

# person count


class personPerYearCountListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(detections__video__date__year=self.kwargs['year']).values("detections__video__date__year").annotate(Count("id"))

    serializer_class = CountSerializer


class personPerMonthCountListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month'])).values("detections__video__date__year", "detections__video__date__month").annotate(Count("id"))

    serializer_class = CountSerializer


class personPerDayCountListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month']) & Q(detections__video__date__day=self.kwargs['day'])).values("detections__video__date__year", "detections__video__date__month", "detections__video__date__day").annotate(Count("id"))

    serializer_class = CountSerializer


# suspect
class SuspectPersonPerYearCountListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__suspect=True), Q(detections__video__date__year=self.kwargs['year'])).values("detections__video__date__year").annotate(Count("id"))

    serializer_class = CountSerializer


class SuspectPersonPerMonthCountListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__suspect=True), Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month'])).values("detections__video__date__year", "detections__video__date__month").annotate(Count("id"))

    serializer_class = CountSerializer


class SuspectPersonPerDayCountListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__suspect=True), Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month']) & Q(detections__video__date__day=self.kwargs['day'])).values("detections__video__date__year", "detections__video__date__month", "detections__video__date__day").annotate(Count("id"))

    serializer_class = CountSerializer

    # lasthours


# person count by gender


class personPerYearListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(detections__video__date__year=self.kwargs['year']).values("detections__video__date__month", "gender").annotate(Count("id"))

    serializer_class = PersonPerYearSerializer


class personPerMonthListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month'])).values("detections__video__date__day", "gender").annotate(Count("id"))

    serializer_class = PersonPerMonthSerializer


class personPerDayListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month']) & Q(detections__video__date__day=self.kwargs['day'])).values("detections__video__time__hour", "gender").annotate(Count("id"))

    serializer_class = PersonPerDaySerializer

# person count by age


class personPerYearAgeListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(age__gt=self.kwargs['min']) & Q(age__lt=self.kwargs['max'])).values("detections__video__date__month",).annotate(Count("id"))

    serializer_class = PersonPerYearAgeSerializer


class personPerMonthAgeListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month']) & Q(age__gt=self.kwargs['min']) & Q(age__lt=self.kwargs['max'])).values("detections__video__date__day").annotate(Count("id"))

    serializer_class = PersonPerMonthAgeSerializer


class personPerDayAgeListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month']) & Q(detections__video__date__day=self.kwargs['day']) & Q(age__gt=self.kwargs['min']) & Q(age__lt=self.kwargs['max'])).values("detections__video__time__hour").annotate(Count("id"))

    serializer_class = PersonPerDayAgeSerializer
