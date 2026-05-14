from rest_framework import viewsets
from producto.models import Producto
from producto.api.serializers import ProductoSerializer

class productoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer