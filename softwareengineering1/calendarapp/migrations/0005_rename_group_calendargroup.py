# Generated by Django 5.0.2 on 2024-02-19 22:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('calendarapp', '0004_group_group_type'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Group',
            new_name='CalendarGroup',
        ),
    ]
