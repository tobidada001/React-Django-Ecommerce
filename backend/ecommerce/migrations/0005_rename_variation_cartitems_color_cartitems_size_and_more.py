# Generated by Django 4.1 on 2023-05-13 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0004_alter_cartitems_variation_alter_order_order_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cartitems',
            old_name='variation',
            new_name='color',
        ),
        migrations.AddField(
            model_name='cartitems',
            name='size',
            field=models.CharField(blank=True, max_length=7, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='order_id',
            field=models.CharField(default='cad304d3', max_length=10, unique=True),
        ),
    ]