# Generated by Django 3.0.8 on 2020-09-04 14:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('detections', '0019_auto_20200904_1259'),
    ]

    operations = [
        migrations.RenameField(
            model_name='video',
            old_name='videoPath',
            new_name='videopath',
        ),
    ]
