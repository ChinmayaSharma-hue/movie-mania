# Generated by Django 4.0.6 on 2022-07-09 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_searchprofile'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='cast_and_crew',
            field=models.JSONField(default=dict),
        ),
    ]