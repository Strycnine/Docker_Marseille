# Generated by Django 4.0 on 2021-12-17 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Upload_CSV', '0003_rename_data_fin_prog_immo_date_fin_prog'),
    ]

    operations = [
        migrations.AlterField(
            model_name='immo',
            name='date_extraction',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='immo',
            name='date_fin_prog',
            field=models.CharField(max_length=20),
        ),
    ]