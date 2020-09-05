from rest_framework import serializers
from detections.models import Person

GENDER = [
    ("M", 'Male'),
    ("F", 'Female'),
    ("U", 'UNKNOWN'),

]


class PersonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Person
        fields = ('id', 'firstName', 'familyName', 'gender',
                  'age',  'address', 'remark', 'picture')


class PersonPerMonthDetailSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    firstName = serializers.CharField(
        required=False, allow_blank=True, max_length=100)
    familyName = serializers.CharField(
        required=False, allow_blank=True, max_length=100)
    age = serializers.IntegerField(allow_null=True)

    gender = serializers.ChoiceField(

        choices=GENDER,
        default="U",)
    picture = serializers.ImageField()


class VideosPerPersonMonthDetailSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)

    persons = serializers.IntegerField(
        source='detections__count', read_only=True)

    date = serializers.DateField()
    time = serializers.TimeField()
    videopath = serializers.FileField()


class TimeLineSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    year = serializers.IntegerField(
        source='video__date__year', allow_null=True)
    month = serializers.IntegerField(
        source='video__date__month', allow_null=True)
    day = serializers.IntegerField(
        source='video__date__day', allow_null=True)
    hour = serializers.IntegerField(
        source='video__time__hour', allow_null=True)
    suspect = serializers.BooleanField()
    camera = serializers.IntegerField(
        source='video__camera__camid', allow_null=True)


class PersonDetectonCountSerializer(serializers.Serializer):
    month = serializers.IntegerField(
        source='video__date__month', allow_null=True)
    detection_numbers = serializers.IntegerField(
        source='id__count', read_only=True)
    suspect = serializers.BooleanField()


class PersonPerDayDetailSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    firstName = serializers.CharField(
        required=False, allow_blank=True, max_length=100)
    familyName = serializers.CharField(
        required=False, allow_blank=True, max_length=100)
    age = serializers.IntegerField(allow_null=True)

    gender = serializers.ChoiceField(

        choices=GENDER,
        default="U",)
    # hour = serializers.IntegerField(
    #     source='detections__video__time__hour', allow_null=True)


class personDetectionPerMonthDetailSerializer(serializers.Serializer):
    day = serializers.IntegerField(
        source='detections__video__date__day', allow_null=True)
    detection_numbers = serializers.IntegerField(
        source='detections__video__id__count', read_only=True)


class personDetectionPerDayDetailSerializer(serializers.Serializer):
    hour = serializers.IntegerField(
        source='detections__video__time__hour', allow_null=True)
    detection_numbers = serializers.IntegerField(
        source='detections__video__id__count', read_only=True)


class personDetectionPerYearDetailSerializer(serializers.Serializer):
    month = serializers.IntegerField(
        source='detections__video__date__month', allow_null=True)
    detection_numbers = serializers.IntegerField(
        source='detections__video__id__count', read_only=True)


class PersonPerHourDetailSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    firstName = serializers.CharField(
        required=False, allow_blank=True, max_length=100)
    familyName = serializers.CharField(
        required=False, allow_blank=True, max_length=100)
    age = serializers.IntegerField(allow_null=True)

    gender = serializers.ChoiceField(

        choices=GENDER,
        default="U",)


# gender

class PersonPerYearSerializer(serializers.Serializer):

    month = serializers.IntegerField(
        source='detections__video__date__month', allow_null=True)

    person_number = serializers.IntegerField(
        source='id__count', read_only=True)
    gender = serializers.ChoiceField(

        choices=GENDER,
        default="U",)


class PersonPerMonthSerializer(serializers.Serializer):

    day = serializers.IntegerField(
        source='detections__video__date__day', allow_null=True)
    person_numbers = serializers.IntegerField(
        source='id__count', read_only=True)
    gender = serializers.ChoiceField(

        choices=GENDER,
        default="U",)


class PersonPerDaySerializer(serializers.Serializer):

    hour = serializers.IntegerField(
        source='detections__video__time__hour', allow_null=True)
    person_numbers = serializers.IntegerField(
        source='id__count', read_only=True)
    gender = serializers.ChoiceField(

        choices=GENDER,
        default="U",)


# -------------------------------------------------age-------------------
class PersonPerYearAgeSerializer(serializers.Serializer):

    month = serializers.IntegerField(
        source='detections__video__date__month', allow_null=True)

    person_number = serializers.IntegerField(
        source='id__count', read_only=True)


class PersonPerMonthAgeSerializer(serializers.Serializer):

    day = serializers.IntegerField(
        source='detections__video__date__day', allow_null=True)
    person_numbers = serializers.IntegerField(
        source='id__count', read_only=True)


class PersonPerDayAgeSerializer(serializers.Serializer):

    hour = serializers.IntegerField(
        source='detections__video__time__hour', allow_null=True)
    person_numbers = serializers.IntegerField(
        source='id__count', read_only=True)


class GenderPerMonthSerializer(serializers.Serializer):

    month = serializers.IntegerField(
        source='detections__video__date__month', allow_null=True)
    gender = serializers.ChoiceField(

        choices=GENDER,
        default="U",)
    person_numbers = serializers.IntegerField(
        source='id__count', read_only=True)


class CountSerializer(serializers.Serializer):

    person_numbers = serializers.IntegerField(
        source='id__count', read_only=True)
