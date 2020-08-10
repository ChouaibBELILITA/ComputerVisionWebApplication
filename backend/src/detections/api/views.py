from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from django.contrib.auth.models import User
from rest_framework.generics import ListAPIView, RetrieveAPIView
from detections.models import Person
from .serializers import PersonSerializer, PersonDetailSerializer, PersonPerMonthSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.shortcuts import get_object_or_404
from django.db.models import Count


class personListView(ListAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class personDetailView(RetrieveAPIView):

    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class personPerMonthListView(ListAPIView):
    def get_queryset(self):

        return Person.objects.filter(detections__video__date__year=self.kwargs['year']).values("detections__video__date__month").annotate(Count("id"))

    serializer_class = PersonPerMonthSerializer

    '''
    contest = Contest.objects.get(pk=contest_id)
    votes   = contest.votes_set.select_related()

    vote_counts = {}

    for vote in votes:
    if not vote_counts.has_key(vote.item.id):
        vote_counts[vote.item.id] = {
        'item': vote.item,
        'count': 0
        }

    vote_counts[vote.item.id]['count'] += 1
   '''


class detectionListView(ListAPIView):
    queryset = Person.objects.filter()
    serializer_class = PersonSerializer


class detectionDetailView(RetrieveAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
