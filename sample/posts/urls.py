from django.urls import path
from .views import (
    posts_lists_and_create,
    load_post_data_view,
    like_unlike_post,
    load_post_data_view,
    
    
    hello_world_view,
)
app_name = 'posts'
 
urlpatterns = [
    
    path('',posts_lists_and_create,name='main-board'),
    path('data/<int:num_posts>/',load_post_data_view,name='posts-data'),
    path('like-unlike/',like_unlike_post,name='like-unlike'),
    
    path('hello-world/',hello_world_view,name='hello-world')
] 