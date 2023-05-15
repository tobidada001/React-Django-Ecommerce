from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .serializers import *
from .models import *
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response


class ProductsView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = "id"


class RetrieveProduct(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer
    lookup_field = "id"


def ProductVariationView(request):
    products = ProductSerializer(Product.objects.all(), many = True)
    return JsonResponse(products.data, safe= False)


class ProductCategoryView(viewsets.ModelViewSet):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer
    lookup_field = "id"


def BrandsView(request):
    products = ProductSerializer(Product.objects.all(), many = True)
    return JsonResponse(products.data, safe= False)


def SizeView(request):
    products = ProductSerializer(Product.objects.all(), many = True)
    return JsonResponse(products.data, safe= False)


def ColorsView(request):
    products = ProductSerializer(Product.objects.all(), many = True)
    return JsonResponse(products.data, safe= False)


def SizeView(request):
    products = ProductSerializer(Product.objects.all(), many = True)
    return JsonResponse(products.data, safe= False)


def CartView(request):
    products = ProductSerializer(Product.objects.all(), many = True)
    return JsonResponse(products.data, safe= False)



@api_view(['GET', 'POST', 'DELETE', 'PUT'])
@csrf_exempt

def CartItemsView(request, pk = None):

    items = CartItemsSerializer(CartItems.objects.all(), many = True)

    if request.method == 'GET':
        if pk:
            item = CartItems.objects.get(id = pk)
            itemserialized = CartItemsSerializer(item)
            return Response(itemserialized.data)
        return Response(items.data)

    if request.method == 'POST':
        serializer = CartItemsSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

    if request.method == 'DELETE':
        if pk:
            try:
                item = CartItems.objects.get(id = pk)
            except CartItems.DoesNotExist:
                return Response({'ERROR': 'I GOT AN ERROR.'})
            
            item.delete()
            return Response('Item deleted successfully.')

    if request.method == 'PUT':
        if pk:
            try:
                item = CartItems.objects.get(id = pk)

            except CartItems.DoesNotExist:
                return Response({'ERROR': 'Item does not exist.'})

            serializer = CartItemsSerializer(item, data = request.data)
    
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors)
            

        return Response(items.data)
    


    



def CustomerReviewsView(request):
    products = ProductSerializer(Product.objects.all(), many = True)
    return JsonResponse(products.data, safe= False)


def OrdersView(request):
    products = ProductSerializer(Product.objects.all(), many = True)
    return JsonResponse(products.data, safe= False)


