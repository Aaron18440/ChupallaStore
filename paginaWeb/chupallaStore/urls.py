from django.urls import path
from . import views
#primera ruta para la aplicacion
urlpatterns = [
    path('', views.index,name='index'),
    path('index', views.index,name='index'),
    path('registrar', views.registrar,name='registrar'),
    path('lista',views.listado_productos,name='lista'),
    path('notificacion',views.notificacion,name='notificacion'),
]
# 127.0.0.1:8000/plantilla
# 127.0.0.1:8000/plantillaBase
# 127.0.0.1:8000/login 
# 127.0.0.1:8000/registrar