# Generated by Django 3.0.8 on 2020-09-05 19:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('detections', '0021_auto_20200905_1902'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='video',
            options={'ordering': ['-date', '-time', 'camera']},
        ),
    ]