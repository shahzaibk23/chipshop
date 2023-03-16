from django.shortcuts import render
from .models import Config
# Create your views here.
def homeView(request):
    return render(request, "index.html", {})

def configView(request):
    configs = Config.objects.all()
    # create nested html forms with configs nested dictionaries
    html = ""
    
    return render(request, "config.html", {"configs":configs})