# Generated by Django 4.1 on 2023-05-01 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='order_id',
            field=models.CharField(default='adcab75c', max_length=10, unique=True),
        ),
    ]