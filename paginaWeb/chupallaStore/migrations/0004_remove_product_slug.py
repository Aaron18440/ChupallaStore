# Generated by Django 3.1.2 on 2020-11-12 09:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chupallaStore', '0003_auto_20201112_0603'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='slug',
        ),
    ]
