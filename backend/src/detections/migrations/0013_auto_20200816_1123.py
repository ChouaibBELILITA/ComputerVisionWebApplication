# Generated by Django 3.0.8 on 2020-08-16 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('detections', '0012_auto_20200816_1120'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='date',
            field=models.DateField(auto_now=True),
        ),
    ]
