# Generated by Django 3.0.8 on 2020-08-13 16:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('detections', '0008_auto_20200813_1555'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='video',
            name='persons',
        ),
        migrations.DeleteModel(
            name='Detections',
        ),
    ]
