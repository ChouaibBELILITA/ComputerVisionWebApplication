# Generated by Django 3.0.8 on 2020-08-16 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('detections', '0011_remove_video_contientalert'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='time',
            field=models.TimeField(auto_now=True),
        ),
    ]
