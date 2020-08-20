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
        fields = ('id', 'firstName', 'familyName', 'gender', 'age', )


class PersonDetailSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    firstName = serializers.CharField(
        required=False, allow_blank=True, max_length=100)
    familyName = serializers.CharField(
        required=False, allow_blank=True, max_length=100)
    age = serializers.IntegerField(allow_null=True)

    gender = serializers.ChoiceField(

        choices=GENDER,
        default="U",)

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Person.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.firstName = validated_data.get(
            'firstName', instance.firstName)
        instance.familyName = validated_data.get(
            'familyName', instance.familyName)
        instance.age = validated_data.get('age', instance.age)
        instance.Gender = validated_data.get('Gender', instance.Gender)
        instance.save()
        return instance


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

