# Generated by Django 3.0.8 on 2020-08-13 15:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('detections', '0007_auto_20200813_1555'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='time',
            field=models.TimeField(auto_now_add=True),
        ),
    ]
