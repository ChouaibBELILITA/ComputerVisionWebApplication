from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from django.contrib.auth.models import User
from rest_framework.generics import ListAPIView, RetrieveAPIView
from detections.models import Person
from .serializers import PersonSerializer, PersonDetailSerializer, PersonPerYearSerializer, PersonPerMonthSerializer, PersonPerDaySerializer, PersonPerYearAgeSerializer, PersonPerMonthAgeSerializer, PersonPerDayAgeSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.shortcuts import get_object_or_404
from django.db.models import Count, Q

# person details


class personListView(ListAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class personDetailView(RetrieveAPIView):

    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class personDetailPerMonthListView(ListAPIView):
    def get_queryset(self):
        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month']))
    serializer_class = PersonDetailSerializer


class personDetailPerDayListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month']) & Q(detections__video__date__day=self.kwargs['day']))

    serializer_class = PersonDetailSerializer


class personDetailPerHourListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(Q(detections__video__date__year=self.kwargs['year']) & Q(detections__video__date__month=self.kwargs['month']) & Q(detections__video__date__day=self.kwargs['day']) & Q(detections__video__time__hour=self.kwargs['hour']))

    serializer_class = PersonDetailSerializer


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


class detectionListView(ListAPIView):
    queryset = Person.objects.filter()
    serializer_class = PersonSerializer


class detectionDetailView(RetrieveAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
