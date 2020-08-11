from django.urls import path
from .views import personDetailView, personListView, personPerYearListView, personPerMonthListView, personDetailPerDayListView, personDetailPerMonthListView, personPerDayListView, personDetailPerHourListView, personPerYearAgeListView, personPerMonthAgeListView, personPerDayAgeListView
urlpatterns = [
    # ----------------------------------------- person details---------------------------------
    path('persons', personListView.as_view()),
    path('persons/<pk>', personDetailView.as_view()),
    path('details/<int:year>/<int:month>/',
         personDetailPerMonthListView.as_view()),
    path('details/<int:year>/<int:month>/<int:day>/',
         personDetailPerDayListView.as_view()),
    path('details/<int:year>/<int:month>/<int:day>/<int:hour>',
         personDetailPerHourListView.as_view()),
    # --------------------------------------counting per dates and gender-----------------------
    #

    path('gender/<int:year>/', personPerYearListView.as_view()),
    # lookup_field='detections__video__date__month'

    path('gender/<int:year>/<int:month>/', personPerMonthListView.as_view()),
    path('gender/<int:year>/<int:month>/<int:day>/',
         personPerDayListView.as_view()),


    path('gender/<int:year>/<int:month>/<int:day>/',
         personPerDayListView.as_view()),

    # --------------------------------------counting per dates and Age-----------------------
    path('age/year/<int:year>/<int:min>/<int:max>',
         personPerYearAgeListView.as_view()),
    path('age/month/<int:year>/<int:month>/<int:min>/<int:max>',
         personPerMonthAgeListView.as_view()),
    path('age/day/<int:year>/<int:month>/<int:day>/<int:min>/<int:max>',
         personPerDayAgeListView.as_view()),









    path('days/<day>', personPerMonthListView.as_view()),
    path('dayscount/', personPerMonthListView.as_view()),

    path('personvideos/<pk>', personPerMonthListView.as_view()),
    path('personstats/<pk>', personPerMonthListView.as_view()),

    path('genderstats/<gender>', personPerMonthListView.as_view()),
    path('agestats/<age>', personPerMonthListView.as_view()),


]
