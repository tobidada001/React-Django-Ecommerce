from rest_framework import serializers
from .models import ProductCategory, Brand, ProductSize, Color, Product, ProductVariation
from .models import Cart, CartItems, CustomerReview, Order

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'image', 'color', 'size', 'get_absolute_url']


class SizesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSize
        fields = ['id', 'size']

class ColorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['id', 'name']

class ProductDetailSerializer(serializers.ModelSerializer):
    color = ColorsSerializer(many = True, )
    size = SizesSerializer(many=True,  )
    class Meta:
        model = Product
        fields = ['id', "name", "price", "description", "image", "is_new", "sales", "color",  
        "variant", "category", "brand", "date_added", "date_updated", 'size']

        
class ProductVariationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductVariation
        fields = '__all__'

class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id','owner', 'total_in_cart', 'total_amount_to_pay']


class CartItemsSerializer(serializers.ModelSerializer):
    productData = serializers.SerializerMethodField()
    total_products = serializers.SerializerMethodField()
    color_name = serializers.SerializerMethodField()
    size_name = serializers.SerializerMethodField()
  
    def get_total_products(self, obj):
        return Cart.objects.filter(owner = obj.items.id).first().total_in_cart

    def get_color_name(self, obj):
        return Color.objects.filter(id = obj.color_id).values().first()

    def get_size_name (self, obj):
        return ProductSize.objects.filter(id = obj.size_id).values().first()

    def get_productData(self, obj):
        return Product.objects.filter(id = obj.product.id).values('id','name', 'image', 'price').first()
        
    class Meta:
        model = CartItems
        fields = ['id','product', 'items', 'color_name', 'color', 'size', 'size_name' , 'quantity', 'productData', 'total_products']

