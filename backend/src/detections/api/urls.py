from django.urls import path
from .views import personViewSet, personListView, personPerYearListView, personPerMonthListView, personDetailPerDayListView, personDetailPerMonthListView, personPerDayListView, personPerYearAgeListView, personPerMonthAgeListView, personPerDayAgeListView, personPerDayCountListView, personPerMonthCountListView, personPerYearCountListView, SuspectPersonPerYearCountListView, SuspectPersonPerMonthCountListView, SuspectPersonPerDayCountListView, personDetectionPerMonthDetailListView, personDetectionPerDayDetailListView, personDetectionPerYearDetailListView, persontimelineListView, personTotalListView

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'persons', personViewSet, basename='personضس')
urlpatterns = router.urls
urlpatterns += [


    # ----------------------------------------- person details---------------------------------



    path('details/<int:year>/<int:month>/',
         personDetailPerMonthListView.as_view()),
    path('timeline/<int:id>/<int:year>/',
         persontimelineListView.as_view()),

    path('persontotal/<int:id>/<int:year>',
         personTotalListView.as_view()),




    path('details/<int:year>/<int:month>/<int:day>/',
         personDetailPerDayListView.as_view()),
    #     path('details/<int:year>/<int:month>/<int:day>/<int:hour>',
    #          personDetailPerHourListView.as_view()),
    path('persondetails/month/<int:id>/<int:year>/<int:month>/',
         personDetectionPerMonthDetailListView.as_view()),
    path('persondetails/day/<int:id>/<int:year>/<int:month>/<int:day>',
         personDetectionPerDayDetailListView.as_view()),
    path('persondetails/year/<int:id>/<int:year>/',
         personDetectionPerYearDetailListView.as_view()),
    # ----------------------------------------counting total ---------------------------------
    path('count/<int:year>/',
         personPerYearCountListView.as_view()),
    path('count/<int:year>/<int:month>/',
         personPerMonthCountListView.as_view()),
    path('count/<int:year>/<int:month>/<int:day>/',
         personPerDayCountListView.as_view()),

    # suspect

    path('count/suspect/<int:year>/',
         SuspectPersonPerYearCountListView.as_view()),
    path('count/suspect/<int:year>/<int:month>/',
         SuspectPersonPerMonthCountListView.as_view()),
    path('count/suspect/<int:year>/<int:month>/<int:day>/',
         SuspectPersonPerDayCountListView.as_view()),






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
