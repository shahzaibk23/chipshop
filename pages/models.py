from django.db import models

# Create your models here.

# class Params(models.Model):
#     name = models.CharField(max_length=100)
#     data = models.JSONField()

class Config(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    params = models.JSONField() #models.ForeignKey(Params, on_delete=models.CASCADE)