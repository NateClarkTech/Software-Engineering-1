# Generated by Django 5.0.2 on 2024-02-22 05:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('calendarapp', '0007_remove_calendarevent_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='calendarevent',
            name='group',
        ),
    ]
