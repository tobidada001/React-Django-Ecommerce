from django.db import models
from django.urls import reverse
# Create your models here.

from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.auth.models import User
from django.utils.safestring import mark_safe
import datetime
import uuid
# Create your models here.

class ProductCategory(models.Model):
    category_name = models.CharField( max_length=50)

    def __str__(self):
        return self.category_name
    

class Brand(models.Model):
    name = models.CharField(verbose_name = "Brand", max_length=50)

    def __str__(self):
        return self.name

class ProductSize(models.Model):
    size = models.CharField(max_length=70)
    
    def __str__(self):
        return self.size


class Color(models.Model):
    name = models.CharField(max_length=50)

    def color_tag(self):
        return mark_safe('<div style="background-color: {};"> {} </div>'.format(self.name, self.name))

    def __str__(self):
        return self.name


class Product(models.Model):
    VARIANTS = (('Color', 'Color'), ('Size', 'Size'), ('Size-Color', 'Size-Color'), ('None', 'None'))
    name = models.CharField(verbose_name = "Product Name", max_length=100)
    price = models.DecimalField(max_digits = 99999, decimal_places = 2)
    description = RichTextUploadingField(verbose_name = "Description")
    image = models.ImageField(verbose_name = "Product image", upload_to='product_image/')
    is_new = models.BooleanField(default = True)
    sales = models.PositiveIntegerField(default = 0)
    color = models.ManyToManyField("ecommerce.Color")
    size = models.ManyToManyField("ecommerce.ProductSize")
    variant = models.CharField(max_length=15, choices = VARIANTS, default = 'None')
    category = models.ForeignKey("ProductCategory", related_name = 'products', blank=True, null=True, on_delete=models.CASCADE)
    brand = models.ForeignKey("ecommerce.Brand", related_name = 'brand_products', blank=True, null=True, on_delete=models.CASCADE)
    date_added = models.DateTimeField(verbose_name="Date Added", auto_now_add=True)
    date_updated = models.DateTimeField(verbose_name="Last Updated", auto_now=True)
    
    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return f"/detail/{self.id}"
    
    class Meta:
        ordering = ('-date_added',)


class ProductVariation(models.Model):

    title = models.CharField(max_length=100)
    product = models.ForeignKey("ecommerce.Product", related_name ='product_variation', on_delete=models.CASCADE)
    color = models.ForeignKey("ecommerce.Color", on_delete=models.CASCADE, blank=True, null=True)
    size = models.ForeignKey("ecommerce.ProductSize", on_delete=models.CASCADE, blank=True, null=True)
    quantity = models.IntegerField(default = 1)
    price = models.FloatField(default = 0)
    # image = models.ForeignKey("ecommerce.Images", on_delete=models.CASCADE)

    def __str__(self):
        return str(self.title)

    def get_sizes(self):
        return self.size
        
    @property
    def return_my_sizes(self):
        sizes = self.objects.all().values_list('size', flat = True).distinct()
        print(sizes)
        return sizes


class Cart(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)

    @property
    def total_in_cart(self):
        items = self.items.all()
        num_of_products = sum([cart_item.quantity for cart_item in items])
        return num_of_products
        
    @property
    def total_amount_to_pay(self):
        items = self.cart_items.all()
        total_payment = sum([cart_item.total_amount for cart_item in items])

        return float(total_payment)

        
    def __str__(self):
        return self.owner.username
    


class CartItems(models.Model):
    
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    items = models.ForeignKey(Cart, related_name = "items", blank=True, null=True, on_delete=models.CASCADE)
    quantity = models.IntegerField(default = 0)
    color = models.ForeignKey(Color, blank=True, null=True,  on_delete=models.CASCADE)
    size = models.ForeignKey(ProductSize, blank=True, null=True,  on_delete=models.CASCADE)

    @property
    def total_amount(self):
        total_price = self.quantity * self.product.price
        return float(total_price)

    def __str__(self):
        return self.product.name


class CustomerReview(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_review = models.TextField()
    product = models.ForeignKey("ecommerce.Product", related_name = 'product', on_delete=models.CASCADE)

    def __str__(self):
        return self.customer_review


class Order(models.Model):

    STATUS = (('Approved', 'Approved'),
    ('Pending', 'Pending'),
    ('Completed', 'Completed'),
    ('Canceled', 'Canceled'))

    uid = str(uuid.uuid4())[:8]

    user = models.ForeignKey(User,null=True, on_delete=models.SET_NULL)
    order_id = models.CharField(max_length = 10, unique = True, default = uid)
    first_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(max_length=254, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    address1 = models.CharField(max_length=100)
    address2 = models.CharField(max_length=100)
    city = models.CharField(max_length=20)
    zip = models.CharField( max_length=50, blank=True, null=True)
    country = models.CharField(max_length=20)
    total_amount = models.FloatField(default = 0.0)
    status = models.CharField(max_length=50, choices = STATUS, default = 'Pending')
    payment_method = models.CharField(max_length=50, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_name + ' '+ self.last_name
