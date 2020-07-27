from rest_framework.generics import ListAPIView, RetrieveAPIView
from detections.models import Detection
from .serializers import DetectionSerializer


class detectionListView(ListAPIView):
    queryset = Detection.objects.all()
    serializer_class = DetectionSerializer


class detectionDetailView(RetrieveAPIView):
    queryset = Detection.objects.all()
    serializer_class = DetectionSerializer
