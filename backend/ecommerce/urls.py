from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('products', views.ProductsView, basename = 'products')
router.register('categories', views.ProductCategoryView, basename = 'categories')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/detail/<int:id>', views.RetrieveProduct.as_view(), name = 'detail'),
    path('api/cart/', views.CartItemsView),
    path('api/cart/<int:pk>', views.CartItemsView)

]

