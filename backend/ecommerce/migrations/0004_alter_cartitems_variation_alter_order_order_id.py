# Generated by Django 4.1 on 2023-05-13 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0003_alter_order_order_id_alter_product_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartitems',
            name='variation',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='order_id',
            field=models.CharField(default='057db5de', max_length=10, unique=True),
        ),
    ]
