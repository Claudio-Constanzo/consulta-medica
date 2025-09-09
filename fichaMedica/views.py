from django.shortcuts import render

# Create your views here.
def ficha_medica_view(request):
    return render(request, 'fichamedica/ficha_medica.html')