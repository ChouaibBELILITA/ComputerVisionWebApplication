from rest_framework import serializers
from detections.models import Detection


class DetectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detection
        fields = ('id', 'name', 'age', 'description')
