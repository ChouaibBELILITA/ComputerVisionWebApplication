# Generated by Django 3.0.8 on 2020-07-24 22:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('detections', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='detection',
            old_name='dscription',
            new_name='description',
        ),
    ]
