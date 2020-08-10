from django.urls import path
from .views import personDetailView, personListView, personPerMonthListView
urlpatterns = [
    path('persons', personListView.as_view()),
    path('persons/<pk>', personDetailView.as_view()),

    path('months/<int:year>/',
         personPerMonthListView.as_view()),
    # lookup_field='detections__video__date__month'
    path('monthscount/', personPerMonthListView.as_view()),


    path('days/<day>', personPerMonthListView.as_view()),
    path('dayscount/', personPerMonthListView.as_view()),

    path('personvideos/<pk>', personPerMonthListView.as_view()),
    path('personstats/<pk>', personPerMonthListView.as_view()),

    path('genderstats/<gender>', personPerMonthListView.as_view()),
    path('agestats/<age>', personPerMonthListView.as_view()),


]
