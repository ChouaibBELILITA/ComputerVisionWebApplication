from django.urls import path
from .views import detectionDetailView, detectionListView
urlpatterns = [
    path('', detectionListView.as_view()),
    path('<pk>', detectionDetailView.as_view())
]
