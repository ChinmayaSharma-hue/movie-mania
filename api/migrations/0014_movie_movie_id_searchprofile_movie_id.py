# Generated by Django 4.0.6 on 2022-07-09 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_remove_movie_cast_and_crew'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='movie_id',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='searchprofile',
            name='movie_id',
            field=models.IntegerField(null=True),
        ),
    ]