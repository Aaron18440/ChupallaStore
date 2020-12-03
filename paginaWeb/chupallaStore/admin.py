from django.contrib import admin
from .models import Marca, Category, Product

# Register your models here.
class MarcaAdmin (admin.ModelAdmin):
    list_display = ['nombre', 'activo']
    list_display_links = ['nombre', 'activo']
    list_filter = ['nombre']
    search_fields = ['nombre']

class CategoryAdmin (admin.ModelAdmin):
    list_display = ['name', 'featured']
    list_display_links = ['name', 'featured']
    list_filter = ['name','featured']
    search_fields = ['name']

class ProductAdmin (admin.ModelAdmin):
    list_display = ['name', 'category','price','image','available']
    list_editable = ['price']
    list_display_links = ['name', 'category','image','available']
    list_filter = ['name','category','available']
    search_fields = ['name']

admin.site.register(Marca, MarcaAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
#admin.site.register([Category, Product])